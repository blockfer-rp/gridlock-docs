# TRADER GRID FANTASY - PRODUCT SPECIFICATIONS
**Version:** 1.0  
**Date:** November 12, 2025  
**Status:** MVP Design - Ready for Development  
**Product Type:** Fantasy Sports + Live Crypto Trading Hybrid

---

## EXECUTIVE SUMMARY

**Trader Grid Fantasy** is a competitive fantasy sports game for cryptocurrency markets that combines roster-building prediction skills with **real money trading execution** via Hyperliquid DEX. Players select and rank 9 cryptocurrencies before each competition, predict their directional movements, then actively trade those coins with $1,000 USDC capital during 1-4 hour live sessions to compete for prize pools based on trading PnL and pattern scoring.

**Core Innovation:** Triple scoring system that rewards trading profitability (PnL-based prizes), prediction accuracy (XP-based pattern scoring), and perfect market alignment (jackpot mechanics), solving the traditional "hold vs trade" paradox.

**Critical Architecture:**
- ✅ **REAL MONEY TRADING** via Hyperliquid SDK integration (see `_PM/PLANS/HYPERLIQUID_SDK.md`)
- ✅ **$1,000 USDC Trading Capital** per player per competition (standardized, separate from entry fees)
- ✅ **Server-enforced trading restrictions** (only builder-code tagged trades count)
- ✅ **Hyperliquid candle-based settlement** (authoritative price source)

**Target Market:**
- DraftKings/FanDuel fantasy sports players (60M+ users)
- Active cryptocurrency traders (estimated 50M+ globally, excluding USA)
- Market prediction/analysis enthusiasts

**Revenue Model:**
- Entry fees: $10-$100 per competition (90% to prize pool, 5% to platform, 5% to jackpot pool)
- Builder fees: 3 bps on all trade volume (collected by Hyperliquid, shared with platform)
- Target: $100K-$500K monthly recurring revenue (Year 1)

**Regulatory Note:**
- ⚠️ **USA BLOCKED** until legal clarity is established
- Platform follows Hyperliquid's geo-blocking policies
- KYC/AML compliance delegated to Hyperliquid DEX

---

## 1. CORE GAME LOOP

### 1.1 Three-Phase Competition Structure

```
Phase 1: PRE-GAME (Roster Building) - 15 minutes before start
    ↓
Phase 2: LIVE TRADING - 1hr, 4hr, or 24hr duration
    ↓
Phase 3: SETTLEMENT & RESULTS - Instant calculation
```

### 1.2 Phase 1: Pre-Game (Roster Building)

**Duration:** 15 minutes before competition start  
**Player Actions:**

1. **View Coin Pool**
   - 50 eligible coins displayed (Hyperliquid-listed assets only)
   - Sorted by: 24hr %, Market Cap, Volume, Category
   - Filtering: L1 Chains, DeFi, Memes, etc.
   - Real-time data: Current price, 24hr change, volume from Hyperliquid API

2. **Select 9 Coins**
   - Drag coins into 3x3 grid
   - Position 0 (top-left) = Captain (special bonuses)
   - Positions 1-8 = Supporting roster
   - Can change selections until lock-in

3. **Rank Your Roster**
   - Grid position = Performance ranking prediction
   - Cell 0 (Captain) = Expected #1 performer
   - Cell 8 = Expected #9 performer
   - Ranking based on absolute % change (up OR down)

4. **Predict Direction**
   - For each coin: Select UP ↑ or DOWN ↓
   - Prediction independent of ranking
   - Example: Coin ranked #1 could be UP +20% or DOWN -20%

5. **Lock In Roster**
   - Review full roster
   - Confirm predictions
   - Approve agent wallet transaction (one-time setup per competition)
   - Wait for competition start

**UI Example:**
```
┌─────────────────────────────────────────────────────┐
│  ROSTER BUILDER - L1 Chains 4hr Competition         │
│  Start Time: 12:00 PM EST | Entry Fee: $50          │
│  Trading Capital: $1,000 USDC (standardized)        │
├─────────────────────────────────────────────────────┤
│  YOUR ROSTER (Drag to rank)                         │
│                                                      │
│  ┌─────────┬─────────┬─────────┐                   │
│  │ #1 CAPT │ #2      │ #3      │  ← Top Tier       │
│  │  SOL    │  HYPE   │  BTC    │                   │
│  │  [UP ▼] │ [DOWN▼] │  [UP ▼] │                   │
│  │ $95.23  │ $22.15  │ $43.2K  │                   │
│  │ +8.5%   │ +15.2%  │ +3.2%   │                   │
│  └─────────┴─────────┴─────────┘                   │
│                                                      │
│  ┌─────────┬─────────┬─────────┐                   │
│  │ #4      │ #5      │ #6      │  ← Mid Tier       │
│  │  AVAX   │  ETH    │  BNB    │                   │
│  │  [UP ▼] │  [UP ▼] │ [DOWN▼] │                   │
│  └─────────┴─────────┴─────────┘                   │
│                                                      │
│  ┌─────────┬─────────┬─────────┐                   │
│  │ #7      │ #8      │ #9      │  ← Low Tier       │
│  │  MATIC  │  DOT    │  ADA    │                   │
│  │  [UP ▼] │ [DOWN▼] │  [UP ▼] │                   │
│  └─────────┴─────────┴─────────┘                   │
│                                                      │
│  [Lock In Roster & Pay Entry Fee]                   │
└─────────────────────────────────────────────────────┘
```

**Eligibility Requirements for Coin Pool:**
- ✅ **ONLY coins listed on Hyperliquid DEX**
- ✅ Minimum 24hr trading volume: $10M (on Hyperliquid)
- ✅ Minimum market cap: $100M
- ✅ Sufficient liquidity for leverage trading (up to 20x)
- ❌ No stablecoins (USDT, USDC, etc.)
- ❌ No halted/delisted coins
- **Coin Index**: Platform maintains a curated index of eligible Hyperliquid assets, refreshed daily

---

### 1.3 Phase 2: Live Trading

**Duration:** 1hr, 4hr, or 24hr (competition-specific)
**Trading Capital:** $1,000 USDC per player (standardized, competition-managed)

**Capital Structure:**
- ✅ **Entry Fee ($10-$100)**: Separate payment for prize pool, NOT used for trading
- ✅ **Trading Capital ($1,000 USDC)**: Standardized margin provided per player
- ✅ **Profits/Losses**: Kept by player (winners get trading PnL + prize pool winnings)
- ✅ **Settlement**: All positions auto-closed at competition end, PnL calculated

**Trading Mechanics:**
- ✅ Can ONLY trade the 9 coins in your roster (server-enforced via Hyperliquid agent wallet)
- ✅ LONG or SHORT any of your 9 coins
- ✅ Open multiple positions on same coin (DCA strategy)
- ✅ Use leverage: 3x, 5x, 10x, 20x (with restrictions below)
- ✅ Close positions anytime (partial or full)
- ✅ Add to existing positions
- ✅ Set stop-loss/take-profit (optional, managed by Hyperliquid)

**Leverage Rules (Anti-Kamikaze Protection):**
- **Captain (position 0):** Max 20x leverage
- **Positions 1-8:** Max 10x leverage
- **Max Notional Exposure:** $10,000 per coin (prevents all-in 20x hedging abuse)
- **Total Portfolio Exposure:** Max $50,000 notional (prevents hedge-all-coins strategy)
- **Rationale:** Prevents players from maxing leverage on all 9 coins to hedge opponents' trades

