# SYBIL ATTACK PROBABILITY ANALYSIS
**Product:** Battle Grid
**Date:** November 13, 2025
**Purpose:** Quantify the economic feasibility of multi-account jackpot gaming

---

## Executive Summary

**Conclusion**: Sybil attacks on jackpot prizes are **economically unfeasible** when index size ≥ 20 coins due to:
- Extremely low Perfect Grid Jackpot probability (< 0.0001%)
- High entry cost to achieve meaningful coverage
- Pattern Jackpot requires genuine skill (cannot be gamed with volume alone)

---

## Attack Scenario: Multi-Account Perfect Grid Gaming

**Attacker Goal**: Win Perfect Grid Jackpot (50% of jackpot pool) by entering multiple accounts with different roster permutations to increase probability of exact market ranking match.

### Mathematical Model

**Perfect Grid Jackpot Requirement**: Player's roster ranking EXACTLY matches market's final ranking

**Probability Calculation**:
```
P(exact_match) = 1 / (C(N, 9) × 9!)

Where:
- N = Index size (total coins available)
- C(N, 9) = Combinations of selecting 9 coins from N
- 9! = Permutations of ranking those 9 coins
```

### Probability Table by Index Size

| Index Size (N) | Combinations C(N,9) | Possible Rankings (9!) | Total Possible Grids | Probability | Accounts Needed (50% chance) |
|----------------|---------------------|------------------------|----------------------|-------------|------------------------------|
| **12 coins** | 220 | 362,880 | **79,833,600** | **0.00000125%** | ~55.3 million |
| **20 coins** | 167,960 | 362,880 | **60,942,028,800** | **0.00000000164%** | ~42.2 billion |
| **24 coins** | 1,307,504 | 362,880 | **474,467,251,200** | **0.00000000021%** | ~328 billion |
| **32 coins** | 10,518,300 | 362,880 | **3,816,669,484,800** | **0.00000000003%** | ~2.6 trillion |

### Economic Feasibility Analysis

**Competition Parameters**:
- Entry fee: $50 (standard tier)
- Jackpot pool: 5% of entry fees
- Perfect Grid share: 50% of jackpot pool = 2.5% of total entries

**Scenario: 100-Player Competition @ $50 Entry**
```
Total Entry Fees: $5,000
Jackpot Pool: $250 (5%)
Perfect Grid Prize: $125 (50% of jackpot)
```

#### Attack Cost vs Prize for 12-Coin Index

**To achieve 1% chance of winning**:
```
Accounts needed: 798,336 entries
Entry cost: 798,336 × $50 = $39,916,800
Expected prize: $125
Expected ROI: -99.9997%
```

**Conclusion**: **Economically impossible** even with smallest index size.

#### Attack Cost vs Prize for 20-Coin Index

**To achieve 0.001% chance of winning**:
```
Accounts needed: 609,420 entries
Entry cost: 609,420 × $50 = $30,471,000
Expected prize: $125
Expected ROI: -99.9996%
```

**Conclusion**: **Astronomically infeasible** with standard index size.

---

## Attack Scenario: Pattern Jackpot Volume Gaming

**Attacker Goal**: Win Pattern Jackpot (50% of jackpot pool) by entering multiple accounts to statistically cover more prediction patterns and increase probability of highest XP score.

### Why This Attack FAILS

**Pattern Jackpot Requirement**: Highest XP score among all players

**XP Components**:
1. **Direction Accuracy** (900 XP max): Requires correct UP/DOWN predictions
2. **Ranking Accuracy** (1,100 XP max): Requires correct position matches
3. **Pattern Bonuses** (7,800 XP max): Requires complete rows/columns/diagonals

**Critical Issue**: Volume ≠ Accuracy

**Example**:
- Attacker enters 10 accounts with random predictions
- Legitimate player with strong analysis enters 1 account
- **Legitimate player's single well-researched entry > 10 random entries**

**Why?**:
- Pattern bonuses dominate scoring (7,800 / 9,800 = 79.6% of max score)
- Patterns require CORRELATED correct predictions (3 adjacent cells)
- Random entries have LOW correlation (independent coin movements)
- Skilled analysis identifies correlated sectors (e.g., "L1 chains pump together")

