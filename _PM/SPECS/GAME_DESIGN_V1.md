# Game Design Specification

**Created**: November 4, 2025
**Status**: ✅ Authoritative
**Purpose**: Single source of truth for game mechanics across Market Grid and Coin Grid

---

## Overview

Gridlock is a real-time cryptocurrency prediction gaming platform with two game modes:
1. **Market Grid** - Multi-asset spatial prediction game
2. **Coin Grid** - Single-asset temporal prediction game

Both game modes share:
- ✅ **Pattern detection mechanics** (rows, columns, diagonals)
- ✅ **Jackpot mechanics** (complete row + complete column)
- ✅ **Power-up system** (HIGH_VOLATILITY, LOW_VOLATILITY)
- ✅ **Scoring algorithm** (base points, pattern bonuses, power-up effects)

**Critical Design Principle**: While the game modes predict different things (assets vs time), the **scoring and pattern mechanics are identical**. This document establishes this as a requirement.

---

## Game Mode Comparison

### Market Grid

**Core Mechanic**: Predict price movements across multiple different cryptocurrency assets

**Grid Structure**:
- Variable grid sizes: 4x3 (12 cells), 4x4 (16 cells), or larger
- Each cell contains a **different coin** from a curated category
- Player chooses which coin goes in each position

**Prediction Target**: Will each coin's price move UP or DOWN during the game period?

**Game Flow**:
1. Player selects coins from a category (L1 Chains, Memes, DeFi) and arranges them in the grid
2. Player predicts UP or DOWN for each coin
3. Player optionally adds power-ups to specific cells
4. Game locks at `lock_at` timestamp
5. Real-time market data updates (live score calculation)
6. Game settles at `settle_at` timestamp with final resolutions

**Active Presets**:
1. **L1 Chains Arena** - 4x3 grid (12 cells), 1-hour time range
2. **DeFi Arena** - 4x3 grid (12 cells), 24-hour time range
3. **Meme Arena** - 4x3 grid (12 cells), 24-hour time range

**Example: L1 Chains Arena (4x3 Grid)**
```
┌─────┬─────┬─────┬─────┐
│ BTC │ ETH │ SOL │ AVAX│  ← Row 0 (positions 0-3)
│  ↑  │  ↓  │  ↑  │  ↑  │  (Predictions)
├─────┼─────┼─────┼─────┤
│ ADA │ DOT │ MATIC│LINK│  ← Row 1 (positions 4-7)
│  ↑  │  ↑  │  ↓  │  ↑  │
├─────┼─────┼─────┼─────┤
│ ATOM│ NEAR│ FTM │ APT │  ← Row 2 (positions 8-11)
│  ↓  │  ↑  │  ↑  │  ↓  │
└─────┴─────┴─────┴─────┘
  ↑     ↑     ↑     ↑
Col 0  Col 1  Col 2  Col 3
```

**Pattern Example**:
- If BTC (↑), ETH (↓), SOL (↑), AVAX (↑) all resolve correctly → **Row 0 Complete** (4-match, 4000 points)
- If BTC (↑), ADA (↑), ATOM (↓) all resolve correctly → **Column 0 Complete** (3-match, 3000 points)
- If **both** Row 0 AND Column 0 complete → **JACKPOT** 🎰

**Strategic Element**: Player controls coin placement, creating strategic grid composition and pattern opportunities

---

### Coin Grid

**Core Mechanic**: Predict sequential candle movements for a **single cryptocurrency asset**

**Grid Structure**:
- Variable grid sizes: 4x3 (12 candles), 4x4 (16 candles), or 6x4 (24 candles)
- Each cell contains a **candle index** representing sequential time periods
- All cells reference the **same coin** (e.g., all BTC candles or all SOL candles)

**Prediction Target**: Will each candle close UP or DOWN relative to its open price?

**Game Flow**:
1. Player selects ONE coin and a preset determines the timeframe
2. Grid is pre-populated with candle indices (sequential)
3. Player predicts UP or DOWN for each candle
4. Player optionally adds power-ups to specific candles
5. Game locks at `lock_at` timestamp (first candle starts)
6. Candles resolve sequentially (candle 0, then 1, then 2, etc.)
7. Real-time updates as each candle closes
8. Game settles when all candles have closed

**Active Presets**:
1. **1 Hour Grid** - 4x3 grid (12 candles), 5-minute candles, default SOL
2. **4 Hour Grid** - 4x4 grid (16 candles), 15-minute candles, default ETH
3. **24 Hour Grid** - 6x4 grid (24 candles), 1-hour candles, default BTC

**Example: 1 Hour Grid (4x3, SOL, 5-minute candles)**
```
┌──────────┬──────────┬──────────┬──────────┐
│ Candle 0 │ Candle 1 │ Candle 2 │ Candle 3 │  ← Row 0 (positions 0-3)
│  10:00   │  10:05   │  10:10   │  10:15   │  (Time sequence)
│     ↑    │     ↓    │     ↑    │     ↑    │  (Predictions)
├──────────┼──────────┼──────────┼──────────┤
│ Candle 4 │ Candle 5 │ Candle 6 │ Candle 7 │  ← Row 1 (positions 4-7)
│  10:20   │  10:25   │  10:30   │  10:35   │
│     ↑    │     ↑    │     ↓    │     ↑    │
├──────────┼──────────┼──────────┼──────────┤
│ Candle 8 │ Candle 9 │Candle 10 │Candle 11 │  ← Row 2 (positions 8-11)
│  10:40   │  10:45   │  10:50   │  10:55   │
│     ↓    │     ↑    │     ↑    │     ↓    │
└──────────┴──────────┴──────────┴──────────┘
     ↑          ↑          ↑          ↑
   Col 0      Col 1      Col 2      Col 3
```

**Pattern Example**:
- If Candle 0 (↑), 1 (↓), 2 (↑), 3 (↑) all close as predicted → **Row 0 Complete** (4-match, 4000 points)
- If Candle 0 (↑), 4 (↑), 8 (↓) all close as predicted → **Column 0 Complete** (3-match, 3000 points)
- If **both** Row 0 AND Column 0 complete → **JACKPOT** 🎰

**Example: 4 Hour Grid (4x4, ETH, 15-minute candles)**
```
┌──────────┬──────────┬──────────┬──────────┐
│ Candle 0 │ Candle 1 │ Candle 2 │ Candle 3 │  ← Row 0
│  08:00   │  08:15   │  08:30   │  08:45   │
│     ↑    │     ↑    │     ↑    │     ↑    │
├──────────┼──────────┼──────────┼──────────┤
│ Candle 4 │ Candle 5 │ Candle 6 │ Candle 7 │  ← Row 1
│  09:00   │  09:15   │  09:30   │  09:45   │
│     ↑    │     ↑    │     ↓    │     ↑    │
├──────────┼──────────┼──────────┼──────────┤
│ Candle 8 │ Candle 9 │Candle 10 │Candle 11 │  ← Row 2
│  10:00   │  10:15   │  10:30   │  10:45   │
│     ↑    │     ↓    │     ↑    │     ↓    │
├──────────┼──────────┼──────────┼──────────┤
│Candle 12 │Candle 13 │Candle 14 │Candle 15 │  ← Row 3
│  11:00   │  11:15   │  11:30   │  11:45   │
│     ↑    │     ↑    │     ↑    │     ↑    │
└──────────┴──────────┴──────────┴──────────┘
     ↑          ↑          ↑          ↑
   Col 0      Col 1      Col 2      Col 3
```