**Position Management:**
- Unlimited trades during competition
- No minimum trade requirement
- Can hold positions or actively scalp
- Real-time PnL tracking for all open positions (calculated client-side from market ticks)
- Live leaderboard updates every 5 seconds (shows XP score + trading PnL)

**Trading Enforcement (Hyperliquid SDK Integration):**
- ✅ All trades executed via platform-controlled agent wallet (see `_PM/PLANS/HYPERLIQUID_SDK.md`)
- ✅ **ONLY trades with platform builder code count** (external trades = disqualification)
- ✅ Server validates: rostered coins, leverage limits, position sizes
- ✅ Positions auto-close at settlement (no manual intervention required)

**Strategic Approaches:**

**Strategy A: Pure Trader**
```
Roster: Pick volatile coins
Predictions: Don't care much about accuracy
Live Trading: Active scalping, 20+ trades
Focus: Maximize trading PnL
Target Prize: Trading Prize (70% pool)
```

**Strategy B: Pure Analyst**
```
Roster: Perfect ranking + direction predictions
Live Trading: Minimal (hold positions)
Focus: Maximize prediction accuracy
Target Prize: Prediction Prize (20% pool)
```

**Strategy C: Balanced**
```
Roster: Strong predictions
Live Trading: Strategic entries/exits
Focus: Win both prizes
Target Prize: Trading + Prediction (90% pool)
Risk: Hardest to execute perfectly
```

**Example Live Trading Session:**
```
My Roster:
#1 (Captain): SOL (predicted UP)
#2: HYPE (predicted DOWN)
#3: BTC (predicted UP)
...

Hour 0 (Competition Start):
- Price check: All coins at baseline
- Decision: LONG SOL 20x (captain) with $100 margin
- Position size: $2,000 (20x leverage)

Hour 1 (+1:00):
- SOL pumps to +15% → PnL: +$300 unrealized
- Decision: Hold (still expect more upside)
- HYPE dumps to -10% → Predicted correctly!
- Decision: SHORT HYPE 10x with $100 margin

Hour 2 (+2:00):
- SOL consolidates at +12% → PnL: +$240 unrealized
- Decision: Close 50% of SOL position (lock $120 profit)
- HYPE continues down to -18% → PnL: +$180 unrealized
- Decision: Close HYPE SHORT (lock $180 profit)

Hour 3 (+3:00):
- BTC slowly climbs to +8%
- Decision: LONG BTC 5x with $100 margin late entry

Settlement (+4:00):
- SOL ends at +18% (my prediction: UP ✅, ranking: #2 in market)
- HYPE ends at -22% (my prediction: DOWN ✅, ranking: #1 in market)
- BTC ends at +12% (my prediction: UP ✅, ranking: #3 in market)

Trading Results:
- Realized PnL: +$300 (SOL partial close + HYPE close)
- Unrealized PnL: +$120 (50% SOL position) + $60 (BTC position)
- Total PnL: +$480

Prediction Results:
- Direction: 3/3 correct (SOL UP, HYPE DOWN, BTC UP)
- Ranking: Captain (SOL) was #2 market performer (close!)
- Captain Jackpot: Did HYPE (my #2 pick) finish in top 3? YES!
```

**Real-Time UI During Competition:**
```
┌─────────────────────────────────────────────────────┐
│  LIVE: L1 Chains 4hr Competition                    │
│  Time Remaining: 2:15:32                            │
│  Your Rank: #3 / 127 Players                        │
├─────────────────────────────────────────────────────┤
│  YOUR PERFORMANCE                                    │
│  Trading PnL: +$480 💰                              │
│  Open Positions: 2  |  Available Slots: 7           │
│                                                      │
│  ┌─────────┬─────────┬─────────┐                   │
│  │ SOL ⭐  │ HYPE    │ BTC     │                   │
│  │ LONG 20x│ CLOSED  │ LONG 5x │                   │
│  │ +$120   │ +$180 ✅│ +$60    │                   │
│  │ [Manage]│         │[Manage] │                   │
│  ├─────────┼─────────┼─────────┤                   │
│  │ AVAX    │ ETH     │ BNB     │                   │
│  │ (empty) │ (empty) │ (empty) │                   │
│  │         │         │         │                   │
│  ├─────────┼─────────┼─────────┤                   │
│  │ MATIC   │ DOT     │ ADA     │                   │
│  │ (empty) │ (empty) │ (empty) │                   │
│  └─────────┴─────────┴─────────┘                   │
│                                                      │
│  [+ Open Position] [View Leaderboard] [Close All]   │
├─────────────────────────────────────────────────────┤
│  💡 LIVE MARKET UPDATES                             │
│  SOL: $110.25 (+18.2% from start) 🔥               │
│  HYPE: $17.89 (-22.4% from start) 📉               │
│  BTC: $48,200 (+12.1% from start) 📈               │
└─────────────────────────────────────────────────────┘
```

---

### 1.4 Phase 3: Settlement & Results

**Instant Calculation at Competition End:**

**Settlement Price Source (Hyperliquid Candles):**
- ✅ **Baseline Prices**: Captured at competition start (from Hyperliquid API)
- ✅ **Final Prices**: Captured from Hyperliquid candle close (1hr, 4hr, or 24hr candle)
- ✅ **Example (4hr competition)**: Start at 08:00 UTC → Settle using 08:00-12:00 4hr candle close price
- ✅ **Authoritative Source**: Hyperliquid DEX market data (single source of truth)
- ✅ **Ranking Calculation**: Based on absolute % change (|final - baseline| / baseline × 100)

**Step 1: Close All Open Positions**
- All OPEN positions auto-close at Hyperliquid mark price (competition end timestamp)
- Calculate final realized + unrealized PnL for each player
- Total PnL = Sum(all realized PnL) + Sum(all unrealized PnL at close)

**Step 2: Calculate Trading Prize (90% of wager pool)**
```typescript
// Entry fees collected: 90% to trading pool, 5% to platform, 5% to jackpot pool
const wagersCollected = playerCount × entryFee;
const tradingPrizePool = wagersCollected × 0.90;
const platformFee = wagersCollected × 0.05;
const jackpotPool = wagersCollected × 0.05;

// Rank all players by Total PnL
players.sort((a, b) => b.totalPnL - a.totalPnL);

// Distribute Trading Prize (top 3 winners)
prizes.first = tradingPrizePool × 0.70;  // 63% of total wagers
prizes.second = tradingPrizePool × 0.20; // 18% of total wagers
prizes.third = tradingPrizePool × 0.10;  // 9% of total wagers

// NOTE: Winners ALSO keep their trading PnL profits (separate from prize pool)
```

