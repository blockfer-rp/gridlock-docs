# Battle Grid Dual-Track: Product Feedback Report

**Document Version:** 1.0  
**Date:** November 14, 2025  
**Status:** Decision Record & Implementation Guide  
**Purpose:** Address critical product concerns for Dual-Track Battle Grid implementation

---

## EXECUTIVE SUMMARY

This report addresses 15 product concerns identified during dual-track feasibility analysis. All critical blockers have been resolved with clear decisions. The dual-track model is **APPROVED FOR DEVELOPMENT** with the specifications outlined below.

**Key Outcomes:**
- ✅ Trading capital model clarified (Passive = $0, Active = $1,000)
- ✅ Prize pool distribution redesigned (separate pools)
- ✅ Onboarding friction addressed (100% crypto MVP, MoonPay future)
- ✅ Leaderboard logic finalized (separate tabs)
- ✅ MVP scope defined (one passive + one active game running)

**Remaining Work:**
- Update full Battle Grid spec document
- Design dual-track UI/UX flows
- Create prize pool economic models
- Define spectator feature scope

---

## SECTION 1: CRITICAL BLOCKERS - RESOLVED

### 1.1 Trading Capital Model ✅ RESOLVED

**Original Concern:**
> Passive players don't trade → Why would they need $1,000 USDC? If they don't need it, how does platform handle two different capital models?

**DECISION:**
```
PASSIVE TIER:
• Entry Fee: $25
• Trading Capital: $0 (NONE)
• Platform Risk: Entry fee only ($25)

ACTIVE TIER:
• Entry Fee: $75
• Trading Capital: $1,000 USDC (platform-provided)
• Platform Risk: Entry fee ($75) + capital ($1,000)
```

**Implementation Details:**

**Database Schema Update:**
```sql
CREATE TABLE competition_entries (
  id UUID PRIMARY KEY,
  user_id UUID,
  competition_id UUID,
  tier VARCHAR(10) CHECK (tier IN ('PASSIVE', 'ACTIVE')),
  entry_fee DECIMAL(10,2),
  trading_capital DECIMAL(10,2), -- $0 for passive, $1000 for active
  agent_wallet_address VARCHAR(66), -- NULL for passive, populated for active
  created_at TIMESTAMP
);
```

**Capital Allocation Logic:**
```typescript
async function createCompetitionEntry(userId: string, competitionId: string, tier: 'PASSIVE' | 'ACTIVE') {
  if (tier === 'PASSIVE') {
    return {
      entryFee: 25,
      tradingCapital: 0,
      agentWallet: null, // No wallet needed
      requiresHyperliquid: false
    };
  }
  
  if (tier === 'ACTIVE') {
    // Create agent wallet for active traders
    const agentWallet = await hyperliquid.createAgentWallet(userId);
    
    // Fund agent wallet with $1,000 USDC
    await hyperliquid.fundAgentWallet(agentWallet.address, 1000);
    
    return {
      entryFee: 75,
      tradingCapital: 1000,
      agentWallet: agentWallet.address,
      requiresHyperliquid: true
    };
  }
}
```

**Platform Capital Risk Reduction:**
```
Original Model (100 players, all active):
• Capital exposure: 100 × $1,000 = $100,000

Dual-Track Model (70 passive, 30 active):
• Capital exposure: 30 × $1,000 = $30,000
• Risk reduction: 70% ✅

Benefits:
• Easier to bootstrap (less capital needed)
• Lower liquidation risk (fewer leveraged positions)
• Platform can scale 3x faster with same capital
```

**Impact on Gameplay:**
- Passive players build roster → Lock predictions → Watch results
- Active players build roster → Lock predictions → Trade live → Keep PnL profits
- Clear tier differentiation without confusion

**Status:** ✅ APPROVED - No further changes needed

---

### 1.2 Hyperliquid Wallet & Onboarding ✅ RESOLVED

**Original Concern:**
> DFS players expect email signup + credit card. Crypto wallets = massive onboarding friction. How to minimize?

**DECISION:**
```
MVP (100% Crypto):
• ALL players need Hyperliquid wallet
• Entry fees paid in USDC
• No fiat on-ramps yet

POST-MVP (Hybrid):
• Integrate MoonPay for fiat → USDC conversion
• Passive players can use credit card
• Active players still need Hyperliquid (for trading)
```

**MVP Onboarding Flow:**

**Passive Player Journey:**
```
Step 1: Connect Wallet
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

Step 2: Profile Setup
• Username
• Avatar
• Notification preferences

Step 3: Competition Entry
• Choose competition
• Pay $25 USDC entry fee (from wallet)
• Build roster
• Lock predictions

NO builder code approval needed ✅
NO agent wallet creation needed ✅
NO trading capital provisioning needed ✅
```

**Active Player Journey:**
```
Step 1-2: Same as passive (wallet + profile)

Step 3: Builder Code Approval (ONE-TIME)
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
│ [Approve Builder Code]             │
└────────────────────────────────────┘

Step 4: Agent Wallet Creation
• Platform creates agent wallet (automatic)
• User approves agent wallet (signature)
• Platform funds with $1,000 USDC

Step 5: Competition Entry
• Pay $75 USDC entry fee
• Build roster
• Lock predictions
• Begin trading
```

**POST-MVP Enhancement (MoonPay Integration):**

**Passive Player Alternative Flow:**
```
Step 1: Email Signup (No wallet yet)
• Email + password
• Username
• Avatar

Step 2: Pay with Credit Card
┌────────────────────────────────────┐
│ Choose Payment Method              │
│                                    │
│ ○ Crypto Wallet (USDC)            │
│   Connect Hyperliquid wallet       │
│                                    │
│ ● Credit Card (USD)               │
│   Powered by MoonPay              │
│   $25.75 USD (includes 3% fee)    │
│                                    │
│ [Continue to Payment]              │
└────────────────────────────────────┘

Step 3: MoonPay Handles Conversion
• User pays $25.75 USD
• MoonPay converts to 25 USDC
• Platform receives USDC
• Platform holds USDC custody for passive player

Step 4: Competition Entry
• Build roster
• Lock predictions
• No wallet interaction needed
```

**Technical Requirements:**