**Square Pattern Example** (4x4 grid exclusive):
- Positions [0, 1, 4, 5] form a 2x2 square in top-left
- If all 4 candles close as predicted → **Square 4-Match** (3000 points)

**Diagonal Pattern Example** (4x4 grid exclusive):
- Positions [0, 5, 10, 15] form main diagonal
- If all 4 candles close as predicted → **Diagonal 4-Match** (8000 points!)

**Strategic Element**: Player predicts temporal momentum patterns (e.g., "Market will pump for 20 minutes straight" or "Volatility spike in the middle hour")

---

## Complete Game Preset Specifications

### Overview

Gridlock currently supports **8 game presets** across both game modes. Each preset has:
- Unique grid dimensions
- Custom pattern definitions
- Specific point values
- Power-up configurations

### Coin Grid Presets (4 total)

#### 1. **1 Hour Grid** (`coin-grid-1h`)
- **Status**: ✅ Active
- **Grid**: 4x3 (12 cells / 12 candles)
- **Duration**: 1 hour total gameplay
- **Candle Size**: 5 minutes per candle
- **Default Coin**: SOL (Solana)
- **Patterns**:
  - **ROWS**: [0-3], [4-7], [8-11]
    - Row 4-Match: 4000 points
    - Row 3-Match: 800 points
  - **COLUMNS**: [0,4,8], [1,5,9], [2,6,10], [3,7,11]
    - Column 3-Match: 3000 points
  - **SQUARES** (2x2): [0,1,4,5], [1,2,5,6], [2,3,6,7], [4,5,8,9], [5,6,9,10], [6,7,10,11]
    - Square 4-Match: 2500 points
- **Base Points**: 75 points per correct prediction
- **Jackpot Condition**: Complete any row (4-match) + any column (3-match)

#### 2. **4 Hour Grid** (`coin-grid-4h`)
- **Status**: ⚠️ Inactive (can be activated)
- **Grid**: 4x4 (16 cells / 16 candles)
- **Duration**: 4 hours total gameplay
- **Candle Size**: 15 minutes per candle
- **Default Coin**: ETH (Ethereum)
- **Patterns**:
  - **ROWS**: [0-3], [4-7], [8-11], [12-15]
    - Row 4-Match: 5000 points
    - Row 3-Match: 1000 points
  - **COLUMNS**: [0,4,8,12], [1,5,9,13], [2,6,10,14], [3,7,11,15]
    - Column 4-Match: 5000 points
    - Column 3-Match: 1000 points
  - **DIAGONALS**: [0,5,10,15], [3,6,9,12]
    - Diagonal 4-Match: 8000 points (HIGHEST!)
    - Diagonal 3-Match: 1500 points
  - **FOUR_CORNERS**: [0,3,12,15]
    - Four Corners 4-Match: 4000 points
  - **SQUARES** (2x2): 9 possible squares
    - Square 4-Match: 3000 points
- **Base Points**: 50 points per correct prediction
- **Jackpot Condition**: Complete any row (4-match) + any column (4-match)
- **Special**: Only preset with diagonal patterns!

#### 3. **24 Hour Grid** (`coin-grid-24h`)
- **Status**: ⚠️ Inactive (can be activated)
- **Grid**: 6x4 (24 cells / 24 candles)
- **Duration**: 24 hours total gameplay
- **Candle Size**: 1 hour per candle
- **Default Coin**: BTC (Bitcoin)
- **Patterns**:
  - **ROWS**: [0-5], [6-11], [12-17], [18-23]
    - Row 6-Match: 12000 points (MASSIVE!)
    - Row 5-Match: 4000 points
    - Row 4-Match: 1000 points
  - **COLUMNS**: [0,6,12,18], [1,7,13,19], [2,8,14,20], [3,9,15,21], [4,10,16,22], [5,11,17,23]
    - Column 4-Match: 6000 points
    - Column 3-Match: 1200 points
  - **SQUARES** (2x2): 15 possible squares
    - Square 4-Match: 3500 points
- **Base Points**: 25 points per correct prediction
- **Jackpot Condition**: Complete any row (6-match preferred) + any column (4-match)
- **Special**: Largest grid, longest duration, highest row match rewards!

### Market Grid Presets (4 total)

#### 4. **L1 Chains Arena** (`market-grid-l1-chains`)
- **Status**: ✅ Active
- **Grid**: 4x3 (12 cells / 12 coins)
- **Category**: L1_CHAINS (Layer 1 blockchains)
- **Duration**: 1 hour time range
- **Coin Pool**: BTC, ETH, SOL, AVAX, ADA, DOT, MATIC, LINK, ATOM, NEAR, FTM, APT, etc.
- **Patterns**:
  - **ROWS**: [0-3], [4-7], [8-11]
    - Row 4-Match: 4000 points
    - Row 3-Match: 800 points
  - **COLUMNS**: [0,4,8], [1,5,9], [2,6,10], [3,7,11]
    - Column 3-Match: 3000 points
- **Jackpot Condition**: Complete any row (4-match) + any column (3-match)
- **Strategic**: Player chooses which 12 coins from L1 pool and arranges them

#### 5. **DeFi Arena** (`market-grid-defi`)
- **Status**: ⚠️ Inactive (can be activated)
- **Grid**: 4x3 (12 cells / 12 coins)
- **Category**: DEFI (Decentralized Finance protocols)
- **Duration**: 24 hour time range
- **Coin Pool**: UNI, AAVE, COMP, MKR, SNX, CRV, SUSHI, YFI, BAL, 1INCH, etc.
- **Patterns**: Identical to L1 Chains Arena
  - Row 4-Match: 4000 points
  - Row 3-Match: 800 points
  - Column 3-Match: 3000 points
- **Jackpot Condition**: Complete any row (4-match) + any column (3-match)
- **Strategic**: DeFi coins tend to move together during protocol events

#### 6. **Meme Arena** (`market-grid-memes`)
- **Status**: ⚠️ Inactive (can be activated)
- **Grid**: 4x3 (12 cells / 12 coins)
- **Category**: MEMES (Meme coins)
- **Duration**: 24 hour time range
- **Coin Pool**: DOGE, SHIB, PEPE, FLOKI, BONK, WIF, MEME, etc.
- **Patterns**: Identical to L1 Chains Arena
  - Row 4-Match: 4000 points
  - Row 3-Match: 800 points
  - Column 3-Match: 3000 points
- **Jackpot Condition**: Complete any row (4-match) + any column (3-match)
- **Strategic**: High volatility, social media driven, highest risk/reward