**Step 3: Calculate XP Score (Pattern-Based, like Market Grid)**
```typescript
// Uses existing Market Grid pattern detection (see _PM/SPECS/GAME_DESIGN_V1.md)
function calculateXPScore(player, marketData) {
  let score = 0;

  // 1. Direction Accuracy (base XP)
  for (let i = 0; i < 9; i++) {
    const coin = player.roster[i];
    const actualChange = marketData[coin.id].percentChange;
    const predictedUp = coin.prediction === 'UP';
    const actualUp = actualChange > 0;

    if (predictedUp === actualUp) {
      score += 100; // Correct direction = 100 XP per cell
    }
  }

  // 2. Pattern Detection (rows, columns, diagonals like Market Grid)
  const patterns = detectPatterns(player.predictions, marketData);
  patterns.forEach(pattern => {
    score += pattern.points; // ROW_3_MATCH = 800 XP, ROW_4_MATCH = 4000 XP, etc.
  });

  // 3. Jackpot Detection (complete row + complete column)
  const hasJackpot = detectJackpot(patterns);

  return {
    totalXP: score,
    patterns: patterns,
    isJackpot: hasJackpot
  };
}

// XP is used for:
// - Leaderboard ranking (separate from PnL)
// - Pattern jackpot eligibility (see Step 4)
// - Player progression system (future)
```

**Step 4: Jackpot Distribution (Dual System)**
```typescript
// Jackpot Pool = 5% of all entry fees collected
const jackpotPool = wagersCollected × 0.05;

// PART A: Perfect Grid Jackpot (50% of jackpot pool)
// Player's roster ranking EXACTLY matches market's final ranking
const perfectGridWinners = players.filter(p => {
  const playerRanking = p.roster.map(c => c.id); // [SOL, HYPE, BTC, ...]
  const marketRanking = getMarketRanking(marketData); // [HYPE, SOL, BTC, ...]
  return arraysEqual(playerRanking, marketRanking); // Perfect alignment
});

if (perfectGridWinners.length > 0) {
  const perfectGridPrize = jackpotPool × 0.50;
  const prizePerWinner = perfectGridPrize / perfectGridWinners.length;
  perfectGridWinners.forEach(winner => {
    winner.winnings += prizePerWinner;
  });
} else {
  // NO WINNER: 50% rolls over to next competition's jackpot pool
  nextCompetition.jackpotPool += jackpotPool × 0.50;
}

// PART B: Pattern Jackpot (50% of jackpot pool)
// Player with highest XP score from patterns (always awarded)
const patternWinner = players.reduce((max, p) =>
  p.xpScore.totalXP > max.xpScore.totalXP ? p : max
);

const patternPrize = jackpotPool × 0.50;
patternWinner.winnings += patternPrize;

// NOTE: Same player can win BOTH jackpots if they have perfect grid + highest XP
```

**Results Screen Example:**
```
┌─────────────────────────────────────────────────────┐
│  COMPETITION RESULTS - L1 Chains 4hr                │
│  Competition ID: #12847  |  127 Players             │
│  Total Prize Pool: $6,350                           │
├─────────────────────────────────────────────────────┤
│  YOUR PERFORMANCE                                    │
│                                                      │
│  🏆 TRADING PRIZE - Rank: #3                        │
│  Total PnL: +$480                                   │
│  Prize: $445 (7% of pool)                           │
│                                                      │
│  🎯 PREDICTION SCORE: 2,100 / 2,600                 │
│  Direction Accuracy: 8/9 (89%)                      │
│  Ranking Accuracy: 6/9 perfect, 2/9 close           │
│  Captain Bonus: ✅ (+300 points)                    │
│  Rank: #8 (no prize)                                │
│                                                      │
│  🎰 CAPTAIN JACKPOT                                 │
│  Your Captain: SOL (finished #2 performer)          │
│  Status: ✅ IN TOP 3                                │
│  Jackpot Winners: 7 players                         │
│  Your Share: $91 ($635 jackpot ÷ 7)                │
│                                                      │
│  💰 TOTAL WINNINGS: $536                            │
├─────────────────────────────────────────────────────┤
│  FINAL LEADERBOARD (Top 10)                         │
│                                                      │
│  1. CryptoKing      +$1,240  →  $3,115 🥇          │
│  2. DiamondHands    +$890   →  $889 🥈             │
│  3. YOU             +$480   →  $536 🥉             │
│  4. MoonBoy         +$425   →  $0                  │
│  5. HODLer          +$380   →  $0                  │
│  6. TraderJoe       +$340   →  $91 (jackpot)       │
│  7. PatternMaster   +$295   →  $0                  │
│  8. SwingKing       +$280   →  $91 (jackpot)       │
│  9. Strategist      +$260   →  $1,270 (prediction) │
│  10. Analyst        +$245   →  $91 (jackpot)       │
│                                                      │
│  [View Full Roster Breakdown] [Play Again]          │
└─────────────────────────────────────────────────────┘
```

---

## 2. PRIZE STRUCTURE & ECONOMICS

### 2.1 Prize Pool Distribution (CORRECTED)

**Standard Competition:**
- Entry Fee: $10, $25, $50, or $100 (tier-specific)
- Trading Capital: $1,000 USDC (standardized, separate from entry fee)
- Entry Fee Split: 90% to trading pool, 5% to platform, 5% to jackpot pool

**Prize Split:**
```
Entry Fees Collected: 100%

├─ Trading Prize Pool (90%):
│  ├─ 1st Place: 70% of trading pool (63% of total wagers)
│  ├─ 2nd Place: 20% of trading pool (18% of total wagers)
│  └─ 3rd Place: 10% of trading pool (9% of total wagers)
│  NOTE: Winners ALSO keep their trading PnL profits (separate)
│
├─ Platform Fee (5%):
│  └─ Platform operations + builder fees shared with Hyperliquid
│
└─ Jackpot Pool (5%):
   ├─ Perfect Grid Jackpot (50% of jackpot pool):
   │  └─ Split among players with EXACT market ranking match (can roll over)
   │
   └─ Pattern Jackpot (50% of jackpot pool):
      └─ Player with highest XP score (always awarded each game)
```

**Example: 100-Player Competition @ $50 Entry**
```
Gross Wagers Collected: $5,000
Entry Fee Allocation:
├─ Trading Prize Pool: $4,500 (90%)
├─ Platform Fee: $250 (5%)
└─ Jackpot Pool: $250 (5%)

Trading Prize Pool Distribution ($4,500):
├─ 1st Place PnL Winner: $3,150 (70% of $4,500)
├─ 2nd Place PnL Winner: $900 (20% of $4,500)
└─ 3rd Place PnL Winner: $450 (10% of $4,500)

Jackpot Pool Distribution ($250):
├─ Perfect Grid Winners: $125 (50% of $250, split if multiple/rollover if none)
└─ Highest XP Player: $125 (50% of $250, always awarded)

Example Total Winnings (1st Place Winner):
- Trading Prize: $3,150
- Trading PnL: +$800 (kept from $1,000 capital)
- Pattern Jackpot: $125 (highest XP)
- Perfect Grid Jackpot: $125 (if perfect alignment)
TOTAL: $4,200 from $50 entry
```

### 2.2 Economic Model

**Revenue Streams:**
1. **Platform Rake (5%)**: $250 per 100-player competition
2. **Builder Fees (3 bps)**: 0.03% on all trade volume
3. **Referral Fees (0.432 bps)**: On referred trading volume

**Example Monthly Revenue (Conservative):**
```
Competitions per day: 24 (hourly 1hr + 6x 4hr)
Average players per competition: 50
Average entry fee: $50
Daily gross: $60,000
Monthly gross: $1,800,000

Platform rake (5%): $90,000/month
Builder fees (avg $500K daily volume): $10,000/month
Total: $100,000/month recurring revenue
```

### 2.3 Trading Capital Management