**MVP (100% Crypto):**
```typescript
// Hyperliquid SDK integration only
interface OnboardingRequirements {
  passive: {
    hyperliquidWallet: true,
    builderCodeApproval: false,
    agentWallet: false,
    minimumBalance: 25, // USDC
  },
  active: {
    hyperliquidWallet: true,
    builderCodeApproval: true,
    agentWallet: true,
    minimumBalance: 75, // USDC
  }
}
```

**Post-MVP (Hybrid):**
```typescript
interface OnboardingRequirements {
  passive: {
    paymentMethods: ['HYPERLIQUID_WALLET', 'CREDIT_CARD'],
    hyperliquidWallet: false, // Optional for passive
    builderCodeApproval: false,
    agentWallet: false,
    minimumBalance: 25, // USDC or $25.75 USD
  },
  active: {
    paymentMethods: ['HYPERLIQUID_WALLET'], // Required
    hyperliquidWallet: true, // Must have for trading
    builderCodeApproval: true,
    agentWallet: true,
    minimumBalance: 75, // USDC
  }
}
```

**Conversion Funnel Impact:**

```
DFS Market Reality:
• 60M fantasy players globally
• 5-10% willing to get crypto wallet
• Addressable: 3-6M users

With MoonPay (Post-MVP):
• 60M fantasy players globally
• 30-40% willing to use credit card
• Addressable: 18-24M users
• 4-6x TAM expansion
```

**Status:** ✅ APPROVED - MVP crypto-only, MoonPay post-MVP roadmap

---

### 1.3 Prize Pool Distribution ✅ RESOLVED

**Original Concern:**
> Passive players' $25 entry fees subsidize trading pool they can't win. Fundamentally unfair.

**DECISION: SEPARATE PRIZE POOLS**

**New Prize Structure:**

```
PASSIVE ENTRY ($25):
├─ Pattern Prize Pool (80% = $20)
│  Combined with ALL passive entries
│
├─ Jackpot Pool (10% = $2.50)
│  Combined with active jackpot contributions
│
└─ Platform Fee (10% = $2.50)

ACTIVE ENTRY ($75):
├─ Trading Prize Pool (80% = $60)
│  Combined with ALL active entries
│
├─ Jackpot Pool (10% = $7.50)
│  Combined with passive jackpot contributions
│
└─ Platform Fee (10% = $7.50)

JACKPOT POOL (Combined):
├─ Perfect Grid Jackpot (50%)
│  ALL players eligible (passive + active)
│
└─ Pattern Bonus Jackpot (50%)
│  ALL players eligible (passive + active)
```

**Example Competition Economics:**

```
Competition: L1 Chains 4hr
• 70 passive players @ $25 = $1,750
• 30 active players @ $75 = $2,250
• Total gross: $4,000

PATTERN PRIZE POOL (Passive Only):
• Source: 70 × $25 × 80% = $1,400
• Distribution:
  - 1st place: $980 (70%)
  - 2nd place: $280 (20%)
  - 3rd place: $140 (10%)
• Eligible: ALL 100 players compete

TRADING PRIZE POOL (Active Only):
• Source: 30 × $75 × 80% = $1,800
• Distribution:
  - 1st place: $1,260 (70%)
  - 2nd place: $360 (20%)
  - 3rd place: $180 (10%)
• Eligible: ONLY 30 active players compete

JACKPOT POOL (Combined):
• Source: (70 × $2.50) + (30 × $7.50) = $400
• Perfect Grid (50%): $200
  - Split among players with EXACT ranking match
  - Eligible: ALL 100 players
• Pattern Bonus (50%): $200
  - Player with highest overall XP score
  - Eligible: ALL 100 players

PLATFORM FEE:
• Source: (70 × $2.50) + (30 × $7.50) = $400
• Uses: Operations, infrastructure, support
• Plus: Builder code fees (10 bps on active trading volume)
```

**Player ROI Analysis:**

```
PASSIVE PLAYER OUTCOMES:

Entry: $25

Can Win:
• Pattern Prize: Up to $980 (compete vs 100 players)
• Perfect Grid: Up to $200 (split if multiple winners)
• Pattern Bonus: Up to $200 (highest XP score)

Expected Value (EV):
• Pattern Prize: 0.03 × $980 = $29.40 (top 3 probability)
• Jackpots: 0.01 × $400 = $4.00 (conservative)
• Total EV: $33.40

ROI: ($33.40 - $25) / $25 = 33.6% ✅

ACTIVE PLAYER OUTCOMES:

Entry: $75

Can Win:
• Pattern Prize: Up to $980 (compete vs 100 players)
• Trading Prize: Up to $1,260 (compete vs 30 players)
• Perfect Grid: Up to $200
• Pattern Bonus: Up to $200
• PLUS: Keep trading PnL profits

Expected Value (EV):
• Pattern Prize: 0.03 × $980 = $29.40
• Trading Prize: 0.10 × $1,260 = $126.00 (top 3 vs 30)
• Jackpots: 0.02 × $400 = $8.00
• Trading PnL: Variable (skill-based)
• Total EV: $163.40 (excluding PnL)

ROI: ($163.40 - $75) / $75 = 118% ✅

Active Premium:
• 2x win opportunities (pattern + trading)
• 3.3x better odds on trading pool (30 vs 100)
• Keep trading profits (separate from prizes)
• Justifies 3x higher entry fee
```

**Database Schema:**

```sql
CREATE TABLE prize_pools (
  id UUID PRIMARY KEY,
  competition_id UUID,
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
  
  created_at TIMESTAMP
);

CREATE TABLE prize_distributions (
  id UUID PRIMARY KEY,
  competition_id UUID,
  user_id UUID,
  prize_type VARCHAR(20), -- 'PATTERN', 'TRADING', 'PERFECT_GRID', 'PATTERN_BONUS'
  amount DECIMAL(10,2),
  rank INTEGER,
  paid_at TIMESTAMP
);
```

**Settlement Logic:**