#### 7. **15 Minute Arena** (`market-grid-15m`)
- **Status**: ⚠️ Inactive (quick test game)
- **Grid**: 4x3 (12 cells / 12 coins)
- **Category**: L1_CHAINS (Layer 1 blockchains)
- **Duration**: 15 minutes time range
- **Candle Size**: 15 minutes (ONE candle per coin)
- **Coin Pool**: BTC, ETH, SOL, AVAX, ADA, DOT, MATIC, LINK, ATOM, NEAR, FTM, APT, etc.
- **Patterns**: Identical to L1 Chains Arena
  - Row 4-Match: 4000 points
  - Row 3-Match: 800 points
  - Column 3-Match: 3000 points
- **Jackpot Condition**: Complete any row (4-match) + any column (3-match)
- **Strategic**: Ultra-fast gameplay for testing and skill practice
- **Time Boundaries**: Games start at :00, :15, :30, :45 of each hour (UTC aligned)

#### 8. **15 Minute Grid** (`coin-grid-15m`)
- **Status**: ⚠️ Inactive (quick test game)
- **Grid**: 5x3 (15 cells / 15 candles)
- **Duration**: 15 minutes total gameplay
- **Candle Size**: 1 minute per candle (15 cells = 15 candles)
- **Default Coin**: SOL (Solana)
- **Patterns**:
  - **ROWS**: [0-4], [5-9], [10-14]
    - Row 5-Match: 5000 points
    - Row 4-Match: 1500 points
    - Row 3-Match: 600 points
  - **COLUMNS**: [0,5,10], [1,6,11], [2,7,12], [3,8,13], [4,9,14]
    - Column 3-Match: 3000 points
  - **SQUARES** (2x2): [0,1,5,6], [1,2,6,7], [2,3,7,8], [3,4,8,9], [5,6,10,11], [6,7,11,12], [7,8,12,13], [8,9,13,14]
    - Square 4-Match: 2500 points
- **Base Points**: 100 points per correct prediction
- **Jackpot Condition**: Complete any row (5-match) + any column (3-match)
- **Strategic**: Fastest game mode for rapid skill testing and high-intensity gameplay
- **Time Boundaries**: Games start at :00, :15, :30, :45 of each hour (UTC aligned)

### Preset Comparison Table

| Preset | Game Type | Grid Size | Active | Duration | Base Points | Max Pattern Points | Jackpot |
|--------|-----------|-----------|--------|----------|-------------|-------------------|---------|
| **15 Minute Grid** | Coin Grid | 5x3 (15) | ⚠️ | 15 min | 100 | 5000 (Row 5) | Row + Column |
| **1 Hour Grid** | Coin Grid | 4x3 (12) | ✅ | 1 hour | 75 | 4000 (Row 4) | Row + Column |
| **4 Hour Grid** | Coin Grid | 4x4 (16) | ⚠️ | 4 hours | 50 | 8000 (Diagonal!) | Row + Column |
| **24 Hour Grid** | Coin Grid | 6x4 (24) | ⚠️ | 24 hours | 25 | 12000 (Row 6!) | Row + Column |
| **15 Min Arena** | Market Grid | 4x3 (12) | ⚠️ | 15 min | — | 4000 (Row 4) | Row + Column |
| **L1 Chains** | Market Grid | 4x3 (12) | ✅ | 1 hour | — | 4000 (Row 4) | Row + Column |
| **DeFi Arena** | Market Grid | 4x3 (12) | ⚠️ | 24 hours | — | 4000 (Row 4) | Row + Column |
| **Meme Arena** | Market Grid | 4x3 (12) | ⚠️ | 24 hours | — | 4000 (Row 4) | Row + Column |

### Key Insights

1. **Pattern Detection is Grid-Size Agnostic**
   - 4x3, 4x4, and 6x4 grids all use same detection algorithm
   - Pattern definitions are stored in `rules_config` JSON
   - Algorithm scans for matches based on position arrays

2. **Jackpot Works Across All Grid Sizes**
   - 4x3 grids: Jackpot = Row (4 cells) + Column (3 cells)
   - 4x4 grids: Jackpot = Row (4 cells) + Column (4 cells)
   - 6x4 grids: Jackpot = Row (6 cells preferred) + Column (4 cells)

3. **Power-Ups Are Uniform**
   - All presets use same 3 power-ups: LOW_VOLATILITY, HIGH_VOLATILITY, HIGH_EFFICIENCY
   - All reward 1000 points on success, 0 on failure
   - Conditions differ between Market Grid (% change) and Coin Grid (OHLC range)

4. **Only One Active Preset Per Mode**
   - Currently: L1 Chains (Market Grid) and 1 Hour Grid (Coin Grid)
   - Future: Can activate multiple presets simultaneously

### TimeRangeService Integration (Critical)

**Purpose**: Single source of truth for time boundary calculations and candle interval mapping

**Service Location**: `server/src/domain/services/time-range.service.ts`

**Key Responsibilities**:

1. **UTC Boundary Alignment**
   - **15M**: Boundaries at :00, :15, :30, :45 of each hour
   - **1H**: Boundaries at top of each hour (:00)
   - **4H**: Boundaries at 00:00, 04:00, 08:00, 12:00, 16:00, 20:00 UTC
   - **24H**: Boundaries at 00:00 UTC (midnight)

2. **Dynamic Candle Interval Calculation (Coin Grid)**
   ```typescript
   candleInterval = timeRangeDuration / gridSize

   Examples:
   - 15M game with 15 cells: 15min / 15 = 1min per candle
   - 1H game with 12 cells: 60min / 12 = 5min per candle
   - 4H game with 16 cells: 240min / 16 = 15min per candle
   - 24H game with 24 cells: 1440min / 24 = 60min per candle
   ```

3. **Market Grid Candle Mapping**
   - **15M games**: ONE 15-minute candle per coin
   - **1H games**: ONE 1-hour candle per coin
   - **4H games**: ONE 4-hour candle per coin
   - **24H games**: ONE 24-hour candle per coin

**Integration Points**:

```typescript
// 1. Session Creation (SessionOrchestrator)
const settleAt = TimeRangeService.calculateNextBoundary(preset.timeRangeKey);
const lockAt = TimeRangeService.calculatePreviousBoundary(preset.timeRangeKey);

// 2. Coin Grid Candle Fetching (Settlement)
const candleTimeframe = TimeRangeService.getCoinGridCandleInterval(
  timeRangeKey,
  gridSize
); // Returns '1m', '5m', '15m', '1h'

// 3. Market Grid Candle Fetching (Settlement)
const candleTimeframe = TimeRangeService.getMarketGridCandleTimeframe(
  timeRangeKey
); // Returns '15m', '1h', '4h', '1d'

// 4. Grid Size Validation
const validation = TimeRangeService.validateGridSize(timeRangeKey, gridSize);
// Ensures: (duration in minutes) % gridSize === 0
```

**Critical Bug Fix (November 2025)**:

Previously, `lockAt` was calculated as `settleAt - 15min` for ALL games, causing all games to run for only 15 minutes regardless of their actual duration. This was fixed by using `TimeRangeService.calculatePreviousBoundary()` which correctly calculates the START of the prediction period based on the time range key.

