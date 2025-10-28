---
sidebar_position: 3
---

# Glossary

> **Quick Summary**: Reference guide for all GRIDLOCK terminology and game concepts
> **Difficulty**: Beginner
> **Time to Read**: Reference (scan as needed)

Complete reference for GRIDLOCK game terminology, organized alphabetically.

---

## A

### ATTACK (Power-Up)
**Type**: Offensive power-up
**Effect**: Awards +1,000 bonus points when successful
**Success Condition**:
- **Market Grid**: Placed on the coin with lowest volatility in your grid
- **Coin Grid**: Placed on the candle with lowest volatility (smallest price swing)
**Strategy**: Place on stable assets (BTC, ETH) or consolidation candles
**Icon**: 🗡️

**Example**: In Market Grid L1 category, placing ATTACK on Bitcoin (typically the most stable coin) will likely succeed.

---

## B

### Base Points
**Definition**: Points earned for individual correct predictions in Coin Grid mode
**Not applicable to**: Market Grid (has no base points)

**Point Values by Time Range**:
- **24H Grid**: +25 points per correct candle
- **4H Grid**: +50 points per correct candle
- **1H Grid**: +75 points per correct candle

**Example**: If you correctly predict 15 out of 16 candles in a 4H grid, your base points are 15 × 50 = 750 points.

---

## C

### Candle
**Definition**: A representation of price movement for a specific time interval
**Components**:
- **Open**: Price at the start of the interval
- **High**: Highest price reached during the interval
- **Low**: Lowest price reached during the interval
- **Close**: Price at the end of the interval

**Prediction Rule**:
- **UP**: Close > Open (price increased)
- **DOWN**: Close < Open (price decreased)

**Example**: A 15-minute candle in 4H mode represents 15 minutes of price action. If Bitcoin opens at $50,000 and closes at $50,200, the candle is **UP**.