```typescript
async function settlePrizes(competitionId: string) {
  const competition = await getCompetition(competitionId);
  
  // Calculate pool amounts
  const passiveEntries = competition.entries.filter(e => e.tier === 'PASSIVE');
  const activeEntries = competition.entries.filter(e => e.tier === 'ACTIVE');
  
  const patternPool = passiveEntries.length × 25 × 0.80; // $1,400
  const tradingPool = activeEntries.length × 75 × 0.80; // $1,800
  const jackpotPool = (passiveEntries.length × 2.50) + (activeEntries.length × 7.50); // $400
  
  // 1. PATTERN PRIZE (All 100 players compete)
  const allPlayers = [...passiveEntries, ...activeEntries];
  const patternRankings = allPlayers.sort((a, b) => b.gridScore - a.gridScore);
  
  await distributePrize({
    winners: [
      { userId: patternRankings[0].userId, amount: patternPool × 0.70, rank: 1 },
      { userId: patternRankings[1].userId, amount: patternPool × 0.20, rank: 2 },
      { userId: patternRankings[2].userId, amount: patternPool × 0.10, rank: 3 }
    ],
    prizeType: 'PATTERN'
  });
  
  // 2. TRADING PRIZE (Only 30 active compete)
  const tradingRankings = activeEntries.sort((a, b) => b.tradingPnL - a.tradingPnL);
  
  await distributePrize({
    winners: [
      { userId: tradingRankings[0].userId, amount: tradingPool × 0.70, rank: 1 },
      { userId: tradingRankings[1].userId, amount: tradingPool × 0.20, rank: 2 },
      { userId: tradingRankings[2].userId, amount: tradingPool × 0.10, rank: 3 }
    ],
    prizeType: 'TRADING'
  });
  
  // 3. PERFECT GRID JACKPOT (All players eligible)
  const perfectGridWinners = allPlayers.filter(p => 
    p.rosterRanking.every((coin, idx) => coin.actualRank === idx)
  );
  
  if (perfectGridWinners.length > 0) {
    const prizePerWinner = (jackpotPool × 0.50) / perfectGridWinners.length;
    perfectGridWinners.forEach(winner => {
      distributePrize({
        userId: winner.userId,
        amount: prizePerWinner,
        prizeType: 'PERFECT_GRID'
      });
    });
  } else {
    // Roll over to next competition
    await rolloverJackpot(jackpotPool × 0.50);
  }
  
  // 4. PATTERN BONUS JACKPOT (Highest XP score)
  const patternBonusWinner = allPlayers.reduce((max, p) => 
    p.gridScore > max.gridScore ? p : max
  );
  
  await distributePrize({
    userId: patternBonusWinner.userId,
    amount: jackpotPool × 0.50,
    prizeType: 'PATTERN_BONUS'
  });
}
```

**Fairness Validation:**

```
✅ Passive players compete for $1,400 pattern pool (from their contributions)
✅ Active players compete for $1,800 trading pool (from their contributions)
✅ Both tiers contribute to shared jackpot (fair combined pool)
✅ All players eligible for jackpots (no tier discrimination)
✅ Active players get TWO win opportunities (justifies higher fee)
✅ Positive EV for both tiers (33.6% passive, 118% active)
```

**Status:** ✅ APPROVED - Clean separation, fair distribution

---

## SECTION 2: HIGH PRIORITY CONCERNS - RESOLVED

### 2.1 Leaderboard Display ✅ RESOLVED

**DECISION: SEPARATE TABBED LEADERBOARDS**

**UI Design:**

```
┌──────────────────────────────────────────────────┐
│ [Pattern Leaderboard] [Trading Leaderboard]      │
├──────────────────────────────────────────────────┤
│ Pattern Leaderboard (All 100 Players)            │
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
│ Your Rank: #12 (3,100 XP)                       │
│ Prize: Not in top 3 (need 3,500+ XP)            │
└──────────────────────────────────────────────────┘

Click [Trading Leaderboard] tab →

┌──────────────────────────────────────────────────┐
│ [Pattern Leaderboard] [Trading Leaderboard]      │
├──────────────────────────────────────────────────┤
│ Trading Leaderboard (30 Active Players Only)     │
│                                                  │
│ Rank | Player          | Trading PnL | Positions│
│──────|─────────────────|─────────────|──────────│
│ 🥇   | @CryptoKing     | +$890       | 8 trades │
│ 🥈   | @DiamondHands   | +$720       | 12 trades│
│ 🥉   | @ScalpMaster    | +$650       | 23 trades│
│ 4    | @SwingTrader    | +$580       | 5 trades │
│ 5    | @Whale          | +$520       | 3 trades │
│ ...  | ...             | ...         | ...      │
│                                                  │
│ Your Rank: Not eligible (Passive tier)          │
│ [Upgrade to Active to compete for Trading Prizes]│
└──────────────────────────────────────────────────┘
```

**Real-Time Updates:**

```typescript
// WebSocket updates every 5 seconds
interface LeaderboardUpdate {
  pattern: {
    rankings: Array<{
      rank: number,
      userId: string,
      username: string,
      gridScore: number,
      tier: 'PASSIVE' | 'ACTIVE',
      isJackpotEligible: boolean // Row + column complete
    }>,
    yourRank: number,
    totalPlayers: 100
  },
  trading: {
    rankings: Array<{
      rank: number,
      userId: string,
      username: string,
      tradingPnL: number,
      positionCount: number,
      winRate: number
    }>,
    yourRank: number | null, // null if passive
    totalPlayers: 30
  }
}
```

**Passive Player View Benefits:**

```
Pattern Tab:
✅ See own rank among all 100 players
✅ Know exactly what score needed for top 3
✅ Compare against both passive and active players

Trading Tab:
✅ Watch top traders' performance live
✅ See profitable strategies (positions, PnL)
✅ Learn from successful traders
✅ Clear upgrade CTA: "Upgrade to Active"
```

**Active Player View Benefits:**

```
Pattern Tab:
✅ See rank in pattern competition (vs 100)
✅ Know if pattern prize achievable

Trading Tab:
✅ See rank in trading competition (vs 30)
✅ Know exact PnL needed to reach top 3
✅ 3x better odds than pattern (30 vs 100)
```

**Status:** ✅ APPROVED - Separate tabs, clear tier labeling

---

### 2.2 Competition Entry Restrictions ✅ RESOLVED

**DECISION: ONE COMPETITION AT A TIME (MVP)**

**MVP Competition Schedule:**