**Example: 15M Game Timeline**
```
Current time: 10:42 UTC

calculateNextBoundary(15M) → 10:45 UTC (settleAt)
calculatePreviousBoundary(15M) → 10:30 UTC (lockAt)

Result: Game runs from 10:30 to 10:45 (15 minutes) ✅
```

**Example: 4H Game Timeline**
```
Current time: 10:42 UTC

calculateNextBoundary(4H) → 12:00 UTC (settleAt)
calculatePreviousBoundary(4H) → 08:00 UTC (lockAt)

Result: Game runs from 08:00 to 12:00 (4 hours) ✅
```

**Benefits**:
- ✅ Single source of truth for all time calculations
- ✅ Eliminates duplicate mapping functions (4 removed during refactor)
- ✅ Dynamic candle intervals based on grid size
- ✅ UTC boundary alignment for fair settlement
- ✅ Type-safe with TimeRangeKey enum

---

## Pattern Detection Mechanics (Shared)

### Business Rule: Pattern Detection is Identical for Both Game Modes

**Pattern Categories** (defined per preset in `rules_config`):

| Category | Description | Example Positions | Points | Grid Types |
|----------|-------------|-------------------|--------|------------|
| **ROWS** | Consecutive cells in a horizontal row | [0,1,2,3] (4x3 grid) | Varies by preset | All |
| **COLUMNS** | Consecutive cells in a vertical column | [0,4,8,12] (4x4 grid) | Varies by preset | All |
| **DIAGONALS** | Cells forming diagonal lines | [0,5,10,15] (4x4 grid) | Varies by preset | 4x4 only |
| **SQUARES** | 2x2 cell clusters | [0,1,4,5] (any grid) | Varies by preset | All |
| **FOUR_CORNERS** | Corner cells of grid | [0,3,12,15] (4x4 grid) | Varies by preset | 4x4 only |

**Pattern Matching Rules**:
- **3-Match**: 3 out of N positions correct (e.g., Row 3-Match on 4-cell row)
- **4-Match**: All 4 positions correct (e.g., Row 4-Match, Square 4-Match)
- **5-Match**: All 5 positions correct (e.g., Row 5-Match on 6x4 grid)
- **6-Match**: All 6 positions correct (e.g., Row 6-Match on 6x4 grid)

**Detection Algorithm**:
1. **Calculate Correctness**: For each cell, determine if prediction matches resolution
2. **Scan Pattern Definitions**: Loop through each pattern group in `rules_config`
   - For each pattern definition (array of positions), count correct cells
   - If count matches a scoring rule (3-match, 4-match, etc.), award points
3. **Accumulate Points**: Sum all pattern bonuses
4. **Allow Overlaps**: Same cell can contribute to multiple patterns (row + column + square)

**Implementation**: `PatternDetector.detect()` in `server/src/domain/services/score-calculator.service.ts`

**Key Insight**: Patterns are detected based on **grid position correctness**, not asset identity or time order. The algorithm is **position-agnostic**:
- Market Grid: "Row 0 has 4 correct predictions" (4 different coins)
- Coin Grid: "Row 0 has 4 correct predictions" (4 sequential candles)
- **Same detection logic, different semantic meaning**

**Example Pattern Definitions from `rules_config`**:
```json
{
  "patterns": [
    {
      "groupName": "ROWS",
      "definitions": [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]],
      "scoringRules": [
        {"name": "Row 4-Match", "points": 4000, "matches": 4},
        {"name": "Row 3-Match", "points": 800, "matches": 3}
      ]
    },
    {
      "groupName": "COLUMNS",
      "definitions": [[0, 4, 8], [1, 5, 9], [2, 6, 10], [3, 7, 11]],
      "scoringRules": [
        {"name": "Column 3-Match", "points": 3000, "matches": 3}
      ]
    }
  ]
}
```

---

## Jackpot Mechanics (Shared)

### Business Rule: Jackpot = Complete Row + Complete Column

**Definition**: A player achieves a **Jackpot** when they complete:
1. **At least one complete row** (any pattern with group = ROWS), AND
2. **At least one complete column** (any pattern with group = COLUMNS)

**Detection Algorithm**:
```typescript
// server/src/domain/services/score-calculator.service.ts
/**
 * Migration: ARCH-2025-005 - Uses type-safe enum comparison
 */
private detectJackpot(patternScores: PatternScore[]): boolean {
  const hasRow = patternScores.some(p => getPatternGroup(p.patternName) === PatternGroupName.ROWS);
  const hasColumn = patternScores.some(p => getPatternGroup(p.patternName) === PatternGroupName.COLUMNS);
  return hasRow && hasColumn;
}
```

**Key Points**:
- Works with **any grid size** (4x3, 4x4, 6x4, etc.)
- Works with **any pattern match size** (3-match, 4-match, 6-match, etc.)
- Uses **type-safe enum comparison** (no string magic values)
- Pattern names follow convention: `${PatternGroupName}_${PatternMatchType}` (e.g., "ROWS_4_MATCH")
- Multiple jackpots possible if player completes multiple row/column combinations

**Rewards**:
- Bonus points (configurable via game preset rules)
- Special prize pool allocation in EVM settlement (via `gameplayMetrics`)
- Visual celebration in UI
- Achievement badge/NFT (future)

---

### Jackpot Examples Across All Grid Sizes

#### Example 1: Market Grid Jackpot (4x3 Grid - L1 Chains Arena)
```
┌─────┬─────┬─────┬─────┐
│ BTC │ ETH │ SOL │ AVAX│  ← Row 0: All 4 correct (✓✓✓✓) = ROW_4_MATCH
│  ✓  │  ✓  │  ✓  │  ✓  │
├─────┼─────┼─────┼─────┤
│ ADA │ DOT │MATIC│LINK │
│  ✓  │  ✗  │  ✗  │  ✗  │
├─────┼─────┼─────┼─────┤
│ATOM │NEAR │ FTM │ APT │
│  ✓  │  ✗  │  ✗  │  ✗  │
└─────┴─────┴─────┴─────┘
  ↑ = Column 0: All 3 correct (BTC, ADA, ATOM) = COLUMN_3_MATCH

Result: ROW_4_MATCH (4000 pts) + COLUMN_3_MATCH (3000 pts) = JACKPOT! 🎰
Total Bonus: 7000 points + jackpot multiplier
```

#### Example 2: Coin Grid Jackpot (4x3 Grid - 1 Hour Grid)
```
┌──────────┬──────────┬──────────┬──────────┐
│ Candle 0 │ Candle 1 │ Candle 2 │ Candle 3 │  ← Row 0
│  10:00   │  10:05   │  10:10   │  10:15   │
│     ✓    │     ✓    │     ✓    │     ✓    │  = ROW_4_MATCH
├──────────┼──────────┼──────────┼──────────┤
│ Candle 4 │ Candle 5 │ Candle 6 │ Candle 7 │  ← Row 1
│  10:20   │  10:25   │  10:30   │  10:35   │
│     ✗    │     ✓    │     ✗    │     ✗    │
├──────────┼──────────┼──────────┼──────────┤
│ Candle 8 │ Candle 9 │Candle 10 │Candle 11 │  ← Row 2
│  10:40   │  10:45   │  10:50   │  10:55   │
│     ✗    │     ✓    │     ✗    │     ✗    │
└──────────┴──────────┴──────────┴──────────┘
               ↑ = Column 1: All 3 correct (Candle 1, 5, 9) = COLUMN_3_MATCH

Result: ROW_4_MATCH (4000 pts) + COLUMN_3_MATCH (3000 pts) = JACKPOT! 🎰
Interpretation: "SOL pumped for 20 minutes straight, then consolidated for the next 40"
```