**Related Terms**: [OHLC](#ohlc), [Time Range](#time-range)

### Category (Game Subtype)
**Definition**: A group of related cryptocurrencies in Market Grid mode

**Three Categories**:
1. **L1_CHAINS**: Layer-1 blockchain protocols (Bitcoin, Ethereum, Solana, BNB, Avalanche, etc.)
2. **DEFI**: Decentralized finance tokens (Uniswap, Aave, Curve, Synthetix, Chainlink, etc.)
3. **MEMES**: Meme-driven cryptocurrencies (Dogecoin, Pepe, Shiba Inu, TRUMP, Fartcoin, etc.)

**Strategy Note**: Meme categories have highest volatility, L1 chains are more stable.

**Related Terms**: [Market Grid](#market-grid), [Subtype](#subtype)

### Coin Grid
**Definition**: One of two main game modes where you predict directional price movements (UP/DOWN) for individual candles of a single cryptocurrency

**How It Works**:
1. Select a cryptocurrency (e.g., Bitcoin)
2. Choose a time range (24H, 4H, or 1H)
3. Predict UP or DOWN for each candle on the grid
4. Complete patterns to earn bonus points
5. Deploy power-ups strategically

**Grid Sizes by Time Range**:
- **24H**: 6×4 grid (24 candles)
- **4H**: 4×4 grid (16 candles)
- **1H**: 4×3 grid (12 candles)

**Scoring**: Base points per correct prediction + pattern bonuses + power-up bonuses

**Related Terms**: [Time Range](#time-range), [Market Grid](#market-grid), [Prediction](#prediction)

### Column
**Definition**: A vertical line pattern on the grid

**Column Definitions**:
- **4×3 grids**: 4 columns of 3 cells each
- **4×4 grids**: 4 columns of 4 cells each
- **6×4 grids**: 6 columns of 4 cells each

**Scoring by Grid Size**:
- **Market Grid 4×3**: Full column (3 correct) = 3,000 points
- **Coin Grid 24H (6×4)**: Full column (4 correct) = 6,000 points | Partial (3) = 1,200 points
- **Coin Grid 4H (4×4)**: Full column (4 correct) = 5,000 points | Partial (3) = 1,000 points
- **Coin Grid 1H (4×3)**: Full column (3 correct) = 3,000 points

**Example**: In a 4×4 grid, Column 1 consists of cells at grid positions [0, 4, 8, 12].

**Related Terms**: [Row](#row), [Pattern](#pattern)

---

## D

### DEFI (Category)
**Definition**: Category of decentralized finance cryptocurrencies in Market Grid mode

**Coins Included** (12 total):
Uniswap (UNI), Aave (AAVE), Curve DAO (CRV), Synthetix (SNX), Chainlink (LINK), Lido DAO (LDO), PancakeSwap (CAKE), Jupiter (JUP), Pump (PUMP), Ethena (ENA), WLFI, Metronome (MET)

**Volatility**: Medium—more stable than memes, more volatile than established L1s
**Strategy**: Good for intermediate players familiar with DeFi protocols

**Related Terms**: [Category](#category), [Market Grid](#market-grid), [L1_CHAINS](#l1_chains-category), [MEMES](#memes-category)

### Diagonal
**Definition**: A corner-to-corner pattern available only in 4×4 grids (Coin Grid 4H mode)

**Two Diagonals**:
1. **Main Diagonal**: Top-left to bottom-right [0, 5, 10, 15]
2. **Anti-Diagonal**: Top-right to bottom-left [3, 6, 9, 12]

**Scoring** (4H Grid only):
- **Full Diagonal** (4 correct): **8,000 points** 🔥 (highest single pattern!)
- **Partial Diagonal** (3 correct): **1,500 points**

**Strategy Note**: Diagonals are the highest-value pattern in the entire game—prioritize completing them in 4H mode.

**Related Terms**: [Pattern](#pattern), [4H Grid](#time-range)

### DOWN Prediction
**Definition**: A prediction that a candle will close **lower** than it opened

**Rule**: Close < Open

**Example**: If a candle opens at $50,000 and you predict DOWN, you're predicting the close will be below $50,000 (e.g., $49,800).

**Related Terms**: [UP Prediction](#up-prediction), [Candle](#candle), [Prediction](#prediction)

---

## F

### Four Corners
**Definition**: A pattern consisting of all four corner cells of a 4×4 grid

**Grid Positions**: [0, 3, 12, 15] (top-left, top-right, bottom-left, bottom-right)

**Scoring** (4H Grid only):
- **All 4 correct**: **4,000 points**

**Availability**: Only in Coin Grid 4H mode (4×4 grid)

**Strategy Note**: Can be combined with diagonal strategies since corners are diagonal endpoints.

**Related Terms**: [Pattern](#pattern), [Diagonal](#diagonal)

---

## G

### Grid
**Definition**: The game board where you place coins (Market Grid) or make predictions (Coin Grid)

**Grid Sizes**:
- **Market Grid**: 4×3 (12 coins)
- **Coin Grid 24H**: 6×4 (24 candles)
- **Coin Grid 4H**: 4×4 (16 candles)
- **Coin Grid 1H**: 4×3 (12 candles)

**Grid Positions**: Numbered from 0 (top-left) going left-to-right, top-to-bottom:
```
4×3 Grid:
[ 0]  [ 1]  [ 2]  [ 3]
[ 4]  [ 5]  [ 6]  [ 7]
[ 8]  [ 9]  [10]  [11]
```

**Related Terms**: [Market Grid](#market-grid), [Coin Grid](#coin-grid)

### GUARD (Power-Up)
**Type**: Defensive power-up
**Effect**: Awards +1,000 bonus points when successful
**Success Condition**:
- **Market Grid**: Placed on the coin with highest volatility in your grid
- **Coin Grid**: Placed on the candle with highest volatility (largest price swing)
**Strategy**: Place on volatile assets (meme coins) or breakout candles
**Icon**: 🛡️

**Example**: In Market Grid Memes category, placing GUARD on Fartcoin (typically high volatility) often succeeds.

**Related Terms**: [Power-Up](#power-up), [Volatility](#volatility)

---

## L

### L1_CHAINS (Category)
**Definition**: Category of Layer-1 blockchain cryptocurrencies in Market Grid mode

**Coins Included** (12 total):
Bitcoin (BTC), Ethereum (ETH), Solana (SOL), Ripple (XRP), Binance Coin (BNB), Avalanche (AVAX), Litecoin (LTC), Toncoin (TON), Sui (SUI), Aptos (APT), Zcash (ZEC), Hype (HYPE)

**Volatility**: Generally lower than Memes, higher than stablecoins
**Strategy**: Good for beginners—more predictable price movements

**Related Terms**: [Category](#category), [Market Grid](#market-grid), [DEFI](#defi-category), [MEMES](#memes-category)

---

## M

### Market Grid
**Definition**: One of two main game modes where you predict relative performance among coins within a category

**How It Works**:
1. Choose a category (L1_CHAINS, DEFI, or MEMES)
2. Select 12 coins from that category
3. Arrange coins strategically on a 4×3 grid
4. Place up to 3 power-ups (optional)
5. Game ranks coins by actual % price change
6. Patterns form based on coin rankings

**Key Difference from Coin Grid**: No explicit predictions needed—strategy is positioning coins you expect to perform well.

**Grid Size**: 4×3 (12 coins)

**Scoring**: Pattern completion bonuses + power-up bonuses (no base points)

**Related Terms**: [Coin Grid](#coin-grid), [Category](#category), [Pattern](#pattern)

### MEMES (Category)
**Definition**: Category of meme-driven cryptocurrencies in Market Grid mode

**Coins Included** (12 total):
Dogecoin (DOGE), Pepe (PEPE), Shiba Inu (SHIB), dogwifhat (WIF), Fartcoin (FART), TRUMP, PENGU, Popcat (POPCAT), Purr (PURR), Melania (MELANIA), AIXBT, MoonDeng (MOONDENG)

**Volatility**: Highest among all categories
**Strategy**: High-risk, high-volatility plays—GUARD power-up often succeeds here

**Related Terms**: [Category](#category), [Market Grid](#market-grid), [L1_CHAINS](#l1_chains-category)

---

## O

### OHLC
**Acronym**: Open, High, Low, Close
**Definition**: The four key price points that define a candle

**Components**:
- **Open (O)**: Price at the start of the candle's time interval
- **High (H)**: Highest price reached during the interval
- **Low (L)**: Lowest price reached during the interval
- **Close (C)**: Price at the end of the interval

**Prediction Rule**:
- If Close > Open → Candle is **UP**
- If Close < Open → Candle is **DOWN**

**Volatility Calculation**: Volatility = |Close - Open| (absolute difference)

**Related Terms**: [Candle](#candle), [Volatility](#volatility)

---

## P

### Pattern
**Definition**: A geometric formation of correct predictions on the grid that awards bonus points

**Available Patterns by Grid Size**:

**Market Grid (4×3)**:
- Rows (3 total)
- Columns (4 total)

**Coin Grid 24H (6×4)**:
- Rows (4 total)
- Columns (6 total)
- Squares (15 total)

**Coin Grid 4H (4×4)**:
- Rows (4 total)
- Columns (4 total)
- Diagonals (2 total)
- Four Corners (1 total)
- Squares (9 total)

**Coin Grid 1H (4×3)**:
- Rows (3 total)
- Columns (4 total)
- Squares (6 total)

**Key Strategy**: A single correct prediction can contribute to multiple patterns simultaneously.

**Related Terms**: [Row](#row), [Column](#column), [Diagonal](#diagonal), [Square](#square)

### Power-Up
**Definition**: Strategic abilities you can place on grid cells to earn bonus points

**Three Types**:
1. **ATTACK** 🗡️: Succeeds on lowest volatility cell
2. **GUARD** 🛡️: Succeeds on highest volatility cell
3. **RESTORE** 🔄: Automatically converts one incorrect prediction to correct

**Placement Limit**: Up to 3 power-ups per game (one of each type)

**Bonus Points**: +1,000 points per successful power-up

**Strategy**: Place power-ups on cells within multiple patterns to maximize impact.

**Related Terms**: [ATTACK](#attack-power-up), [GUARD](#guard-power-up), [RESTORE](#restore-power-up)

### Prediction
**Definition**: Your forecast for a candle's directional movement in Coin Grid mode

**Two Options**:
- **UP**: Predicting Close > Open
- **DOWN**: Predicting Close < Open

**Accuracy Scoring** (Coin Grid only):
- **24H Grid**: +25 points per correct prediction
- **4H Grid**: +50 points per correct prediction
- **1H Grid**: +75 points per correct prediction

**Note**: Market Grid has no predictions—coin rankings determine outcomes.

**Related Terms**: [UP Prediction](#up-prediction), [DOWN Prediction](#down-prediction), [Candle](#candle)

---

## R

### RESTORE (Power-Up)
**Type**: Recovery power-up
**Effect**: Automatically converts one incorrect prediction to correct, awards +1,000 bonus points
**Success Condition**: Always succeeds (if there's an incorrect prediction on that cell)
**Strategy**: Place on pattern-critical cells where you're uncertain—acts as insurance
**Icon**: 🔄

**Key Difference**: Unlike ATTACK and GUARD, RESTORE always succeeds (assuming the prediction was incorrect).

**Example**: If you place RESTORE on a cell that would complete a diagonal, and that prediction is wrong, RESTORE converts it to correct, completing the diagonal (+8,000 points) plus RESTORE bonus (+1,000 points) = +9,000 points from one power-up!

**Related Terms**: [Power-Up](#power-up), [Pattern](#pattern)

### Results Screen
**Definition**: The final game screen displaying your score breakdown after settlement

**Components Displayed**:
1. **Base Points** (Coin Grid only): Sum of correct prediction points
2. **Pattern Scores**: Each completed pattern with point values
3. **Power-Up Scores**: Success/failure status of each power-up
4. **Total Score**: Sum of all score components

**Visual Indicators**:
- ✅ Green cells: Correct predictions
- ❌ Red cells: Incorrect predictions
- Pattern highlights: Completed formations
- Power-up icons: Success (green) / Failure (red)

**Related Terms**: [Scoring](#scoring), [Wait State](#wait-state)

### Row
**Definition**: A horizontal line pattern on the grid

**Row Definitions**:
- **4×3 grids**: 3 rows of 4 cells each
- **4×4 grids**: 4 rows of 4 cells each
- **6×4 grids**: 4 rows of 6 cells each

**Scoring by Grid Size**:
- **Market Grid 4×3**: Full row (4 correct) = 4,000 points | Partial (3) = 800 points
- **Coin Grid 24H (6×4)**: Full row (6 correct) = 12,000 points | (5) = 4,000 | (4) = 1,000
- **Coin Grid 4H (4×4)**: Full row (4 correct) = 5,000 points | Partial (3) = 1,000 points
- **Coin Grid 1H (4×3)**: Full row (4 correct) = 4,000 points | Partial (3) = 800 points

**Strategy Note**: Rows are generally the highest-value patterns (except 4H diagonals).

**Example**: In a 4×4 grid, Row 1 consists of cells [0, 1, 2, 3].

**Related Terms**: [Column](#column), [Pattern](#pattern)

---

## S

### Scoring
**Definition**: The point calculation system that determines your final game result

**Three Scoring Components**:
1. **Base Points** (Coin Grid only): Points per correct prediction
2. **Pattern Bonuses**: Points for completed geometric formations
3. **Power-Up Bonuses**: +1,000 points per successful power-up

**Complete Scoring Tables**: See [Scoring Guide](/features/scoring) for detailed breakdowns.

**Key Insight**: Pattern bonuses are worth 40-160× more than base points—prioritize pattern completion.

**Related Terms**: [Pattern](#pattern), [Base Points](#base-points), [Power-Up](#power-up)

### Square
**Definition**: A 2×2 block pattern of correct predictions

**Availability**: Coin Grid 24H, 4H, and 1H modes (not available in Market Grid)

**Square Positions by Grid Size**:
- **6×4 Grid (24H)**: 15 possible squares
- **4×4 Grid (4H)**: 9 possible squares
- **4×3 Grid (1H)**: 6 possible squares

**Scoring**:
- **24H Grid**: Square (4 correct) = 3,500 points
- **4H Grid**: Square (4 correct) = 3,000 points
- **1H Grid**: Square (4 correct) = 2,500 points

**Example**: In a 4×4 grid, the top-left square consists of cells [0, 1, 4, 5].

**Related Terms**: [Pattern](#pattern)

### Subtype
**Definition**: Another term for Category in Market Grid mode

**Three Subtypes**:
- **L1_CHAINS**: Layer-1 blockchains
- **DEFI**: Decentralized finance tokens
- **MEMES**: Meme-driven cryptocurrencies

**Related Terms**: [Category](#category), [Market Grid](#market-grid)

---

## T

### Time Range
**Definition**: The duration and candle interval for Coin Grid games

**Three Options**:

| Time Range | Total Duration | Candles | Interval | Grid Size | Base Points |
|-----------|---------------|---------|----------|-----------|-------------|
| **24H** | 24 hours | 24 | 1 hour | 6×4 | +25 each |
| **4H** | 4 hours | 16 | 15 minutes | 4×4 | +50 each |
| **1H** | 1 hour | 12 | 5 minutes | 4×3 | +75 each |

**Selection Strategy**:
- **24H**: Easier predictions, more pattern opportunities, longer wait time
- **4H**: Balanced difficulty, access to diagonals, optimal risk-reward
- **1H**: Hardest predictions, highest per-prediction points, fastest results

**Related Terms**: [Coin Grid](#coin-grid), [Candle](#candle)

---

## U

### UP Prediction
**Definition**: A prediction that a candle will close **higher** than it opened

**Rule**: Close > Open

**Example**: If a candle opens at $50,000 and you predict UP, you're predicting the close will be above $50,000 (e.g., $50,200).

**Related Terms**: [DOWN Prediction](#down-prediction), [Candle](#candle), [Prediction](#prediction)

---

## V

### Volatility
**Definition**: The magnitude of price movement for a coin or candle

**Calculation**: Volatility = |Close - Open| (absolute price difference)

**Importance**: Determines ATTACK and GUARD power-up success

**Power-Up Mechanics**:
- **Lowest Volatility** → ATTACK succeeds
- **Highest Volatility** → GUARD succeeds

**Example**:
- Candle 1: Opens at $50,000, closes at $50,500 → Volatility = $500
- Candle 2: Opens at $50,000, closes at $49,200 → Volatility = $800
- If GUARD is placed on Candle 2 and no other candle has higher volatility, GUARD succeeds.

**Related Terms**: [ATTACK](#attack-power-up), [GUARD](#guard-power-up), [OHLC](#ohlc)

---

## W

### Wait State
**Definition**: The game state after starting where the game settles based on real market data

**Duration**:
- **Market Grid**: Until end of current market period
- **Coin Grid 24H**: 24 hours
- **Coin Grid 4H**: 4 hours
- **Coin Grid 1H**: 1 hour

**What Happens**:
- Game fetches real-time price data from market feeds
- **Market Grid**: Ranks coins by % price change
- **Coin Grid**: Settles each candle's UP/DOWN outcome
- Determines pattern completions and power-up success

**Note**: You cannot modify predictions or power-ups during Wait State.

**Related Terms**: [Results Screen](#results-screen)

---

## Quick Reference: Scoring Tables

### Market Grid (4×3) Scoring

| Pattern | Requirement | Points |
|---------|-------------|--------|
| **Full Row** | 4 correct | 4,000 |
| **Partial Row** | 3 correct | 800 |
| **Full Column** | 3 correct | 3,000 |
| **ATTACK Success** | Lowest volatility | +1,000 |
| **GUARD Success** | Highest volatility | +1,000 |
| **RESTORE Success** | Converts incorrect | +1,000 |

---

### Coin Grid 24H (6×4) Scoring

| Component | Requirement | Points |
|-----------|-------------|--------|
| **Base** | Correct prediction | +25 |
| **Full Row** | 6 correct | 12,000 |
| **Row (5)** | 5 correct | 4,000 |
| **Row (4)** | 4 correct | 1,000 |
| **Full Column** | 4 correct | 6,000 |
| **Column (3)** | 3 correct | 1,200 |
| **Square (2×2)** | 4 correct | 3,500 |
| **Power-Up Success** | Condition met | +1,000 |

---

### Coin Grid 4H (4×4) Scoring

| Component | Requirement | Points |
|-----------|-------------|--------|
| **Base** | Correct prediction | +50 |
| **Row/Column** | 4 correct | 5,000 |
| **Row/Column (3)** | 3 correct | 1,000 |
| **Diagonal** | 4 correct | 8,000 🔥 |
| **Diagonal (3)** | 3 correct | 1,500 |
| **Four Corners** | 4 correct | 4,000 |
| **Square (2×2)** | 4 correct | 3,000 |
| **Power-Up Success** | Condition met | +1,000 |

---

### Coin Grid 1H (4×3) Scoring

| Component | Requirement | Points |
|-----------|-------------|--------|
| **Base** | Correct prediction | +75 |
| **Full Row** | 4 correct | 4,000 |
| **Partial Row** | 3 correct | 800 |
| **Full Column** | 3 correct | 3,000 |
| **Square (2×2)** | 4 correct | 2,500 |
| **Power-Up Success** | Condition met | +1,000 |

---

## Related Documentation

- [Overview](/getting-started/overview) - Game introduction
- [How to Play](/getting-started/how-to-play) - Step-by-step guide
- [Market Grid Rules](/game-modes/market-grid) - Detailed Market Grid mechanics
- [Coin Grid Rules](/game-modes/coin-grid) - Detailed Coin Grid mechanics
- [Pattern Guide](/features/patterns) - Complete pattern catalog
- [Power-Up Strategy](/features/power-ups) - Advanced power-up tactics
- [Scoring Reference](/features/scoring) - Complete scoring calculations

---

*Last Updated: 2025-10-28*
*Game Version: MVP v1.0*