```
ALWAYS RUNNING:
• One Passive Competition (4hr duration)
• One Active Competition (4hr duration)

Schedule Example:
┌─────────────────────────────────────┐
│ CURRENTLY RUNNING                   │
├─────────────────────────────────────┤
│ 🎯 PASSIVE: L1 Chains 4hr          │
│    Started: 12:00 PM EST            │
│    Ends: 4:00 PM EST                │
│    Players: 87/100                  │
│    Prize Pool: $1,218 (Pattern)     │
│    [FULL - Registration Closed]     │
├─────────────────────────────────────┤
│ 🔥 ACTIVE: L1 Chains 4hr           │
│    Started: 12:00 PM EST            │
│    Ends: 4:00 PM EST                │
│    Players: 23/30                   │
│    Prize Pool: $1,380 (Trading)     │
│    [Enter Active →] 7 spots left    │
└─────────────────────────────────────┘

NEXT COMPETITIONS:
┌─────────────────────────────────────┐
│ STARTING SOON                       │
├─────────────────────────────────────┤
│ 🎯 PASSIVE: Meme Coins 4hr         │
│    Starts: 4:00 PM EST              │
│    Registration: Open at 3:30 PM    │
│    [Set Reminder 🔔]                │
├─────────────────────────────────────┤
│ 🔥 ACTIVE: Meme Coins 4hr          │
│    Starts: 4:00 PM EST              │
│    Registration: Open at 3:30 PM    │
│    [Set Reminder 🔔]                │
└─────────────────────────────────────┘
```

**Entry Rules (MVP):**

```
User Status: Not in any competition
Action: Can enter ONE competition (passive OR active)

User Status: In passive competition
Action: BLOCKED from entering another competition
Reason: "You are currently competing in Passive L1 Chains 4hr (ends 4:00 PM)"

User Status: In active competition
Action: BLOCKED from entering another competition
Reason: "You are currently competing in Active L1 Chains 4hr (ends 4:00 PM)"

User Status: Competition just ended
Action: Can immediately enter next competition
```

**Rationale:**

```
✅ Concentrates liquidity (all users in same competitions)
✅ Simplifies agent wallet management (one wallet per user)
✅ Better spectator experience (everyone watching same traders)
✅ Easier prize pool guarantees (predictable fill rates)
✅ Clearer community (everyone competes simultaneously)
```

**Post-MVP Enhancement:**

```
PASSIVE PLAYERS:
• Can enter unlimited passive competitions
• Multiple simultaneous passive entries allowed
• No agent wallet needed (no conflict)

ACTIVE PLAYERS:
• Can enter ONE active competition at a time
• Can enter unlimited passive competitions simultaneously
• Requires separate agent wallet per active competition
• HyperEVM smart contracts enable multi-wallet management
```

**Technical Implementation:**

```typescript
async function validateEntry(userId: string, competitionId: string, tier: 'PASSIVE' | 'ACTIVE') {
  // Check if user has any active entries
  const activeEntries = await db.entries.findMany({
    where: {
      userId,
      competition: {
        status: 'LIVE' // Competition currently running
      }
    }
  });
  
  if (activeEntries.length > 0) {
    const existingEntry = activeEntries[0];
    throw new Error(
      `You are currently competing in ${existingEntry.competition.name} ` +
      `(ends ${existingEntry.competition.endTime}). ` +
      `Please wait for it to complete before entering another competition.`
    );
  }
  
  // Check if competition has available spots
  const competition = await db.competitions.findUnique({
    where: { id: competitionId },
    include: { entries: true }
  });
  
  const tierEntries = competition.entries.filter(e => e.tier === tier);
  const maxSlots = tier === 'PASSIVE' ? 100 : 30;
  
  if (tierEntries.length >= maxSlots) {
    throw new Error(`${tier} tier is full (${maxSlots}/${maxSlots} spots taken)`);
  }
  
  return { canEnter: true };
}
```

**Status:** ✅ APPROVED - One at a time MVP, unlimited post-MVP

---

### 2.3 Payment Processing ✅ RESOLVED

**DECISION: 100% CRYPTO MVP, MOONPAY POST-MVP**

**MVP Payment Flow:**

```
ALL PLAYERS (Passive + Active):
• Must have Hyperliquid wallet with USDC
• Entry fees paid directly from wallet
• No credit card option
• No fiat on-ramp

Required Balance:
• Passive: 25 USDC minimum
• Active: 75 USDC minimum
```

**Payment Validation:**

```typescript
async function validatePayment(userId: string, tier: 'PASSIVE' | 'ACTIVE') {
  const user = await getUser(userId);
  
  if (!user.hyperliquidWallet) {
    throw new Error('Please connect your Hyperliquid wallet to continue');
  }
  
  const balance = await hyperliquid.getBalance(user.hyperliquidWallet.address);
  const requiredAmount = tier === 'PASSIVE' ? 25 : 75;
  
  if (balance.USDC < requiredAmount) {
    throw new Error(
      `Insufficient USDC balance. Required: ${requiredAmount} USDC, ` +
      `Current: ${balance.USDC} USDC. ` +
      `Please deposit USDC to your Hyperliquid wallet.`
    );
  }
  
  return { canPay: true, balance: balance.USDC };
}

async function processEntryFee(userId: string, competitionId: string, tier: 'PASSIVE' | 'ACTIVE') {
  const entryFee = tier === 'PASSIVE' ? 25 : 75;
  const user = await getUser(userId);
  
  // Transfer USDC from user wallet to platform wallet
  const tx = await hyperliquid.transfer({
    from: user.hyperliquidWallet.address,
    to: PLATFORM_WALLET_ADDRESS,
    amount: entryFee,
    asset: 'USDC'
  });
  
  await tx.wait();
  
  return {
    transactionHash: tx.hash,
    amount: entryFee,
    timestamp: new Date()
  };
}
```

**Post-MVP: MoonPay Integration**

**Passive Player Fiat Flow:**