#### Example 3: Coin Grid Jackpot (4x4 Grid - 4 Hour Grid)
```
┌──────────┬──────────┬──────────┬──────────┐
│ Candle 0 │ Candle 1 │ Candle 2 │ Candle 3 │  ← Row 0
│     ✓    │     ✓    │     ✓    │     ✓    │  = ROW_4_MATCH (5000 pts)
├──────────┼──────────┼──────────┼──────────┤
│ Candle 4 │ Candle 5 │ Candle 6 │ Candle 7 │  ← Row 1
│     ✓    │     ✗    │     ✗    │     ✗    │
├──────────┼──────────┼──────────┼──────────┤
│ Candle 8 │ Candle 9 │Candle 10 │Candle 11 │  ← Row 2
│     ✓    │     ✗    │     ✗    │     ✗    │
├──────────┼──────────┼──────────┼──────────┤
│Candle 12 │Candle 13 │Candle 14 │Candle 15 │  ← Row 3
│     ✓    │     ✗    │     ✗    │     ✗    │
└──────────┴──────────┴──────────┴──────────┘
     ↑ = Column 0: All 4 correct (Candles 0, 4, 8, 12) = COLUMN_4_MATCH (5000 pts)

Result: ROW_4_MATCH + COLUMN_4_MATCH = JACKPOT! 🎰
Total Bonus: 10000 points + jackpot multiplier
```

#### Example 4: Coin Grid MEGA Jackpot (6x4 Grid - 24 Hour Grid)
```
┌──────────┬──────────┬──────────┬──────────┬──────────┬──────────┐
│ Candle 0 │ Candle 1 │ Candle 2 │ Candle 3 │ Candle 4 │ Candle 5 │  ← Row 0
│  00:00   │  01:00   │  02:00   │  03:00   │  04:00   │  05:00   │
│     ✓    │     ✓    │     ✓    │     ✓    │     ✓    │     ✓    │  = ROW_6_MATCH (12000 pts!)
├──────────┼──────────┼──────────┼──────────┼──────────┼──────────┤
│ Candle 6 │ Candle 7 │ Candle 8 │ Candle 9 │Candle 10 │Candle 11 │  ← Row 1
│     ✓    │     ✗    │     ✗    │     ✗    │     ✗    │     ✗    │
├──────────┼──────────┼──────────┼──────────┼──────────┼──────────┤
│Candle 12 │Candle 13 │Candle 14 │Candle 15 │Candle 16 │Candle 17 │  ← Row 2
│     ✓    │     ✗    │     ✗    │     ✗    │     ✗    │     ✗    │
├──────────┼──────────┼──────────┼──────────┼──────────┼──────────┤
│Candle 18 │Candle 19 │Candle 20 │Candle 21 │Candle 22 │Candle 23 │  ← Row 3
│     ✓    │     ✗    │     ✗    │     ✗    │     ✗    │     ✗    │
└──────────┴──────────┴──────────┴──────────┴──────────┴──────────┘
     ↑ = Column 0: All 4 correct (Candles 0, 6, 12, 18) = COLUMN_4_MATCH (6000 pts)

Result: ROW_6_MATCH + COLUMN_4_MATCH = MEGA JACKPOT! 🎰🎰🎰
Total Bonus: 18000 points + jackpot multiplier
Interpretation: "BTC pumped for 6 consecutive hours overnight!"
```

---

### Jackpot Verification Across All Presets

| Preset | Grid Size | Jackpot Condition | Example Combination | Total Pattern Points |
|--------|-----------|-------------------|---------------------|---------------------|
| **1 Hour Grid** | 4x3 | Row 4-Match + Column 3-Match | 4000 + 3000 | 7000 |
| **4 Hour Grid** | 4x4 | Row 4-Match + Column 4-Match | 5000 + 5000 | 10000 |
| **24 Hour Grid** | 6x4 | Row 6-Match + Column 4-Match | 12000 + 6000 | 18000 |
| **L1 Chains** | 4x3 | Row 4-Match + Column 3-Match | 4000 + 3000 | 7000 |
| **DeFi Arena** | 4x3 | Row 4-Match + Column 3-Match | 4000 + 3000 | 7000 |
| **Meme Arena** | 4x3 | Row 4-Match + Column 3-Match | 4000 + 3000 | 7000 |

**Critical Requirement**: Jackpot detection **MUST be identical** for all game modes and grid sizes because it's based on **pattern detection**, which is shared.

---

## Scoring Algorithm (Shared)

### Algorithm Steps (ScoreCalculator.calculateFinalScore)

**Input**:
- Cell data (predictions + power-ups)
- Market data (resolutions)

**Output**: `Score` object with complete breakdown

**Steps**:
1. **Calculate Correctness**: For each cell, determine if prediction matches resolution
2. **Calculate Power-Up Effects**: Evaluate HIGH_VOLATILITY and LOW_VOLATILITY conditions
3. **Detect Patterns**: Use PatternDetector to find ROW/COLUMN/DIAGONAL patterns
4. **Calculate Base Score**: Sum points from correct predictions
5. **Detect Jackpot**: Check if patterns include both row and column ← **NEW (Nov 2025)**
6. **Aggregate Scores**: Combine base + pattern bonuses + power-up effects

**Calculation Formula**:
```typescript
total = baseScore + patternTotal + bonusScore - penaltyScore

where:
  baseScore = SUM(correct predictions × base points per cell)
  patternTotal = SUM(pattern points for each detected pattern)
  bonusScore = SUM(successful power-up bonuses)
  penaltyScore = SUM(failed power-up penalties)
```

**Score Breakdown Structure**:
```typescript
{
  total: number;                          // Final score
  baseScore: number;                      // Base + patterns
  bonusScore: number;                     // Power-up successes
  penaltyScore: number;                   // Power-up failures
  breakdown: {
    correctPredictions: number;           // Count of correct cells
    incorrectPredictions: number;         // Count of incorrect cells
    patterns: PatternScore[];             // Array of detected patterns
    powerUpEffects: PowerUpEffect[];      // Array of power-up results
    isJackpot: boolean;                   // Jackpot triggered
  }
}
```

**Key Principle**: Scoring is **100% deterministic** and calculated in domain layer (TypeScript), never in database.

---

## Power-Up System (Shared Mechanics, Different Conditions)

### Power-Up Types

**HIGH_VOLATILITY**: Bet that this cell will have the **highest** volatility
- **Market Grid**: Coin with highest absolute % change
- **Coin Grid**: Candle with highest (high - low) / open range
- **Reward**: 2x points if correct AND condition met
- **Penalty**: -1x points if correct but condition NOT met

