I'll analyze the GRIDLOCK application by examining the documentation and screenshots to provide a comprehensive breakdown of the scoring factors.Based on my detailed analysis of the GRIDLOCK application code and screenshots, here's a comprehensive breakdown of the scoring system:

## **GRIDLOCK Scoring System - Complete Analysis**

### **Game Architecture Overview**

GRIDLOCK features two distinct game modes with fundamentally different scoring mechanics:

1. **Market Grid Mode**: 4×3 grid (12 cells) predicting directional movements of multiple cryptocurrencies
2. **Coin Grid Mode**: Variable grid sizes (12/16/24 cells) predicting individual candle movements of a single cryptocurrency

---

## **MARKET GRID MODE (4×3 Layout)**

### **Grid Structure**
- **Dimensions**: 4 columns × 3 rows = 12 total cells
- **Game Flow**: Select arena → Build grid with 12 different coins → Predict UP/DOWN for each → Add power-ups → Wait for settlement

### **Scoring Factors**

#### **1. Pattern-Based Scoring**
The scoring system rewards completed patterns where predictions are correct:

**Row Patterns (3 rows total)**
- **Complete Row (4/4 correct)**: 4,000 points
- **Partial Row (3/4 correct)**: 800 points

**Column Patterns (4 columns total)**
- **Complete Column (3/3 correct)**: 3,000 points

**Key Architectural Principle**: 
- Predictions are evaluated as correct/incorrect based on actual price movement direction (UP if change ≥ 0, DOWN if change < 0)
- A cell with RESTORE power-up always counts as correct for pattern evaluation
- No base points for individual correct predictions (only pattern bonuses)

#### **2. Power-Up Scoring**
Each successful power-up awards **1,000 bonus points**:

**ATTACK Power-Up**
- **Success Condition**: Placed on the coin with the LOWEST volatility (smallest absolute price change)
- **Logic**: Targets the most stable/boring coin
- **Points**: 1,000 if successful, 0 if failed

**GUARD Power-Up**
- **Success Condition**: Placed on the coin with the HIGHEST volatility (largest absolute price change)
- **Logic**: Protects the most volatile coin
- **Points**: 1,000 if successful, 0 if failed

**RESTORE Power-Up**
- **Success Condition**: Placed on a coin where the prediction was WRONG
- **Logic**: Converts a failed prediction into success for pattern calculation
- **Critical Behavior**: Makes the cell count as correct in all pattern calculations, but only awards 1,000 points if the original prediction was actually incorrect
- **Points**: 1,000 if original prediction failed, 0 if prediction was already correct

---

## **COIN GRID MODE (Variable Grid Sizes)**

### **Grid Structure Options**

1. **24-Hour Grid**: 6×4 layout (24 candles, 1-hour intervals)
2. **4-Hour Grid**: 4×4 layout (16 candles, 15-minute intervals)
3. **1-Hour Grid**: 4×3 layout (12 candles, 5-minute intervals)

### **Scoring Factors**

#### **1. Base Prediction Scoring**
Unlike Market Grid, Coin Grid awards points for each correct prediction:

- **24H Grid (6×4)**: 25 points per correct prediction
- **4H Grid (4×4)**: 50 points per correct prediction
- **1H Grid (4×3)**: 75 points per correct prediction

**Pattern**: Shorter timeframes = higher per-prediction value (inversely proportional to grid size)

#### **2. Pattern-Based Scoring**

**24-Hour Grid (6×4 - 24 Candles)**

*Row Patterns (4 rows)*
- **6/6 correct**: 12,000 points
- **5/6 correct**: 4,000 points
- **4/6 correct**: 1,000 points

*Column Patterns (6 columns)*
- **4/4 correct**: 6,000 points
- **3/4 correct**: 1,200 points

*Square Patterns (15 possible 2×2 squares)*
- **4/4 correct**: 3,500 points each

**4-Hour Grid (4×4 - 16 Candles)**

*Row Patterns (4 rows)*
- **4/4 correct**: 5,000 points
- **3/4 correct**: 1,000 points

*Column Patterns (4 columns)*
- **4/4 correct**: 5,000 points
- **3/4 correct**: 1,000 points

*Diagonal Patterns (2 diagonals)*
- **4/4 correct**: 8,000 points
- **3/4 correct**: 1,500 points

*Four Corners*
- **4/4 correct**: 4,000 points