**Capital Provision:**
- ✅ Platform provides $1,000 USDC per player per competition
- ✅ Capital is managed via Hyperliquid agent wallets (see `_PM/PLANS/HYPERLIQUID_SDK.md`)
- ✅ Players cannot withdraw capital during competition
- ✅ Players keep PnL profits/losses after settlement

**Capital Risk Management:**
- Max drawdown per player: -$1,000 (100% loss)
- Platform exposure: $1,000 × player_count per competition
- Example: 100-player competition = $100,000 capital at risk
- Mitigation: Leverage limits, position size caps, anti-kamikaze rules

**Settlement Process:**
1. All positions auto-close at competition end
2. PnL calculated: final_capital - 1000
3. Winners get: prize_pool_winnings + trading_pnl
4. Losers lose: trading_pnl (up to $1,000 max)

---

## 3. COMPETITION TYPES & SCHEDULING

### 3.1 Duration-Based Competitions

**1-Hour Rapid Fire:**
- Start times: Every hour on the hour (12:00, 1:00, 2:00, etc.)
- Entry fee: $10-$25
- Target audience: Active traders, quick decision-makers
- Volatility focus: High-frequency scalpers

**4-Hour Strategic:**
- Start times: Every 4 hours (12:00 AM, 4:00 AM, 8:00 AM, 12:00 PM, 4:00 PM, 8:00 PM)
- Entry fee: $25-$50
- Target audience: Balanced traders + analysts
- Volatility focus: Intraday trend followers

**24-Hour Marathon:**
- Start time: Daily at 12:00 AM UTC
- Entry fee: $50-$100
- Target audience: Long-term strategists
- Volatility focus: Daily/swing traders

### 3.2 Category-Specific Competitions

**By Market Sector (All coins sourced from Hyperliquid DEX):**

1. **L1 Chains Arena**
   - Coins: BTC, ETH, SOL, AVAX, BNB, ADA, DOT, ATOM, NEAR, etc. (Hyperliquid-listed only)
   - Characteristics: Lower volatility, higher liquidity
   - Strategy: Fundamental analysis matters
   - Eligibility: Must meet $10M+ volume, $100M+ market cap on Hyperliquid

2. **Meme Coins Arena**
   - Coins: DOGE, SHIB, PEPE, WIF, BONK, FLOKI, etc. (Hyperliquid-listed only)
   - Characteristics: Extreme volatility, sentiment-driven
   - Strategy: Social media monitoring, momentum trading
   - Note: Only meme coins with sufficient Hyperliquid liquidity included

3. **DeFi Arena**
   - Coins: UNI, AAVE, MKR, SNX, CRV, COMP, etc. (Hyperliquid-listed only)
   - Characteristics: Moderate volatility, protocol-driven
   - Strategy: TVL analysis, protocol events
   - Note: DeFi tokens must have active Hyperliquid perpetual futures markets

4. **AI/Gaming Arena**
   - Coins: FET, RNDR, SAND, AXS, IMX, etc. (Hyperliquid-listed only)
   - Characteristics: Narrative-driven, sector rotation
   - Strategy: Trend identification
   - Note: Category availability depends on Hyperliquid listing AI/Gaming perpetuals

**Important:** All categories limited to coins actively traded on Hyperliquid DEX. If a coin is delisted or trading halted on Hyperliquid during a competition, it becomes ineligible for future competitions.

### 3.3 Special Event Competitions

**Weekly Tournaments:**
- Higher entry fees ($100-$500)
- Larger guaranteed prize pools ($50K+)
- Qualification required (top 100 players from previous week)
- Championship format

**Holiday Specials:**
- Themed competitions (Black Friday, New Year)
- Bonus jackpots
- Reduced rake

**Sponsored Competitions:**
- Crypto projects sponsor category-specific games
- Additional prizes (tokens, NFTs, merch)
- Marketing opportunities

---

## 4. TECHNICAL SPECIFICATIONS

### 4.1 Architecture Overview

**Frontend (React/TypeScript):**
- Reuses existing Gridlock codebase (Market Grid + Trade Grid)
- New components:
  - RosterBuilder.tsx (drag-and-drop interface)
  - LiveCompetitionScreen.tsx (combines prediction grid + trading panel)
  - ResultsBreakdown.tsx (three-prize display)

**Backend Requirements:**
- Competition management system
- Player registration/matchmaking
- Real-time price feed integration (Hyperliquid/Binance WebSocket)
- PnL calculation engine (reuse from Trade Grid)
- Prediction scoring algorithm (new)
- Prize distribution logic
- Leaderboard updates (every 5 seconds)

**Database Schema Extensions:**
```sql
-- Competitions table
CREATE TABLE fantasy_competitions (
  id UUID PRIMARY KEY,
  category VARCHAR(50), -- L1_CHAINS, MEMES, DEFI
  duration INTEGER, -- 60, 240, 1440 minutes
  start_time TIMESTAMP,
  end_time TIMESTAMP,
  entry_fee DECIMAL(10,2),
  total_prize_pool DECIMAL(10,2),
  guaranteed_minimum DECIMAL(10,2),
  status VARCHAR(20), -- REGISTRATION, LIVE, SETTLED
  player_count INTEGER
);

-- Player rosters table
CREATE TABLE fantasy_rosters (
  id UUID PRIMARY KEY,
  competition_id UUID REFERENCES fantasy_competitions(id),
  user_id UUID REFERENCES users(id),
  roster_data JSONB, -- Array of 9 coin selections with predictions
  locked_at TIMESTAMP,
  prediction_score INTEGER,
  final_pnl DECIMAL(10,2),
  trading_rank INTEGER,
  prediction_rank INTEGER,
  captain_in_top3 BOOLEAN,
  total_winnings DECIMAL(10,2)
);

-- Roster JSON structure:
{
  "coins": [
    {
      "position": 0, // Captain
      "coin_id": "SOL",
      "coin_name": "Solana",
      "prediction": "UP",
      "baseline_price": 95.23,
      "final_price": 112.45,
      "percent_change": 18.08,
      "actual_rank": 2
    },
    // ... 8 more coins
  ]
}
```

### 4.2 Performance Requirements

**Real-Time Updates:**
- Price updates: Every 1 second (reuse Trade Grid WebSocket)
- Leaderboard updates: Every 5 seconds
- PnL recalculation: Every 5 seconds for all players
- Latency target: <100ms for UI updates

**Scalability Targets:**
- Concurrent competitions: 50+
- Players per competition: 1,000 max
- Total concurrent players: 50,000+
- Database queries: <50ms average response time

**Data Integrity:**
- All roster selections stored at lock-in time
- Price snapshots at competition start/end
- Complete trade history for settlement verification
- Audit logs for all prize distributions

### 4.3 Integration Points

**Reuse from Existing Systems:**

From **Market Grid:**
- ✅ 3x3 grid UI component
- ✅ Coin selection modal
- ✅ UP/DOWN prediction buttons
- ✅ Pattern detection visuals (adapted for roster view)
- ✅ Performance chart (24hr price history)

From **Trade Grid:**
- ✅ Live trading engine (LONG/SHORT positions)
- ✅ Leverage selection (3x-20x)
- ✅ Position management (open/close)
- ✅ Real-time PnL calculation
- ✅ WebSocket price integration (Hyperliquid)
- ✅ Settlement logic
- ✅ Leaderboard system

