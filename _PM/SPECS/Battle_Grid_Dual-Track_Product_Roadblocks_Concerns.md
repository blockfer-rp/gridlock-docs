# Battle Grid Dual-Track: Product Roadblocks & Concerns

## 🚨 CRITICAL BLOCKERS (Must Resolve Before Proceeding)

### 1. **Trading Capital Requirement Conflict**

**Current Spec:**
> "Trading Capital: $1,000 USDC per player per competition (standardized, separate from entry fees)"

**Dual-Track Problem:**
- ❌ Passive players don't trade → Why would they need $1,000 USDC?
- ❌ If passive players MUST have $1,000, you've eliminated 90% of DFS addressable market
- ❌ If passive players DON'T need $1,000, settlement logic breaks

**Implications:**
```
Scenario A: Passive players need $1,000
→ Entry barrier: $1,025 ($25 entry + $1,000 capital)
→ No different from current design
→ Dual-track benefits = ZERO

Scenario B: Passive players need $0 capital
→ Platform must handle two settlement paths
→ Prize pool must separate trading vs pattern
→ Leaderboard shows $0 PnL for 70% of players
```

**RESOLUTION NEEDED:**
- [ ] Do passive players need ANY trading capital?
- [ ] If no, how does platform provide capital to active players only?
- [ ] Does platform track "capital provided" vs "entry fee paid" separately?

---

### 2. **Hyperliquid Integration Dependency**

**Current Spec:**
> "All competition trades tagged with platform builder code (fee collected per-order on-chain)"
> "Users approve builder fee (one-time ApproveBuilderFee action, signed by main wallet)"

**Dual-Track Problem:**
- ❌ Passive players have ZERO trades → Builder code approval is meaningless
- ❌ But entry fees must be paid somehow → Does this require Hyperliquid wallet?
- ❌ If Hyperliquid wallet required for passive, onboarding friction kills DFS conversion

**Onboarding Flow Issues:**
```
Current Design (Active Only):
1. Connect Hyperliquid wallet
2. Approve builder code (10 bps fee)
3. Platform creates agent wallet
4. Pay entry fee from main wallet
5. Platform funds agent wallet with $1,000 trading capital

Dual-Track Design (Passive):
1. Connect Hyperliquid wallet? ← FRICTION
2. Approve builder code? ← MEANINGLESS (0 trades)
3. Agent wallet? ← NOT NEEDED
4. Pay entry fee from main wallet? ← ONLY STEP NEEDED
5. No trading capital needed

⚠️ DFS players expect: Email signup + credit card
⚠️ Battle Grid passive requires: Crypto wallet + USDC
```

**RESOLUTION NEEDED:**
- [ ] Can passive players use credit card payment? (Stripe/Coinbase Commerce?)
- [ ] Do passive players need Hyperliquid wallet at all?
- [ ] If yes to Hyperliquid, how do you minimize onboarding friction?

---

### 3. **Prize Pool Distribution Logic**

**Current Spec:**
> "Entry Fee Split: 90% to trading pool, 5% to platform, 5% to jackpot pool"
> "Trading Prize Pool (90%): Top 3 PnL winners split 70%/20%/10%"

**Dual-Track Problem:**
- ❌ Passive players can't win trading prizes (they have $0 PnL)
- ❌ But their $25 entry fees go into trading pool
- ❌ This means passive players subsidize active traders

**Example Math:**
```
Competition:
• 70 passive @ $25 = $1,750
• 30 active @ $75 = $2,250
• Total: $4,000

Current Spec Distribution:
• Trading Pool (90%): $3,600
  → Only 30 active players can win this
  → Passive players contributed $1,575 to pool they can't win
  
• Jackpot Pool (5%): $200
  → All 100 players can win this
  
• Platform (5%): $200
```

**This is fundamentally unfair:**
- Passive players pay $25 → Only 5% ($1.25) goes to prizes they can win
- Active players pay $75 → 95% ($71.25) goes to prizes they can win

**RESOLUTION NEEDED:**
- [ ] Separate prize pools entirely? (Passive pool vs Active pool)
- [ ] Adjust entry fee split based on tier?
- [ ] Use weighted contribution model?