**LOW_VOLATILITY**: Bet that this cell will have the **lowest** volatility
- **Market Grid**: Coin with lowest absolute % change
- **Coin Grid**: Candle with lowest (high - low) / open range
- **Reward**: 2x points if correct AND condition met
- **Penalty**: -1x points if correct but condition NOT met

### Power-Up Evaluation

**Market Grid Power-Up Condition** (`checkMarketPowerupCondition`):
```typescript
// HIGH_VOLATILITY: This coin has max |changePercent| across all coins
const maxVolatility = Math.max(...resolutions.map(r => Math.abs(r.finalChangePercent)));
const thisCoinVolatility = Math.abs(resolutions.find(r => r.coinId === coinId).finalChangePercent);
return thisCoinVolatility === maxVolatility;

// LOW_VOLATILITY: This coin has min |changePercent| across all coins
const minVolatility = Math.min(...resolutions.map(r => Math.abs(r.finalChangePercent)));
return thisCoinVolatility === minVolatility;
```

**Coin Grid Power-Up Condition** (`checkCandlePowerupCondition`):
```typescript
// HIGH_VOLATILITY: This candle has max (high-low)/open range
const volatility = ((resolution.highPrice - resolution.lowPrice) / resolution.openPrice) * 100;
const maxVolatility = Math.max(...allCandles.map(c => c.volatility));
return volatility === maxVolatility;

// LOW_VOLATILITY: This candle has min (high-low)/open range
const minVolatility = Math.min(...allCandles.map(c => c.volatility));
return volatility === minVolatility;
```

**Key Difference**: Volatility **calculation** differs (% change vs OHLC range), but the **reward/penalty logic** is identical.

---

## Statistics Tracking Requirements

### Design Principle: Feature Parity

**Requirement**: Both game modes MUST track the same core statistics to enable:
1. Cross-game-mode leaderboards
2. Player progression metrics
3. Achievement systems
4. Fair comparison of player skill

### Required Statistics (Both Game Modes)

| Statistic | Purpose | Calculation |
|-----------|---------|-------------|
| **games_played** | Total games participated in | Increment on settlement |
| **wins** | Number of 1st place finishes | Count `rank = 1` |
| **total_score** | Cumulative score across all games | Sum of `final_score` |
| **best_score** | Highest single-game score | MAX(`final_score`) |
| **patterns_hit** | Total patterns completed | Sum of `patternsHit` from settlements |
| **powerups_succeeded** | Successful power-up activations | Count cells with `powerup_was_successful = true` |

### Additional Statistics (Game-Mode Specific)

**Market Grid Only**:
- `favorite_coin_category` (L1_CHAINS, MEMES, DEFI) - Future enhancement
- `average_grid_diversity` - Future enhancement

**Coin Grid Only**:
- `average_prediction_accuracy` - Percentage of correct predictions
- `best_streak` - Longest consecutive correct predictions

### Current State vs Required State

**Current Implementation**:

❌ **INCONSISTENT**:
```sql
-- Market Grid Statistics (CORRECT)
CREATE TABLE market_grid_statistics (
  patterns_hit integer NOT NULL DEFAULT 0,  -- ✅ Tracks patterns
  powerups_succeeded integer NOT NULL DEFAULT 0,
);

-- Coin Grid Statistics (INCOMPLETE)
CREATE TABLE coin_grid_statistics (
  -- patterns_hit ← MISSING!
  average_prediction_accuracy numeric(5,2),  -- ✅ Coin Grid specific
  best_streak integer NOT NULL DEFAULT 0,    -- ✅ Coin Grid specific
  -- powerups_succeeded ← MISSING! (Bug, not design)
);
```

**Required Implementation**:

✅ **CONSISTENT**:
```sql
-- Market Grid Statistics
CREATE TABLE market_grid_statistics (
  patterns_hit integer NOT NULL DEFAULT 0,      -- ✅ Shared
  powerups_succeeded integer NOT NULL DEFAULT 0, -- ✅ Shared
  -- Future: market-specific stats
);

-- Coin Grid Statistics
CREATE TABLE coin_grid_statistics (
  patterns_hit integer NOT NULL DEFAULT 0,      -- ✅ Shared (ADD THIS)
  powerups_succeeded integer NOT NULL DEFAULT 0, -- ✅ Shared (ADD THIS)
  average_prediction_accuracy numeric(5,2),     -- ✅ Coin Grid specific
  best_streak integer NOT NULL DEFAULT 0,        -- ✅ Coin Grid specific
);
```

### Settlement Payload Requirements

**Both game modes MUST include**:

```typescript
// MarketGridSettlementPayloadDTO (CURRENT - CORRECT)
players: Array<{
  id: string;
  finalScore: number;
  rank: number;
  patternsHit: number;   // ✅ Included
  isJackpot: boolean;     // ✅ Included
  cells: Array<{...}>;
}>;

// CoinGridSettlementPayloadDTO (CURRENT - INCOMPLETE)
players: Array<{
  id: string;
  finalScore: number;
  rank: number;
  // patternsHit: number;  // ❌ MISSING (ADD THIS)
  isJackpot: boolean;      // ✅ Included
  cells: Array<{...}>;
}>;
```

---

## Data Flow: Pattern Detection to Statistics

### Complete Pipeline (Both Game Types)

```
┌─────────────────────────────────────────────────────────────────┐
│ 1. REAL-TIME SCORING (Domain Layer)                             │
├─────────────────────────────────────────────────────────────────┤
│ Market Update → ScoreCalculator.calculateLiveScore()            │
│   → PatternDetector.detect(correctness)                         │
│       → Returns: PatternScore[] (ROW_3, COLUMN_3, etc.)         │
│   → detectJackpot(patterns)                                     │
│       → Returns: boolean (hasRow && hasColumn)                  │
│   → Store in player.liveScore.breakdown:                        │
│       - patterns: PatternScore[]                                │
│       - isJackpot: boolean                                      │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│ 2. SETTLEMENT PAYLOAD GENERATION (Domain Layer)                 │
├─────────────────────────────────────────────────────────────────┤
│ LiveGame.settle(resolutions)                                    │
│   → Read: player.liveScore.breakdown.patterns.length            │
│   → Read: player.liveScore.breakdown.isJackpot                  │
│   → Include in SettlementPayloadDTO:                            │
│       - patternsHit: patterns.length  ← MUST BE IN BOTH         │
│       - isJackpot: boolean            ← ALREADY IN BOTH         │
└─────────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────────┐
│ 3. PERSISTENCE (Infrastructure Layer)                           │
├─────────────────────────────────────────────────────────────────┤
│ apply_*_grid_settlement_payload.sql                             │
│   → Extract from payload:                                       │
│       - (player->>'patternsHit')::integer                       │
│       - (player->>'isJackpot')::boolean                         │
│   → UPDATE *_grid_players:                                      │
│       - is_jackpot = payload.isJackpot                          │
│   → INSERT/UPDATE *_grid_statistics:                            │
│       - patterns_hit = patterns_hit + payload.patternsHit       │
│       - ON CONFLICT: Aggregate cumulative total                 │
└─────────────────────────────────────────────────────────────────┘
```

### Critical Requirements