**New Components Required:**
1. **Roster Builder**
   - Drag-and-drop interface
   - Coin sorting/filtering
   - Prediction selector per coin
   - Lock-in confirmation

2. **Prediction Scoring Algorithm**
   - Direction accuracy calculation
   - Ranking accuracy with partial credit
   - Captain bonus logic
   - Top 3 detection for jackpot

3. **Three-Prize Distribution System**
   - Separate calculations for Trading, Prediction, Jackpot
   - Split logic for multiple jackpot winners
   - Results breakdown UI

4. **Competition Scheduling System**
   - Automated competition creation
   - Registration period management
   - Countdown timers
   - Guaranteed prize pool seeding

---

## 5. USER EXPERIENCE FLOWS

### 5.1 New User Onboarding

**First-Time User Journey:**

**Step 1: Account Creation**
- Email/wallet connection
- Profile setup (username, avatar)
- Tutorial prompt: "Learn how to play?"

**Step 2: Interactive Tutorial** (Optional)
```
Tutorial Competition (Fake Money):
1. "Pick 9 coins you think will move the most"
   → Guide: Drag SOL, BTC, HYPE into grid
   
2. "Rank them by expected performance"
   → Guide: SOL in position 0 (captain)
   
3. "Predict direction: UP or DOWN"
   → Guide: SOL UP, HYPE DOWN, BTC UP
   
4. "Competition starts! Watch prices update"
   → Show 2-minute accelerated competition
   
5. "You can trade your roster coins live"
   → Guide: Open LONG SOL position
   
6. "Competition ends! See results"
   → Show three-prize breakdown
   → Highlight: "You won $45 trading prize!"
```

**Step 3: First Real Competition**
- Recommended: $10 entry, 1-hour duration
- Reduced rake (0% for first game)
- Bonus: +$5 platform credit on completion

### 5.2 Experienced User Flow

**Pre-Game Prep:**
1. Check competition schedule
2. Review category options (L1 Chains vs Memes vs DeFi)
3. Research coins (24hr performance, news, sentiment)
4. Load previous successful rosters (presets)
5. Enter competition 15 minutes early

**During Competition:**
1. Monitor live price movements
2. Adjust trading strategy based on PnL
3. Check leaderboard position
4. React to market volatility
5. Decide: Hold for prediction score vs Trade for PnL

**Post-Competition:**
1. Review results breakdown
2. Analyze: Where did roster accuracy fail?
3. Review: Which trades were profitable?
4. Learn: Top performers' strategies (optional feature)
5. Plan next competition roster

### 5.3 Mobile Experience

**Optimizations:**
- Portrait-mode grid view
- Swipe gestures for coin selection
- Quick-toggle UP/DOWN predictions
- Simplified trading panel
- Push notifications:
  - "Competition starting in 5 minutes"
  - "You're in 1st place!"
  - "Your captain is in top 3!"

**Mobile-First Features:**
- One-tap roster presets
- Quick-trade buttons (LONG/SHORT with default leverage)
- Condensed leaderboard view

---

## 6. MVP SCOPE & ROADMAP

### 6.1 MVP Features (Launch in 6-8 Weeks)

**Phase 1: Core Roster Building (Week 1-2)**
- ✅ Coin pool selection (50 coins from L1 Chains category only)
- ✅ 3x3 grid drag-and-drop interface
- ✅ UP/DOWN prediction per coin
- ✅ Roster lock-in system
- ✅ Competition registration

**Phase 2: Live Trading Integration (Week 3-4)**
- ✅ LONG/SHORT position opening (only on rostered coins)
- ✅ Leverage selection (3x-20x, captain bonus)
- ✅ Position management (add/close)
- ✅ Real-time PnL tracking
- ✅ Live leaderboard updates

**Phase 3: Scoring & Settlement (Week 5-6)**
- ✅ Prediction score calculation (direction + ranking)
- ✅ Trading PnL ranking
- ✅ Captain jackpot detection (top 3 check)
- ✅ Three-prize distribution
- ✅ Results breakdown screen

**Phase 4: Polish & Testing (Week 7-8)**
- ✅ UI/UX refinements
- ✅ Mobile responsiveness
- ✅ Edge case testing
- ✅ Beta launch with 50 users

**MVP Exclusions (Post-Launch):**
- ❌ Salary cap system
- ❌ Category requirements (2 L1s, 2 DeFi, etc.)
- ❌ XP progression system
- ❌ Grid pattern bonuses (rows/columns)
- ❌ Multiple category competitions (only L1 Chains)
- ❌ Social features (chat, friends, groups)
- ❌ Advanced analytics (win rate, prediction history)

### 6.2 Post-MVP Roadmap

**Phase 2 Features (Month 2-3):**
1. ✅ Add Meme Coins category
2. ✅ Add DeFi category
3. ✅ Implement salary cap system
4. ✅ Category requirements (must pick 2 from each, etc.)
5. ✅ Roster presets (save favorite lineups)

**Phase 3 Features (Month 4-6):**
1. ✅ XP progression system
2. ✅ Skill-based matchmaking (beginner/intermediate/pro pools)
3. ✅ Weekly tournaments with qualifications
4. ✅ Social features (friend invites, group competitions)
5. ✅ Advanced analytics dashboard

**Phase 4 Features (Month 7-12):**
1. ✅ Mobile app (iOS + Android)
2. ✅ Live streaming integration (watch top players)
3. ✅ Referral program
4. ✅ Sponsored competitions
5. ✅ API for third-party analysis tools

---

## 7. RISK MITIGATION & EDGE CASES

### 7.1 Gameplay Risks

**Risk #1: Roster Fatigue**
- **Problem:** Picking 9 coins every hour is exhausting
- **Mitigation:**
  - Roster presets (save up to 5 templates)
  - "Quick Entry" button (uses last roster)
  - Auto-suggest rosters based on trending coins

**Risk #2: Whale Domination**
- **Problem:** Skilled traders dominate, noobs lose and quit
- **Mitigation:**
  - Skill-based matchmaking pools (beginner/intermediate/pro)
  - Separate prize tiers by entry fee
  - Bonus credits for new players (first 3 games)
  - Weekly handicap system (XP-based)

**Risk #3: Low Prize Pools**
- **Problem:** Need 100+ players to make prizes meaningful
- **Mitigation:**
  - Guaranteed minimum prize pools (platform seeds)
  - Dynamic entry fee scaling (more players = higher tier)
  - Cross-promotion with existing Gridlock users

**Risk #4: Prediction Difficulty**
- **Problem:** Crypto is random, hard to rank accurately
- **Mitigation:**
  - Prediction Prize is only 20% of pool (not primary goal)
  - Partial credit for close rankings (within 2 positions)
  - Focus marketing on Trading Prize as main attraction

### 7.2 Technical Edge Cases

**Edge Case #1: Tie in Prediction Score**
```
Scenario: Two players have exact same prediction score (2,400 points)
Resolution: Split Prediction Prize evenly ($950 → $475 each)
```

**Edge Case #2: No Trading Activity**
```
Scenario: Player locks roster but never opens any trades
Resolution: 
- Trading PnL: $0 (ranks based on 0)
- Prediction Score: Still calculated normally
- Can still win Prediction Prize or Captain Jackpot
```