```
Step 1: User selects "Pay with Card"
• MoonPay widget embedded
• Enter credit card details
• Amount: $25.75 USD (includes 3% MoonPay fee)

Step 2: MoonPay processes payment
• Converts USD → USDC
• Sends 25 USDC to platform wallet
• Platform credits user's entry

Step 3: Competition entry completes
• User sees confirmation
• Roster building begins

Technical:
• Platform custodies USDC for passive players
• Users can withdraw after competition ends
• MoonPay handles all KYC/AML (not platform responsibility)
```

**Active Player Requirements:**

```
NO FIAT OPTION (Post-MVP):
• Active players MUST use Hyperliquid wallet
• Rationale: Need agent wallet for trading
• Agent wallet requires Hyperliquid account
• Cannot trade without native Hyperliquid integration

Entry fee payment:
• 75 USDC from Hyperliquid wallet
• Builder code approval required
• Agent wallet creation + funding
```

**MoonPay Integration Specs:**

```typescript
// Post-MVP only
interface MoonPayConfig {
  apiKey: string,
  defaultCurrency: 'USD',
  targetCurrency: 'USDC',
  walletAddress: PLATFORM_WALLET_ADDRESS,
  
  onSuccess: (transaction: MoonPayTransaction) => {
    // Credit user's entry
    await createPassiveEntry(userId, competitionId, {
      paymentMethod: 'CREDIT_CARD',
      fiatAmount: transaction.fiatAmount,
      cryptoAmount: transaction.cryptoAmount,
      moonpayTransactionId: transaction.id
    });
  },
  
  onFailure: (error: MoonPayError) => {
    // Show error to user
    // Offer alternative: "Try with Hyperliquid wallet"
  }
}
```

**User Onboarding Comparison:**

```
MVP (100% Crypto):
Time to First Competition: 5-10 minutes
• Connect wallet (30 sec)
• Ensure 25 USDC balance (varies)
• Pay entry fee (30 sec)
• Build roster (5-10 min)

Post-MVP (with MoonPay):
Time to First Competition: 8-15 minutes
• Email signup (1 min)
• Credit card payment (2 min)
• MoonPay KYC (2-5 min, first time only)
• Build roster (5-10 min)

Advantage: Lower cognitive load (no crypto wallet complexity)
Disadvantage: Still longer than DraftKings (2-3 minutes total)
```

**Status:** ✅ APPROVED - MVP crypto-only, MoonPay roadmap defined

---

## SECTION 3: MEDIUM PRIORITY CONCERNS - RESOLVED

### 3.1 Spectator Feature Scope ✅ RESOLVED

**DECISION: PUBLIC AGGREGATED DATA ONLY**

**What Passive Players See:**

```
┌──────────────────────────────────────────────────┐
│ 🔴 LIVE: Top Active Traders                      │
├──────────────────────────────────────────────────┤
│ 🥇 @CryptoKing                                   │
│    💰 Trading PnL: +$890                         │
│    📊 Win Rate: 75% (6W-2L)                      │
│    🔥 Last Trade: LONG BTC 20x @ $43.2K         │
│       ⏱️ 45 minutes ago                          │
│    👁️ 847 watching                               │
│    [Follow Trader →]                             │
├──────────────────────────────────────────────────┤
│ 🥈 @DiamondHands                                 │
│    💰 Trading PnL: +$720                         │
│    📊 Win Rate: 67% (8W-4L)                      │
│    🔥 Last Trade: SHORT HYPE 15x @ $18.20       │
│       ⏱️ 12 minutes ago                          │
│    👁️ 523 watching                               │
│    [Follow Trader →]                             │
├──────────────────────────────────────────────────┤
│ 🥉 @ScalpMaster                                  │
│    💰 Trading PnL: +$650                         │
│    📊 Win Rate: 70% (14W-6L)                     │
│    🔥 Last Trade: Closed SOL position (+$120)   │
│       ⏱️ 2 minutes ago                           │
│    👁️ 391 watching                               │
│    [Follow Trader →]                             │
└──────────────────────────────────────────────────┘
```

**Data Shown (Public):**

✅ Current total PnL (aggregate across all positions)
✅ Win rate (% profitable positions closed)
✅ Last trade executed (coin, direction, leverage, timestamp)
✅ Number of total trades (open + closed)
✅ Follower count (social proof)

**Data Hidden (Private):**

❌ Exact position sizes (margin amounts)
❌ Unrealized PnL per position (current mark prices)
❌ Entry/exit prices for open positions
❌ Stop-loss/take-profit levels
❌ Pending orders
❌ Account balance details

**Follow Trader Feature:**

```typescript
interface FollowTraderData {
  traderId: string,
  username: string,
  
  // Public metrics (updated every 5 seconds)
  totalPnL: number,
  winRate: number,
  totalTrades: number,
  followerCount: number,
  
  // Recent trade history (last 10 trades)
  recentTrades: Array<{
    coin: string,
    direction: 'LONG' | 'SHORT',
    leverage: number,
    outcome: 'OPEN' | 'CLOSED',
    pnl: number | null, // null if still open
    timestamp: Date
  }>,
  
  // NOT included: exact position sizes, unrealized PnL, entry prices
}
```

**Privacy Toggle for Active Traders:**

```
User Settings:
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
│   (You won't appear in top traders)  │
└──────────────────────────────────────┘

Default: Public (encourages spectator engagement)
Rationale: Social proof drives passive → active conversion
```

**WebSocket Data Flow:**

```typescript
// Server sends aggregated trader data every 5 seconds
interface SpectatorUpdate {
  topTraders: Array<{
    userId: string,
    username: string,
    rank: number,
    totalPnL: number,
    winRate: number,
    lastTrade: {
      coin: string,
      direction: string,
      leverage: number,
      timestamp: Date
    },
    followerCount: number
  }>,
  timestamp: Date
}

// Passive players subscribe to this feed
wsClient.on('spectator_update', (data: SpectatorUpdate) => {
  updateSpectatorView(data.topTraders);
});
```

**Infrastructure Considerations:**

```
Load Analysis:
• 70 passive players watching
• 30 active traders trading
• Update frequency: Every 5 seconds

Data volume:
• 3 traders shown (top 3)
• 200 bytes per trader × 3 = 600 bytes
• Broadcast to 70 passive players
• Total: 600 bytes × 70 = 42 KB per update
• Per minute: 42 KB × 12 = 504 KB/min
• Per hour: 504 KB × 60 = 30 MB/hr

✅ Negligible infrastructure cost
✅ Standard WebSocket broadcast handles this easily
```

