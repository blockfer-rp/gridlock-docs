# Market Data Service Decoupling - Final Architecture

**Status:** ✅ COMPLETE (Phase 5 - January 2025)
**Migration:** Old monolithic `MarketModule` → Standalone MDS + TCS Ports & Adapters
**Pattern:** Clean Architecture + Hexagonal Architecture + Anti-Corruption Layer

---

## Executive Summary

Successfully decoupled the Market Data Service (MDS) from the Trading Competition Server (TCS) into two independent services communicating via Redis Pub/Sub and shared cache. This architectural transformation achieves:

- **Complete Separation:** MDS and TCS are now fully decoupled services
- **Clean Architecture Compliance:** Strict Dependency Inversion Principle enforcement
- **Anti-Corruption Layer:** TCS domain isolated from external MDS message format
- **Independent Scalability:** Services can scale and deploy independently
- **Enhanced Testability:** All dependencies are injected ports (easy to mock)

---

## Architecture Overview

### Before: Monolithic In-Process Module

```
┌─────────────────────────────────────────────────┐
│           Trading Competition Server            │
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │         MarketModule (Monolithic)        │  │
│  │                                          │  │
│  │  • Exchange Adapters (Binance/HL)       │  │
│  │  • WebSocket Subscriptions               │  │
│  │  • Candle Aggregation                    │  │
│  │  • Technical Indicators                  │  │
│  │  • Redis Publishing                      │  │
│  │  • Public Subscription API               │  │
│  └──────────────────────────────────────────┘  │
│              ↑ Direct Dependency                │
│  ┌──────────┴──────────────────────────────┐  │
│  │    Application Layer Use Cases           │  │
│  │  • SessionOrchestrator                   │  │
│  │  • ProcessCandleClose                    │  │
│  │  • SettleMarketGrid                      │  │
│  │  • GetMarketGridBuilderData              │  │
│  └──────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

**Problems:**
- ❌ Tight coupling between TCS and market data infrastructure
- ❌ Direct Redis dependency in application layer (SessionOrchestrator)
- ❌ No Anti-Corruption Layer (TCS domain coupled to external message format)
- ❌ Cannot deploy/scale MDS independently
- ❌ Violation of Clean Architecture principles

---

### After: Standalone Services with Ports & Adapters

```
┌──────────────────────────────────────────┐
│   Market Data Service (Standalone)       │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │  Exchange Adapters (Binance/HL)   │ │
│  │  • WebSocket Subscriptions        │ │
│  │  • Candle Aggregation (1m FORMING)│ │
│  │  • Technical Indicators (Server)  │ │
│  └────────────────────────────────────┘ │
│           ↓                              │
│  ┌────────────────────────────────────┐ │
│  │    IMarketEventPublisher (Port)   │ │
│  │    ↓                               │ │
│  │  RedisMarketEventPublisher (Adapter)│ │
│  └────────────────────────────────────┘ │
└──────────────┬───────────────────────────┘
               │ Redis Pub/Sub
               │ (market-data:candles:forming)
               │ (market-data:candles:closed)
               │
┌──────────────┴───────────────────────────────────┐
│      Trading Competition Server (TCS)            │
│                                                  │
│  ┌────────────────────────────────────────────┐ │
│  │   IEventSubscriber (Port)                  │ │
│  │   ↓                                        │ │
│  │   RedisEventSubscriber (Adapter)          │ │
│  │   ↓                                        │ │
│  │   MarketDataAntiCorruptionLayer (ACL)     │ │
│  │   ↓                                        │ │
│  │   IEventBus (Domain Port)                 │ │
│  │   ↓                                        │ │
│  │   RedisEventBus (Adapter)                 │ │
│  └────────────────────────────────────────────┘ │
│           ↓                                      │
│  ┌────────────────────────────────────────────┐ │
│  │   Application Layer (Domain Events)        │ │
│  │   • SessionOrchestrator                    │ │
│  │     - subscribes to CandleFormingEvent     │ │
│  │   • ProcessCandleClose                     │ │
│  │     - handles CandleClosedEvent            │ │
│  └────────────────────────────────────────────┘ │
│                                                  │
│  ┌────────────────────────────────────────────┐ │
│  │   IMarketDataCache (Port)                  │ │
│  │   ↓                                        │ │
│  │   RedisMarketDataCache (Adapter)          │ │
│  │   • Read historical candles                │ │
│  │   • Get latest prices                      │ │
│  └────────────────────────────────────────────┘ │
│           ↑                                      │
│  ┌────────┴───────────────────────────────────┐ │
│  │   Use Cases (Read-Only Cache Access)       │ │
│  │   • SettleMarketGrid                       │ │
│  │   • GetMarketGridBuilderData               │ │
│  └────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────┘
```

**Benefits:**
- ✅ Complete separation of concerns (MDS = data acquisition, TCS = game logic)
- ✅ Clean Architecture compliance (Domain → Ports ← Adapters)
- ✅ Anti-Corruption Layer isolates TCS domain from external changes
- ✅ Independent deployment and scaling
- ✅ Type-safe event handling via domain events
- ✅ Testable (inject mock adapters)

---

## Core Architectural Patterns

### 1. Ports & Adapters (Hexagonal Architecture)

**Domain Ports (TCS):**

```typescript
// server/src/domain/ports/event-bus.port.ts
export interface IEventBus {
  subscribe<T extends DomainEvent>(
    eventType: new (...args: any[]) => T,
    handler: EventHandler<T>
  ): () => void;