**Edge Case #3: All Negative PnL**
```
Scenario: Bear market, all 127 players have negative PnL
Resolution:
- Rank by "least negative" (closest to $0)
- 1st place: -$50 (wins trading prize)
- 2nd place: -$120
- 3rd place: -$200
```

**Edge Case #4: Captain Not in Top 3**
```
Scenario: No player's captain finishes in top 3 performers
Resolution: 
- Captain Jackpot (10% pool) rolls over to next competition
- Announced: "No jackpot winner this round! Rolls to next game"
```

**Edge Case #5: Insufficient Players**
```
Scenario: Only 8 players register for competition
Resolution:
- Cancel competition if <10 players
- Refund all entry fees
- Notify: "Competition cancelled due to insufficient players"
```

### 7.3 Fairness & Anti-Cheating

**Measures:**
1. **Roster Lock-In Immutable**
   - All selections stored in database at lock-in time
   - No modifications allowed after lock-in
   - Transparent audit logs

2. **Price Data Integrity**
   - ✅ **Single authoritative source: Hyperliquid DEX**
   - ✅ All settlement prices from Hyperliquid candles (1hr, 4hr, 24hr)
   - ✅ Price snapshots stored on-chain (Hyperliquid blockchain)
   - ✅ No price manipulation possible (DEX orderbook is source of truth)

3. **External Trading Detection (PRIMARY ANTI-CHEAT)**
   - ✅ **ONLY trades with platform builder code count** (server-enforced)
   - ✅ All trades tracked on-chain via Hyperliquid API
   - ✅ External trades (without builder code) = instant disqualification
   - ✅ Players cannot trade rostered coins outside platform during competition
   - ✅ Detection method: Builder code verification on all fills (see `_PM/PLANS/HYPERLIQUID_SDK.md`)

4. **Sybil Attack Resistance**
   - ❌ No artificial limits on same IP/device entries
   - ✅ Each entry requires separate $10-$100 payment
   - ✅ Market randomness makes multi-account abuse unprofitable
   - ✅ Future: KYC requirements if regulatory concerns arise

5. **Rate Limiting**
   - Max 20 trades per minute (prevents spam)
   - Max 100 total trades per competition (prevents API abuse)
   - Cooldown between position opens (1 second)

---

## 8. SUCCESS METRICS

### 8.1 Key Performance Indicators (KPIs)

**User Acquisition:**
- Daily Active Users (DAU): Target 1,000 by Month 3
- Weekly Active Users (WAU): Target 5,000 by Month 3
- Monthly Active Users (MAU): Target 15,000 by Month 3
- New User Retention: D1=60%, D7=40%, D30=25%

**Engagement:**
- Competitions entered per user per day: Target 3-5
- Roster completion rate: Target 85% (85% of registered players lock rosters)
- Live trading participation: Target 70% (70% of players open at least 1 trade)
- Repeat play rate: Target 60% (60% enter 2nd competition after first)

**Monetization:**
- Total prize pool volume: Target $100K/day by Month 3
- Platform rake revenue: Target $5K/day by Month 3
- Builder fees revenue: Target $2K/day by Month 3
- Average revenue per user (ARPU): Target $50/month

**Game Balance:**
- Average prediction score: 1,200-1,400 points (out of 2,600 max)
- Captain jackpot win rate: 5-10% of competitions have winners
- Trading prize concentration: Top 10% players shouldn't win >50% of prizes
- Prediction prize diversity: Should see different winners than trading winners

### 8.2 Analytics Events to Track

**Pre-Game:**
- `competition_viewed` (category, duration, entry_fee)
- `roster_started` (category, time_to_first_coin)
- `coin_selected` (coin_id, position, category)
- `prediction_set` (coin_id, prediction_up_down)
- `roster_locked` (time_spent_building, num_changes)

**Live Competition:**
- `position_opened` (coin_id, direction, leverage, margin)
- `position_closed` (coin_id, pnl, hold_duration)
- `leaderboard_checked` (frequency, rank_at_check)
- `trading_inactive` (minutes_without_trade)

**Post-Competition:**
- `results_viewed` (trading_rank, prediction_rank, winnings)
- `next_competition_entered` (time_to_next_entry)
- `roster_preset_saved` (frequency)

---

## 9. GO-TO-MARKET STRATEGY

### 9.1 Launch Plan

**Soft Launch (Week 1-2):**
- Invite-only beta (50 users from existing Gridlock players)
- $10 entry fee only, reduced rake (0%)
- 1-hour competitions only (L1 Chains category)
- Feedback collection and rapid iteration

**Public Beta (Week 3-4):**
- Open to 500 users
- All entry fee tiers ($10, $25, $50)
- Add 4-hour competitions
- Guaranteed prize pools ($500 minimum)

**Full Launch (Week 5+):**
- Public access, no limits
- All competition types
- Marketing campaign launch
- Referral program activation

### 9.2 User Acquisition Channels

**Primary:**
1. **Existing Gridlock User Base**
   - In-app promotions
   - Email campaigns
   - Push notifications
   - First game free (bonus credits)

2. **Crypto Twitter/X**
   - Influencer partnerships
   - Competition highlights (big wins)
   - Educational content (how to play)
   - Viral moments (crazy captain jackpots)

3. **Discord Communities**
   - Trading servers (partnerships)
   - Fantasy sports servers (crossover)
   - Crypto research communities

**Secondary:**
4. **YouTube/Twitch**
   - Sponsored gameplay videos
   - Tournament live streams
   - Educational series

5. **Reddit**
   - r/cryptocurrency
   - r/CryptoMarkets
   - r/FantasyFootball (crossover marketing)

### 9.3 Messaging & Positioning

**Core Value Proposition:**
> "DraftKings for Crypto: Build your roster of 9 coins, predict market movements, and trade live to compete for three separate prize pools. Win by prediction accuracy OR trading skill—or both."

**Key Messages:**
- ✅ "Combine fantasy sports strategy with live crypto trading"
- ✅ "Multiple ways to win—you choose your playstyle"
- ✅ "Hourly competitions, instant results"
- ✅ "Skill-based, not pure luck"

**Target Personas:**

**Persona 1: "The Analyst"**
- Age: 25-40
- Background: DraftKings/FanDuel player, crypto-curious
- Motivation: Loves roster building, statistical analysis
- Strategy: Focuses on prediction accuracy
- Message: "Your market analysis skills = real profits"

**Persona 2: "The Trader"**
- Age: 20-35
- Background: Active crypto trader, competitive
- Motivation: Prove trading skills vs peers
- Strategy: Focuses on live trading PnL
- Message: "Compete against the best traders, not just the market"

**Persona 3: "The Balanced Player"**
- Age: 25-45
- Background: Both fantasy sports AND crypto trading
- Motivation: Holistic competition, skill diversity
- Strategy: Tries to win both prizes
- Message: "Master prediction AND execution for maximum rewards"

---

## 10. OPEN QUESTIONS & DECISIONS NEEDED

### 10.1 Design Decisions

**Question #1: Should we allow same coin in multiple roster positions?**
- **Option A:** No duplicates (forces diversity)
- **Option B:** Allow duplicates (enables conviction plays)
- **Recommendation:** Option A for MVP (simpler to explain, forces strategy)

**Question #2: Should prediction score be visible during competition?**
- **Option A:** Hidden until settlement (prevents gaming)
- **Option B:** Live updates (adds engagement)
- **Recommendation:** Option A (maintains fairness, reduces distraction)