*Square Patterns (9 possible 2×2 squares)*
- **4/4 correct**: 3,000 points each

**1-Hour Grid (4×3 - 12 Candles)**

*Row Patterns (3 rows)*
- **4/4 correct**: 4,000 points
- **3/4 correct**: 800 points

*Column Patterns (4 columns)*
- **3/3 correct**: 3,000 points

*Square Patterns (6 possible 2×2 squares)*
- **4/4 correct**: 2,500 points each

#### **3. Power-Up Scoring (Same 1,000 Point Bonus)**

**ATTACK Power-Up**
- **Success Condition**: Placed on the candle with LOWEST volatility
- **Volatility Calculation**: `Math.abs(close - open)`

**GUARD Power-Up**
- **Success Condition**: Placed on the candle with HIGHEST volatility

**RESTORE Power-Up**
- **Success Condition**: Placed on a candle where prediction was wrong
- **Critical Behavior**: Makes that cell always count as correct for ALL pattern calculations

---

## **Critical Architectural Insights**

### **Domain-Driven Design Principles**

1. **Prediction Domain**: Correctness is determined purely by price direction relative to threshold (0 for positive/negative)

2. **Pattern Domain**: Patterns are evaluated independently and can overlap (e.g., same cell can contribute to multiple scoring patterns)

3. **Power-Up Domain**: 
   - Operates as a separate concern from predictions
   - RESTORE creates a "virtual correctness" that affects pattern scoring but is evaluated based on actual prediction outcome
   - Each power-up type can only be placed once per grid

### **Scoring Calculation Flow**

```
1. Determine Actual Outcomes
   ├─ Market Grid: Fetch final price changes for all coins
   └─ Coin Grid: Simulate/fetch candle data

2. Evaluate Base Correctness
   ├─ Compare predictions to actual outcomes
   └─ Mark each cell as correct/incorrect

3. Apply RESTORE Power-Up Logic
   └─ Cells with RESTORE count as correct for pattern evaluation

4. Calculate Pattern Scores
   ├─ Iterate through all defined patterns
   ├─ Count correct cells in each pattern
   └─ Award points based on scoring tables

5. Calculate Power-Up Bonuses
   ├─ Identify extreme cases (highest/lowest volatility)
   ├─ Check power-up placement against conditions
   └─ Award 1,000 points for each success

6. Sum Total Score
   └─ Base Predictions + Pattern Bonuses + Power-Up Bonuses
```

### **Score Potential Analysis**

**Market Grid (4×3) Maximum Theoretical Score:**
- 3 Rows × 4,000 = 12,000
- 4 Columns × 3,000 = 12,000
- 3 Power-Ups × 1,000 = 3,000
- **Maximum: 27,000 points**

**Coin Grid Maximum Scores:**

*24H Grid (6×4):*
- Base: 24 × 25 = 600
- Rows: 4 × 12,000 = 48,000
- Columns: 6 × 6,000 = 36,000
- Squares: 15 × 3,500 = 52,500
- Power-ups: 3 × 1,000 = 3,000
- **Maximum: 140,100 points**

*4H Grid (4×4):*
- Base: 16 × 50 = 800
- Rows: 4 × 5,000 = 20,000
- Columns: 4 × 5,000 = 20,000
- Diagonals: 2 × 8,000 = 16,000
- Four Corners: 4,000
- Squares: 9 × 3,000 = 27,000
- Power-ups: 3 × 1,000 = 3,000
- **Maximum: 90,800 points**

*1H Grid (4×3):*
- Base: 12 × 75 = 900
- Rows: 3 × 4,000 = 12,000
- Columns: 4 × 3,000 = 12,000
- Squares: 6 × 2,500 = 15,000
- Power-ups: 3 × 1,000 = 3,000
- **Maximum: 42,900 points**

### **Key Design Decisions**

1. **No penalties**: Incorrect predictions simply don't contribute to patterns
2. **Pattern overlap encouraged**: Multiple patterns can include the same cells
3. **Power-up strategic depth**: RESTORE can convert losses into pattern contributors
4. **Volatility-based mechanics**: Creates interesting risk/reward dynamics around power-up placement
5. **Grid size vs. point value**: Larger grids have exponentially higher potential scores

This scoring system creates a multi-layered strategic game where players must balance individual prediction accuracy with pattern formation and power-up optimization.