**Proposed Fix:**
```
Split passive and active entry fees:

Passive Entry ($25):
• 80% → Pattern Prize Pool ($1,400 from 70 players)
• 10% → Jackpot Pool (all players eligible)
• 10% → Platform

Active Entry ($75):
• 80% → Trading Prize Pool ($1,800 from 30 players)
• 10% → Jackpot Pool (all players eligible)
• 10% → Platform

Jackpot Pool: $1,750 + $2,250 × 10% = $400 total
• 50% Perfect Grid: $200 (any player can win)
• 50% Pattern Winner: $200 (any player can win)
```

---

### 4. **Leaderboard Ranking Logic**

**Current Spec:**
> "Live leaderboard updates every 5 seconds (shows XP score + trading PnL)"

**Dual-Track Problem:**
```
Live Leaderboard Display:

Rank | Player          | Trading PnL | Grid Score
-----|-----------------|-------------|------------
1    | @CryptoKing     | +$890       | 2,450 XP
2    | @DiamondHands   | +$720       | 3,100 XP
3    | @Passive_Joe    | $0.00       | 3,850 XP  ← CONFUSING
4    | @ScalpMaster    | +$650       | 2,200 XP
5    | @Passive_Sarah  | $0.00       | 3,400 XP  ← CONFUSING
```

**Questions:**
- How do you rank passive players with $0 PnL?
- Do they show on same leaderboard as active traders?
- Is it confusing to see $0.00 next to +$890?

**RESOLUTION NEEDED:**
- [ ] Separate leaderboards entirely?
- [ ] Combined leaderboard with tier labels?
- [ ] Hide PnL column for passive players?

**Proposed Fix: Tabbed Leaderboards**
```
┌────────────────────────────────────────┐
│ [Pattern Leaderboard] [Trading Leaderboard] │
├────────────────────────────────────────┤
│ Pattern Leaderboard (All 100 Players)  │
│                                        │
│ 🥇 @Passive_Joe     3,850 XP (Passive)│
│ 🥈 @Passive_Sarah   3,400 XP (Passive)│
│ 🥉 @DiamondHands    3,100 XP (Active) │
│ 4. @CryptoKing      2,450 XP (Active) │
│ 5. @ScalpMaster     2,200 XP (Active) │
└────────────────────────────────────────┘

┌────────────────────────────────────────┐
│ Trading Leaderboard (30 Active Only)   │
│                                        │
│ 🥇 @CryptoKing      +$890 PnL         │
│ 🥈 @DiamondHands    +$720 PnL         │
│ 🥉 @ScalpMaster     +$650 PnL         │
│ 4. @TraderJoe       +$580 PnL         │
│ 5. @Whale           +$520 PnL         │
└────────────────────────────────────────┘
```

---

### 5. **Competition Entry Restriction Ambiguity**

**Current Spec:**
> "One Competition at a Time: Players can only enter ONE active competition at a time"

**Dual-Track Ambiguity:**
- Does "active" mean "active tier" or "currently running"?
- Can a player enter passive competition while in active competition?
- Can a player enter multiple passive competitions simultaneously?

**Scenarios:**
```
Scenario A: User enters passive 4hr competition at 12pm
Question: Can they enter active 1hr competition at 1pm?
Current Spec: Unclear

Scenario B: User enters active 4hr competition at 12pm
Question: Can they enter passive 4hr competition at 12pm?
Current Spec: Says "ONE active competition" (what does active mean?)

Scenario C: User enters 3 passive competitions
Question: Is this allowed?
Current Spec: Doesn't address passive-only restrictions
```

**RESOLUTION NEEDED:**
- [ ] Define "active competition" (tier vs status)
- [ ] Can players be in multiple passive competitions?
- [ ] Can players be in passive AND active simultaneously?
- [ ] Is one agent wallet per competition still required?

**Proposed Fix:**
```
MVP Rules:
• Players can enter ONE competition at a time (passive OR active)
• Cannot register for second competition until first completes
• Rationale: Simplifies trade isolation and agent wallet management

Post-MVP:
• Passive players can enter UNLIMITED passive competitions
• Active players can enter ONE active + unlimited passive
• Requires separate agent wallet per active competition
```

---

### 6. **Grid Scoring Fairness**

**Current Spec:**
> "Grid Score: Direction Accuracy (900 XP) + Ranking Accuracy (1,100 XP) + Pattern Bonuses (7,800 XP)"