  publish<T extends DomainEvent>(event: T): Promise<void>;
  unsubscribeAll(eventType: new (...args: any[]) => DomainEvent): void;
  clear(): void;
}

// server/src/domain/ports/market-data-cache.port.ts
export interface IMarketDataCache {
  getLatestPrice(symbol: MarketSymbol): Promise<PriceData | null>;
  getHistoricalCandles(
    symbol: MarketSymbol,
    timeframe: Timeframe,
    options?: { startTime?: number; endTime?: number; limit?: number }
  ): Promise<CandleData[]>;
  getLatestCandle(symbol: MarketSymbol, timeframe: Timeframe): Promise<CandleData | null>;
}
```

**Infrastructure Adapters:**

```typescript
// server/src/infrastructure/messaging/redis-event-bus.adapter.ts
export class RedisEventBus implements IEventBus {
  constructor(
    private readonly externalSubscriber: IEventSubscriber,
    private readonly acl: MarketDataAntiCorruptionLayer
  ) {}

  async initialize(): Promise<void> {
    await this.externalSubscriber.subscribe(
      ['market-data:candles:forming', 'market-data:candles:closed'],
      this.handleExternalMessage.bind(this)
    );
  }
}

// server/src/infrastructure/cache/redis-market-data-cache.adapter.ts
export class RedisMarketDataCache implements IMarketDataCache {
  constructor(private readonly redisClient: Redis) {}

  async getHistoricalCandles(
    symbol: MarketSymbol,
    timeframe: Timeframe,
    options?: { startTime?: number; endTime?: number; limit?: number }
  ): Promise<CandleData[]> {
    const key = `market:candle:${symbol}:${timeframe}:history`;
    // Redis sorted set query with time-based filtering
  }
}
```

---

### 2. Anti-Corruption Layer (ACL)

**Purpose:** Translate external MDS events to internal TCS domain events, isolating the domain from external message format changes.

```typescript
// server/src/infrastructure/messaging/market-data-acl.ts
export class MarketDataAntiCorruptionLayer {
  translateToInternalEvent(channel: string, message: string): DomainEvent | null {
    switch (channel) {
      case 'market-data:candles:forming':
        return this.translateFormingCandle(message);
      case 'market-data:candles:closed':
        return this.translateClosedCandle(message);
      default:
        return null;
    }
  }

  private translateFormingCandle(message: string): CandleFormingEvent | null {
    const external = JSON.parse(message) as FormingCandleEvent; // External type
    return new CandleFormingEvent(  // Internal domain event
      external.symbol,
      external.timeframe,
      external.candle,
      external.timestamp
    );
  }
}
```

**Event Flow:**
```
MDS publishes FormingCandleEvent (external)
  → Redis (market-data:candles:forming)
  → RedisEventSubscriber (infrastructure)
  → MarketDataACL.translateFormingCandle()
  → CandleFormingEvent (internal domain event)
  → RedisEventBus.publish()
  → SessionOrchestrator.handleCandleUpdate()
```

---

### 3. Event-Driven Architecture

**Internal Event Bus Pattern:**

```typescript
// Application layer subscribes to domain events (not Redis!)
const sessionOrchestrator = new SessionOrchestrator(
  // ... other deps
  eventBus,  // IEventBus (domain port)
  marketDataCache  // IMarketDataCache (domain port)
);