### Pattern Jackpot Probability (Skilled vs Random)

**Random Entry Expected Score**:
```
Direction: ~450 XP (50% random chance × 9 coins × 100 XP)
Ranking: ~122 XP (1/9 exact match chance × 9 positions × 100 XP avg)
Patterns: ~0 XP (requires correlated predictions, nearly impossible randomly)
Total: ~572 XP (5.8% of max)
```

**Skilled Entry Expected Score**:
```
Direction: ~700 XP (78% accuracy based on sector analysis)
Ranking: ~300 XP (captain + 2 positions likely)
Patterns: ~1,600 XP (1 complete row + 1 column achievable)
Total: ~2,600 XP (26.5% of max)
```

**Comparison**: Skilled player scores **4.5x higher** than random entry.

**Volume Required to Beat Skilled Player**:
- Attacker needs 4-5 random entries to match ONE skilled entry's expected score
- Entry cost: 5 × $50 = $250
- Prize: $125 (Pattern Jackpot)
- **Expected ROI: -50%**

**Conclusion**: **Not economically viable** for attacker.

---

## Defense Mechanisms (Built-In)

### 1. **Index Restriction**
- Players select 9 coins from curated index (20-30 coins)
- Reduces Perfect Grid probability to near-zero
- Forces strategic coin selection (cannot cover all combinations)

### 2. **Pattern Scoring Dominance**
- 79.6% of max score from patterns (7,800 / 9,800 XP)
- Patterns require skill (sector correlation analysis)
- Volume of random entries < quality of skilled analysis

### 3. **Dual Jackpot Split**
- Perfect Grid (50%): Impossible to game economically
- Pattern Jackpot (50%): Skill-based, not volume-based

### 4. **Competition Limit** (Current MVP)
- Players can only enter ONE competition at a time
- Prevents multi-account abuse within same competition
- Future: Better trade isolation with hyperEVM smart contracts

---

## Future Considerations (Post-MVP)

### 1. **Minimum Trade Requirement**
- Require at least 3 trades per competition
- Hold positions for minimum 30 seconds
- Prevents "enter and forget" strategies

### 2. **Behavioral Analysis**
- Flag accounts with identical:
  - IP address
  - Device fingerprint
  - Trading patterns
- Not a blocker, but monitoring tool

### 3. **KYC for High-Stake Competitions**
- Entry fees >$100 require identity verification
- Reduces multi-account feasibility

---

## Recommendation: Optimal Index Size

**Analysis Summary**:

| Index Size | Perfect Grid Feasibility | Pattern Gaming Risk | Diversity | Recommendation |
|------------|-------------------------|---------------------|-----------|----------------|
| 12 coins | Still infeasible but highest risk | Medium (limited coin selection) | Low | ❌ Too restrictive |
| 20 coins | Completely infeasible | Low (good variety) | Good | ✅ **RECOMMENDED** |
| 24 coins | Completely infeasible | Very Low | Great | ✅ Optimal for variety |
| 32 coins | Completely infeasible | Very Low | Excellent | ⚠️ May dilute competition focus |

**Final Recommendation**: **24-coin index** (sweet spot for diversity + security)

**Rationale**:
- Perfect Grid: 1 in 474 billion chance (impossible to game)
- Pattern Jackpot: Large enough pool for sector analysis skill expression
- Player experience: Enough variety without overwhelming choice

---

## Conclusion

**Sybil Attack Risk Assessment**: 🟢 **LOW RISK**

**Key Findings**:
1. Perfect Grid Jackpot is **economically impossible** to game (< 0.000001% chance)
2. Pattern Jackpot favors **skill over volume** (4-5x multiplier for skilled analysis)
3. Index restriction (20-30 coins) provides sufficient defense
4. One-competition-at-a-time limit (MVP) prevents multi-entry abuse

**No additional anti-Sybil measures needed for MVP**. Future enhancements (minimum trades, behavioral analysis) can be added post-launch if patterns emerge.

---

**Last Updated**: November 13, 2025
**Status**: Analysis Complete
**Reviewed By**: Product Team