**Dual-Track Concern:**
- Grid scoring is identical for passive and active
- Active players have advantage: Can trade to influence their grid score
- Example: Active player sees SOL pumping → Opens LONG → This helps their prediction

**Is this an advantage or just better information?**

```
Passive Player:
1. Predicts SOL UP at 12pm
2. Watches market until 4pm
3. SOL ends +18% → Prediction correct ✅

Active Player:
1. Predicts SOL UP at 12pm
2. Monitors live: SOL pumps 1pm → Opens LONG 20x
3. Sees SOL consolidating 2pm → Closes position (+$300)
4. Confirms trend still bullish → Predicts will hold
5. SOL ends +18% → Prediction correct ✅
   PLUS +$300 trading profit
   PLUS can win both leaderboards
```

**Is this unfair?**
- Active player has real-time data during competition
- Active player can "confirm" their predictions mid-game
- Active player has two chances to win (pattern + trading)

**Counter-argument:**
- Active player PAID MORE ($75 vs $25)
- Active player RISKED MORE (trading capital)
- Active player has HIGHER SKILL (trading execution)
- This is the POINT of dual-track (graduated difficulty)

**RESOLUTION NEEDED:**
- [ ] Is grid scoring advantage acceptable?
- [ ] Should passive players get "handicap" in pattern scoring?
- [ ] Should active players' grid scores be weighted differently?

**Proposed Fix: Keep it simple**
- Grid scoring identical for both tiers
- Active players' advantage is justified by higher entry fee + risk
- Market will self-select (skilled predictors stay passive, skilled traders go active)

---

### 7. **Captain Mechanics Relevance**

**Current Spec:**
> "Captain (position 0): Max 20x leverage (highest risk/reward position)"
> "Captain exact ranking match: +300 XP (vs 100 XP for other positions)"

**Dual-Track Problem:**
- Leverage bonuses meaningless for passive players
- But captain still gives +300 XP vs 100 XP
- Is this still balanced?

**Questions:**
- Should captain XP bonus be reduced for passive tier?
- Should passive players even have a "captain" concept?
- Does this add unnecessary complexity?

**RESOLUTION NEEDED:**
- [ ] Keep captain XP bonus same for both tiers?
- [ ] Reduce captain bonus for passive (e.g., 200 XP vs 300 XP)?
- [ ] Remove captain concept for passive entirely?

**Proposed Fix: Keep captain system for both tiers**
- Captain = "Your #1 confidence pick"
- Works for both passive (prediction confidence) and active (leverage allocation)
- XP bonus stays 300 for both (consistency)

---

### 8. **Settlement Price Source**

**Current Spec:**
> "Baseline Prices: Captured at competition start (from Hyperliquid API)"
> "Final Prices: Captured from Hyperliquid candle close"

**Dual-Track Concern:**
- Both tiers use same price source (Hyperliquid candles)
- Active players trade ON Hyperliquid during competition
- Passive players don't interact with Hyperliquid at all
- Is there any issue here?

**Potential Edge Case:**
```
Active trader manipulates Hyperliquid orderbook?
• Opens large LONG position on low-liquidity coin
• Pushes price up artificially
• Closing candle shows inflated price
• Both active AND passive players benefit from manipulation

Likelihood: Very low (would need $100K+ capital to move markets)
Mitigation: Coin eligibility requires $10M+ daily volume
```

**RESOLUTION NEEDED:**
- [ ] Are there any settlement price concerns?
- [ ] Should passive players use different price source?
- [ ] Is Hyperliquid candle close fair for both tiers?

**Proposed Fix: No changes needed**
- Hyperliquid is authoritative source for both
- Volume requirements prevent manipulation
- Same settlement logic for fairness

---

### 9. **Results Display & User Comprehension**

**Current Spec:**
> "Results breakdown shows: Trading PnL + Grid Score + Jackpots"

**Dual-Track Problem:**
- Results screen must handle two very different experiences