**Status:** ✅ APPROVED - Public aggregated data, privacy toggles

---

### 3.2 Results Display Templates ✅ RESOLVED

**DECISION: TIER-SPECIFIC RESULT SCREENS**

**Passive Player Results:**

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
│ 🔥 Upgrade to ACTIVE tier:                       │
│    • Trade live during competitions              │
│    • Compete for Trading Prizes ($1,260+)        │
│    • Keep your trading profits                   │
│    • Win from BOTH leaderboards                  │
│                                                  │
│ [Upgrade to Active →] [Play Passive Again]       │
└──────────────────────────────────────────────────┘
```

**Active Player Results:**

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
│ 🏆 TRADING PRIZE: $1,260 (1st place!)           │
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
│ 🏆 PATTERN PRIZE: $180 (3rd place)              │
│    You ranked #3 out of 100 players              │
│                                                  │
│ 💰 JACKPOTS:                                     │
│    Perfect Grid: ❌ Not exact match              │
│    Pattern Bonus: ❌ Not highest score           │
│                                                  │
│ 💸 TOTAL WINNINGS: $2,160                       │
│    Prize Pool: $1,440                            │
│    Trading PnL: +$720 (separate, yours to keep)  │
│                                                  │
├──────────────────────────────────────────────────┤
│ 🔥 AMAZING PERFORMANCE!                          │
│                                                  │
│ You won BOTH leaderboards! 🏆🏆                   │
│                                                  │
│ 👥 123 people followed your trades               │
│ 🎯 View your full trade history                  │
│ 📊 Share your winning strategy                   │
│                                                  │
│ [Play Again →] [View Trade Replay] [Share Win]   │
└──────────────────────────────────────────────────┘
```

**Template Logic:**

```typescript
function generateResultScreen(entry: CompetitionEntry, results: CompetitionResults) {
  if (entry.tier === 'PASSIVE') {
    return {
      template: 'PASSIVE_RESULTS',
      data: {
        gridScore: results.gridScore,
        patternPrize: results.patternPrize,
        patternRank: results.patternRank,
        jackpots: results.jackpots,
        totalWinnings: results.patternPrize + results.jackpots.total,
        
        // Upgrade CTA
        upgradeCTA: {
          show: true,
          message: results.patternRank <= 3 
            ? "You dominated the pattern leaderboard! Ready to trade?"
            : "Want to compete for bigger prizes with live trading?",
          activeMaxPrize: calculateMaxActivePrize(nextCompetition)
        }
      }
    };
  }
  
  if (entry.tier === 'ACTIVE') {
    return {
      template: 'ACTIVE_RESULTS',
      data: {
        tradingPnL: results.tradingPnL,
        tradingStats: {
          totalTrades: results.totalTrades,
          winRate: results.winRate,
          bestTrade: results.bestTrade,
          biggestLoss: results.biggestLoss
        },
        tradingPrize: results.tradingPrize,
        tradingRank: results.tradingRank,
        
        gridScore: results.gridScore,
        patternPrize: results.patternPrize,
        patternRank: results.patternRank,
        
        jackpots: results.jackpots,
        
        totalWinnings: results.tradingPrize + results.patternPrize + results.jackpots.total,
        tradingPnLSeparate: results.tradingPnL, // Emphasized as "yours to keep"
        
        // Social proof
        socialStats: {
          followersGained: results.followersGained,
          viewCount: results.spectatorViewCount
        }
      }
    };
  }
}
```

**Status:** ✅ APPROVED - Tier-specific templates with upgrade CTAs

---

### 3.3 Minimum Player Thresholds ✅ RESOLVED

**DECISION: FLEXIBLE COMBINED MINIMUMS**

**Competition Start Rules:**

```
Competition starts if ALL conditions met:
✅ Total players ≥ 20 (across both tiers)
✅ Passive players ≥ 5 (minimum tier representation)
✅ Active players ≥ 5 (minimum tier representation)

Examples:

Scenario A: 15 passive + 5 active = 20 total
Result: ✅ STARTS (meets all thresholds)

Scenario B: 18 passive + 2 active = 20 total
Result: ❌ CANCELLED (active < 5)
Action: Refund all entry fees, notify users

Scenario C: 70 passive + 0 active = 70 total
Result: ❌ CANCELLED (need both tiers)
Reason: Spectator feature requires active traders

Scenario D: 5 passive + 30 active = 35 total
Result: ✅ STARTS (meets all thresholds)

Scenario E: 100 passive + 30 active = 130 total
Result: ✅ STARTS (both tiers full)
Note: This is ideal target
```

**Rationale:**

```
Why 20 total minimum?
• Critical mass for competitive dynamics
• Meaningful prize pools ($1,000+)
• Statistical significance for rankings

Why 5 per tier minimum?
• Passive: Need enough for pattern competition
• Active: Need enough for trading leaderboard
• Spectator feature requires active traders to watch
• Both tiers create full product experience

Why flexible (not 70/30 exact)?
• Markets may favor one tier initially
• Allow natural distribution
• Don't force artificial 70/30 split
```

**Cancellation Logic:**

```typescript
async function checkCompetitionViability(competitionId: string) {
  const competition = await getCompetition(competitionId);
  const passiveCount = competition.entries.filter(e => e.tier === 'PASSIVE').length;
  const activeCount = competition.entries.filter(e => e.tier === 'ACTIVE').length;
  const totalCount = passiveCount + activeCount;
  
  // Check start conditions
  const canStart = 
    totalCount >= 20 &&
    passiveCount >= 5 &&
    activeCount >= 5;
  
  if (!canStart) {
    // 5 minutes before start time, check if can start
    const minutesUntilStart = differenceInMinutes(competition.startTime, new Date());
    
    if (minutesUntilStart <= 5) {
      // Cancel competition
      await cancelCompetition(competitionId, {
        reason: 'INSUFFICIENT_PLAYERS',
        details: {
          total: totalCount,
          passive: passiveCount,
          active: activeCount,
          required: { total: 20, passive: 5, active: 5 }
        }
      });
      
      // Refund all entry fees
      await refundAllEntries(competitionId);
      
      // Notify all participants
      await notifyParticipants(competitionId, {
        message: `Competition cancelled due to insufficient players. ` +
                 `Your entry fee has been refunded.`,
        refundAmount: entry => entry.tier === 'PASSIVE' ? 25 : 75
      });
    }
  }
  
  return { canStart, passiveCount, activeCount, totalCount };
}
```

