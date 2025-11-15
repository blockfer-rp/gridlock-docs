# BATTLE GRID V2 - PRODUCT SPECIFICATIONS

**Version:** 2.0  
**Date:** November 14, 2025  
**Status:** Ready for Development  
**Product Type:** Dual-Track Fantasy Sports + Live Crypto Trading Platform

---

## EXECUTIVE SUMMARY

**Battle Grid** is a competitive fantasy sports platform for cryptocurrency markets that offers two distinct participation tiers: **Passive** (prediction-only) and **Active** (prediction + live trading). Players select and rank 9 cryptocurrencies before each competition, predict directional movements, and compete for prizes based on prediction accuracy (pattern scoring) and/or trading profitability (PnL-based prizes).

### Core Innovation

**Dual-Track Competition Model:**
- **Passive Tier ($25)**: Roster building + predictions only, no trading required
- **Active Tier ($100)**: Roster building + predictions + live trading with user's own capital ($1,000 USDC deposited to agent wallet)
- **Unified Competition**: Both tiers compete simultaneously with separate prize pools and shared jackpots
- **Active Advantage**: $100 entry grants access to BOTH leaderboards (pattern + trading) plus full jackpot eligibility

### Product Classification

- ✅ **Skill-Based Competition** (similar to DraftKings Pick6, fantasy sports tournaments)
- ✅ **Entry Fee Model**: Payment for competition eligibility, not wagering on random outcomes
- ✅ **Skill-Determined Winners**: Pattern scoring (prediction accuracy) and trading execution (PnL)
- ⚠️ **Geo-Restrictions**: Follow Hyperliquid DEX policies
- ✅ **KYC/AML**: Delegated to Hyperliquid infrastructure

## Total Addressable Market (TAM)

### 1. DEX Perpetuals Traders
- **Hyperliquid**: 200K-500K active traders (60%+ market share of on-chain perpetuals)
- **Total DEX Perpetuals Market**: 0.5-1M active traders (Hyperliquid + dYdX + GMX + others)

### 2. Centralized Exchange Perpetual Traders
- **Binance**: 162-182M futures traders (65% of 250-280M users)
- **Bybit**: 39-49M derivatives traders (65% of 60-75M users)
- **OKX, Bitget, Coinbase, Others**: 50-100M combined
- **Total CEX Perpetuals**: 260-330M active perpetual futures traders globally

### 3. Competition Participation Benchmark
- **520,000 traders participated in Bybit WSOT 2025**, the largest crypto trading competition ever recorded
- **Annual competition participants**: 10-30M tournament participants across all platforms (3-10% of CEX perps traders who compete at least once annually)


### Revenue Model

**Passive Revenue:**
- Entry fees: $25 per competition
- Distribution: 80% pattern prize pool, 10% jackpot pool, 10% platform fee
- No builder code fees (no trading activity)

**Active Revenue:**
- Entry fees: $100 per competition
- Distribution: 80% trading prize pool, 10% jackpot pool, 10% platform fee
- Builder code fees: Up to 10 bps (0.1%) on perpetual trading volume
- Collected via Hyperliquid on-chain fee system
- **Value Proposition**: Single $100 entry competes in BOTH pattern and trading leaderboards simultaneously

**Target Revenue:** $313K monthly by Month 3 ($3.76M annually)

### Critical Technical Architecture

**Hyperliquid Integration:**
- ✅ Real money trading via Hyperliquid SDK
- ✅ Agent wallet system for active traders (automated creation per competition)
- ✅ Builder code enforcement (only platform-tagged trades count)
- ✅ Hyperliquid candle-based settlement (authoritative price source)

**Capital Structure:**
- Passive Tier: $0 trading capital (predictions only)
- Active Tier: $1,000 USDC per player (user-provided, deposited to agent wallet)
- Players keep ALL trading PnL profits (separate from prize pools)

**Platform Risk Profile:**
- Passive Tier: Zero capital risk (entry fees only)
- Active Tier: ZERO trading capital risk (users provide their own capital)
- Platform only manages entry fee prize pool obligations
- Users bear 100% of trading losses and keep 100% of trading profits

---

## 1. PRODUCT OVERVIEW

### 1.1 Competition Tiers

Battle Grid offers two participation modes in a single unified competition:

```
┌────────────────────────────────────────────────────┐
│  BATTLE GRID COMPETITION STRUCTURE                 │
├────────────────────────────────────────────────────┤
│                                                    │
│  ┌──────────────────┐  ┌──────────────────┐       │
│  │ 🎯 PASSIVE TIER │  │ 🔥 ACTIVE TIER  │       │
│  │                  │  │                  │       │
│  │ $25 Entry       │  │ $100 Entry      │       │
│  │ Predictions Only │  │ Trade + Predict │       │
│  │                  │  │                  │       │
│  │ 100 Slots       │  │ 30 Slots        │       │
│  │ Pattern Prizes  │  │ BOTH Prizes     │       │
│  │ Watch Traders   │  │ $1,000 User Cap │       │
│  └──────────────────┘  └──────────────────┘       │
│                                                    │
│  COMPETE SIMULTANEOUSLY IN ONE COMPETITION         │
│  • Passive: Pattern Leaderboard (vs 100 players)   │
│  • Active: Pattern + Trading Leaderboards          │
│  • Shared Jackpots (all players eligible)          │
└────────────────────────────────────────────────────┘
```

### 1.2 Passive Tier ($25 Entry)

**What Players Do:**
1. Select 9 cryptocurrencies from available pool
2. Rank them by predicted performance (position 0-8)
3. Predict direction (UP ↑ or DOWN ↓) for each coin
4. Lock roster before competition starts
5. Watch live price movements and active traders
6. Win pattern prizes based on prediction accuracy

**What Players Get:**
- ✅ Compete for Pattern Prize Pool (top 3: $980/$280/$140 example)
- ✅ Eligible for both jackpots (Perfect Grid + Pattern Bonus)
- ✅ Watch active traders live (spectator feed)
- ✅ Learn profitable trading strategies
- ✅ Upgrade path to active tier

**What Players Don't Need:**
- ❌ NO trading required
- ❌ NO builder code approval
- ❌ NO agent wallet creation
- ❌ NO trading capital provisioning
- ❌ NO 4-hour time commitment for trading

**Entry Requirements:**
- Hyperliquid wallet with 25+ USDC
- Profile setup (username, avatar)
- Time to entry: 2-5 minutes

### 1.3 Active Tier ($100 Entry)