**Passive Player Results:**
```
┌────────────────────────────────────────┐
│ COMPETITION RESULTS - L1 Chains 4hr    │
├────────────────────────────────────────┤
│ YOUR PERFORMANCE (PASSIVE)             │
│                                        │
│ 🎯 GRID SCORE: 3,850 XP                │
│ Pattern Prize: $1,260 (1st place!)    │
│                                        │
│ Trading PnL: N/A (Passive tier)        │
│ Trading Prize: Not eligible            │
│                                        │
│ 💰 TOTAL WINNINGS: $1,260             │
└────────────────────────────────────────┘
```

**Active Player Results:**
```
┌────────────────────────────────────────┐
│ COMPETITION RESULTS - L1 Chains 4hr    │
├────────────────────────────────────────┤
│ YOUR PERFORMANCE (ACTIVE)              │
│                                        │
│ 🎯 GRID SCORE: 3,100 XP (Rank #3)     │
│ Pattern Prize: $180 (3rd place)       │
│                                        │
│ 💰 TRADING PNL: +$720                 │
│ Trading Prize: $1,260 (1st place!)    │
│                                        │
│ 💰 TOTAL WINNINGS: $2,160             │
│ (Prize: $1,440 + Trading PnL: +$720)  │
└────────────────────────────────────────┘
```

**Concerns:**
- Is "N/A" confusing for passive players?
- Should we hide trading sections entirely for passive?
- Does this create "envy" (passive sees active won more)?

**RESOLUTION NEEDED:**
- [ ] How detailed should results breakdown be?
- [ ] Should passive and active see different UI?
- [ ] How to frame active player advantages without making passive feel bad?

**Proposed Fix: Separate result templates**
- Passive players see simplified view (only pattern results)
- Active players see full breakdown (both leaderboards)
- Include upgrade CTA for passive: "Upgrade to Active to compete for Trading Prizes"

---

### 10. **Payment Processing Options**

**Current Spec (Implied):**
> Entry fees paid through Hyperliquid wallet system

**Dual-Track Problem:**
- DFS players expect credit card payment
- Crypto wallets = massive onboarding friction
- But platform is built on Hyperliquid...

**Onboarding Friction Analysis:**
```
Traditional DFS (PrizePicks):
1. Email signup (30 seconds)
2. Credit card entry (45 seconds)
3. Play immediately
Total: 75 seconds

Battle Grid Passive (Current):
1. Download Hyperliquid wallet app (2 minutes)
2. Create wallet + backup seed phrase (3 minutes)
3. Buy USDC (5-10 minutes + KYC)
4. Transfer USDC to wallet (2 minutes)
5. Connect to Battle Grid (1 minute)
6. Pay entry fee (30 seconds)
Total: 13-18 minutes

Conversion rate: <5% likely complete this flow
```

**RESOLUTION NEEDED:**
- [ ] Can passive players use credit card (Stripe)?
- [ ] Does platform custody USDC for passive players?
- [ ] How to minimize crypto onboarding friction?

**Proposed Fix: Hybrid payment system**
```
Option A (Crypto-Native):
• Connect Hyperliquid wallet
• Pay entry in USDC directly
• Instant entry confirmation

Option B (Credit Card):
• Pay with Stripe
• Platform converts USD → USDC
• Platform holds USDC for passive player
• 3% processing fee (passed to user)

Why this works:
• Passive players get easy onboarding
• Active players still need Hyperliquid (for trading)
• Platform handles custody for passive only (low risk)
```

---

## 🟡 MEDIUM PRIORITY CONCERNS (Address in Design Phase)

### 11. **Spectator Feature Implementation**

**New Requirement:**
> "Passive players get real-time view of traders"

**Implementation Questions:**
- What data do passive players see?
  - [ ] Full positions (coin, leverage, PnL)?
  - [ ] Aggregated data only (top 3 traders)?
  - [ ] Trade history (all executed trades)?
  
- Privacy concerns for active traders?
  - [ ] Do active traders consent to being watched?
  - [ ] Can active traders opt-out of spectator view?
  - [ ] Is there a privacy toggle?

- Real-time data load
  - [ ] 70 passive players watching 30 active traders
  - [ ] 70 WebSocket connections × 30 position updates/sec = 2,100 msg/sec
  - [ ] Can infrastructure handle this?

**Proposed Fix: Aggregated public data only**
```
Passive Player Spectator View:
• Top 3 traders' current PnL (updated every 5 sec)
• Last trade executed (coin, direction, leverage)
• Win rate badge (% profitable positions)
• Follower count (social proof)

NOT shown:
• Exact position sizes
• Unrealized PnL per position
• Entry/exit prices
• Stop-loss/take-profit levels
```