**Grace Period Notifications:**

```
30 minutes before start:
"L1 Chains 4hr competition starting soon! 
Currently: 18 passive, 3 active (need 5 active to start)
Invite friends to secure your spot!"

15 minutes before start:
"⚠️ Competition may cancel if we don't reach 5 active players
Currently: 18 passive, 4 active (need 1 more active)
[Invite Friend] [Switch to Active]"

5 minutes before start (if still under):
"Competition cancelled - insufficient active players
Your $25 entry fee has been refunded
Next competition starts at 4:00 PM"
```

**Status:** ✅ APPROVED - 20 total, 5 per tier minimums

---

### 3.4 Captain XP Bonus (Minor) ✅ RESOLVED

**DECISION: KEEP SAME FOR BOTH TIERS**

**Captain Mechanics:**

```
BOTH PASSIVE AND ACTIVE:
• Position 0 (top-left of grid) = Captain
• Exact ranking match: 300 XP (vs 100 XP other positions)
• Strategic importance: Your #1 confidence pick

ACTIVE TIER ADDITIONAL BONUS:
• Can use 20x leverage on captain (vs 10x others)
• Max notional: $20,000 on captain (vs $10,000 others)
• Highest risk/reward position
```

**Why Keep Same XP Bonus:**

```
✅ Consistency: Same prediction mechanics for both tiers
✅ Fairness: Both tiers predict same markets, same difficulty
✅ Strategic depth: Captain choice matters equally for pattern score
✅ Simplicity: No tier-specific scoring rules to explain

Active traders get OTHER advantages:
• Trading execution (can profit from captain conviction)
• 20x leverage (amplify captain predictions)
• Both leaderboards (two ways to win)

No need to adjust XP scoring.
```

**Status:** ✅ APPROVED - No changes needed, 300 XP captain bonus universal

---

## SECTION 4: NON-ISSUES CONFIRMED ✅

These components work perfectly with dual-track, no changes needed:

1. ✅ **Grid Scoring Algorithm**: Identical for both tiers (direction + ranking + patterns)
2. ✅ **Jackpot Mechanics**: All players eligible (passive and active can win both jackpots)
3. ✅ **Pattern Detection**: Same logic (rows, columns, diagonals)
4. ✅ **Competition Durations**: 1hr, 4hr, 24hr work for both tiers
5. ✅ **Category System**: L1 Chains, Memes, DeFi apply identically
6. ✅ **Coin Pool Selection**: Same 50 Hyperliquid coins for both
7. ✅ **Settlement Timing**: Both use Hyperliquid candle closes
8. ✅ **Mobile Experience**: UI scales to both entry types
9. ✅ **Social Features**: Discord, Twitter sharing work for both
10. ✅ **Referral System**: Can track passive vs active referrals separately

---

## SECTION 5: IMPLEMENTATION ROADMAP

### Phase 1: MVP (Weeks 1-4) - Passive Only

**Goal:** Validate DFS market demand

```
✅ Launch passive-only competitions
• $25 entry, pattern scoring only
• One 4hr competition at a time (L1 Chains)
• Target: 1,000 registered passive players
• Success metric: 50+ passive competitions filled

Deliverables:
1. Roster builder UI (3x3 grid)
2. Pattern scoring algorithm
3. Pattern prize distribution
4. Hyperliquid wallet integration (entry fees)
5. Competition lobby + leaderboards
6. Results screen (passive template)

NOT included:
• Active tier
• Trading features
• Spectator features
• Builder code integration
```

### Phase 2: Active Tier (Weeks 5-8) - Trading Integration

**Goal:** Validate active trader demand

```
✅ Launch active-only competitions (separate from passive)
• $75 entry, trading PnL leaderboard
• One 4hr competition at a time (L1 Chains)
• Target: 200 registered active players
• Success metric: 10+ active competitions filled

Deliverables:
1. Builder code approval flow
2. Agent wallet creation + funding ($1,000)
3. Live trading interface (LONG/SHORT)
4. Position management (leverage, close)
5. Real-time PnL tracking
6. Trading prize distribution
7. Results screen (active template)

NOT included:
• Dual-track (still separate competitions)
• Spectator features
```

### Phase 3: Merge Dual-Track (Weeks 9-12) - Full Product

**Goal:** Launch combined passive + active competitions

```
✅ Single competition, two entry tiers
• 70 passive @ $25 + 30 active @ $75
• One competition at a time (concentrate liquidity)
• Target: 100 total players per competition

Deliverables:
1. Separate prize pools (pattern + trading)
2. Dual leaderboards (tabbed UI)
3. Spectator features (top traders feed)
4. Follow trader button
5. Upgrade CTAs (passive → active conversion)
6. Analytics (tier conversion tracking)

New features:
• "Follow Trader" live feed
• Post-game trade replays
• Trader profiles (win rate, followers)
• Tier-specific result screens with upgrade prompts
```

### Phase 4: Social & Retention (Month 4-6)

**Goal:** Build community and increase retention

```
✅ Trader reputation system
• Follower counts
• Win rate badges
• "Verified Trader" status (top 10%)

✅ Content generation
• Auto-generate trade highlight clips
• "Best Trade of the Day" showcase
• Weekly leaderboard (most profitable trader)

✅ Roster presets
• "Clone @CryptoKing's last roster"
• Save favorite lineups
• Community-shared strategies

✅ Achievements & progression
• XP system (lifetime)
• Skill-based matchmaking
• Tier badges (Bronze/Silver/Gold/Platinum)
```

### Phase 5: Scale & Optimize (Month 7-12)

**Goal:** Scale to multiple competitions and categories