1. **Pattern Calculation**: ScoreCalculator MUST detect patterns for both game types ✅ **DONE**
2. **Jackpot Detection**: ScoreCalculator MUST detect jackpots for both game types ✅ **DONE**
3. **Settlement Payload**: Both DTOs MUST include `patternsHit` ❌ **MISSING in Coin Grid**
4. **Database Persistence**: Both settlement functions MUST persist `patternsHit` ❌ **MISSING in Coin Grid**
5. **Statistics Aggregation**: Both statistics tables MUST track `patterns_hit` ❌ **MISSING in Coin Grid**

---

## Implementation Checklist

### ✅ Already Complete

- [x] Pattern detection algorithm (PatternDetector)
- [x] Jackpot detection algorithm (ScoreCalculator.detectJackpot)
- [x] Score.breakdown.patterns type definition
- [x] Score.breakdown.isJackpot type definition
- [x] Market Grid settlement payload includes patternsHit
- [x] Market Grid statistics table has patterns_hit column
- [x] Market Grid settlement function aggregates patterns_hit
- [x] Both game types have is_jackpot column in players tables
- [x] Both settlement functions persist isJackpot

### ❌ Required Changes (Coin Grid Feature Parity)

#### 1. Type Definitions (`@repo/types`)

**File**: `types/src/api.ts`

**Change**: Add `patternsHit` to CoinGridSettlementPayloadDTO
```typescript
export interface CoinGridSettlementPayloadDTO {
  session: { id: string };
  players: Array<{
    id: string;
    finalScore: number;
    rank: number;
    patternsHit: number;  // ← ADD THIS (line 410)
    isJackpot: boolean;
    cells: Array<{...}>;
  }>;
  resolutions: Array<{...}>;
}
```

#### 2. Domain Layer

**File**: `server/src/domain/models/live-game.model.ts`

**Change**: Include patternsHit in Coin Grid settlement payload
```typescript
// Line 1073-1080 (CoinGridLiveGame.settle)
return {
  id: playerDbId,
  finalScore: player.liveScore.total,
  rank: player.rank,
  patternsHit: player.liveScore.breakdown.patterns.length,  // ← ADD THIS
  isJackpot: player.liveScore.breakdown.isJackpot,
  cells: [...],
};
```

#### 3. Database Schema

**File**: `supabase/migrations/YYYYMMDD_add_coin_grid_patterns_tracking.sql` (NEW)

**Change**: Add patterns_hit column to coin_grid_statistics
```sql
-- Add patterns_hit column to coin_grid_statistics
ALTER TABLE public.coin_grid_statistics
  ADD COLUMN patterns_hit integer NOT NULL DEFAULT 0;

COMMENT ON COLUMN public.coin_grid_statistics.patterns_hit IS
  'Cumulative count of patterns completed across all Coin Grid games. Used for leaderboards and progression tracking.';

-- Add powerups_succeeded column (also missing)
ALTER TABLE public.coin_grid_statistics
  ADD COLUMN powerups_succeeded integer NOT NULL DEFAULT 0;

COMMENT ON COLUMN public.coin_grid_statistics.powerups_succeeded IS
  'Cumulative count of successful power-up activations across all Coin Grid games.';
```

#### 4. Settlement Function

**File**: `supabase/objects/functions/apply_coin_grid_settlement_payload.sql`

**Change**: Extract and aggregate patternsHit
```sql
-- Line 124-133 (INSERT INTO coin_grid_statistics)
INSERT INTO public.coin_grid_statistics (
    user_id,
    games_played,
    wins,
    total_score,
    best_score,
    patterns_hit,           -- ← ADD THIS
    powerups_succeeded,     -- ← ADD THIS
    average_prediction_accuracy,
    best_streak,
    updated_at
)
SELECT
    p.user_id,
    1 AS games_played,
    CASE WHEN p.rank = 1 THEN 1 ELSE 0 END AS wins,
    p.final_score AS total_score,
    p.final_score AS best_score,
    -- Extract patternsHit from payload (same pattern as Market Grid)
    (
        SELECT (player_payload->>'patternsHit')::integer
        FROM jsonb_array_elements(p_payload -> 'players') AS player_payload
        WHERE (player_payload->>'id')::uuid = p.id
    ) AS patterns_hit,  -- ← ADD THIS
    (
        SELECT COUNT(*)
        FROM public.coin_grid_cells
        WHERE player_id = p.id
          AND powerup_was_successful = true
    ) AS powerups_succeeded,  -- ← ADD THIS
    (
        SELECT 100.0 * COUNT(*) FILTER (WHERE is_correct) / COUNT(*)
        FROM public.coin_grid_cells
        WHERE player_id = p.id
    ) AS average_prediction_accuracy,
    -- best_streak calculation (future)
    0 AS best_streak,
    NOW() AS updated_at
FROM public.coin_grid_players p
WHERE p.session_id = v_session_id
ON CONFLICT (user_id) DO UPDATE SET
    games_played = coin_grid_statistics.games_played + 1,
    wins = coin_grid_statistics.wins + EXCLUDED.wins,
    total_score = coin_grid_statistics.total_score + EXCLUDED.total_score,
    best_score = GREATEST(coin_grid_statistics.best_score, EXCLUDED.best_score),
    patterns_hit = coin_grid_statistics.patterns_hit + EXCLUDED.patterns_hit,  -- ← ADD THIS
    powerups_succeeded = coin_grid_statistics.powerups_succeeded + EXCLUDED.powerups_succeeded,  -- ← ADD THIS
    average_prediction_accuracy = (
        (coin_grid_statistics.average_prediction_accuracy * coin_grid_statistics.games_played)
        + EXCLUDED.average_prediction_accuracy
    ) / (coin_grid_statistics.games_played + 1),
    best_streak = GREATEST(coin_grid_statistics.best_streak, EXCLUDED.best_streak),
    updated_at = NOW();
```

#### 5. Table Definition Sync

**File**: `supabase/objects/tables/coin_grid_statistics.sql`

**Change**: Update table definition to include new columns
```sql
CREATE TABLE public.coin_grid_statistics (
  user_id uuid NOT NULL,
  games_played integer NOT NULL DEFAULT 0,
  wins integer NOT NULL DEFAULT 0,
  total_score bigint NOT NULL DEFAULT 0,
  best_score integer NOT NULL DEFAULT 0,
  patterns_hit integer NOT NULL DEFAULT 0,           -- ← ADD THIS
  powerups_succeeded integer NOT NULL DEFAULT 0,     -- ← ADD THIS
  average_prediction_accuracy numeric(5,2),
  best_streak integer NOT NULL DEFAULT 0,
  rank integer,
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);
```

---

## Testing Requirements

### Unit Tests

**Pattern Detection**:
- ✅ Market Grid patterns detected correctly
- ✅ Coin Grid patterns detected correctly (VERIFY)
- ✅ Jackpot detection for Market Grid
- ✅ Jackpot detection for Coin Grid (VERIFY)

**Settlement Payload**:
- ✅ Market Grid payload includes patternsHit
- ❌ Coin Grid payload includes patternsHit (ADD TEST)

### Integration Tests