**Question #3: How to handle ties in captain jackpot?**
- **Current:** Split evenly among all winners
- **Alternative:** First-come-first-served (roster lock-in time)
- **Recommendation:** Keep split evenly (most fair)

### 10.2 Business Decisions

**Question #4: Rake percentage?**
- **Current:** 5% flat
- **Alternative:** Tiered (10% for small pools, 2% for large pools)
- **Recommendation:** 5% flat for MVP (simplicity)

**Question #5: Minimum players to start competition?**
- **Current:** 10 minimum
- **Alternative:** 20 minimum (better prize pools)
- **Recommendation:** 10 minimum (easier to fill)
- **Note:** No guaranteed prize pools - 100% based on participation

**Question #6: Trading Capital Risk Management?**
- **Current:** $1,000 USDC per player
- **Risk:** Platform exposure = $1,000 × player_count
- **Mitigation:** Leverage limits, position size caps, anti-kamikaze rules
- **Question:** Should capital scale with entry fee tier? ($500 for $10 entry, $2,000 for $100 entry?)
- **Recommendation:** Keep standardized at $1,000 for MVP (simplicity)

### 10.3 Technical Decisions

**Question #7: Real-time vs batched leaderboard updates?**
- **Current:** Every 5 seconds for all players
- **Alternative:** Real-time for top 10, batched for others
- **Recommendation:** Batched for all (reduces server load)

**Question #8: Store all price ticks or just snapshots?**
- **Current:** Store every 1-second price update
- **Alternative:** Only store snapshots at open/close/settlement
- **Recommendation:** Alternative (reduces database size)

---

## 11. APPENDICES

### Appendix A: Prediction Score Calculation Example

```typescript
// Full worked example
const player = {
  roster: [
    { position: 0, coin_id: 'SOL', prediction: 'UP' },   // Captain
    { position: 1, coin_id: 'HYPE', prediction: 'DOWN' },
    { position: 2, coin_id: 'BTC', prediction: 'UP' },
    { position: 3, coin_id: 'ETH', prediction: 'UP' },
    { position: 4, coin_id: 'AVAX', prediction: 'DOWN' },
    { position: 5, coin_id: 'BNB', prediction: 'UP' },
    { position: 6, coin_id: 'MATIC', prediction: 'UP' },
    { position: 7, coin_id: 'DOT', prediction: 'DOWN' },
    { position: 8, coin_id: 'ADA', prediction: 'UP' }
  ]
};

const marketData = {
  'SOL': { percentChange: 18.2, absChange: 18.2, rank: 2 },   // Actual #2
  'HYPE': { percentChange: -22.4, absChange: 22.4, rank: 1 }, // Actual #1 (biggest move)
  'BTC': { percentChange: 12.1, absChange: 12.1, rank: 3 },   // Actual #3
  'ETH': { percentChange: 8.5, absChange: 8.5, rank: 5 },     // Actual #5
  'AVAX': { percentChange: -15.3, absChange: 15.3, rank: 4 }, // Actual #4
  'BNB': { percentChange: 6.2, absChange: 6.2, rank: 6 },     // Actual #6
  'MATIC': { percentChange: 4.8, absChange: 4.8, rank: 7 },   // Actual #7
  'DOT': { percentChange: -3.2, absChange: 3.2, rank: 9 },    // Actual #9
  'ADA': { percentChange: 3.5, absChange: 3.5, rank: 8 }      // Actual #8
};

// STEP 1: Direction Accuracy (900 points max)
let directionScore = 0;
player.roster.forEach(coin => {
  const actual = marketData[coin.coin_id];
  const predictedUp = coin.prediction === 'UP';
  const actualUp = actual.percentChange > 0;
  if (predictedUp === actualUp) directionScore += 100;
});
// Results:
// SOL: UP predicted, +18.2% actual → ✅ +100
// HYPE: DOWN predicted, -22.4% actual → ✅ +100
// BTC: UP predicted, +12.1% actual → ✅ +100
// ETH: UP predicted, +8.5% actual → ✅ +100
// AVAX: DOWN predicted, -15.3% actual → ✅ +100
// BNB: UP predicted, +6.2% actual → ✅ +100
// MATIC: UP predicted, +4.8% actual → ✅ +100
// DOT: DOWN predicted, -3.2% actual → ✅ +100
// ADA: UP predicted, +3.5% actual → ✅ +100
// Total: 900 points (perfect direction accuracy!)

// STEP 2: Ranking Accuracy (1400 points max)
const rankingWeights = [500, 300, 200, 150, 100, 75, 50, 25, 10];
let rankingScore = 0;

player.roster.forEach((coin, predictedRank) => {
  const actual = marketData[coin.coin_id];
  const actualRank = actual.rank - 1; // Convert to 0-indexed
  const rankDiff = Math.abs(predictedRank - actualRank);
  
  if (predictedRank === actualRank) {
    rankingScore += rankingWeights[predictedRank];
  } else if (rankDiff <= 2) {
    rankingScore += rankingWeights[predictedRank] * 0.5;
  }
});

// Results:
// Position 0 (Captain): SOL predicted, SOL actual #2 (rank 1) → OFF BY 1 → +250 (50% of 500)
// Position 1: HYPE predicted, HYPE actual #1 (rank 0) → OFF BY 1 → +150 (50% of 300)
// Position 2: BTC predicted, BTC actual #3 (rank 2) → PERFECT → +200 (100%)
// Position 3: ETH predicted, ETH actual #5 (rank 4) → OFF BY 1 → +75 (50% of 150)
// Position 4: AVAX predicted, AVAX actual #4 (rank 3) → OFF BY 1 → +50 (50% of 100)
// Position 5: BNB predicted, BNB actual #6 (rank 5) → PERFECT → +75 (100%)
// Position 6: MATIC predicted, MATIC actual #7 (rank 6) → PERFECT → +50 (100%)
// Position 7: DOT predicted, DOT actual #9 (rank 8) → OFF BY 1 → +12.5 (50% of 25)
// Position 8: ADA predicted, ADA actual #8 (rank 7) → OFF BY 1 → +5 (50% of 10)
// Total: 867.5 points (strong ranking accuracy!)

// STEP 3: Captain Bonus (300 points max)
let captainBonus = 0;
const captain = player.roster[0];
const captainData = marketData[captain.coin_id];
const captainPredictedUp = captain.prediction === 'UP';
const captainActualUp = captainData.percentChange > 0;

if (captainPredictedUp === captainActualUp) {
  captainBonus = 300;
}
// SOL captain: UP predicted, +18.2% actual → ✅ +300

// TOTAL PREDICTION SCORE
const totalScore = directionScore + rankingScore + captainBonus;
// 900 + 867.5 + 300 = 2,067.5 points (out of 2,600 max)
// Rank: Likely top 10% (strong prediction performance)
```

### Appendix B: Glossary of Terms

**Captain:** The coin placed in position 0 (top-left of grid). Has special bonuses:
- Can use 20x leverage (vs 10x for others)
- Worth +300 points if direction predicted correctly
- Eligible for jackpot if finishes in top 3 absolute % movers

**Absolute % Change:** The percentage price movement regardless of direction. Used for ranking coins.
- Example: +18% and -18% both have 18% absolute change
- The coin with highest absolute change is #1 performer