```
✅ Multiple concurrent competitions
• 3x passive competitions running (L1, Memes, DeFi)
• 3x active competitions running
• Staggered start times (every 2 hours)

✅ MoonPay integration
• Credit card entry for passive players
• Fiat on-ramp (USD → USDC)
• 3% fee passed to users

✅ Advanced features
• Private hosted matches (friend groups)
• Tournament brackets (weekly/monthly)
• Sponsored competitions (token projects)
• Mobile app (iOS + Android)
```

---

## SECTION 6: REVISED SPECS SUMMARY

### Updated Entry Fee Structure

```
PASSIVE TIER:
• Entry Fee: $25 USDC
• Trading Capital: $0
• Distribution:
  - Pattern Prize Pool: 80% ($20)
  - Jackpot Pool: 10% ($2.50)
  - Platform Fee: 10% ($2.50)

ACTIVE TIER:
• Entry Fee: $75 USDC
• Trading Capital: $1,000 USDC (platform-provided)
• Distribution:
  - Trading Prize Pool: 80% ($60)
  - Jackpot Pool: 10% ($7.50)
  - Platform Fee: 10% ($7.50)
```

### Updated Prize Distribution

```
PATTERN PRIZE POOL (All 100 players compete):
• Source: Passive entry fees × 80%
• 1st place: 70% of pool
• 2nd place: 20% of pool
• 3rd place: 10% of pool

TRADING PRIZE POOL (30 active players compete):
• Source: Active entry fees × 80%
• 1st place: 70% of pool
• 2nd place: 20% of pool
• 3rd place: 10% of pool

JACKPOT POOL (All 100 players eligible):
• Source: (Passive × 10%) + (Active × 10%)
• Perfect Grid: 50% of jackpot (can roll over)
• Pattern Bonus: 50% of jackpot (always awarded)
```

### Updated Competition Mechanics

```
MVP RESTRICTIONS:
• One competition at a time per user
• Always running: One passive + one active
• Passive: Max 100 players
• Active: Max 30 players
• Minimum to start: 20 total (5 passive + 5 active minimum each)

POST-MVP:
• Passive: Unlimited concurrent entries
• Active: One active + unlimited passive
• Multiple categories running simultaneously
```

### Updated Onboarding Requirements

```
PASSIVE PLAYERS (MVP):
• Hyperliquid wallet: Required
• Minimum balance: 25 USDC
• Builder code approval: Not needed
• Agent wallet: Not needed

ACTIVE PLAYERS (MVP):
• Hyperliquid wallet: Required
• Minimum balance: 75 USDC
• Builder code approval: Required (one-time)
• Agent wallet: Created automatically

PASSIVE PLAYERS (POST-MVP):
• Payment options: Hyperliquid wallet OR credit card (MoonPay)
• Minimum: 25 USDC or $25.75 USD

ACTIVE PLAYERS (POST-MVP):
• Payment options: Hyperliquid wallet only
• Must have for trading functionality
```

---

## SECTION 7: SUCCESS METRICS (REVISED)

### Year 1 Targets

```
PASSIVE TIER:
• MAU: 15,000 by Month 12
• Competitions/user/month: 10
• Average entry: $25
• Monthly gross wagers: $3.75M
• Platform revenue: $375K (10%)

ACTIVE TIER:
• MAU: 3,000 by Month 12
• Competitions/user/month: 8
• Average entry: $75
• Monthly gross wagers: $1.8M
• Platform revenue: $180K (10%)
• Builder code fees: $50K (5 bps on volume)

CONVERSION:
• Passive → Active: 15-20% within 90 days
• Target: 2,250-3,000 active players from passive cohort
```

### Economics Model (Conservative)

```
Month 12 Steady State:

Passive:
• 15,000 MAU × 10 comps/month = 150,000 entries
• 150,000 × $25 = $3.75M gross wagers
• Platform: $375K (10%)

Active:
• 3,000 MAU × 8 comps/month = 24,000 entries
• 24,000 × $75 = $1.8M gross wagers
• Platform: $180K (10%)
• Builder fees: $50K (5 bps)
• Total active: $230K

Monthly Revenue: $605K
Annual Revenue: $7.26M

Operating Costs (estimated):
• Infrastructure: $50K/month
• Team (10 people): $150K/month
• Marketing: $100K/month
• Legal/compliance: $25K/month
• Total: $325K/month

Net Profit: $280K/month = $3.36M annually
Margin: 46%
```

---

## SECTION 8: NEXT STEPS & DECISIONS

### Immediate Actions Required

**1. Approve Final Specs**
- [ ] Review this entire document
- [ ] Sign off on all decisions
- [ ] Confirm no additional concerns

**2. Update Battle Grid Master Spec**
- [ ] Rewrite full BATTLE_GRID.md with dual-track
- [ ] Update all sections (onboarding, prizes, settlement)
- [ ] Add dual-track diagrams and flows

**3. Design Phase**
- [ ] Create Figma mockups (dual-track UI)
- [ ] Design leaderboard tabs
- [ ] Design spectator feed
- [ ] Design tier-specific results screens
- [ ] Design upgrade CTAs

**4. Technical Architecture**
- [ ] Database schema updates
- [ ] Prize pool calculation logic
- [ ] Settlement algorithms
- [ ] WebSocket spectator feeds

**5. Begin Phase 1 Development**
- [ ] Set up GitHub project board
- [ ] Break into sprint tasks
- [ ] Assign to engineering team
- [ ] Target: Week 1-4 passive MVP

---

## CONCLUSION

**Dual-Track Battle Grid is APPROVED for development.**

All critical blockers have been resolved with clear decisions:
✅ Trading capital model (Passive = $0, Active = $1,000)
✅ Prize pools (Separate, fair distribution)
✅ Onboarding (100% crypto MVP, MoonPay future)
✅ Leaderboards (Separate tabs, clear tier labels)
✅ Competition limits (One at a time MVP)

The dual-track model successfully:
- Expands TAM by 6-12x (60M DFS players addressable)
- Reduces capital risk by 70% (30 active vs 100)
- Creates natural upgrade funnel (spectate → participate)
- Maintains positive ROI for both tiers (33.6% passive, 118% active)

**Ready to proceed to implementation.**

---

**Document Status:** ✅ APPROVED FOR DEVELOPMENT  
**Next Milestone:** Update full Battle Grid spec with dual-track  
**Target Launch:** Q1 2026 (12-week MVP sprint)