---

### 12. **"Follow Trader" Mechanics**

**New Feature:**
> "Follow button to see trader's positions live"

**Questions:**
- Does "follow" mean:
  - [ ] Just watch (spectate only)?
  - [ ] Copy trades automatically (mirror)?
  - [ ] Get notifications when they trade?

- For future competitions:
  - [ ] Can passive players "clone roster" from followed trader?
  - [ ] Does this create dependency (followers copy bad predictions)?

**Proposed Fix: Watch-only for MVP**
```
Follow Feature (MVP):
• Passive player clicks "Follow @CryptoKing"
• Gets dedicated feed of @CryptoKing's trades
• Sees position updates, PnL changes
• No automatic copying (requires active tier)

Post-MVP (Clone Roster):
• "Use @CryptoKing's last roster" button
• Pre-fills 9 coins + predictions
• User can edit before lock-in
• Attribution shown in results ("Based on @CryptoKing's strategy")
```

---

### 13. **Roster Building Differences**

**Current Spec:**
> "Select 9 coins, rank them, predict UP/DOWN"

**Questions for dual-track:**
- Is roster building flow identical?
  - [ ] YES: Both tiers build same 3x3 grid
  - [ ] NO: Passive has simplified flow?

- Does captain position matter equally?
  - [ ] YES: Same +300 XP bonus
  - [ ] NO: Different captain bonuses per tier?

**Proposed Fix: Identical roster building**
- Both passive and active use same grid interface
- Captain position works same (300 XP bonus)
- Predictions work same (UP/DOWN)
- Only difference is what happens AFTER lock-in

---

### 14. **Competition Lobby Display**

**New Challenge:**
> Display competition with two entry types

**UI Design Question:**
```
Option A: Single Competition Listing
┌──────────────────────────────────────┐
│ L1 Chains 4hr Competition            │
│ Start: 12:00 PM EST                  │
│                                      │
│ 🎯 Passive: $25 entry               │
│    87/100 spots filled               │
│    Win up to $1,260                  │
│                                      │
│ 🔥 Active: $75 entry                │
│    23/30 spots filled                │
│    Win up to $2,520                  │
│                                      │
│ [Enter Passive] [Enter Active]       │
└──────────────────────────────────────┘

Option B: Separate Listings
┌──────────────────────────────────────┐
│ [PASSIVE] L1 Chains 4hr              │
│ $25 entry | 87/100 spots             │
│ [Enter →]                            │
└──────────────────────────────────────┘
┌──────────────────────────────────────┐
│ [ACTIVE] L1 Chains 4hr               │
│ $75 entry | 23/30 spots              │
│ [Enter →]                            │
└──────────────────────────────────────┘
```

**RESOLUTION NEEDED:**
- [ ] Single listing or separate?
- [ ] How to show fill rates for both tiers?
- [ ] What if one tier fills but other doesn't?

**Proposed Fix: Single listing (Option A)**
- Shows both tiers in one card
- Clear visual separation (passive vs active)
- Fill rates visible for both
- Competition starts when EITHER tier fills minimum

---

### 15. **Minimum Player Requirements**

**Current Spec:**
> "Minimum 10 players to start competition"

**Dual-Track Question:**
- Is this 10 total across both tiers?
- Or 10 minimum per tier?
- What if passive fills (70) but active doesn't (5)?

**Scenarios:**
```
Scenario A: 50 passive + 8 active = 58 total
Does competition start?
• If "10 total minimum": YES
• If "10 per tier minimum": NO (active has only 8)

Scenario B: 5 passive + 25 active = 30 total
Does competition start?
• If "10 total minimum": YES
• If "10 per tier minimum": NO (passive has only 5)
```

**RESOLUTION NEEDED:**
- [ ] Minimum players per tier or total?
- [ ] What happens if one tier doesn't fill?
- [ ] Can competition run with 0 passive or 0 active?