**Roster:** The 9 selected coins that make up a player's grid for a competition

**Prediction Score:** Points earned from roster accuracy (direction + ranking + captain bonus)
- Maximum: 2,600 points
- Determines Prediction Prize winner

**Trading PnL:** Profit/Loss from live trading during competition
- Realized PnL: Closed positions
- Unrealized PnL: Open positions at settlement
- Determines Trading Prize winner

**Captain Jackpot:** Bonus prize awarded when captain finishes in top 3 absolute % movers
- 10% of total prize pool
- Can have multiple winners (split evenly)

**Lock-In:** The moment when roster selections become final (15 minutes before competition start)

**Settlement:** Competition end process that calculates final scores and distributes prizes

---

## 12. CONCLUSION & NEXT STEPS

### 12.1 Summary of Key Decisions

**✅ APPROVED DESIGN:**
1. **Three-Prize System**
   - Trading Prize (70%): PnL-based leaderboard
   - Prediction Prize (20%): Roster accuracy score
   - Captain Jackpot (10%): Captain in top 3 performers

2. **Simplified MVP Scope**
   - No salary cap initially
   - No category requirements initially
   - No XP bonuses or grid patterns
   - Focus: Core roster + trading mechanics

3. **Absolute % Change Ranking**
   - Rank coins by absolute movement (positive OR negative)
   - Solves bear market problem
   - Rewards volatility analysis

4. **Captain Mechanics**
   - Position 0 = Captain = special privileges
   - 20x leverage (vs 10x for others)
   - +300 prediction bonus
   - Jackpot eligibility (top 3 finish)

### 12.2 Implementation Priority

**Phase 1 (Weeks 1-2): Roster Building**
- Coin pool UI (50 coins, L1 Chains only)
- Drag-and-drop grid interface
- UP/DOWN prediction buttons
- Lock-in system

**Phase 2 (Weeks 3-4): Live Trading**
- Integrate Trade Grid components
- LONG/SHORT on rostered coins only
- Leverage selection (3x-20x)
- Real-time PnL tracking

**Phase 3 (Weeks 5-6): Scoring & Settlement**
- Prediction score algorithm
- Three-prize distribution
- Results breakdown UI
- Jackpot detection

**Phase 4 (Weeks 7-8): Launch Prep**
- Beta testing with 50 users
- UI polish
- Mobile optimization
- Go-live readiness

### 12.3 Open Items for Review

**Decision Required:**
1. ✅ Approve three-prize distribution model
2. ✅ Confirm 5% platform rake
3. ✅ Set guaranteed prize pool limits
4. ✅ Define minimum players per competition (recommendation: 10)

**Next Actions:**
1. ✅ Create GitHub project board with Phase 1-4 tasks
2. ✅ Design high-fidelity mockups for roster builder
3. ✅ Set up database schema for fantasy competitions
4. ✅ Begin Phase 1 implementation

---

**DOCUMENT STATUS:** ✅ CLARIFIED - All ambiguities resolved (November 12, 2025)
**ESTIMATED LAUNCH DATE:** January 2026 (8-week sprint)
**CONFIDENCE LEVEL:** 🟢 HIGH - Clear scope, validated design, reuses proven components

---

## 13. CLARIFICATION LOG (November 12, 2025)

### Critical Ambiguities Resolved

**1. Real Money Trading vs Paper Trading** ✅ CLARIFIED
- **RESOLUTION**: This is **REAL MONEY TRADING** via Hyperliquid SDK integration
- **Capital**: $1,000 USDC per player (standardized, separate from entry fees)
- **Integration**: See `_PM/PLANS/HYPERLIQUID_SDK.md` for technical implementation

**2. Trading Capital & Position Sizing** ✅ CLARIFIED
- **Starting Balance**: $1,000 USDC per player (standardized)
- **Entry Fees**: $10-$100 (paid to prize pool, NOT used for trading)
- **Capital Source**: Platform-provided via Hyperliquid agent wallets
- **PnL Ownership**: Players keep profits/losses from trading (separate from prize pool)

**3. Prize Structure vs Trading PnL** ✅ CLARIFIED
- **Entry Fees**: 90% to trading prize pool, 5% to platform, 5% to jackpot pool
- **Trading Prizes**: Top 3 PnL winners split 90% pool (63%, 18%, 9% of total wagers)
- **Jackpot Pool**: 5% of wagers, split 50/50 between perfect grid and pattern winner
- **Critical Distinction**: Prize pool winnings are SEPARATE from trading PnL profits

**4. Settlement Price Integrity** ✅ CLARIFIED
- **Authoritative Source**: Hyperliquid DEX candles (1hr, 4hr, or 24hr)
- **Baseline Prices**: Captured at competition start from Hyperliquid API
- **Final Prices**: Hyperliquid candle close price (e.g., 08:00-12:00 4hr candle for 4hr game)
- **Ranking Calculation**: Absolute % change from baseline to final (|final - baseline| / baseline × 100)

**5. Captain Jackpot Scope** ✅ CLARIFIED (REPLACED WITH NEW SYSTEM)
- **OLD CONCEPT**: Top 3 from selected coins only (removed)
- **NEW SYSTEM**: Dual jackpot mechanics
  - **Perfect Grid (50% of jackpot pool)**: Exact market ranking match (can roll over)
  - **Pattern Winner (50% of jackpot pool)**: Highest XP score (always awarded)

**6. Competition Coin Pool Curation** ✅ CLARIFIED
- **Source**: ONLY coins listed on Hyperliquid DEX
- **Requirements**: $10M+ volume, $100M+ market cap, sufficient leverage liquidity
- **Coin Index**: Platform maintains curated index, refreshed daily
- **No Manual Curation**: Automated based on Hyperliquid listings + volume/cap filters

**7. Leaderboard Real-Time Ranking** ✅ CLARIFIED
- **Dual Leaderboard**: XP score (pattern-based) + PnL (trading-based)
- **Prediction Score Visibility**: Hidden until settlement (prevents gaming)
- **Live Rankings**: Based on unrealized PnL (updates every 5 seconds)
- **Computational Load**: Batched approach (every 5 seconds) confirmed sufficient

**8. Anti-Cheating Enforcement** ✅ CLARIFIED
- **Primary Mechanism**: Builder code verification (ONLY platform trades count)
- **External Trades**: Instant disqualification if trades without builder code
- **Friend Limits**: REMOVED (no artificial restrictions)
- **Sybil Attacks**: Not prevented (each entry requires payment, market randomness prevents abuse)
- **Future Feature**: Private hosted matches with player-selected participants

**9. Regulatory & Compliance** ✅ CLARIFIED
- **USA**: 100% BLOCKED until legal clarity established
- **Geo-Blocking**: Follow Hyperliquid's policies
- **KYC/AML**: Delegated to Hyperliquid DEX
- **Future**: Scale internationally before addressing USA compliance

**10. Guaranteed Prize Pool Risk Management** ✅ CLARIFIED (REMOVED)
- **RESOLUTION**: NO guaranteed prize pools
- **Prize Pools**: 100% based on participation
- **Platform Risk**: Limited to trading capital provision ($1,000 × player_count)
- **Future**: May add guaranteed pools for regulatory/marketing reasons

---

*End of Product Specifications - Trader Grid Fantasy v1.0 (Clarified)*