// Inside SessionOrchestrator
private async registerLiveGameSubscriptions(game: LiveGame): Promise<void> {
  const unsubscribe = this.eventBus.subscribe(
    CandleFormingEvent,  // Type-safe subscription
    (event: CandleFormingEvent) => {
      if (this.shouldProcessEvent(event, game)) {
        this.handleLiveGameCandleUpdate(game.gameId, event);
      }
    }
  );
}
```

**Benefits:**
- Application code is infrastructure-agnostic (depends on `IEventBus`, not Redis)
- Type-safe event handling (TypeScript generics)
- Easy to test (inject mock event bus)
- Enforces Dependency Inversion Principle

---

### 4. Dual-Subscription Architecture

**FORMING Candles (Real-Time Updates):**
```typescript
// SessionOrchestrator subscribes to FORMING candles via event bus
this.eventBus.subscribe(CandleFormingEvent, (event) => {
  // Update Redis game state every ~1 second
  game.applyCandleUpdate(event.candle);
  await this.liveGameRepo.save(game);

  // Broadcast to clients every 5 seconds (throttled)
  if (Date.now() - lastBroadcast > 5000) {
    this.socketHandler.broadcastScoreUpdate(game);
  }
});
```

**CLOSED Candles (Official Scoring):**
```typescript
// ProcessCandleClose handles official candle closes
export class ProcessCandleClose {
  async execute(request: ProcessCandleCloseRequest): Promise<void> {
    const game = await this.liveGameRepo.findById(request.gameId);

    // Finalize forming candle → closed candle
    game.applyCandleUpdate(request.candle);
    await this.liveGameRepo.save(game);

    // Broadcast official score update
    this.socketHandler.broadcastScoreUpdate(game);
  }
}
```

---

## Server Entry Point (server.ts)

### Infrastructure Initialization

```typescript
// --- 2. EVENT BUS & MARKET DATA CACHE ---
// ARCHITECTURE: Phase 5 - Replace MarketModule with ports + adapters

// 2a. Event Bus (internal pub/sub + external Redis bridge with ACL)
const redisSubscriber = new RedisEventSubscriber(redisClient);
const marketDataACL = new MarketDataAntiCorruptionLayer();
const eventBus = new RedisEventBus(redisSubscriber, marketDataACL);
await eventBus.initialize();  // Subscribe to external Redis channels

// 2b. Market Data Cache (read-only cache port)
const marketDataCache = new RedisMarketDataCache(redisClient);

// 2c. Market Enrichment Service (technical indicators)
const enrichmentService = new MarketEnrichmentService();
```

### Use Case Instantiation

```typescript
// Builder use cases (read-only cache access)
const getMarketGridBuilderDataUseCase = new GetMarketGridBuilderDataUseCase(
  marketGridSessionRepo,
  gamePresetRepo,
  coinGameRepo,
  marketDataCache  // IMarketDataCache port
);

// Settlement use cases (read-only cache access)
const settleMarketGridUseCase = new SettleMarketGridUseCase(
  gameResultRepo,
  liveGameRepo,
  sessionWriter,
  marketDataCache,  // IMarketDataCache port
  gameSocketHandler
);

// Session orchestrator (event bus + cache)
const sessionOrchestrator = new SessionOrchestrator(
  gameSessionReader,
  gamePresetRepo,
  marketGridSessionRepo,
  coinGridSessionRepo,
  submissionRepo,
  liveGameRepo,
  coinGameRepo,
  eventBus,          // IEventBus port
  marketDataCache,   // IMarketDataCache port
  gameSocketHandler
);
```

### Graceful Shutdown

```typescript
process.on('SIGTERM', async () => {
  sessionOrchestrator.stop();
  settlementScheduler.stop();

  // Clear event bus subscriptions
  eventBus.clear();

  // Close Redis connection
  await closeRedisClient(redisClient);
});
```

---

## Migration Summary

### Phase 1: Define Ports (Domain Layer)
- ✅ Created `IEventBus` port for internal event bus
- ✅ Created `IMarketDataCache` port for read-only cache access
- ✅ Defined internal domain events (`CandleClosedEvent`, `CandleFormingEvent`)

### Phase 2: Implement MDS Infrastructure
- ✅ Created `IMarketEventPublisher` port in MDS
- ✅ Implemented `RedisMarketEventPublisher` adapter
- ✅ Refactored `MarketDataService` to use port (not direct Redis)
- ✅ Added server-side enrichment pipeline (technical indicators)

### Phase 3: Implement TCS Subscribers
- ✅ Created `IEventSubscriber` port
- ✅ Implemented `RedisEventSubscriber` adapter
- ✅ Implemented `MarketDataAntiCorruptionLayer` (ACL)
- ✅ Implemented concrete handlers (`CandleClosedHandler`, `CandleFormingHandler`)

### Phase 4: Decouple Internal Communication
- ✅ Implemented `RedisEventBus` with ACL
- ✅ Bridged external Redis events to internal domain events
- ✅ Documented SessionOrchestrator refactoring pattern

### Phase 5: Complete Decoupling
- ✅ Moved exchange infrastructure to standalone MDS (`/market/`)
- ✅ Refactored all TCS use cases to remove `IMarketModule`
- ✅ Refactored `SessionOrchestrator` to use `IEventBus` + `IMarketDataCache`
- ✅ Updated server entry point (`server.ts`)
- ✅ Deleted old `MarketModule` from TCS

---

## Key Design Decisions

### 1. Why Anti-Corruption Layer?

**Problem:** External MDS events (Redis Pub/Sub) had a different structure than internal TCS domain events.

**Solution:** ACL translates external → internal, isolating TCS domain from MDS changes.

**Example:**
```typescript
// External event (from MDS)
interface FormingCandleEvent {
  symbol: string;
  timeframe: string;
  candle: EnrichedCandleData;
  timestamp: number;
}