**Settlement Flow**:
- ✅ Market Grid settlement persists patterns_hit
- ❌ Coin Grid settlement persists patterns_hit (ADD TEST)
- ❌ Coin Grid settlement persists powerups_succeeded (ADD TEST)

**Statistics Queries**:
- ✅ Market Grid leaderboard by patterns_hit
- ❌ Coin Grid leaderboard by patterns_hit (ADD TEST)
- ❌ Cross-game-mode pattern leaderboard (ADD TEST)

### E2E Tests

**User Journey**:
1. Play Coin Grid game with jackpot-achieving grid
2. Verify settlement includes patternsHit in payload
3. Verify statistics table increments patterns_hit
4. Verify leaderboard reflects pattern achievements

---

## Success Metrics

### Feature Parity Achieved When:

1. ✅ Both game modes detect patterns using identical algorithm
2. ✅ Both game modes detect jackpots using identical algorithm
3. ✅ Both settlement payloads include `patternsHit` field
4. ✅ Both statistics tables have `patterns_hit` column
5. ✅ Both settlement functions aggregate `patterns_hit`
6. ✅ Both game modes display pattern achievements in UI
7. ✅ Cross-game-mode leaderboards compare pattern totals

### Documentation Complete When:

1. ✅ This document defines both game mechanics
2. ✅ JACKPOT_DETECTION_ARCHITECTURE.md references this document
3. ✅ CLAUDE.md links to this document
4. ✅ Migration plan documented (next section)

---

## Migration Plan

### Phase 1: Documentation (This Document)
- [x] Define game mechanics
- [x] Establish feature parity requirements
- [x] Document implementation checklist

### Phase 2: Schema Migration
- [ ] Create migration SQL file
- [ ] Add `patterns_hit` column to `coin_grid_statistics`
- [ ] Add `powerups_succeeded` column to `coin_grid_statistics`
- [ ] Test migration on local Supabase
- [ ] Verify backwards compatibility (existing rows get default 0)

### Phase 3: Code Updates
- [ ] Update `CoinGridSettlementPayloadDTO` type definition
- [ ] Update `CoinGridLiveGame.settle()` to include patternsHit
- [ ] Update `apply_coin_grid_settlement_payload.sql` to extract and aggregate
- [ ] Update `coin_grid_statistics.sql` table definition
- [ ] Rebuild types package: `npm run build --workspace=types`

### Phase 4: Testing
- [ ] Unit tests for Coin Grid pattern detection
- [ ] Integration tests for settlement payload
- [ ] E2E tests for statistics aggregation
- [ ] Manual verification on local environment

### Phase 5: Documentation Updates
- [ ] Update JACKPOT_DETECTION_ARCHITECTURE.md with Coin Grid parity
- [ ] Update CLAUDE.md to remove asymmetry note
- [ ] Document in changelog/release notes

---

## References

### Related Documents
- [Scoring & Pattern Detection Architecture](./SCORING_PATTERN_DETECTION_ARCHITECTURE.md) - **Comprehensive technical implementation** (NEW)
- [Jackpot Detection Architecture](./JACKPOT_DETECTION_ARCHITECTURE.md) - Jackpot-specific implementation details
- [Repository CQRS Pattern](./REPOSITORY_CQRS_PATTERN.md) - Data persistence patterns
- [Monorepo Architecture](../infrastructure/MONOREPO_ARCHITECTURE_SPECS.md) - Overall system design

### Related Code
- **ScoreCalculator**: `server/src/domain/services/score-calculator.service.ts`
- **PatternDetector**: `server/src/domain/services/pattern-detector.service.ts`
- **LiveGame Models**: `server/src/domain/models/live-game.model.ts`
- **Settlement Functions**: `supabase/objects/functions/apply_*_grid_settlement_payload.sql`
- **Statistics Tables**: `supabase/objects/tables/*_grid_statistics.sql`

---

**Last Updated**: November 4, 2025
**Status**: ✅ Authoritative - All implementation changes MUST align with this specification

---

## Specification Completeness Verification

### ✅ All Game Presets Documented

**Coin Grid Presets** (3):
- [x] 1 Hour Grid (4x3) - Active, SOL, 5-min candles
- [x] 4 Hour Grid (4x4) - Inactive, ETH, 15-min candles, diagonal patterns
- [x] 24 Hour Grid (6x4) - Inactive, BTC, 1-hour candles, max rewards

**Market Grid Presets** (3):
- [x] L1 Chains Arena (4x3) - Active, 1-hour range
- [x] DeFi Arena (4x3) - Inactive, 24-hour range
- [x] Meme Arena (4x3) - Inactive, 24-hour range

### ✅ Pattern Detection Verified

- [x] Pattern detection works for ALL grid sizes (4x3, 4x4, 6x4)
- [x] Pattern definitions pulled from `rules_config` JSON
- [x] Algorithm is grid-size agnostic (position-based, not hardcoded)
- [x] Shared implementation: `PatternDetector.detect()`

### ✅ Jackpot Mechanics Verified

- [x] Jackpot condition: Complete Row + Complete Column
- [x] Works across ALL grid sizes
- [x] Works across ALL presets (Market Grid and Coin Grid)
- [x] Detection: `patternName.startsWith('ROW_')` + `patternName.startsWith('COLUMN_')`
- [x] Examples provided for 4x3, 4x4, and 6x4 grids

### ✅ Feature Parity Requirements

**Status**: ✅ **COMPLETE** (November 4, 2025)

**Implementation State**:
- ✅ Market Grid tracks `patterns_hit` in statistics
- ✅ Coin Grid NOW tracks `patterns_hit` in statistics
- ✅ Coin Grid NOW tracks `powerups_succeeded` in statistics
- ✅ BOTH game modes track pattern and power-up statistics
- ✅ BOTH game modes include `patternsHit` in settlement payload

### ✅ Implementation Checklist

**Phase 1: Type System** ✅ COMPLETE
- ✅ Updated `CoinGridSettlementPayloadDTO` (added `patternsHit`)

**Phase 2: Domain Layer** ✅ COMPLETE
- ✅ Updated `CoinGridLiveGame.settle()` (includes `patterns.length`)

**Phase 3: Schema Migration** ✅ COMPLETE
- ✅ Added `patterns_hit` column to `coin_grid_statistics`
- ✅ Added `powerups_succeeded` column to `coin_grid_statistics`
- ✅ Migration: [20251104000001_add_coin_grid_pattern_statistics.sql](../../supabase/migrations/20251104000001_add_coin_grid_pattern_statistics.sql)

**Phase 4: Infrastructure** ✅ COMPLETE
- ✅ Updated `apply_coin_grid_settlement_payload.sql` (extract & aggregate)
- ✅ Updated `coin_grid_statistics.sql` table definition

**Phase 5: Verification** ✅ COMPLETE
- ✅ Types package builds successfully
- ✅ Server type-check passes
- ✅ No breaking changes introduced

**Detailed Implementation**: See [COIN_GRID_PATTERN_STATISTICS_FEATURE_PARITY.md](../planning/COIN_GRID_PATTERN_STATISTICS_FEATURE_PARITY.md)

---