**What Players Do:**
1. One-time builder code approval (first entry only)
2. Select 9 cryptocurrencies and predict movements
3. Lock roster before competition starts
4. **Deposit $1,000 USDC** to agent wallet (user's own capital)
5. **Trade live** with deposited capital
6. Open LONG/SHORT positions with leverage (3x-20x)
7. Compete on BOTH leaderboards simultaneously
8. Keep all trading PnL profits

**What Players Get (Single $100 Entry):**
- ✅ Compete for Trading Prize Pool (top 3: $1,680/$480/$240 example)
- ✅ Compete for Pattern Prize Pool (top 3: $980/$280/$140 example)
- ✅ **FULL eligibility for both jackpots** (Perfect Grid + Pattern Bonus)
- ✅ Keep ALL trading profits (separate from prizes)
- ✅ Social status (followers, verified trader badges)
- ✅ **2x win opportunities from single entry** (dual leaderboards)
- ✅ **Value: Access to BOTH games for one entry fee**

**Entry Requirements:**
- Hyperliquid wallet with **$1,100+ USDC** ($100 entry fee + $1,000 trading capital)
- Builder code approval (one-time setup, ~2 minutes)
- Agent wallet creation (automatic, platform-managed)
- **User transfers $1,000 USDC** to agent wallet (requires approval transaction)
- Time to entry: 5-10 minutes (first time), 3-5 minutes (subsequent)

### 1.4 Tier Comparison

```
┌────────────────────────────────────────────────────────────┐
│ FEATURE               │ PASSIVE        │ ACTIVE            │
├───────────────────────┼────────────────┼───────────────────┤
│ Entry Fee             │ $25            │ $100              │
│ Trading Capital       │ $0             │ $1,000 USDC       │
│ Live Trading Required │ ❌ No          │ ✅ Yes            │
│ Pattern Prizes        │ ✅ Eligible    │ ✅ Eligible       │
│ Trading Prizes        │ ❌ Not Eligible│ ✅ Eligible       │
│ Jackpots (both)       │ ✅ Eligible    │ ✅ FULL Eligible  │
│ Builder Code Approval │ ❌ Not Needed  │ ✅ Required       │
│ Agent Wallet          │ ❌ Not Needed  │ ✅ Auto-Created   │
│ Games Playable        │ 1 (Pattern)    │ 2 (Both)          │
│ Max Prize (example)   │ $1,380         │ $3,300 + PnL      │
│ Competition Slots     │ 100 max        │ 30 max            │
│ Time Commitment       │ 15 mins        │ 4 hours (trading) │
│ Skill Required        │ Market Analysis│ Analysis + Trading│
└────────────────────────────────────────────────────────────────┘
```

---

## 2. CORE GAME LOOP

### 2.1 Competition Flow Overview

```
PHASE 1: PRE-GAME (Roster Building)
    • Tier Selection (Passive or Active)
    • Select 9 coins from pool
    • Rank by predicted performance
    • Set UP/DOWN directions
    • Lock roster
    ↓
PHASE 2: LIVE COMPETITION (1hr, 4hr, or 24hr)
    • PASSIVE: Watch markets + active traders
    • ACTIVE: Trade live with $1,000 capital
    • Real-time leaderboard updates
    ↓
PHASE 3: SETTLEMENT & RESULTS
    • Calculate pattern scores (all players)
    • Calculate trading PnL (active only)
    • Distribute prizes (pattern + trading)
    • Award jackpots (all players eligible)
```

### 2.2 Phase 1: Pre-Game (Roster Building)

#### Tier Selection Screen

When entering a competition, players choose their participation tier:

```
┌─────────────────────────────────────────────────────┐
│  CHOOSE YOUR COMPETITION TIER                        │
│  L1 Chains 4hr Competition | Starts 12:00 PM EST    │
├─────────────────────────────────────────────────────┤
│                                                      │
│  ┌───────────────────────┐  ┌───────────────────────┐
│  │ 🎯 PASSIVE TIER      │  │ 🔥 ACTIVE TIER       │
│  │                       │  │                       │
│  │ $25 Entry            │  │ $100 Entry           │
│  │ Predictions Only      │  │ Trade Live + Predict │
│  │                       │  │                       │
│  │ ✓ No trading needed   │  │ ✓ $1,000 capital     │
│  │ ✓ Watch traders live  │  │ ✓ Keep trading PnL   │
│  │ ✓ Pattern prizes      │  │ ✓ BOTH prize pools   │
│  │ ✓ Learn strategies    │  │ ✓ 2x win chances     │
│  │                       │  │ ✓ FULL jackpot access│
│  │                       │  │                       │
│  │ Max Prize: $980      │  │ Max Prize: $2,900    │
│  │ + Jackpots           │  │ + Trading profits    │
│  │                       │  │ + Jackpots (BOTH!)   │
│  │                       │  │                       │
│  │ Spots: 87/100        │  │ Spots: 23/30         │
│  │                       │  │                       │
│  │ [Enter Passive →]    │  │ [Enter Active →]     │
│  └───────────────────────┘  └───────────────────────┘
└─────────────────────────────────────────────────────┘
```

#### Passive Onboarding Flow

**Step 1: Connect Wallet**
```
┌────────────────────────────────────┐
│ Welcome to Battle Grid             │
│                                    │
│ Connect your Hyperliquid wallet to │
│ start competing                    │
│                                    │
│ [Connect Hyperliquid Wallet]       │
│                                    │
│ Don't have a wallet?               │
│ [Download Hyperliquid →]           │
└────────────────────────────────────┘
```

**Step 2: Profile Setup**
- Username
- Avatar
- Notification preferences

**Step 3: Pay Entry Fee**
- Transfer $25 USDC from wallet to platform
- Instant confirmation

**Step 4: Build Roster**
- View coin pool (50 eligible coins)
- Select 9 coins
- Rank by predicted performance
- Set UP/DOWN predictions
- Lock roster

**NO additional setup required** ✅

**Time to Entry:** 2-5 minutes

#### Active Onboarding Flow

**Steps 1-3: Same as Passive** (wallet + profile + entry fee $100)

**Step 4: Builder Code Approval (ONE-TIME)**

```
┌────────────────────────────────────┐
│ Approve Trading Fees               │
│                                    │
│ To compete in Active tier, approve│
│ platform builder code (max 10 bps)│
│                                    │
│ This is a one-time approval. Fees │
│ help maintain platform and verify  │
│ fair play.                         │
│                                    │
│ What are builder fees?             │
│ • Max 0.1% per trade               │
│ • Collected on-chain automatically │
│ • Used for platform operations     │
│                                    │
│ [Approve Builder Code]             │
└────────────────────────────────────┘
```

**Step 5: Agent Wallet Creation & Funding**
- Platform creates agent wallet (automatic)
- User approves agent wallet signature (one click)
- **User transfers $1,000 USDC to agent wallet** (separate transaction)
- Confirmation: "Agent wallet funded - ready for trading"

**Step 6: Build Roster**
- Same as passive (select 9 coins, rank, predict)

**Time to Entry:** 
- First time: 5-10 minutes (includes builder code approval)
- Subsequent: 3-5 minutes (builder code already approved)

#### Roster Builder Interface

```
┌─────────────────────────────────────────────────────┐
│  ROSTER BUILDER - L1 Chains 4hr Competition         │
│  Start Time: 12:00 PM EST                           │
│  YOUR TIER: PASSIVE ($25) | 87/100 spots filled     │
├─────────────────────────────────────────────────────┤
│  SELECT 9 COINS (Drag to rank)                      │
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
│  💡 CAPTAIN (Position #1): Special bonuses          │
│     • 300 XP for exact ranking match (vs 100 XP)    │
│     • 20x leverage in Active tier (vs 10x)          │
│                                                      │
│  [Lock Roster & Enter Competition]                  │
└─────────────────────────────────────────────────────┘
```

**Coin Pool Eligibility:**
- ✅ **ONLY** coins listed on Hyperliquid DEX
- ✅ Minimum 24hr trading volume: $10M (on Hyperliquid)
- ✅ Sufficient liquidity for leverage trading (up to 20x)
- ❌ NO stablecoins (USDT, USDC, etc.)
- ❌ NO halted/delisted coins

**Coin Selection Features:**
- Real-time price updates
- 24hr performance charts
- Volume indicators
- Market cap rankings
- Category filters (L1 Chains, Memes, DeFi)
- Sort by: 24hr %, Market Cap, Volume

### 2.3 Phase 2A: Live Competition (Passive Tier)

**Duration:** 1hr, 4hr, or 24hr (competition-specific)  
**Trading Capital:** $0 (NO TRADING)

**Passive Player Activities:**

**1. Monitor Market Movements**
- Watch real-time price updates for your 9 selected coins
- Track which predictions are proving correct
- See pattern score accumulate (total hidden until settlement)

**2. Watch Active Traders Live (Spectator Feed)**

```
┌──────────────────────────────────────────────────┐
│ 🔴 LIVE: Top Active Traders                      │
│ Watch the best compete for $1,800 Trading Prize  │
├──────────────────────────────────────────────────┤
│ 🥇 @CryptoKing ● LIVE                           │
│    💰 Trading PnL: +$890                         │
│    📊 Win Rate: 75% (6W-2L)                      │
│    🔥 Last Trade: LONG BTC 20x @ $43.2K         │
│       ⏱️ 45 minutes ago                          │
│    👁️ 847 watching                               │
│    [Follow Trader] [View Strategy]               │
├──────────────────────────────────────────────────┤
│ 🥈 @DiamondHands ● LIVE                         │
│    💰 Trading PnL: +$720                         │
│    📊 Win Rate: 67% (8W-4L)                      │
│    🔥 Last Trade: SHORT HYPE 15x @ $18.20       │
│       ⏱️ 12 minutes ago                          │
│    👁️ 523 watching                               │
│    [Follow Trader] [View Strategy]               │
├──────────────────────────────────────────────────┤
│ 🥉 @ScalpMaster                                  │
│    💰 Trading PnL: +$650                         │
│    📊 Win Rate: 70% (14W-6L)                     │
│    🔥 Last Trade: Closed SOL (+$120)            │
│       ⏱️ 2 minutes ago                           │
│    👁️ 391 watching                               │
│    [Follow Trader] [View Strategy]               │
└──────────────────────────────────────────────────┘

💡 Upgrade to Active tier to compete for Trading Prizes
```

**Spectator Data Shown (Public):**
- ✅ Current total PnL (aggregate across all positions)
- ✅ Win rate (% profitable positions closed)
- ✅ Last trade executed (coin, direction, leverage, timestamp)
- ✅ Number of total trades (open + closed)
- ✅ Follower count (social proof)

**Spectator Data Hidden (Private):**
- ❌ Exact position sizes (margin amounts)
- ❌ Unrealized PnL per position (current mark prices)
- ❌ Entry/exit prices for open positions
- ❌ Stop-loss/take-profit levels
- ❌ Pending orders

**3. Check Pattern Leaderboard**
- See your rank among all 100 players (passive + active)
- Know what grid score is needed for top 3 prizes
- Identify jackpot badge eligibility (row + column complete)

**Passive Player UI Example:**

```
┌─────────────────────────────────────────────────────┐
│  LIVE: L1 Chains 4hr Competition (PASSIVE TIER)     │
│  Time Remaining: 2:15:32                            │
│  Your Pattern Rank: #12 / 100 Players              │
├─────────────────────────────────────────────────────┤
│  YOUR PREDICTIONS (Live Tracking)                    │
│                                                      │
│  ┌─────────┬─────────┬─────────┐                   │
│  │ SOL ⭐  │ HYPE    │ BTC     │                   │
│  │ UP pred │DOWN pred│ UP pred │                   │
│  │ +18.2%✅│ -22.4%✅│ +12.1%✅│                   │
│  ├─────────┼─────────┼─────────┤                   │
│  │ ETH     │ AVAX    │ BNB     │                   │
│  │ UP pred │DOWN pred│ UP pred │                   │
│  │ +8.5% ✅│ -15.3%✅│ +6.2% ✅│                   │
│  ├─────────┼─────────┼─────────┤                   │
│  │ MATIC   │ DOT     │ ADA     │                   │
│  │ UP pred │DOWN pred│ UP pred │                   │
│  │ +4.8% ✅│ -3.2% ✅│ +3.5% ✅│                   │
│  └─────────┴─────────┴─────────┘                   │
│                                                      │
│  Direction Accuracy: 9/9 ✅ (Perfect!)              │
│  Patterns Detected: Row 0, Row 1, Row 2 Complete 🎰 │
│                                                      │
│  [View Pattern Leaderboard] [Watch Top Traders]     │
└─────────────────────────────────────────────────────┘
```

### 2.4 Phase 2B: Live Competition (Active Tier)

**Duration:** 1hr, 4hr, or 24hr (competition-specific)
**Trading Capital:** $1,000 USDC (user-provided, deposited to agent wallet)

**Active Player Activities:**

**1. Execute Trading Strategy**

**Trading Mechanics:**
- ✅ Can ONLY trade the 9 coins in your roster (server-enforced)
- ✅ LONG or SHORT any of your 9 coins
- ✅ Open multiple positions on same coin (DCA strategy)
- ✅ Use leverage: 3x, 5x, 10x, 20x (with restrictions)
- ✅ Close positions anytime (partial or full)
- ✅ Add to existing positions
- ✅ Set stop-loss/take-profit (optional, managed by Hyperliquid)

**Leverage Rules:**
- **Captain (position 0):** Max 20x leverage
- **Positions 1-8:** Max 10x leverage
- **Max Notional Exposure:** $10,000 per coin
- **Total Portfolio Exposure:** Max $50,000 notional

**Position Management:**
- Unlimited trades during competition
- No minimum trade requirement
- Can hold positions or actively scalp
- Real-time PnL tracking (calculated from mark prices)
- Live leaderboard updates every 5 seconds

**2. Monitor Dual Leaderboards**

Active players compete on TWO simultaneous leaderboards:
- **Pattern Leaderboard**: Compete against all 100 players (passive + active)
- **Trading Leaderboard**: Compete against 30 active players only

**3. Strategic Decision-Making**

Active players must balance two competing objectives:

**Strategy A: Pure Trading Focus**
```
Approach:
• Build roster for tradable volatility
• Predictions secondary (just pick high movers)
• Active scalping during competition
• Target: Top 3 Trading Prize ($1,680/$480/$240)

Risk: May sacrifice pattern score
Reward: Better odds (30 vs 100), keep PnL profits
```

**Strategy B: Pure Pattern Focus**
```
Approach:
• Build roster for accurate predictions
• Minimal trading (hold positions)
• Strategic entries to amplify correct predictions
• Target: Top 3 Pattern Prize ($980/$280/$140)

Risk: May lose trading leaderboard rank
Reward: Compete in larger prize pool
```

**Strategy C: Balanced (Hardest)**
```
Approach:
• Build roster for both accuracy and tradability
• Strategic trading to match predictions
• Win BOTH leaderboards
• Target: Both prizes ($2,660) + PnL profits

Risk: Most difficult to execute perfectly
Reward: Maximum total winnings possible from single $100 entry
```

**Active Player UI Example:**

```
┌─────────────────────────────────────────────────────┐
│  LIVE: L1 Chains 4hr Competition (ACTIVE TIER)      │
│  Time Remaining: 2:15:32                            │
│  Pattern Rank: #12/100 | Trading Rank: #3/30 🔥    │
├─────────────────────────────────────────────────────┤
│  YOUR PERFORMANCE                                    │
│  Trading PnL: +$480 💰 | Grid Score: ~3,100 XP     │
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
│  ├─────────┼─────────┼─────────┤                   │
│  │ MATIC   │ DOT     │ ADA     │                   │
│  │ (empty) │ (empty) │ (empty) │                   │
│  └─────────┴─────────┴─────────┘                   │
│                                                      │
│  [+ Open Position] [View Leaderboards] [Close All]  │
│                                                      │
│  💡 LIVE MARKET UPDATES                             │
│  SOL: $110.25 (+18.2% from start) 🔥               │
│  HYPE: $17.89 (-22.4% from start) 📉               │
│  BTC: $48,200 (+12.1% from start) 📈               │
└─────────────────────────────────────────────────────┘
```

**Trading Enforcement (Critical):**
- ✅ All trades executed via platform-controlled agent wallet
- ✅ **ONLY trades with platform builder code count** toward competition
- ✅ Server validates: rostered coins only, leverage limits, position sizes
- ✅ External trades (without builder code) = instant disqualification
- ✅ Settlement uses unrealized PnL from mark prices (positions remain open)

### 2.5 Phase 3: Settlement & Results

**Instant Calculation at Competition End**

#### Settlement Price Source

**Hyperliquid Candles (Authoritative):**
- ✅ **Baseline Prices**: Captured at competition start (from Hyperliquid API)
- ✅ **Final Prices**: Captured from Hyperliquid candle close (1hr, 4hr, or 24hr candle)
- ✅ **Example (4hr competition)**: Start at 08:00 UTC → Settle using 08:00-12:00 4hr candle close price
- ✅ **Single Source of Truth**: Hyperliquid DEX market data (prevents price manipulation)
- ✅ **Ranking Calculation**: Based on absolute % change (|final - baseline| / baseline × 100)

#### Settlement Process (4 Steps)

**STEP 1: Calculate Final Market Rankings**

```typescript
// Calculate absolute % change for all coins in pool
coins.forEach(coin => {
  const baselinePrice = coin.priceAtStart; // From Hyperliquid API
  const finalPrice = coin.priceAtCandleClose; // From 4hr candle close
  
  coin.absoluteChange = Math.abs((finalPrice - baselinePrice) / baselinePrice * 100);
});

// Rank coins by absolute % change (highest = #1)
const marketRanking = coins.sort((a, b) => b.absoluteChange - a.absoluteChange);

// Example results:
// #1: HYPE (-22.4% down) = 22.4% absolute change
// #2: SOL (+18.2% up) = 18.2% absolute change  
// #3: BTC (+12.1% up) = 12.1% absolute change
// ...
```

**STEP 2: Calculate Pattern Prize Pool (All 100 Players Compete)**

```typescript
// Pattern Prize Pool: 80% of passive entry fees
const passiveEntries = entries.filter(e => e.tier === 'PASSIVE');
const patternPrizePool = passiveEntries.length × 25 × 0.80;

// Example: 70 passive players × $25 × 80% = $1,400

// Rank ALL 100 players by Grid Score (XP)
const allPlayers = [...passiveEntries, ...activeEntries];
const patternRankings = allPlayers.sort((a, b) => b.gridScore - a.gridScore);

// Distribute to top 3 (ANY tier can win)
const prizes = {
  pattern: {
    first: patternPrizePool × 0.70,  // $980
    second: patternPrizePool × 0.20, // $280
    third: patternPrizePool × 0.10   // $140
  }
};

// Winners can be passive OR active players
await distributePrize({
  winners: [
    { userId: patternRankings[0].userId, amount: prizes.pattern.first, rank: 1 },
    { userId: patternRankings[1].userId, amount: prizes.pattern.second, rank: 2 },
    { userId: patternRankings[2].userId, amount: prizes.pattern.third, rank: 3 }
  ],
  prizeType: 'PATTERN'
});
```

**STEP 3: Calculate Trading Prize Pool (Only 30 Active Players Compete)**

```typescript
// Trading Prize Pool: 80% of active entry fees
const activeEntries = entries.filter(e => e.tier === 'ACTIVE');
const tradingPrizePool = activeEntries.length × 100 × 0.80;

// Example: 30 active players × $100 × 80% = $2,400

// Rank ONLY active players by Trading PnL
const tradingRankings = activeEntries.sort((a, b) => b.tradingPnL - a.tradingPnL);

// Distribute to top 3 (active only)
const prizes = {
  trading: {
    first: tradingPrizePool × 0.70,  // $1,680
    second: tradingPrizePool × 0.20, // $480
    third: tradingPrizePool × 0.10   // $240
  }
};

// NOTE: Winners ALSO keep their trading PnL profits (separate)
await distributePrize({
  winners: [
    { userId: tradingRankings[0].userId, amount: prizes.trading.first, rank: 1 },
    { userId: tradingRankings[1].userId, amount: prizes.trading.second, rank: 2 },
    { userId: tradingRankings[2].userId, amount: prizes.trading.third, rank: 3 }
  ],
  prizeType: 'TRADING'
});
```

**STEP 4: Calculate Jackpot Pool (All 100 Players Eligible)**

```typescript
// Jackpot Pool: 10% of ALL entry fees (combined passive + active)
const jackpotPool = (passiveEntries.length × 2.50) + (activeEntries.length × 10);

// Example: (70 × $2.50) + (30 × $10) = $475

// PART A: Perfect Grid Jackpot (50% of jackpot pool)
const perfectGridPrize = jackpotPool × 0.50; // $237.50

// Check if any player's roster exactly matches market ranking
const perfectGridWinners = allPlayers.filter(p => 
  p.rosterRanking.every((coin, idx) => coin.actualRank === idx)
);

if (perfectGridWinners.length > 0) {
  // Split among winners (ANY tier eligible)
  const prizePerWinner = perfectGridPrize / perfectGridWinners.length;
  perfectGridWinners.forEach(winner => {
    await distributePrize({
      userId: winner.userId,
      amount: prizePerWinner,
      prizeType: 'PERFECT_GRID'
    });
  });
} else {
  // NO WINNER: Roll over to next competition
  await rolloverJackpot(perfectGridPrize);
}

// PART B: Pattern Bonus Jackpot (50% of jackpot pool)
const patternBonusPrize = jackpotPool × 0.50; // $237.50

// Player with highest XP score (ANY tier eligible)
const patternBonusWinner = allPlayers.reduce((max, p) =>
  p.gridScore > max.gridScore ? p : max
);

// Always awarded (never rolls over)
// NOTE: Active players are FULLY eligible with their $100 entry
await distributePrize({
  userId: patternBonusWinner.userId,
  amount: patternBonusPrize,
  prizeType: 'PATTERN_BONUS'
});
```

#### Grid Score Calculation (XP System)

**Simplified Explanation** (Think: Call of Duty end-of-match screen):

The scoring system rewards like a **slot machine** with escalating bonuses:

**1. Direction Hits** 💰 (900 XP max)
- Get UP/DOWN right? +100 XP per coin
- 9 coins × 100 XP = 900 XP if all correct

**2. Exact Matches** 🎯 (1,100 XP max)
- Captain (#1) exactly matches market #1? +300 XP
- Other positions match exactly? +100 XP each
- Like hitting exact multipliers in a slot machine

**3. Pattern Jackpots** 🎰 (7,800 XP max - THE BIG MONEY)
- **Complete a ROW** (3 correct in a line): +800 XP
- **Complete a COLUMN** (3 correct vertically): +800 XP
- **Complete a DIAGONAL** (3 correct diagonally): +1,500 XP
- Get ALL patterns? You hit the **MEGA JACKPOT** 🚀

**Maximum Possible Score:** 9,800 XP (perfect predictions + all patterns)

**Technical Implementation:**

```typescript
function calculateGridScore(player, marketData) {
  let score = 0;
  const correctness = [];

  // 1. Direction Accuracy (100 XP per correct prediction)
  for (let i = 0; i < 9; i++) {
    const coin = player.roster[i];
    const actualChange = marketData[coin.id].percentChange;
    const predictedUp = coin.prediction === 'UP';
    const actualUp = actualChange > 0;
    const isCorrect = predictedUp === actualUp;

    correctness.push(isCorrect);
    if (isCorrect) {
      score += 100; // Binary: correct = 100, wrong = 0
    }
  }

  // 2. Ranking Accuracy (exact position match only)
  for (let i = 0; i < 9; i++) {
    const coin = player.roster[i];
    const actualRank = marketData[coin.id].rank - 1; // 0-indexed

    if (i === actualRank) {
      // Exact rank match
      if (i === 0) {
        score += 300; // Captain position
      } else {
        score += 100; // Regular positions
      }
    }
  }

  // 3. Pattern Bonuses (COMPLETE 3-matches only)

  // ROWS (positions 0-2, 3-5, 6-8)
  const rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
  rows.forEach(row => {
    if (row.every(pos => correctness[pos])) {
      score += 800; // Complete row
    }
  });

  // COLUMNS (positions 0-3-6, 1-4-7, 2-5-8)
  const columns = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];
  columns.forEach(col => {
    if (col.every(pos => correctness[pos])) {
      score += 800; // Complete column
    }
  });

  // DIAGONALS (positions 0-4-8, 2-4-6)
  const diagonals = [[0, 4, 8], [2, 4, 6]];
  diagonals.forEach(diag => {
    if (diag.every(pos => correctness[pos])) {
      score += 1500; // Complete diagonal (harder)
    }
  });

  return {
    totalXP: score,
    maxPossibleScore: 9800,
    correctness: correctness
  };
}
```

#### Settlement Example

**Competition Results:**
- 70 passive players @ $25 = $1,750
- 30 active players @ $100 = $3,000
- Total gross: $4,750

**Pattern Prize Pool ($1,400):**
```
🥇 1st: @AnalystPro (Passive) - 4,850 XP → $980
🥈 2nd: @PatternKing (Active) - 4,200 XP → $280
🥉 3rd: @PredictMaster (Passive) - 3,950 XP → $140
```

**Trading Prize Pool ($2,400):**
```
🥇 1st: @CryptoKing (Active) - +$890 PnL → $1,680
🥈 2nd: @DiamondHands (Active) - +$720 PnL → $480
🥉 3rd: @ScalpMaster (Active) - +$650 PnL → $240
```

**Jackpot Pool ($475):**
```
Perfect Grid (50% = $237.50): NO WINNER → Rolls over to next competition
Pattern Bonus (50% = $237.50): @AnalystPro (Passive, highest XP)
```

**Winner Breakdown:**

**@AnalystPro (Passive tier):**
- Entry: $25
- Pattern Prize: $980 (1st place)
- Pattern Bonus Jackpot: $237.50
- **Total Winnings: $1,217.50** (48x return!)

**@CryptoKing (Active tier) - SINGLE $100 ENTRY:**
- Entry: $100 (competes in BOTH games)
- Trading Prize: $1,680 (1st place)
- Trading PnL: +$890 (kept separately)
- **Total Winnings: $2,570** (25x return + trading profits!)
- **Value: Won from trading leaderboard, eligible for pattern + jackpots too**

**@PatternKing (Active tier) - SINGLE $100 ENTRY:**
- Entry: $100 (competes in BOTH games)
- Pattern Prize: $280 (2nd place)
- Trading PnL: +$450 (ranked #5 in trading)
- **Total Winnings: $730** (7x return + trading profits)
- **Value: Won from pattern leaderboard with same entry that gave trading access**

### 2.6 Results Display

#### Passive Player Results Screen

```
┌──────────────────────────────────────────────────┐
│ 🎉 COMPETITION COMPLETE                          │
│ L1 Chains 4hr Competition                        │
├──────────────────────────────────────────────────┤
│ YOUR PERFORMANCE (PASSIVE TIER)                  │
│                                                  │
│ 🎯 GRID SCORE: 3,850 XP                          │
│    Direction Accuracy: 8/9 correct (800 XP)      │
│    Ranking Matches: 2/9 exact (500 XP)           │
│    Pattern Bonuses:                              │
│      • Row 0 Complete: +800 XP ✅                │
│      • Row 1 Complete: +800 XP ✅                │
│      • Column 0 Complete: +800 XP ✅             │
│    🎰 Jackpot Badge: Row + Column! ✅            │
│                                                  │
│ 🏆 PATTERN PRIZE: $980 (1st place!)             │
│    You ranked #1 out of 100 players              │
│                                                  │
│ 💰 JACKPOTS:                                     │
│    Perfect Grid: ❌ Not exact match              │
│    Pattern Bonus: $200 (Highest XP score!)       │
│                                                  │
│ 💸 TOTAL WINNINGS: $1,180                       │
│                                                  │
├──────────────────────────────────────────────────┤
│ 🚀 READY FOR MORE?                               │
│                                                  │
│ You dominated the pattern leaderboard!           │
│ Want to compete for even bigger prizes?          │
│                                                  │
│ 🔥 Upgrade to ACTIVE tier ($100):                │
│    • Single entry = BOTH games (2x chances)      │
│    • Trade live during competitions              │
│    • Compete for Trading Prizes ($1,680+)        │
│    • Keep your trading profits                   │
│    • Win from BOTH leaderboards                  │
│    • FULL jackpot eligibility                    │
│                                                  │
│ [Upgrade to Active →] [Play Passive Again]       │
└──────────────────────────────────────────────────┘
```

#### Active Player Results Screen

```
┌──────────────────────────────────────────────────┐
│ 🎉 COMPETITION COMPLETE                          │
│ L1 Chains 4hr Competition                        │
├──────────────────────────────────────────────────┤
│ YOUR PERFORMANCE (ACTIVE TIER)                   │
│                                                  │
│ 💰 TRADING PNL: +$720                           │
│    Positions Closed: 12 (8W-4L, 67% win rate)    │
│    Best Trade: SHORT HYPE (+$180)                │
│    Biggest Loss: LONG BTC (-$80)                 │
│                                                  │
│ 🏆 TRADING PRIZE: $1,680 (1st place!)           │
│    You ranked #1 out of 30 active traders        │
│                                                  │
│ 🎯 GRID SCORE: 3,100 XP                          │
│    Direction Accuracy: 7/9 correct (700 XP)      │
│    Ranking Matches: 1/9 exact (100 XP)           │
│    Pattern Bonuses:                              │
│      • Row 0 Complete: +800 XP ✅                │
│      • Column 0 Complete: +800 XP ✅             │
│    🎰 Jackpot Badge: Row + Column! ✅            │
│                                                  │
│ 🏆 PATTERN PRIZE: $240 (3rd place)              │
│    You ranked #3 out of 100 players              │
│                                                  │
│ 💰 JACKPOTS:                                     │
│    Perfect Grid: ❌ Not exact match              │
│    Pattern Bonus: ❌ Not highest score           │
│                                                  │
│ 💸 TOTAL WINNINGS: $2,640                       │
│    Prize Pools: $1,920 (Trading + Pattern)       │
│    Trading PnL: +$720 (yours to keep)            │
│                                                  │
│ 🎯 YOUR $100 ENTRY COMPETED IN BOTH GAMES:       │
│    ✅ Trading Leaderboard → Won $1,680           │
│    ✅ Pattern Leaderboard → Won $240             │
│    ✅ Full Jackpot Access (both eligible)        │
│                                                  │
├──────────────────────────────────────────────────┤
│ 🔥 AMAZING PERFORMANCE!                          │
│                                                  │
│ You won BOTH leaderboards with single entry! 🏆🏆│
│                                                  │
│ 👥 123 people followed your trades               │
│ 🎯 View your full trade history                  │
│ 📊 Share your winning strategy                   │
│                                                  │
│ [Play Again →] [View Trade Replay] [Share Win]   │
└──────────────────────────────────────────────────┘
```

---

## 3. PRIZE STRUCTURE & ECONOMICS

### 3.1 Entry Fee Structure

```
PASSIVE TIER ($25 USDC):
├─ Pattern Prize Pool: 80% ($20)
├─ Jackpot Pool: 10% ($2.50)
└─ Platform Fee: 10% ($2.50)

ACTIVE TIER ($100 USDC):
├─ Trading Prize Pool: 80% ($80)
├─ Jackpot Pool: 10% ($10)
└─ Platform Fee: 10% ($10)

NOTE: Active players get BOTH leaderboard access + full jackpot eligibility
      for their single $100 entry (compete in 2 games simultaneously)
```

### 3.2 Prize Pool Distribution

**Example Competition (70 Passive + 30 Active):**

```
Gross Entry Fees Collected:
├─ Passive: 70 × $25 = $1,750
└─ Active: 30 × $100 = $3,000
Total: $4,750

┌────────────────────────────────────────────────┐
│ PATTERN PRIZE POOL (All 100 Players Compete)  │
├────────────────────────────────────────────────┤
│ Source: 70 × $25 × 80% = $1,400               │
│                                                │
│ 🥇 1st Place: $980 (70%)                      │
│ 🥈 2nd Place: $280 (20%)                      │
│ 🥉 3rd Place: $140 (10%)                      │
│                                                │
│ Eligible: ALL 100 players (passive + active)  │
│ Note: Active players compete here WITH their  │
│       $100 entry (no separate fee required)   │
└────────────────────────────────────────────────┘

┌────────────────────────────────────────────────┐
│ TRADING PRIZE POOL (30 Active Players Only)   │
├────────────────────────────────────────────────┤
│ Source: 30 × $100 × 80% = $2,400              │
│                                                │
│ 🥇 1st Place: $1,680 (70%)                    │
│ 🥈 2nd Place: $480 (20%)                      │
│ 🥉 3rd Place: $240 (10%)                      │
│                                                │
│ Eligible: ONLY 30 active players              │
│ Note: Winners also keep trading PnL profits   │
│ Note: Same $100 entry competes in BOTH pools  │
└────────────────────────────────────────────────┘

┌────────────────────────────────────────────────┐
│ JACKPOT POOL (All 100 Players Eligible)       │
├────────────────────────────────────────────────┤
│ Source: (70 × $2.50) + (30 × $10) = $475      │
│                                                │
│ Perfect Grid Jackpot (50% = $237.50):         │
│   • Split among exact ranking matches         │
│   • Rolls over if no winner                   │
│                                                │
│ Pattern Bonus Jackpot (50% = $237.50):        │
│   • Awarded to highest XP scorer              │
│   • Always paid (never rolls over)            │
│                                                │
│ Eligible: ALL 100 players (passive + active)  │
│ Note: Active players eligible with same $100  │
└────────────────────────────────────────────────┘

┌────────────────────────────────────────────────┐
│ PLATFORM FEE (Operations + Infrastructure)    │
├────────────────────────────────────────────────┤
│ Source: (70 × $2.50) + (30 × $10) = $475      │
│                                                │
│ Plus: Builder code fees (10 bps on active     │
│       trading volume, collected on-chain)      │
└────────────────────────────────────────────────┘
```

### 3.3 Player Economics

#### Passive Player ROI

```
Entry: $25

Win Opportunities:
• Pattern Prize (compete vs 100 players)
  - 1st: $980 | 2nd: $280 | 3rd: $140
• Perfect Grid Jackpot: $200 (split if multiple)
• Pattern Bonus Jackpot: $200 (highest XP)

Expected Value (EV) Calculation:
• Pattern Prize: 3% chance × avg($600) = $18
• Jackpot pools: 2% chance × avg($200) = $4
• Total EV: $22 per $25 entry

ROI: ($22 - $25) / $25 = -12% (NEGATIVE but high upside)

Best Case: $1,380 (all prizes) = 55x return
Worst Case: $0 = -100%

Why Players Play Despite Negative EV:
✅ Low risk ($25 affordable)
✅ High entertainment value (watch traders, learn)
✅ Positive EV if skilled (60%+ prediction accuracy)
✅ Upgrade path to active tier
✅ Jackpot dream potential
```

#### Active Player ROI

```
Entry: $100 (PLAYS BOTH GAMES SIMULTANEOUSLY)

Win Opportunities from SINGLE $100 Entry:
• Pattern Prize (compete vs 100 players)
  - 1st: $980 | 2nd: $280 | 3rd: $140
• Trading Prize (compete vs 30 active only)
  - 1st: $1,680 | 2nd: $480 | 3rd: $240
• Perfect Grid Jackpot: $237.50 (split if multiple)
• Pattern Bonus Jackpot: $237.50 (highest XP)
• PLUS: Keep all trading PnL profits

Expected Value (EV) Calculation:
• Pattern Prize: 3% chance × avg($600) = $18
• Trading Prize: 10% chance × avg($800) = $80
• Jackpot pools: 3% chance × avg($237) = $7
• Trading PnL: +$150 avg (skill-dependent)
• Total EV: $255 per $100 entry

ROI: ($255 - $100) / $100 = 155% (HIGHLY POSITIVE)

Best Case: $3,337.50 + trading PnL = 33x+ return
Worst Case: -$100 - trading losses = variable

Active Tier Advantages:
✅ SINGLE ENTRY = 2x game access (both leaderboards)
✅ 3.3x better odds on trading pool (30 vs 100)
✅ FULL jackpot eligibility (no separate entry needed)
✅ Keep trading profits (separate income stream)
✅ Skill multiplier (good traders earn +$500+ PnL)
✅ Social status (followers, verified badges)
✅ Better value than 2 separate entries ($100 vs $125 combined)
```

### 3.4 Perfect Grid Jackpot Rollover Strategy

**Marketing Mechanism:**

The Perfect Grid Jackpot rollover creates viral marketing similar to lottery jackpots:

**How It Works:**
1. **2.5% of EVERY entry fee** goes into Perfect Grid Jackpot (50% of 10% jackpot allocation)
2. **If no one hits Perfect Grid**: Jackpot ROLLS OVER to next competition
3. **Jackpot accumulates** until someone wins

**Example Rollover Growth:**
```
Competition #1 (100 players): Jackpot = $200 → NO WINNER → Rolls over
Competition #2 (100 players): Jackpot = $200 + $200 = $400 → NO WINNER → Rolls over
Competition #5 (100 players): Jackpot = $1,000 🔥
Competition #20 (100 players): Jackpot = $4,000 🚀
Competition #50 (100 players): Jackpot = $10,000 💰
```

**Viral Marketing Triggers:**

**Homepage Banner:**
```
🎰 PERFECT GRID JACKPOT: $12,847 🎰
NO WINNER IN 47 COMPETITIONS - BE THE FIRST!
```

**Social Media Hooks:**
- "🎰 $15K Perfect Grid Jackpot! 50 competitions, ZERO winners."
- "Someone JUST won the $8,429 Perfect Grid Jackpot! First winner in 38 competitions."
- "The jackpot has rolled over 100 TIMES. It's now $25,000. Will YOU be the one?"

**Psychological Drivers:**
- FOMO (Fear of Missing Out): "What if the next competition is the one?"
- Skill Challenge: "Are you good enough to crack it?" (Not random luck)
- Near-Miss Marketing: "Player had 8/9 coins correct (missed by 1 position!)"
- Milestone Celebrations: First $10K, $50K, $100K jackpots

**Key Differentiator from Traditional Lotteries:**
- ✅ **NOT random**: Requires skill (market analysis + prediction accuracy)
- ✅ **Transparent odds**: Players can estimate probability
- ✅ **Daily opportunities**: Multiple competitions per day
- ✅ **Skill-based**: Better analysts have SIGNIFICANTLY higher chances

### 3.5 Trading Capital Model

#### Passive Tier (No Trading Capital)

```
Capital Required: $0

Platform Risk:
• Zero trading capital risk
• Platform only manages entry fee prize pool obligations
• No liquidation risk
• No leverage risk
```

#### Active Tier (User-Funded Trading)

```
Capital Required: $1,000 USDC per player (user-provided)

User Capital Flow:
1. User deposits $100 USDC entry fee to platform
2. User transfers $1,000 USDC to agent wallet (separate transaction)
3. User trades with their own capital during competition
4. User keeps ALL trading profits/losses
5. User withdraws remaining capital from agent wallet post-competition

Platform Risk Profile:
• ZERO trading capital risk (users provide their own capital)
• Platform only manages entry fee prize pool obligations
• No liquidation exposure (users bear all trading losses)
• No leverage risk exposure (Hyperliquid manages margin)

User Requirements:
• Minimum wallet balance: $1,100 USDC
  - $100 for entry fee
  - $1,000 for trading capital deposit
• Capital remains user's property throughout
• Agent wallet can be reused for future competitions
```

#### Capital Safety & User Controls

```
User Protections:
✅ Leverage limits (20x captain, 10x others) prevent over-leveraging
✅ Position size caps ($10K per coin, $50K total) limit exposure
✅ Hyperliquid liquidation engine protects against negative balance
✅ Real-time PnL tracking for informed decision-making

Platform Controls:
✅ Competition entry restrictions (one at a time MVP)
✅ Trade validation (only rostered coins, leverage limits)
✅ Builder code enforcement (only platform trades count)

Capital Recovery:
✅ User maintains full control of agent wallet
✅ Can withdraw capital anytime post-competition
✅ No platform custody of user funds beyond competition duration
```

#### Settlement Process (Positions Remain Open)

```
Critical: Positions NOT auto-closed at competition end

Why:
✅ Liquid markets ensure accurate mark pricing
✅ Players maintain control over their positions
✅ Fair settlement based on unrealized PnL
✅ Users decide when to close positions post-competition

Settlement Calculation:
• Score snapshot taken at candle close timestamp
• Unrealized PnL calculated from Hyperliquid mark prices
• Trading Prize awarded based on PnL ranking
• Users can monitor/close positions after competition ends
• Capital remains in agent wallet for user withdrawal

Example:
Competition ends 12:00 PM UTC
• Player A: Open LONG BTC position, unrealized PnL +$450
• Trading Prize: Ranked #1 (highest PnL) → Wins $1,680
• 12:05 PM: Player A closes BTC position for +$460 actual
• Prize based on 12:00 PM snapshot (unrealized PnL at settlement)
• Player keeps the $460 realized profit from their own capital
• Player also competed in pattern leaderboard + jackpots with $100 entry
• Player withdraws remaining capital + profits from agent wallet
```

### 3.6 Revenue Model

```
PLATFORM REVENUE STREAMS:

1. Passive Entry Fee Rake (10%):
   • Entry: $25 per player
   • Platform: $2.50 per entry
   • Monthly estimate (5,000 MAU × 10 comps): $125K

2. Active Entry Fee Rake (10%):
   • Entry: $100 per player
   • Platform: $10 per entry
   • Monthly estimate (1,000 MAU × 8 comps): $80K
   • Note: Single entry gives access to BOTH leaderboards

3. Builder Code Fees (Active Only):
   • Trading volume: ~$300K per competition (30 players × $10K avg)
   • Competitions per day: 24
   • Monthly volume: $216M
   • Builder code rate: 5 bps (0.05%)
   • Monthly builder fees: $108K

TOTAL MONTHLY REVENUE: $313K
• Entry fee rake: $205K (65%)
• Builder code fees: $108K (35%)

ANNUAL REVENUE: $3.76M

Operating Costs (estimated):
• Infrastructure: $15K/month
• Team (5 people): $75K/month
• Marketing: $50K/month
• Legal/compliance: $10K/month
• Total: $150K/month

NET PROFIT: $163K/month = $1.96M annually
Margin: 52%
```

---

## 4. TECHNICAL SPECIFICATIONS

### 4.1 Architecture Overview

**Frontend (React/TypeScript):**
- Tier selection UI (passive vs active)
- Roster builder (drag-and-drop 3x3 grid)
- Live competition screens:
  - Passive: Spectator view + pattern leaderboard
  - Active: Trading panel + dual leaderboards
- Results breakdown (tier-specific templates)

**Backend Requirements:**
- Competition management system
- Player registration/tier selection
- Real-time price feed integration (Hyperliquid WebSocket)
- PnL calculation engine (for active tier)
- Grid scoring algorithm (pattern detection)
- Dual prize distribution logic
- Dual leaderboard system (pattern + trading)
- Spectator feed (aggregated trader data)

### 4.2 Database Schema

```sql
-- Competitions table
CREATE TABLE fantasy_competitions (
  id UUID PRIMARY KEY,
  category VARCHAR(50), -- L1_CHAINS, MEMES, DEFI
  duration INTEGER, -- 60, 240, 1440 minutes
  start_time TIMESTAMP,
  end_time TIMESTAMP,
  
  -- Dual-track specific
  passive_entry_fee DECIMAL(10,2), -- $25
  active_entry_fee DECIMAL(10,2), -- $100
  passive_slots INTEGER, -- Max 100
  active_slots INTEGER, -- Max 30
  passive_filled INTEGER, -- Current passive count
  active_filled INTEGER, -- Current active count
  
  total_prize_pool DECIMAL(10,2),
  status VARCHAR(20), -- REGISTRATION, LIVE, SETTLED
  total_player_count INTEGER, -- passive + active
  created_at TIMESTAMP
);

-- Player entries table
CREATE TABLE fantasy_rosters (
  id UUID PRIMARY KEY,
  competition_id UUID REFERENCES fantasy_competitions(id),
  user_id UUID REFERENCES users(id),
  
  -- Tier information
  tier VARCHAR(10) CHECK (tier IN ('PASSIVE', 'ACTIVE')),
  entry_fee DECIMAL(10,2), -- $25 or $100
  trading_capital DECIMAL(10,2), -- $0 for passive, $1000 for active
  agent_wallet_address VARCHAR(66), -- NULL for passive
  
  -- Roster data
  roster_data JSONB, -- Array of 9 coin selections with predictions
  locked_at TIMESTAMP,
  
  -- Scoring
  prediction_score INTEGER, -- XP score
  pattern_rank INTEGER, -- Rank in pattern leaderboard (vs 100)
  final_pnl DECIMAL(10,2), -- Trading PnL (NULL for passive)
  trading_rank INTEGER, -- Rank in trading leaderboard (NULL for passive)
  
  -- Prizes
  pattern_prize DECIMAL(10,2), -- Can be won by any tier
  trading_prize DECIMAL(10,2), -- Only for active tier
  jackpot_winnings DECIMAL(10,2), -- Can be won by any tier
  total_winnings DECIMAL(10,2),
  
  created_at TIMESTAMP
);

-- Prize pools table
CREATE TABLE prize_pools (
  id UUID PRIMARY KEY,
  competition_id UUID REFERENCES fantasy_competitions(id),
  pool_type VARCHAR(20), -- 'PATTERN', 'TRADING', 'JACKPOT'
  total_amount DECIMAL(10,2),
  source_tier VARCHAR(10), -- 'PASSIVE', 'ACTIVE', 'COMBINED'
  
  -- Prize distribution
  first_place DECIMAL(10,2),
  second_place DECIMAL(10,2),
  third_place DECIMAL(10,2),
  
  -- Jackpot specific
  perfect_grid_amount DECIMAL(10,2),
  pattern_bonus_amount DECIMAL(10,2),
  rollover_amount DECIMAL(10,2), -- Perfect Grid rollover
  
  created_at TIMESTAMP
);

-- Prize distributions table
CREATE TABLE prize_distributions (
  id UUID PRIMARY KEY,
  competition_id UUID REFERENCES fantasy_competitions(id),
  user_id UUID REFERENCES users(id),
  prize_type VARCHAR(20), -- 'PATTERN', 'TRADING', 'PERFECT_GRID', 'PATTERN_BONUS'
  amount DECIMAL(10,2),
  rank INTEGER,
  tier VARCHAR(10), -- 'PASSIVE' or 'ACTIVE'
  paid_at TIMESTAMP
);
```

### 4.3 Dual Leaderboard System

**Real-Time Leaderboard Updates:**

```typescript
interface LeaderboardUpdate {
  pattern: {
    // ALL 100 players (passive + active)
    rankings: Array<{
      rank: number,
      userId: string,
      username: string,
      gridScore: number, // XP score
      tier: 'PASSIVE' | 'ACTIVE',
      isJackpotEligible: boolean, // Row + column complete
      avatar: string
    }>,
    yourRank: number,
    totalPlayers: 100,
    prizePool: {
      first: number, // $980 example
      second: number, // $280
      third: number // $140
    }
  },
  trading: {
    // ONLY 30 active players
    rankings: Array<{
      rank: number,
      userId: string,
      username: string,
      tradingPnL: number,
      positionCount: number,
      winRate: number,
      avatar: string
    }>,
    yourRank: number | null, // null if passive tier
    totalPlayers: 30,
    prizePool: {
      first: number, // $1,680 example
      second: number, // $480
      third: number // $240
    },
    isEligible: boolean // false for passive, true for active
  },
  timestamp: Date
}

// WebSocket endpoint: Update every 5 seconds
wsClient.on('leaderboard_update', (data: LeaderboardUpdate) => {
  updatePatternLeaderboard(data.pattern);
  updateTradingLeaderboard(data.trading);
});
```

**Leaderboard UI Components:**

```
┌──────────────────────────────────────────────────┐
│ [Pattern Leaderboard] [Trading Leaderboard]      │
├──────────────────────────────────────────────────┤
│ Pattern Leaderboard (All 100 Players)            │
│                                                  │
│ Prize Pool: $1,400 (Top 3: $980/$280/$140)      │
│                                                  │
│ Rank | Player          | Grid Score | Tier      │
│──────|─────────────────|────────────|───────────│
│ 🥇   | @AnalystPro     | 4,850 XP   | Passive  │
│ 🥈   | @PatternKing    | 4,200 XP   | Active   │
│ 🥉   | @PredictMaster  | 3,950 XP   | Passive  │
│ 4    | @CryptoGuru     | 3,700 XP   | Active   │
│ 5    | @TraderJoe      | 3,500 XP   | Passive  │
│ ...  | ...             | ...        | ...      │
│                                                  │
│ Your Rank: #12 (3,100 XP) - PASSIVE TIER        │
│ Prize: Not in top 3 (need 850+ more XP)         │
└──────────────────────────────────────────────────┘
```

### 4.4 Spectator Feed System

**Data Transmission:**

```typescript
interface SpectatorUpdate {
  topTraders: Array<{
    userId: string,
    username: string,
    avatar: string,
    rank: number, // In trading leaderboard
    totalPnL: number, // Aggregate across all positions
    winRate: number, // % profitable closed positions
    lastTrade: {
      coin: string,
      direction: 'LONG' | 'SHORT',
      leverage: number,
      timestamp: Date,
      outcome: 'OPEN' | 'CLOSED',
      pnl: number | null // null if still open
    },
    followerCount: number,
    isLive: boolean // Green dot if actively trading
  }>,
  updateFrequency: number // 5 seconds
}

// Server broadcasts to all passive players
wsServer.broadcast('spectator_update', spectatorData);
```

**Privacy Controls:**

```
Default: Public (all stats visible)

Trader Settings:
┌──────────────────────────────────────┐
│ Spectator Settings                   │
├──────────────────────────────────────┤
│ ☑ Allow others to follow me          │
│   Show my trades to passive players  │
│                                      │
│ ☑ Show my stats publicly             │
│   Display PnL, win rate, follower #  │
│                                      │
│ ☐ Hide specific trade details       │
│   Only show aggregate PnL            │
│                                      │
│ ☐ Private mode (ghost trader)       │
│   Completely hide from spectators    │
└──────────────────────────────────────┘
```

### 4.5 Hyperliquid Integration

**Agent Wallet Management:**

```typescript
// Active tier only - automatic agent wallet creation
async function createActiveEntry(userId: string, competitionId: string) {
  // 1. Collect $100 entry fee from user
  await collectEntryFee(userId, 100);

  // 2. Create agent wallet (Hyperliquid SDK)
  const agentWallet = await hyperliquid.createAgentWallet({
    userId: userId,
    competitionId: competitionId
  });

  // 3. Request user to transfer $1,000 USDC to agent wallet
  const transferRequest = await requestUserTransfer({
    from: user.walletAddress,
    to: agentWallet.address,
    amount: 1000,
    token: 'USDC',
    purpose: 'TRADING_CAPITAL'
  });

  // 4. Wait for user transfer confirmation
  await waitForTransferConfirmation(transferRequest.id, {
    timeout: 300000, // 5 minutes
    onTimeout: () => {
      throw new Error('User did not fund agent wallet within time limit');
    }
  });

  // 5. Store agent wallet address and entry details
  await db.entries.create({
    userId: userId,
    competitionId: competitionId,
    tier: 'ACTIVE',
    entryFee: 100,
    tradingCapital: 1000,
    agentWalletAddress: agentWallet.address,
    capitalSource: 'USER_FUNDED'
  });

  return agentWallet;
}
```

**Trade Enforcement:**

```typescript
// Server-side trade validation
async function validateTrade(userId: string, trade: TradeRequest) {
  const entry = await db.entries.findOne({ userId, competition: { status: 'LIVE' } });
  
  // Verify tier
  if (entry.tier !== 'ACTIVE') {
    throw new Error('Passive players cannot trade');
  }
  
  // Verify coin is in roster
  const roster = entry.rosterData.coins.map(c => c.id);
  if (!roster.includes(trade.coinId)) {
    throw new Error('Can only trade rostered coins');
  }
  
  // Verify leverage limits
  const position = entry.rosterData.coins.findIndex(c => c.id === trade.coinId);
  const maxLeverage = position === 0 ? 20 : 10; // Captain vs regular
  
  if (trade.leverage > maxLeverage) {
    throw new Error(`Max ${maxLeverage}x leverage for this position`);
  }
  
  // Execute via agent wallet with builder code
  const result = await hyperliquid.executeTrade({
    agentWallet: entry.agentWalletAddress,
    builderCode: PLATFORM_BUILDER_CODE,
    trade: trade
  });
  
  return result;
}
```

**Settlement Price Source:**

```typescript
// Hyperliquid candle-based settlement
async function settleCompetition(competitionId: string) {
  const competition = await db.competitions.findOne({ id: competitionId });
  
  // Get candle close prices (authoritative source)
  const finalPrices = await hyperliquid.getCandleClose({
    timestamp: competition.endTime,
    interval: competition.duration // '1h', '4h', or '24h'
  });
  
  // Calculate market rankings
  const marketRanking = calculateMarketRanking(
    competition.baselinePrices,
    finalPrices
  );
  
  // Settle prizes
  await settlePatternPrizes(competitionId, marketRanking);
  await settleTradingPrizes(competitionId);
  await settleJackpots(competitionId, marketRanking);
}
```

### 4.6 Performance Requirements

**Real-Time Updates:**
- Price updates: Every 1 second (Hyperliquid WebSocket)
- Leaderboard updates: Every 5 seconds (both pattern + trading)
- PnL recalculation: Every 5 seconds (active players only)
- Spectator feed: Every 5 seconds (top 3 traders)
- Latency target: <100ms for UI updates

**Scalability Targets:**
- Concurrent competitions: 50+
- Players per competition: 130 max (100 passive + 30 active)
- Total concurrent players: 6,500+
- Database queries: <50ms average response time

**Data Integrity:**
- All roster selections immutable after lock-in
- Price snapshots stored from Hyperliquid (baseline + final)
- Complete trade history audit logs
- Prize distributions cryptographically signed

---

## 5. USER EXPERIENCE FLOWS

### 5.1 New User Onboarding

#### Passive Tier Onboarding (Recommended for First-Time Users)

**Step 1: Account Creation**
- Connect Hyperliquid wallet
- Profile setup (username, avatar)
- **NO builder code approval needed** ✅
- Tutorial prompt: "Learn how passive tier works?"

**Step 2: Interactive Tutorial (Optional)**
```
Tutorial Competition (Demo Mode):
1. "Pick 9 coins you think will move the most"
   → Guide: Drag SOL, BTC, HYPE into grid
   
2. "Rank them by expected performance"
   → Guide: SOL in position 0 (captain)
   
3. "Predict direction: UP or DOWN"
   → Guide: SOL UP, HYPE DOWN, BTC UP
   
4. "Competition starts! Watch prices update"
   → Show 2-minute accelerated competition
   → NO TRADING PANEL (passive view only)
   
5. "Watch the top active traders"
   → Show spectator feed (simulated traders)
   → "These players are trading live to win Trading Prizes"
   
6. "Competition ends! See your results"
   → Show pattern prize (top 3 by grid score)
   → Highlight: "You won $140 pattern prize! (3rd place)"
   → Display: "Want to trade next time? Upgrade to Active tier"
```

**Step 3: First Real Passive Competition**
- Entry: $25 USDC
- Duration: 1-hour recommended (quick feedback loop)
- Bonus: [CLARITY REQUIRED - First game incentive structure]

**Time to First Competition:** 2-5 minutes

#### Active Tier Onboarding (For Experienced Traders)

**Steps 1-3: Account creation + builder code approval + agent wallet**
(See Section 2.2 for detailed flow)

**Step 4: Interactive Tutorial (Optional)**
```
Tutorial Competition (Demo Mode):
1-3. [Same as passive: pick, rank, predict]
   
4. "Competition starts! Start trading"
   → Show trading panel (LONG/SHORT buttons)
   → Guide: "Open LONG SOL 20x position"
   → Demo wallet has $1,000 practice capital
   → **Note: In real competitions, YOU provide the $1,000 trading capital**

5. "Manage your positions"
   → Guide: "Close SOL position for +$120 profit"
   → Show PnL tracking

6. "Competition ends! See BOTH leaderboards"
   → Show trading prize: "You won $1,680! (1st by PnL)"
   → Show pattern prize: "You won $280! (2nd by grid score)"
   → Total: "$1,960 + kept your $120 trading profit!"
   → "Your single $100 entry competed in BOTH games!"
```

**Time to First Competition:** 5-10 minutes (includes builder code approval)

### 5.2 Experienced User Flows

#### Passive Player Regular Flow

**Pre-Game:**
1. Check competition schedule
2. Review category (L1 Chains vs Memes vs DeFi)
3. Research coins (24hr performance, news, sentiment)
4. Load previous successful rosters (presets)
5. Enter passive tier 15 minutes early

**During Competition:**
1. Monitor live price movements
2. Watch active traders' strategies (spectator feed)
3. Learn from profitable trades
4. Check pattern leaderboard position
5. Identify jackpot eligibility

**Post-Competition:**
1. Review pattern leaderboard results
2. Analyze: Where did predictions fail?
3. Study: Which active traders won? What strategies?
4. Consider: "Am I ready to try active tier?"
5. Plan next roster OR upgrade to active

#### Active Player Regular Flow

**Pre-Game:**
1. Check competition schedule
2. Review category + market volatility
3. Research coins + plan trading strategy
4. Load previous roster presets
5. Enter active tier 15 minutes early

**During Competition:**
1. Execute trading strategy with $1,000 capital
2. Monitor BOTH leaderboards:
   - Pattern (vs 100 players)
   - Trading (vs 30 active players)
3. Adjust positions based on market movements
4. Balance: Trading PnL vs Pattern score
5. Prioritize which prize pool?

**Post-Competition:**
1. Review BOTH leaderboard results
2. Analyze trading performance:
   - Which trades profitable?
   - Where did strategy fail?
   - Win rate analysis
3. Analyze pattern performance:
   - Prediction accuracy
   - Ranking errors
4. Review spectator engagement (followers gained)
5. Plan next strategy

### 5.3 Conversion Funnel (Passive → Active)

**Week 1: Discovery (Passive Entry)**
```
User Journey:
• Hears about "DraftKings for Crypto" 
• Signs up, connects wallet
• Enters first passive competition ($25)
• Builds roster, locks predictions
• Watches competition unfold
• Wins $140 (3rd place pattern prize!)

Psychological State:
✅ "This is fun! I'm good at predictions"
✅ "I understand the game mechanics"
✅ "I made 5x my money back!"
❓ "What are those active traders doing?"
```

**Week 2: Observation (Spectator Mode)**
```
User Journey:
• Enters 3-5 more passive competitions
• Actively watches spectator feed
• Sees @CryptoKing win $1,680 + $800 PnL
• Clicks "Follow Trader" to study strategy
• Notices: "He goes LONG on predicted UP coins"
• Realizes: "I could do that..."
• Sees: "His $100 entry competed in BOTH games!"

Psychological State:
✅ "My predictions are often correct"
✅ "Active traders aren't doing magic"
❓ "What if I could trade AND predict?"
💡 "I'd win from BOTH leaderboards with one entry!"
```

**Week 3: Temptation (Upgrade CTAs)**
```
User Journey:
• Wins passive pattern prize ($280, 2nd place)
• Results screen shows upgrade CTA
• Sees: "$2,400 trading pool ÷ 30 = $80 avg"
• Math: "3x better odds than pattern!"
• Realizes: "I'm confident in predictions"
• Notices: "$100 entry = BOTH games + jackpots!"

Psychological State:
✅ "I've watched enough traders"
💰 "The math makes sense"
💡 "One entry, two chances to win!"
🎯 Decision: "Let me try active once"
```

**Week 4: Conversion (First Active Entry)**
```
User Journey:
• Clicks "Enter Active Competition"
• Builder code approval (5 minutes)
• Agent wallet created automatically
• Enters first active ($100)
• Executes 5-8 trades during competition
• Wins $240 trading + $140 pattern + $120 PnL
• Total: $500 from $100 (5x return!)

Psychological State:
🎉 "I did it! I'm an active trader!"
✅ "Trading isn't scary"
💡 "I won from BOTH leaderboards!"
💪 "Next time I'll do better"
🔁 "I'm hooked - entering more"
```

**Conversion Optimization Tactics:**

**1. Results Screen CTAs:**
```
┌──────────────────────────────────────────────────┐
│ You won $280 (2nd place)! 🎉                     │
├──────────────────────────────────────────────────┤
│ 🚀 READY FOR MORE?                               │
│                                                  │
│ You dominated the pattern leaderboard!           │
│ Want bigger prizes?                              │
│                                                  │
│ 🔥 Upgrade to ACTIVE tier ($100):                │
│    • Single entry = BOTH games simultaneously    │
│    • Trade live with $1,000 capital              │
│    • Win from BOTH leaderboards                  │
│    • Keep trading profits                        │
│    • FULL jackpot eligibility                    │
│                                                  │
│ First active: BUILDER FEES WAIVED ✅             │
│                                                  │
│ [Upgrade to Active →] [Play Passive Again]       │
└──────────────────────────────────────────────────┘
```

**2. Spectator Feed Nudges:**
```
┌──────────────────────────────────────────────────┐
│ 🔴 LIVE: @CryptoKing just won $1,680 + $890!    │
│                                                  │
│ You're watching from Passive tier.               │
│ His $100 entry competed in BOTH games!           │
│ Ready to compete for Trading Prizes?             │
│                                                  │
│ [Upgrade to Active - $100] [Not Yet]             │
└──────────────────────────────────────────────────┘
```

**3. Email Campaigns:**
```
Subject: You're in the top 10%! Try Active?

Hey @PatternMaster,

You ranked #8/100 in L1 Chains 4hr. That's top 10%! 🏆

Active players in this comp won:
• Trading Prize: $1,680 (1st)
• Pattern Prize: $280 (2nd - also active!)
• Avg PnL: +$250

Remember: $100 entry = BOTH games simultaneously
• Compete in trading leaderboard
• Compete in pattern leaderboard
• Full jackpot eligibility
• Keep all trading profits

Your next step:
[Try Your First Active Competition] ← 50% off ($50 entry!)

See you in the arena,
Battle Grid Team
```

**Target Conversion Rate:** 10-15% of passive players convert to active within 90 days

---

## 6. COMPETITION TYPES & SCHEDULING

### 6.1 Duration-Based Competitions

**1-Hour Rapid Fire:**
- Start times: Every hour on the hour
- Entry fee: Passive $25 | Active $100
- Target: Quick decision-makers, scalpers
- Best for: High volatility periods

**4-Hour Strategic:**
- Start times: Every 4 hours (12AM, 4AM, 8AM, 12PM, 4PM, 8PM UTC)
- Entry fee: Passive $25 | Active $100
- Target: Balanced players (analysis + execution)
- Best for: Intraday trends

**24-Hour Marathon:**
- Start time: Daily at 12:00 AM UTC
- Entry fee: [CLARITY REQUIRED - Premium tier pricing?]
- Target: Long-term strategists
- Best for: Daily/swing traders

### 6.2 Category-Specific Competitions

**By Market Sector (Hyperliquid-listed coins only):**

**1. L1 Chains Arena**
- Coins: BTC, ETH, SOL, AVAX, BNB, ADA, DOT, ATOM, NEAR, etc.
- Characteristics: Lower volatility, higher liquidity
- Strategy: Fundamental analysis matters
- Eligibility: $10M+ volume, $10M+ market cap on Hyperliquid

**2. Meme Coins Arena**
- Coins: DOGE, SHIB, PEPE, WIF, BONK, FLOKI, etc.
- Characteristics: Extreme volatility, sentiment-driven
- Strategy: Social media monitoring, momentum trading
- Eligibility: Active Hyperliquid perpetuals market

**3. DeFi Arena**
- Coins: UNI, AAVE, MKR, SNX, CRV, COMP, etc.
- Characteristics: Moderate volatility, protocol-driven
- Strategy: TVL analysis, protocol events
- Eligibility: Active Hyperliquid perpetuals market

**4. AI/Gaming Arena**
- Coins: FET, RNDR, SAND, AXS, IMX, etc.
- Characteristics: Narrative-driven, sector rotation
- Strategy: Trend identification
- Eligibility: [CLARITY REQUIRED - Does Hyperliquid list these?]

**Critical:** All categories limited to coins actively traded on Hyperliquid DEX. Delisted coins become immediately ineligible.

### 6.3 Competition Entry Restrictions (MVP)

**ONE COMPETITION AT A TIME:**

```
MVP Rule: Players can only enter ONE active competition at a time

Entry Logic:
• User not in any competition → Can enter one (passive OR active)
• User in passive competition → BLOCKED from entering another
• User in active competition → BLOCKED from entering another
• Competition ends → Can immediately enter next

Example:
12:00 PM: Player enters Passive L1 Chains 4hr (ends 4:00 PM)
12:30 PM: Tries to enter Meme Coins 1hr → BLOCKED
4:00 PM: L1 Chains ends
4:01 PM: Can enter new competitions

Technical Reason:
• Simplifies agent wallet management (one wallet per user)
• Prevents position conflicts (same coin in multiple competitions)
• Ensures clean PnL isolation for settlement
• Concentrates liquidity (all users in same competitions)
```

**Post-MVP Enhancement:**
```
PASSIVE PLAYERS:
• Unlimited passive competitions simultaneously
• No agent wallet conflicts

ACTIVE PLAYERS:
• ONE active competition at a time
• Unlimited passive competitions simultaneously
• Requires separate agent wallet per active competition
• HyperEVM smart contracts enable multi-wallet management
```

### 6.4 Minimum Player Thresholds

**Competition Start Requirements:**

```
Competition starts if ALL conditions met:
✅ Total players ≥ 20 (across both tiers)
✅ Passive players ≥ 5 (minimum tier representation)
✅ Active players ≥ 5 (minimum tier representation)

Examples:

✅ 15 passive + 5 active = 20 total → STARTS
❌ 18 passive + 2 active = 20 total → CANCELLED (active < 5)
❌ 70 passive + 0 active = 70 total → CANCELLED (need both tiers)
✅ 5 passive + 30 active = 35 total → STARTS
✅ 100 passive + 30 active = 130 total → STARTS (ideal)

Rationale:
• 20 total = Critical mass for competitive dynamics
• 5 per tier = Minimum for meaningful leaderboards
• Both tiers required = Full product experience (spectator feature needs active traders)
```

**Cancellation Process:**

```typescript
async function checkCompetitionViability(competitionId: string) {
  const competition = await getCompetition(competitionId);
  const passiveCount = competition.entries.filter(e => e.tier === 'PASSIVE').length;
  const activeCount = competition.entries.filter(e => e.tier === 'ACTIVE').length;
  const totalCount = passiveCount + activeCount;
  
  const canStart = 
    totalCount >= 20 &&
    passiveCount >= 5 &&
    activeCount >= 5;
  
  if (!canStart && minutesUntilStart <= 5) {
    // Cancel competition
    await cancelCompetition(competitionId, {
      reason: 'INSUFFICIENT_PLAYERS',
      details: { total: totalCount, passive: passiveCount, active: activeCount }
    });
    
    // Refund all entry fees
    await refundAllEntries(competitionId);
    
    // Notify participants
    await notifyParticipants(competitionId, {
      message: 'Competition cancelled - insufficient players. Your entry fee has been refunded.'
    });
  }
  
  return { canStart, passiveCount, activeCount, totalCount };
}
```

**Grace Period Notifications:**

```
30 minutes before:
"L1 Chains 4hr starting soon! 
Currently: 18 passive, 3 active (need 5 active)
Invite friends!"

15 minutes before:
"⚠️ May cancel if we don't reach 5 active
Currently: 18 passive, 4 active (need 1 more)
[Invite Friend] [Switch to Active]"

5 minutes before (if under):
"Competition cancelled - insufficient players
Your $25 refunded
Next competition: 4:00 PM"
```

---

## 7. MVP SCOPE & ROADMAP

### 7.1 MVP Features (12-Week Development Sprint)

**Phase 1: Passive Tier Only (Weeks 1-4)**

**Goal:** Validate DFS market demand without trading complexity

**Deliverables:**
1. Roster builder UI (3x3 grid, drag-and-drop)
2. Pattern scoring algorithm (direction + ranking + patterns)
3. Pattern prize distribution (top 3 by XP)
4. Jackpot mechanics (perfect grid + pattern bonus)
5. Hyperliquid wallet integration (entry fee payments)
6. Competition lobby + pattern leaderboard
7. Results screen (passive template with upgrade CTA)

**NOT Included:**
- Active tier
- Trading features
- Spectator features
- Builder code integration
- Trading leaderboard

**Target:** 1,000 registered passive players, 50+ competitions filled

**Validation Metrics:**
- D1 retention: 60%+ (passive players return next day)
- Avg competitions per user: 3+ per week
- Roster completion rate: 85%+ (lock roster after building)

---

**Phase 2: Active Tier (Weeks 5-8)**

**Goal:** Validate active trader demand in PARALLEL

**Deliverables:**
1. Builder code approval flow (one-time setup)
2. Agent wallet creation + user capital transfer flow ($1,000 USDC user-funded)
3. Live trading interface (LONG/SHORT buttons)
4. Position management (leverage selection, close positions)
5. Real-time PnL tracking
6. Trading prize distribution (top 3 by PnL)
7. Results screen (active template)
8. Capital withdrawal system (post-competition recovery)

**NOT Included:**
- Dual-track (still separate passive and active competitions)
- Spectator features
- Dual leaderboards

**Target:** 200 registered active players, 10+ competitions filled

**Validation Metrics:**
- Builder code approval rate: 90%+ (low friction)
- Average trades per competition: 5+ per player
- Trading capital utilization: 60%+ (players actively trade)

---

**Phase 3: Merge Dual-Track (Weeks 9-12)**

**Goal:** Launch combined passive + active competitions (FULL PRODUCT)

**Deliverables:**
1. Separate prize pools (pattern from passive, trading from active)
2. Dual leaderboards (tabbed UI):
   - Pattern leaderboard (all 100 players)
   - Trading leaderboard (30 active players only)
3. Spectator features (passive players watch active traders)
4. "Follow Trader" button + trade history view
5. Upgrade CTAs (passive → active conversion prompts)
6. Analytics dashboard (track tier conversion rates)

**NEW Features:**
- Spectator feed (top 3 traders displayed live)
- Post-game trade replays
- Trader profiles (win rate, avg PnL, followers)
- Tier-specific result screens with upgrade prompts

**Target:** 100 total players per competition (70 passive + 30 active)

**Launch Metrics:**
- Competition fill rate: 80%+ (20 total minimum to start)
- Passive → Active conversion: 5-10% within 30 days
- Spectator engagement: 60%+ passive players watch traders

---

**Phase 4: Social & Retention (Month 4-6)**

**Goal:** Build community and increase retention

**Features:**
- Trader reputation system (followers, win rate badges, verified status)
- Content generation (highlight clips, "Best Trade of Day")
- Roster presets (clone successful strategies, save favorites)
- Achievements & progression (lifetime XP, skill matchmaking, tier badges)

---

**Phase 5: Scale & Optimize (Month 7-12)**

**Goal:** Scale to multiple competitions and categories

**Features:**
- Multiple concurrent competitions (3x passive, 3x active, staggered)
- MoonPay integration (credit card entry for passive players only)
- Advanced features (private matches, tournaments, mobile app)

### 7.2 MVP Exclusions (Post-Launch)

**NOT in MVP:**
- ❌ Salary cap system
- ❌ Category requirements (e.g., "must pick 2 from each category")
- ❌ Social features (chat, friends, groups)
- ❌ Advanced analytics (win rate history, prediction tracking)
- ❌ Multiple concurrent entries per user
- ❌ Mobile app (iOS + Android)
- ❌ Credit card payments (MoonPay)
- ❌ Tournament brackets
- ❌ Sponsored competitions

---

## 8. SUCCESS METRICS

### 8.1 Key Performance Indicators

**Passive Tier Metrics:**

User Acquisition:
- Daily Active Passive Users: Target 500 by Month 3
- Monthly Active Passive Users: Target 5,000 by Month 3
- New Passive Retention: D1=60%, D7=40%, D30=25%

Engagement:
- Competitions per passive user per day: Target 2-4
- Roster completion rate: Target 90%
- Spectator engagement: Target 70% (watch active traders)
- Repeat play rate: Target 65%

Monetization:
- Average passive entry: $25
- Competitions per day: Target 24
- Avg passive players per comp: Target 70
- Daily passive gross: Target $42,000
- Monthly passive gross: Target $1.26M
- Platform rake (10%): Target $126K/month

---

**Active Tier Metrics:**

User Acquisition:
- Daily Active Traders: Target 100 by Month 3
- Monthly Active Traders: Target 1,000 by Month 3
- New Active Retention: D1=70%, D7=50%, D30=35%

Engagement:
- Competitions per active user per day: Target 1-2
- Trading participation rate: Target 90% (open at least 1 trade)
- Average trades per competition: Target 8-12 per player
- Repeat play rate: Target 75%

Monetization:
- Average active entry: $100
- Competitions per day: Target 24
- Avg active players per comp: Target 30
- Daily active gross: Target $72,000
- Monthly active gross: Target $2.16M
- Platform rake (10%): Target $216K/month
- Builder code fees (5 bps): Target $5K/month
- Total active revenue: Target $221K/month
- Note: Single entry competes in BOTH games (trading + pattern)

---

**Combined Metrics:**

Total Monthly Revenue:
- Passive rake: $126K (38%)
- Active rake: $216K (61%)
- Builder fees: $5K (1%)
- **Total: $347K/month ($4.16M annually)**

User Conversion:
- Passive → Active conversion: Target 10-15% within 90 days
- Expected conversions: 500-750 active players from passive cohort

Competition Metrics:
- Competitions per day: 24 (hourly schedule)
- Average fill rate: 80%
- Cancellation rate: <5% (insufficient players)
- Average size: 90 total players (63 passive + 27 active)

---

**Game Balance Metrics:**

Pattern Prize Distribution:
- Top 10% win rate: <30% of pattern prizes (fair distribution)
- Passive winner rate: 60-70% of pattern prizes
- Active winner rate: 30-40% of pattern prizes

Trading Prize Distribution:
- Top 10% win rate: <40% of trading prizes
- Average trading PnL: $100-$300 (positive but not extreme)
- Liquidation rate: <5% per competition

Jackpot Metrics:
- Perfect Grid win rate: <1% of competitions (extremely rare)
- Average rollover size: $5K-$10K (grows over 20-50 competitions)
- Pattern Bonus: 100% awarded every competition
- Jackpot badge rate: 10-15% (row + column complete)

Spectator Engagement:
- Passive players watching traders: 70%+
- Average watch time: 15+ minutes per competition
- "Follow Trader" clicks: 40% of passive players

---

## 9. GO-TO-MARKET STRATEGY

### 9.1 Launch Plan

**Soft Launch (Week 1-2):**
- Invite-only beta (50 Hyperliquid power users)
- Passive tier only, $25 entry
- 1-hour competitions (L1 Chains category)
- Feedback collection and iteration

**Public Beta (Week 3-4):**
- Open to 500 users
- Passive tier only
- Add 4-hour competitions
- Guaranteed minimum fill [CLARITY REQUIRED]

**Full Launch (Week 5+):**
- Public access, no limits
- Both passive and active tiers (separate competitions initially)
- Marketing campaign launch
- Referral program activation

### 9.2 User Acquisition Channels

**Primary:**

1. **Existing Hyperliquid Community**
   - Discord announcements
   - Trading competition crossover
   - Passive tier: "Try DFS for crypto"
   - Active tier: "Compete against best traders"

2. **Crypto Twitter/X**
   - Passive tier: "DraftKings for crypto" messaging
   - Active tier: "Prove you're the best trader"
   - Jackpot announcements ("$15K Perfect Grid Jackpot!")
   - Viral winner stories

3. **Discord Communities**
   - Trading servers (Hyperliquid, dYdX)
   - Fantasy sports servers (DFS crossover)
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

**Passive Tier Messaging:**
> "DraftKings for Crypto: Pick 9 coins, predict their movements, win prizes. No trading required."

**Active Tier Messaging:**
> "Compete Against the Best Traders: Trade live with $1,000 capital, win from TWO leaderboards, keep your profits."

**Key Messages:**
- ✅ **Passive**: "Fantasy sports you know, crypto markets you understand"
- ✅ **Active**: "Combine fantasy sports strategy with live crypto trading"
- ✅ "Choose your tier: Predict only OR Trade + Predict"
- ✅ "Skill-based competition: Analysis (passive) OR Execution (active)"

**Comparison to Existing Products:**

vs **DraftKings Pick6:**
- ✅ Same roster building mechanics
- ✅ But with crypto markets (24/7, more volatile)
- ✅ Plus spectator layer (watch live traders)
- ✅ Upgrade path (passive → active)

vs **Polymarket:**
- ✅ Active execution (trade instead of hold)
- ✅ Community element (follow traders, learn)
- ✅ Guaranteed prizes (top 3 always win)

vs **Bybit/Binance Trading Competitions:**
- ✅ Lower barrier (passive tier for non-traders)
- ✅ Standardized capital ($1,000 per player)
- ✅ Prediction layer (roster building strategy)

---

## 10. RISK MITIGATION & EDGE CASES

### 10.1 Gameplay Risks

**Risk: Roster Fatigue**
- Problem: Picking 9 coins every hour is exhausting
- Mitigation:
  - Roster presets (save up to 5 templates)
  - "Quick Entry" button (uses last roster)
  - Auto-suggest rosters based on trending coins

**Risk: Passive Players Never Convert**
- Problem: Users stay in passive tier indefinitely
- Mitigation:
  - Spectator feed (show active trader winnings)
  - Upgrade CTAs in results screens
  - Email campaigns targeting high performers
  - Time-limited upgrade offers
  - Acceptable outcome: Passive tier profitable standalone

**Risk: Active Players Dominate Pattern Prizes**
- Problem: Active players win most pattern prizes
- Mitigation:
  - Separate prize pools (passive contributes to pattern pool)
  - Active players focus on trading pool (better odds: 30 vs 100)
  - Both tiers have positive EV in their primary competitions

### 10.2 Technical Edge Cases

**Edge Case #1: All Top 3 Pattern Winners are Passive**
```
Scenario: Passive players rank #1, #2, #3 in pattern leaderboard
Active complaint: "We paid more but didn't win pattern!"

Resolution:
✅ Active players have separate $1,800 trading pool
✅ Active players compete in BOTH leaderboards (2x chances)
✅ Active players keep trading PnL (separate income)
✅ Communication: Results screen emphasizes total winnings
```

**Edge Case #2: Active Player Wins Trading Prize But Loses Money**
```
Scenario:
• Wins 3rd place trading prize ($240)
• Has -$150 trading PnL (bad trades)
• Net: +$90 from $100 entry
• BUT: Also competed in pattern leaderboard (potential additional prize)

Resolution:
✅ Trading prizes based on RELATIVE PnL rank
✅ Player ranked better than 27 others (skill demonstrated)
✅ Communication: Separate prize from PnL clearly
✅ Highlight: Still had pattern leaderboard opportunity
```

**Edge Case #3: No Active Players Enter**
```
Scenario: 70 passive players, 0 active players
5 minutes before start

Resolution:
❌ Competition CANCELLED (minimum 5 active required)
✅ All passive players refunded $25
✅ Notification: "Competition cancelled - insufficient active players"

Rationale:
• Spectator feature requires active traders
• Product experience incomplete without both tiers
```

**Edge Case #4: Coin Delisting Mid-Competition**
```
Scenario: Hyperliquid halts trading on a coin during active competition

Resolution:
❌ Competition becomes VOID immediately
✅ All entry fees refunded
✅ All trades reversed/settled at last price (Hyperliquid policy)
✅ Next competition uses updated coin index
✅ Announcement: "Competition cancelled due to [COIN] trading halt"
```

**Edge Case #5: Player Liquidation**
```
Scenario: Active player liquidated during competition

Resolution:
✅ Player's PnL at liquidation = final trading score
✅ Example: Liquidated at -$500 → Trading PnL = -$500
✅ Player ranks based on liquidation PnL
✅ Grid score still calculated normally
✅ Can still win Pattern/Perfect Grid Jackpot
```

### 10.3 Fairness & Anti-Cheating

**Measures:**

1. **Roster Lock-In Immutable**
   - All selections stored in database at lock-in time
   - No modifications after lock-in
   - Transparent audit logs

2. **Price Data Integrity**
   - ✅ Single authoritative source: Hyperliquid DEX
   - ✅ Settlement from Hyperliquid candles (1hr, 4hr, 24hr)
   - ✅ Price snapshots on-chain (Hyperliquid blockchain)
   - ✅ No price manipulation possible

3. **External Trading Detection (PRIMARY ANTI-CHEAT)**
   - ✅ **ONLY trades with platform builder code count**
   - ✅ All trades tracked on-chain via Hyperliquid API
   - ✅ External trades (without builder code) = disqualification
   - ✅ Detection: Builder code verification on all fills

4. **Rate Limiting**
   - Max 20 trades per minute (prevents spam)
   - Max 100 total trades per competition (prevents API abuse)
   - Cooldown between position opens (1 second)

---

## 11. APPENDICES

### Appendix A: Glossary of Terms

**Captain:** The coin placed in position 0 (top-left). Has special bonuses:
- 300 XP for exact ranking match (vs 100 XP)
- 20x leverage in Active tier (vs 10x)
- Part of Row 0, Column 0, and main diagonal

**Grid Score (XP):** Points earned from prediction accuracy:
- Direction Score: 100 XP per correct UP/DOWN (max 900 XP)
- Ranking Score: 300 XP captain exact, 100 XP others (max 1,100 XP)
- Pattern Bonuses: Complete rows (800 XP), columns (800 XP), diagonals (1500 XP)
- Maximum: 9,800 XP (perfect predictions + all patterns)

**Trading PnL:** Profit/Loss from live trading (active tier only):
- Realized PnL: Closed positions
- Unrealized PnL: Open positions at settlement
- Determines Trading Prize winner

**Jackpot Pool:** 10% of all entry fees, split into two jackpots:
- Perfect Grid Jackpot (50%): Exact roster ranking match (can roll over)
- Pattern Bonus Jackpot (50%): Highest grid score (always awarded)

**Tier:** Competition participation level:
- Passive: $25 entry, predictions only, pattern prizes
- Active: $100 entry, trading + predictions, both prizes + full jackpot access

**Agent Wallet:** Platform-managed Hyperliquid wallet for active traders:
- Created automatically per competition
- **User deposits $1,000 USDC** to this wallet (user's own capital)
- All trades executed via this wallet
- User withdraws remaining capital post-competition

**Builder Code:** Platform identifier on Hyperliquid:
- Required for trade verification
- Collects up to 10 bps fee on active trading volume
- One-time user approval needed

---

### Appendix B: Pattern Score Calculation Example

[COMPLETE TECHNICAL EXAMPLE - See Section 2.5 Grid Score Calculation for full implementation]

---

### Appendix C: Comparison to Existing Products

**vs DraftKings Pick6:**
| Feature | DraftKings Pick6 | Battle Grid Passive | Battle Grid Active |
|---------|------------------|---------------------|-------------------|
| Roster Building | ✅ Yes | ✅ Yes | ✅ Yes |
| Predictions | ✅ Yes | ✅ Yes | ✅ Yes |
| Live Execution | ❌ No | ❌ No | ✅ Yes (Trading) |
| Entry Fee | $1-$100 | $25 | $100 |
| Prize Structure | Fixed | Pattern Pool | BOTH Pools |
| Games Accessible | 1 | 1 | 2 (Pattern+Trading) |
| Market | Sports | Crypto | Crypto |
| Spectator Mode | ❌ No | ✅ Yes | N/A |
| Upgrade Path | ❌ No | ✅ To Active | N/A |

**vs Polymarket:**
| Feature | Polymarket | Battle Grid |
|---------|-----------|-------------|
| Prediction Type | Binary outcomes | Directional + Ranking |
| Execution | Passive holding | Active trading (active tier) |
| Time Horizon | Event-based | Fixed (1hr, 4hr, 24hr) |
| Prize Type | Variable | Guaranteed top 3 |
| Community | Isolated | Spectator + Follow Traders |
| Skill Factor | Analysis | Analysis + Execution |

---

## CONCLUSION

Battle Grid V2 introduces a revolutionary dual-track competition model that:

✅ **Expands addressable market** by 6-12x (60M DFS players vs 500K crypto traders)
✅ **Eliminates platform capital risk** (users provide their own trading capital)
✅ **Creates natural upgrade funnel** (spectate → participate conversion)
✅ **Maintains positive unit economics** for both tiers (passive: competitive EV, active: highly positive EV)
✅ **Builds social engagement** through spectator feeds and trader profiles
✅ **Dual-revenue streams** (entry fees + builder code fees from active traders)

**Development Timeline:** 12-week MVP sprint
**Target Launch:** Q1 2026
**Confidence Level:** HIGH - Clear scope, validated dual-track economics, reuses proven Hyperliquid infrastructure

---

**Document Status:** ✅ READY FOR DEVELOPMENT  
**Next Milestone:** Phase 1 - Passive Tier MVP (Weeks 1-4)  
**Estimated Monthly Revenue (Month 3):** $293K ($3.5M annually)

---

*End of Battle Grid V2 Product Specifications*