// Internal domain event (TCS)
class CandleFormingEvent implements DomainEvent {
  readonly eventType = 'CandleFormingEvent';
  constructor(
    public readonly symbol: string,
    public readonly timeframe: string,
    public readonly candle: any,
    public readonly timestamp: number
  ) {}
}
```

### 2. Why IEventBus vs Direct Redis Subscription?

**Problem:** `SessionOrchestrator` was directly subscribing to Redis channels (infrastructure leakage).

**Solution:** Application layer depends on `IEventBus` (domain port), not Redis.

**Benefits:**
- Testable (inject mock event bus)
- Type-safe event handling
- Infrastructure-agnostic application code

### 3. Why IMarketDataCache vs IMarketModule?

**Problem:** Old `IMarketModule` mixed concerns (subscriptions + data reads + lifecycle).

**Solution:** `IMarketDataCache` is a pure read-only port.

**Comparison:**
```typescript
// OLD: Monolithic module with multiple concerns
interface IMarketModule {
  pricing: IPricingAPI;     // Subscriptions + reads
  lifecycle: ILifecycleAPI; // Initialize/dispose
  monitoring: IMonitoringAPI;
}

// NEW: Focused read-only cache port
interface IMarketDataCache {
  getLatestPrice(symbol: MarketSymbol): Promise<PriceData | null>;
  getHistoricalCandles(...): Promise<CandleData[]>;
  getLatestCandle(...): Promise<CandleData | null>;
}
```

### 4. Why Move Enrichment to Domain Services?

**Problem:** `MarketEnrichmentService` was in old market module.

**Solution:** Moved to `server/src/domain/services/` (shared TCS domain service).

**Rationale:**
- Technical indicators are used by multiple TCS components (SessionOrchestrator, ProcessCandleClose)
- Domain service is infrastructure-agnostic (no Redis/WebSocket dependencies)
- Easy to test and reuse

---

## Testing Strategy

### Unit Tests

```typescript
// Mock event bus for SessionOrchestrator tests
const mockEventBus: IEventBus = {
  subscribe: jest.fn(),
  publish: jest.fn(),
  unsubscribeAll: jest.fn(),
  clear: jest.fn()
};

const sessionOrchestrator = new SessionOrchestrator(
  // ... other mocks
  mockEventBus,
  mockMarketDataCache,
  mockSocketHandler
);

// Verify subscription behavior
expect(mockEventBus.subscribe).toHaveBeenCalledWith(
  CandleFormingEvent,
  expect.any(Function)
);
```

### Integration Tests

```typescript
// Test ACL translation
const acl = new MarketDataAntiCorruptionLayer();
const externalMessage = JSON.stringify({
  symbol: 'BTC',
  timeframe: '1h',
  candle: { open: 50000, close: 51000, ... },
  timestamp: Date.now()
});

const internalEvent = acl.translateToInternalEvent(
  'market-data:candles:forming',
  externalMessage
);