**Proposed Fix: Flexible minimums**
```
Competition starts if:
• Total ≥ 20 players (across both tiers)
• AND at least 5 of each tier

Examples:
• 15 passive + 5 active = 20 total ✅ STARTS
• 18 passive + 2 active = 20 total ❌ CANCELLED (active < 5)
• 70 passive + 0 active = 70 total ❌ CANCELLED (need both tiers)
• 5 passive + 30 active = 35 total ✅ STARTS

Rationale:
• Need critical mass (20 total)
• Need both tiers represented (spectator feature requires traders)
• Allows flexibility (don't need exact 70/30 split)
```

---

## ✅ NON-ISSUES (Already Compatible)

### These work fine with dual-track:

1. ✅ **Grid Scoring Algorithm**: Works identically for both tiers
2. ✅ **Jackpot Mechanics**: All players eligible (passive and active)
3. ✅ **Pattern Detection**: Same logic for both tiers
4. ✅ **Competition Durations**: 1hr, 4hr, 24hr work for both
5. ✅ **Category System**: L1 Chains, Memes, DeFi apply to both
6. ✅ **Coin Pool Selection**: Same 50 coins available to both
7. ✅ **Settlement Timing**: Both use Hyperliquid candle closes
8. ✅ **Mobile Experience**: Can support both entry types
9. ✅ **Social Features**: Work for both (Discord, Twitter sharing)
10. ✅ **Referral System**: Can track passive vs active referrals

---

## 📋 DECISION MATRIX: Required Resolutions

| # | Issue | Decision Needed | Urgency | Impact |
|---|-------|-----------------|---------|--------|
| 1 | Trading capital for passive players | Do they need $1,000? | 🔴 CRITICAL | Architecture |
| 2 | Hyperliquid wallet requirement | Can passive skip this? | 🔴 CRITICAL | Onboarding |
| 3 | Prize pool distribution | Separate or combined pools? | 🔴 CRITICAL | Economics |
| 4 | Leaderboard display | Combined or separate? | 🟡 HIGH | UX |
| 5 | Competition entry limits | One total or one per tier? | 🟡 HIGH | Game Design |
| 6 | Payment processing | Credit card for passive? | 🟡 HIGH | Onboarding |
| 7 | Results display | Different templates? | 🟡 MEDIUM | UX |
| 8 | Spectator data scope | What do passive players see? | 🟡 MEDIUM | Privacy |
| 9 | Minimum player thresholds | Per tier or total? | 🟡 MEDIUM | Operations |
| 10 | Captain XP bonus | Same for both tiers? | 🟢 LOW | Balance |

---

## 🎯 RECOMMENDED RESOLUTIONS (My Proposals)

### Critical Decisions

**1. Trading Capital:** Passive = $0 capital, Active = $1,000 capital
- Platform only provisions capital for active tier
- 70% reduction in capital risk
- Clear tier differentiation

**2. Hyperliquid Wallet:** 
- Passive: Optional (can use credit card via Stripe)
- Active: Required (need agent wallet for trading)
- Solves onboarding friction

**3. Prize Pools:** Separate passive and active pools
- Passive entry fees → Pattern Prize Pool (80%) + Jackpot (10%) + Platform (10%)
- Active entry fees → Trading Prize Pool (80%) + Jackpot (10%) + Platform (10%)
- Fair distribution based on tier

### High Priority Decisions

**4. Leaderboards:** Separate tabs (Pattern + Trading)
- Pattern: All 100 players compete
- Trading: Only 30 active players compete
- Clear, no confusion

**5. Entry Limits:** One competition at a time (MVP)
- Simplifies agent wallet management
- Post-MVP: Unlimited passive, one active

**6. Payment:** Hybrid system
- Passive: Credit card (Stripe) OR Hyperliquid
- Active: Hyperliquid required (for trading)
- 3% Stripe fee passed to user

---

## 🚀 NEXT STEPS

Before updating Battle Grid specs:

1. **Get alignment on critical decisions** (1-3 above)
2. **Validate prize pool economics** (spreadsheet model)
3. **Design dual-track UI flows** (Figma mockups)
4. **Update technical architecture** (separate or shared agent wallets?)
5. **Revise all spec sections** (onboarding, settlement, prizes, UI)

**Would you like me to:**
- A) Draft updated prize pool economics model?
- B) Design the dual-track UI/UX flows?
- C) Create technical architecture diagrams?
- D) All of the above?

Let me know which concerns you want to address first, and I'll help resolve them systematically.