expect(internalEvent).toBeInstanceOf(CandleFormingEvent);
expect(internalEvent.symbol).toBe('BTC');
```

---

## Performance Considerations

### Redis Connection Pooling
- **Single Redis client** shared across all adapters (RedisEventSubscriber, RedisMarketDataCache, RedisLiveGameRepository)
- **Connection reuse** prevents connection exhaustion

### Event Bus Throughput
- **In-memory pub/sub** for internal events (zero network overhead)
- **External Redis subscription** with parallel message processing
- **No blocking operations** in event handlers (async/await pattern)

### Cache-Aside Pattern
- **Read-through cache** for historical candles (Redis → fallback to DB if needed)
- **TTL-based expiration** for stale data (15 seconds for latest candles)
- **Batch queries** for multiple symbols (parallel Promise.all)

---

## Deployment

### Standalone MDS Deployment

```bash
# Navigate to standalone MDS
cd market/

# Install dependencies
npm install

# Build TypeScript
npm run build

# Start MDS (PM2)
pm2 start ecosystem.config.js --only market-data-service

# Verify MDS is publishing to Redis
redis-cli SUBSCRIBE market-data:candles:forming
```

### TCS Deployment (Requires MDS Running)

```bash
# Navigate to TCS
cd server/

# Install dependencies
npm install

# Build TypeScript
npm run build

# Start TCS (PM2)
pm2 start ecosystem.config.js --only trading-competition-server

# Verify event bus initialized
pm2 logs trading-competition-server | grep "Event Bus initialized"
```

**Critical:** MDS must be running BEFORE TCS starts, otherwise TCS won't receive market data events.

---

## Troubleshooting

### Issue: TCS not receiving candle updates

**Symptoms:**
- SessionOrchestrator not broadcasting market data
- No candle updates in Redis game state

**Diagnosis:**
```bash
# Check if MDS is publishing
redis-cli SUBSCRIBE market-data:candles:forming

# Check TCS event bus initialization
pm2 logs trading-competition-server | grep "Event Bus"

# Check Redis connection
redis-cli PING
```

**Solution:**
1. Verify MDS is running (`pm2 list`)
2. Verify Redis is accessible (`redis-cli PING`)
3. Check TCS logs for ACL translation errors
4. Restart TCS if event bus failed to initialize

---

### Issue: ACL translation errors

**Symptoms:**
```
[MarketDataACL] Translation error for channel market-data:candles:forming:
SyntaxError: Unexpected token
```

**Diagnosis:**
- External message format changed (MDS updated but ACL not updated)
- Malformed JSON in Redis message

**Solution:**
1. Compare external event type with ACL translation logic
2. Update ACL to handle new message format
3. Add defensive JSON parsing with try/catch

---

## Future Enhancements

### 1. Add In-Memory Event Bus (Development)
For local development without Redis dependency:
```typescript
export class InMemoryEventBus implements IEventBus {
  private subscriptions = new Map<string, Set<EventHandler<any>>>();
  // Pure in-memory pub/sub (no Redis)
}
```

### 2. Add Event Replay Mechanism
For debugging and recovery:
```typescript
interface IEventStore {
  store(event: DomainEvent): Promise<void>;
  replay(fromTimestamp: number): AsyncIterable<DomainEvent>;
}
```

### 3. Add Circuit Breaker for MDS
If MDS becomes unavailable:
```typescript
export class CircuitBreakerEventBus implements IEventBus {
  private state: 'CLOSED' | 'OPEN' | 'HALF_OPEN' = 'CLOSED';
  // Auto-disable subscriptions if MDS fails repeatedly
}
```

---

## References

### Related Documentation
- [MARKET_DATA_ARCHITECTURE.md](./MARKET_DATA_ARCHITECTURE.md) - Original architecture design
- [CANDLE_REFACTOR_2025.md](./CANDLE_REFACTOR_2025.md) - Trade tick to candle migration
- [REPOSITORY_CQRS_PATTERN.md](./REPOSITORY_CQRS_PATTERN.md) - Repository patterns

### Code Locations
- **MDS Standalone:** `/market/src/`
- **TCS Domain Ports:** `/server/src/domain/ports/`
- **TCS Infrastructure Adapters:** `/server/src/infrastructure/messaging/`, `/server/src/infrastructure/cache/`
- **TCS Application Services:** `/server/src/application/services/`
- **Server Entry Point:** `/server/src/server.ts`

### External Resources
- [Clean Architecture (Robert C. Martin)](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Hexagonal Architecture (Alistair Cockburn)](https://alistair.cockburn.us/hexagonal-architecture/)
- [Anti-Corruption Layer Pattern (DDD)](https://docs.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer)

---

**Last Updated:** January 13, 2025
**Status:** ✅ Production-Ready
**Authors:** Development Team
