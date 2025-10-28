GRIDLOCK - Product Specification Document
VERSION: 1.0 (Draft)
LAST UPDATED: 2025-10-28
STATUS: IN DEVELOPMENT

## Implementation Status Tracker
✅ **Resolved**: Core game loop, dual mode architecture, scoring patterns
⚠️ **Pending Discussion**: Power-up interaction rules, multiplayer features, monetization
❓ **Unclear**: Market data provider selection, refresh rate strategy, tie-breaking logic
🚫 **Blocked**: Social features (awaiting platform decision), tournament system (Phase 2)

---

# Table of Contents
1. Application Pipeline Analysis
2. Feature Analysis
3. Game Overview
4. How to Play and Win
5. Technical Specifications
6. User Experience Specifications
7. Edge Cases & Error Handling
8. Business Logic & Rules
9. Success Metrics & Analytics
10. Risk Assessment
11. Open Questions & Decision Log
12. Next Steps & Action Items
13. Appendices

---

# 1. Application Pipeline Analysis

## State Flow Architecture

The application follows a linear state machine pattern with two distinct game mode pipelines:

```
WELCOME (Entry Point)
    |
    ├─→ [MARKET_GRID Selected]
    |       ↓
    |   SUBTYPE_SELECTION (Choose: L1_CHAINS, MEMES, or DEFI)
    |       ↓
    |   SETUP_GRID (Configure 4x3 grid, 12 coins)
    |       ↓
    |   WAIT (Game settling)
    |       ↓
    |   RESULTS (Score display)
    |
    └─→ [COIN_GRID Selected]
            ↓
        COIN_SELECTION (Choose from all 36 coins)
            ↓
        TIME_RANGE_SELECTION (24H/4H/1H)
            ↓
        SETUP_COIN_GRID (Configure grid with candles)
            ↓
        WAIT (Game settling)
            ↓
        RESULTS (Score display)
```

## Navigation & State Management

### State Variables (App.tsx:15-24)
- **gameState**: Controls which screen is rendered
- **gameType**: MARKET_GRID or COIN_GRID
- **gameSubtype**: L1_CHAINS, MEMES, or DEFI (Market Grid only)
- **selectedCoin**: Specific coin for Coin Grid
- **timeRange**: 24H, 4H, or 1H (Coin Grid only)
- **predictions**: Player's UP/DOWN predictions
- **grid**: Grid cell configuration
- **powerUps**: Power-up placements
- **settledResult**: Final game outcome with scores

### Back Navigation (App.tsx:81-108)
- Each setup screen has context-aware back navigation
- Preserves previous selections when going back
- Clears only relevant state for current step

---

# 2. Feature Analysis

## Core Features

### A. Dual Game Modes

**Market Grid** (App.tsx:40-41, App.tsx:119):
- **Grid Size**: 4×3 (12 cells)
- **Mechanism**: Rank-based prediction system
- Players select 12 coins from a category pool
- Game determines final rankings based on price performance
- No explicit UP/DOWN predictions required

**Coin Grid** (App.tsx:42-44, App.tsx:126-127):
- **Grid Size**: Varies (24/16/12 candles)
- **Mechanism**: Candlestick direction prediction
- Single coin, multiple time intervals
- Players predict UP/DOWN for each candle
- Real-time market data driven

### B. Coin Categories (Market Grid)

From constants.ts:11-54:
- **L1_CHAINS**: 12 coins (BTC, ETH, SOL, HYPE, etc.)
- **DEFI**: 12 coins (PUMP, ENA, LINK, AAVE, UNI, etc.)
- **MEMES**: 12 coins (FART, DOGE, PEPE, TRUMP, SHIB, etc.)

### C. Time Range Options (Coin Grid)

From constants.ts:92-96:
- **24 Hour Grid**: 24 × 1-hour candles (6×4 grid)
- **4 Hour Grid**: 16 × 15-minute candles (4×4 grid)
- **1 Hour Grid**: 12 × 5-minute candles (4×3 grid)

### D. Power-Up System

Three strategic power-ups (constants.ts:60-64):
- **ATTACK**: Offensive capability
- **GUARD**: Defensive protection
- **RESTORE**: Recovery mechanism
- Each placed on specific grid cells
- Bonus points: +1000 per successful power-up

### E. Pattern Recognition & Scoring

**Market Grid (4×3)** (constants.ts:83-90):
- Full Row (4 correct): 4,000 points
- Partial Row (3 correct): 800 points
- Full Column (3 correct): 3,000 points

**Coin Grid 24H (6×4)** (constants.ts:114-119):
- Correct prediction: +25 points each
- Full Row (6 correct): 12,000 points
- Near-full Row (5): 4,000 points | (4): 1,000 points
- Full Column (4): 6,000 points | (3): 1,200 points
- Square (2×2, all correct): 3,500 points

**Coin Grid 4H (4×4)** (constants.ts:133-140):
- Correct prediction: +50 points each
- Full Row/Column (4): 5,000 points each
- Diagonal (4): 8,000 points
- Four Corners (all correct): 4,000 points
- Square (2×2): 3,000 points

**Coin Grid 1H (4×3)** (constants.ts:151-156):
- Correct prediction: +75 points each
- Full Row (4): 4,000 points | (3): 800 points
- Full Column (3): 3,000 points
- Square (2×2): 2,500 points

---

# 3. Game Overview: What is GRIDLOCK?

GRIDLOCK is a crypto market prediction game that gamifies cryptocurrency price movement forecasting through grid-based pattern matching. Players compete to predict either:

- **Relative performance rankings** of multiple coins (Market Grid)
- **Directional price movements** of individual candles (Coin Grid)

## The game combines elements of:

- **Strategy**: Power-up placement and pattern optimization
- **Market Knowledge**: Understanding crypto volatility and trends
- **Risk Management**: Time range selection affects difficulty
- **Pattern Recognition**: Maximizing score through geometric patterns

---

# 4. How to Play and Win

## Market Grid Mode

### Setup Phase:
1. Choose a category (L1_CHAINS, MEMES, or DEFI)
2. Select 12 coins to fill your 4×3 grid
3. Place power-ups strategically (optional)
4. Game automatically settles based on actual market performance

### Winning Strategy:
- **No explicit predictions**: The game ranks coins by price change %
- Position high-performers in patterns (rows/columns)
- Aim for complete rows (4,000 pts) or columns (3,000 pts)
- Strategic power-up placement multiplies effectiveness
- **Goal**: Maximize pattern completion based on final rankings

## Coin Grid Mode

### Setup Phase:
1. Select a specific coin (from all 36 available)
2. Choose time range:
   - **24H**: Longer game, more candles, lower point values
   - **4H**: Balanced difficulty
   - **1H**: Fast-paced, higher per-candle value
3. Predict UP or DOWN for each candle in the grid
4. Place power-ups on specific candles

### Winning Strategy:
- **Accuracy matters**: Each correct prediction scores base points
- **Pattern bonuses**: Complete rows, columns, diagonals, squares
- **Grid size affects scoring**:
  - Larger grids (24H): Lower per-candle points but more pattern opportunities
  - Smaller grids (1H): Higher per-candle points, fewer patterns
- **Power-ups**: Add +1,000 bonus when successful
- **Goal**: Maximize correct predictions AND form scoring patterns

## Universal Winning Principles

- **Pattern Priority**: Focus predictions on completing high-value patterns
- **Power-Up Placement**: Position on cells within multiple patterns
- **Market Timing**: Choose active trading periods for predictability
- **Risk-Reward**: Shorter time frames = higher volatility but higher points

## Scoring System Summary

From types.ts:99-111, final results include:
- Individual prediction correctness
- Pattern completion bonuses (rows, columns, diagonals, squares)
- Power-up success bonuses (+1,000 each)
- **Total Score**: Sum of all components

## Game Conclusion

The game settles in the WAIT state (App.tsx:130-141), fetching real market data to determine:
- **For Market Grid**: Final coin rankings by % change
- **For Coin Grid**: Actual candlestick OHLC data

Results screen (App.tsx:142-143) displays comprehensive breakdown with option to play again.

**Key Insight**: GRIDLOCK transforms crypto market analysis into an engaging game where geometric pattern completion amplifies the reward for accurate market predictions, creating a unique blend of trading acumen and spatial strategy.

---

# 5. Technical Specifications

## 5.1 Market Data Integration

### Data Sources
⚠️ **[INCOMPLETE - PENDING DISCUSSION]**
- **Primary Provider**: [TODO: Specify - CoinGecko, CoinMarketCap, Binance API, custom aggregator]
- **Backup Provider**: [TODO: Define fallback strategy]
- **Data Points Required**:
  - Real-time price (OHLC for candles)
  - 24-hour price change %
  - Volume data
  - Timestamp precision: [TODO: Define - second? millisecond?]

### Update Frequency
❓ **[UNCLEAR - NEEDS TECHNICAL VALIDATION]**
- **Market Grid Mode**: [TODO: How often to poll for price rankings?]
  - Suggested: Poll every 60 seconds during WAIT state
  - Challenge: API rate limits, cost implications
- **Coin Grid Mode**:
  - 24H (1-hour candles): [TODO: Real-time or historical data?]
  - 4H (15-min candles): [TODO: Define refresh strategy]
  - 1H (5-min candles): [TODO: Live streaming vs polling?]

### Data Accuracy Requirements
⚠️ **[INCOMPLETE]**
- **Acceptable Delay**: [TODO: Max seconds behind real market]
- **Missing Data Handling**: [TODO: Skip candle? Use last known? Invalidate game?]
- **Price Spike Filtering**: [TODO: How to handle flash crashes/pumps]

## 5.2 Game Timing & Scheduling

### Market Grid Settlement
✅ **Partially Defined** - Needs completion:
- **Start Time**: Game begins when user clicks "Start Game"
- **Duration**: Based on selected time range
  - 24H Mode: 24-hour period from start
  - 4H Mode: 4-hour period from start
  - 1H Mode: 1-hour period from start
- **Settlement Window**: [TODO: Exact time to fetch final rankings?]
  - Option A: Precisely at end time
  - Option B: 5-minute grace period for data consistency
  - **DECISION NEEDED**: Which approach?

### Coin Grid Settlement
❓ **[UNCLEAR]**
- **Candle Completion Logic**: [TODO: How to determine candle is "closed"?]
- **Partial Game Handling**: [TODO: Can users view results before all candles complete?]
- **Game Cancellation**: [TODO: Can users cancel mid-game? Refund logic?]

## 5.3 Scoring Calculation Engine

### Calculation Order
✅ **Defined** - Implementation reference: [TODO: Add file reference]
1. Calculate base points (correct predictions)
2. Identify completed patterns (rows, columns, diagonals, squares)
3. Apply pattern bonuses
4. Add power-up bonuses
5. Sum total score

### Tie-Breaking Logic
❓ **[UNCLEAR - CRITICAL FOR LEADERBOARDS]**
- **Market Grid**: If multiple coins have identical % change:
  - [TODO: Use volume as tiebreaker?]
  - [TODO: Use market cap?]
  - [TODO: Timestamp of reaching that %?]
- **Scoring Ties**: If two players get same total score:
  - [TODO: Number of perfect patterns?]
  - [TODO: Time to complete predictions?]
  - [TODO: Allow exact ties?]

### Scoring Examples
⚠️ **[INCOMPLETE - ADD WORKED EXAMPLES]**

**Example 1: Market Grid - L1_CHAINS**
```
[TODO: Create detailed example]
- Grid layout: [Coin positions]
- Final rankings: [Actual % changes]
- Pattern breakdown: [Which patterns scored]
- Power-up calculation: [Which activated]
- Final score: [Total with breakdown]
```

**Example 2: Coin Grid 4H - Diagonal Pattern**
```
[TODO: Create detailed example]
- Initial predictions: [UP/DOWN layout]
- Actual candle results: [OHLC data]
- Diagonal identified: [Which cells]
- Score calculation: [Step by step]
```

## 5.4 Power-Up System Mechanics

### Power-Up Placement Rules
✅ **Defined**:
- Maximum 3 power-ups per game (one of each type)
- Must be placed before game starts
- Cannot move after placement
- Must be on valid grid cells

### Power-Up Activation Logic
🚫 **[BLOCKED - AWAITING GAME DESIGN DECISION]**

**Current Understanding**:
- Power-ups provide +1,000 bonus when "successful"
- **UNCLEAR**: What defines "successful"?

**Proposed Specifications** (Need approval):

#### ATTACK Power-Up
- **Proposal A**: Steals points from incorrect predictions in same row/column
  - [TODO: How many points stolen?]
  - [TODO: From all incorrect cells or just one?]
- **Proposal B**: Multiplies points for patterns containing this cell
  - [TODO: 2x multiplier? 1.5x?]
- **Proposal C**: Converts near-miss patterns into scoring patterns
  - [TODO: Define "near-miss" rules]

#### GUARD Power-Up
- **Proposal A**: Protects row/column from point loss
  - [TODO: What point loss? Need to define penalty system first]
- **Proposal B**: Counts incorrect prediction on this cell as correct
  - [TODO: Only for base points or pattern bonuses too?]
- **Proposal C**: Provides +1,000 bonus regardless of prediction accuracy
  - [TODO: Too powerful? Balance concern]

#### RESTORE Power-Up
- **Proposal A**: Recovers points from failed patterns in same row/column
  - [TODO: How much recovery? 50%?]
- **Proposal B**: Adds extra attempt for prediction on this cell
  - [TODO: How does "extra attempt" work in settled game?]
- **Proposal C**: Doubles base points for correct prediction on this cell
  - [TODO: Stacks with pattern bonuses?]

**DECISION REQUIRED**: Product Owner must define power-up interactions

### Power-Up Interaction Matrix
❓ **[UNCLEAR - COMPLEX INTERACTIONS]**

| Scenario | ATTACK Cell | GUARD Cell | RESTORE Cell | Result |
|----------|-------------|------------|--------------|--------|
| Both in same row | [TODO] | [TODO] | [TODO] | [TODO] |
| All 3 in same pattern | [TODO] | [TODO] | [TODO] | [TODO] |
| Power-up on incorrect prediction | [TODO] | [TODO] | [TODO] | [TODO] |
| Power-up on corner cell (multiple patterns) | [TODO] | [TODO] | [TODO] | [TODO] |

## 5.5 State Management & Persistence

### Session Storage
⚠️ **[INCOMPLETE]**
- **In-Progress Games**: [TODO: Store in localStorage? Backend?]
- **Resume Capability**: [TODO: Can users resume interrupted games?]
- **History Tracking**: [TODO: Store past game results? For how long?]
- **Multi-Device Sync**: [TODO: Cloud save? Account required?]

### State Validation
❓ **[UNCLEAR]**
- **Client-Side Validation**: [TODO: List all validation rules]
- **Server-Side Validation**: [TODO: If backend exists, what validations?]
- **Cheat Prevention**: [TODO: How to prevent prediction changes after game starts?]

---

# 6. User Experience Specifications

## 6.1 Onboarding Flow

### First-Time User Experience
🚫 **[BLOCKED - AWAITING UX DESIGN]**
- **Tutorial System**: [TODO: Interactive tutorial? Video? Skip option?]
- **Welcome Screen**: [TODO: Feature highlights vs immediate play?]
- **Complexity Introduction**: [TODO: Start with simpler mode? Lock modes until tutorial complete?]

### Progressive Disclosure
⚠️ **[INCOMPLETE]**
- **Step 1**: [TODO: Introduce basic prediction concept]
- **Step 2**: [TODO: Explain pattern bonuses]
- **Step 3**: [TODO: Introduce power-ups]
- **Step 4**: [TODO: Advanced strategies]

## 6.2 Screen-by-Screen Specifications

### WELCOME Screen
✅ **Partially Defined** - Located at: [TODO: Add file reference]

**Current Elements**:
- Game mode selection (MARKET_GRID / COIN_GRID)
- [TODO: Branding/logo placement]
- [TODO: Quick stats (e.g., "X games played today")]

**Missing Specifications**:
- [TODO: Animation/motion design requirements]
- [TODO: Sound effects triggers]
- [TODO: Accessibility features (screen reader, high contrast)]
- [TODO: Help/Info button behavior]

### SUBTYPE_SELECTION Screen (Market Grid)
⚠️ **[INCOMPLETE]**
- **Category Cards**: L1_CHAINS, MEMES, DEFI
  - [TODO: Visual design - icons, colors, card layout]
  - [TODO: Category descriptions - show sample coins?]
  - [TODO: Difficulty indicators - is one category harder?]
  - [TODO: Recent performance stats - "MEMES +45% today"]

### COIN_SELECTION Screen (Coin Grid)
❓ **[UNCLEAR]**
- **Coin List Presentation**:
  - [TODO: Alphabetical? By market cap? By volatility?]
  - [TODO: Show current price?]
  - [TODO: Show 24h change?]
  - [TODO: Coin logos/icons required]
  - [TODO: Search/filter functionality?]
  - [TODO: Favorite coins feature?]

### TIME_RANGE_SELECTION Screen
⚠️ **[INCOMPLETE]**
- **Time Range Cards**: 24H, 4H, 1H
  - [TODO: Visual difficulty indicators]
  - [TODO: Example grid previews]
  - [TODO: Point potential comparison]
  - [TODO: "Recommended for beginners" badges]
  - [TODO: Estimated game duration display]

### SETUP Screens (Both Grid Types)
✅ **Partially Defined** - Major gaps:

**Market Grid Setup**:
- Coin selection interface: [TODO: Drag-drop? Click-to-place? Auto-fill?]
- Grid visualization: [TODO: Cell size, spacing, responsiveness]
- Power-up placement UI: [TODO: Drag from palette? Click cell then select power-up?]
- Validation feedback: [TODO: Show error states - "Need 2 more coins"]
- Action buttons: [TODO: "Back", "Random Fill", "Start Game" - placement?]

**Coin Grid Setup**:
- Prediction interface: [TODO: Toggle UP/DOWN per cell? Select all row? Batch operations?]
- Visual indicators: [TODO: Color coding - green UP, red DOWN?]
- Prediction summary: [TODO: Show count - "15 UP, 9 DOWN"]
- Change prediction: [TODO: How easy to change? Undo/redo?]
- Empty state: [TODO: Default to all UP? All DOWN? Must manually set all?]

### WAIT Screen
❓ **[UNCLEAR - USER ENGAGEMENT CONCERN]**
- **Duration Display**: [TODO: Countdown timer? Progress bar? Estimated time?]
- **User Engagement**: [TODO: Show live price updates? Mini-games? Educational content?]
- **Cancel Option**: [TODO: Allow cancel? Warning message? Refund logic?]
- **Background Processing**: [TODO: Can user close browser? Push notification when done?]
- **Multiple Games**: [TODO: Can user start new game while waiting?]

### RESULTS Screen
⚠️ **[INCOMPLETE]**

**Current Elements**:
- Final score display
- [TODO: Animation for score reveal?]

**Missing Specifications**:
- **Score Breakdown**:
  - [TODO: Show base points separately]
  - [TODO: Highlight which patterns scored]
  - [TODO: Animate pattern discovery]
  - [TODO: Power-up activation feedback]
- **Grid Visualization**:
  - [TODO: Color code correct/incorrect predictions]
  - [TODO: Highlight scoring patterns]
  - [TODO: Show actual vs predicted results]
- **Sharing Features**:
  - [TODO: Share score to social media?]
  - [TODO: Screenshot generation?]
  - [TODO: "Challenge friend" option?]
- **Next Actions**:
  - [TODO: "Play Again" button]
  - [TODO: "Try Different Mode" suggestion]
  - [TODO: "View Leaderboard" link]
  - [TODO: "Analyze My Predictions" - educational breakdown]

## 6.3 Responsive Design Requirements
🚫 **[BLOCKED - AWAITING DESIGN SYSTEM]**
- **Mobile (320px - 767px)**: [TODO: Grid layout adaptations]
- **Tablet (768px - 1023px)**: [TODO: Optimize for touch targets]
- **Desktop (1024px+)**: [TODO: Utilize screen space effectively]
- **Orientation Handling**: [TODO: Force landscape for grids?]

## 6.4 Accessibility Requirements
⚠️ **[INCOMPLETE - CRITICAL FOR COMPLIANCE]**
- **Screen Reader Support**: [TODO: ARIA labels for all interactive elements]
- **Keyboard Navigation**: [TODO: Tab order, arrow key navigation in grid]
- **Color Blindness**: [TODO: Not relying solely on color for UP/DOWN]
- **Motion Sensitivity**: [TODO: Option to reduce animations]
- **Text Scaling**: [TODO: Support up to 200% text zoom]

## 6.5 Performance Requirements
❓ **[UNCLEAR - NEEDS TECHNICAL INPUT]**
- **Initial Load Time**: [TODO: Target? 2 seconds? 5 seconds?]
- **State Transitions**: [TODO: Max delay between screens?]
- **Grid Rendering**: [TODO: Handle large 24H grid performance]
- **Data Updates**: [TODO: Debouncing, throttling strategies]

---

# 7. Edge Cases & Error Handling

## 7.1 Market Data Errors

### API Failure Scenarios
❓ **[UNCLEAR - CRITICAL FOR RELIABILITY]**

| Error Type | User Impact | Proposed Handling | Status |
|------------|-------------|-------------------|---------|
| API rate limit exceeded | Cannot start game | [TODO: Queue system? Show wait time?] | ⚠️ Incomplete |
| Price data unavailable for specific coin | Cannot rank coins | [TODO: Exclude coin? Use last known? Cancel game?] | ❓ Unclear |
| Partial candle data (some but not all) | Incomplete results | [TODO: Score only complete candles? Invalidate game?] | ❓ Unclear |
| Complete API outage | No games possible | [TODO: Error message? Offline mode? Cached data?] | ⚠️ Incomplete |
| Delayed data (>5min old) | Inaccurate results | [TODO: Acceptable delay? Warning to user?] | ❓ Unclear |

### Data Inconsistency Handling
⚠️ **[INCOMPLETE]**
- **Conflicting Rankings**: [TODO: If two APIs give different rankings, which to trust?]
- **Retroactive Changes**: [TODO: If data provider corrects historical data after game settled?]
- **Missing OHLC Values**: [TODO: If candle has null values?]

## 7.2 User Input Edge Cases

### Invalid Grid Configurations
✅ **Defined** - Needs validation implementation:
- Duplicate coins in Market Grid: [TODO: Prevent or allow?]
- Incomplete predictions in Coin Grid: [TODO: Must predict all cells? Auto-fill remainder?]
- No power-ups placed: [TODO: Valid? Warning? Proceed?]
- Rapid clicking/double submission: [TODO: Debounce? Disable button after click?]

### Session Interruptions
❓ **[UNCLEAR]**
- **Browser Close During WAIT**: [TODO: Save state? Email results? Loss of game?]
- **Network Disconnect**: [TODO: Resume when reconnected? Timeout period?]
- **Device Sleep Mode**: [TODO: Background processing? Wake notification?]

### Time Zone Complications
⚠️ **[INCOMPLETE]**
- **Market Grid 24H**: [TODO: Which 24 hours? User's local time? UTC? Market hours?]
- **Daylight Saving Time**: [TODO: How to handle DST transitions during active game?]
- **Cross-Timezone Play**: [TODO: Show times in user's timezone? UTC only?]

## 7.3 Scoring Edge Cases

### Tie Scenarios (CRITICAL)
❓ **[UNCLEAR - BLOCKS LEADERBOARD IMPLEMENTATION]**
- **Exact Rank Ties in Market Grid**:
  - Scenario: BTC and ETH both +5.23% change
  - Question: [TODO: How to rank them? Alphabetical? Volume? Market cap?]
  - Impact: Affects pattern scoring if both in same row

- **Zero Change Coins**:
  - Scenario: Coin has 0.00% change
  - Question: [TODO: Rank as better or worse than negative coins?]
  - Impact: Middle positioning in rankings

- **Identical Scores**:
  - Scenario: Two players get exactly 15,000 points
  - Question: [TODO: Leaderboard tie-breaking rules]

### Pattern Overlap Scoring
⚠️ **[INCOMPLETE - COULD CAUSE CONFUSION]**
- **Corner Cell in Multiple Patterns**:
  - Scenario: Cell is part of a row, column, and square
  - Question: [TODO: Base points counted once? Pattern bonuses all apply?]
  - Example needed: [TODO: Work through mathematical example]

- **Diagonal + Row Intersection**:
  - Scenario: 4H grid, cell in both diagonal and row
  - Question: [TODO: Both bonuses apply? Capped?]

### Maximum Possible Score Calculations
⚠️ **[INCOMPLETE - USEFUL FOR BALANCING]**
- **Market Grid 4×3**: [TODO: Calculate theoretical maximum]
  - All predictions correct: ___ points
  - All patterns completed: ___ points
  - All power-ups successful: +3,000 points
  - **Maximum**: [TODO: Calculate]

- **Coin Grid 24H 6×4**: [TODO: Calculate theoretical maximum]
- **Coin Grid 4H 4×4**: [TODO: Calculate theoretical maximum]
- **Coin Grid 1H 4×3**: [TODO: Calculate theoretical maximum]

## 7.4 State Machine Edge Cases

### Invalid State Transitions
❓ **[UNCLEAR]**
- **Back from WAIT**: [TODO: Allow? Cancel game? Warning?]
- **Skip TIME_RANGE_SELECTION**: [TODO: Possible? Default selection?]
- **Direct URL Access**: [TODO: Can user bookmark/share deep link? Validation?]

### Race Conditions
⚠️ **[INCOMPLETE - TECHNICAL VALIDATION NEEDED]**
- **Multiple Start Game Clicks**: [TODO: Prevent duplicate game creation]
- **State Update During Transition**: [TODO: Locking mechanism? Queue?]

---

# 8. Business Logic & Rules

## 8.1 Game Validation Rules

### Market Grid
✅ **Defined** - Implementation needed:
1. Must select exactly 12 coins (no more, no less)
2. All coins must be from selected subtype category
3. [TODO: Can same coin appear twice? Assumption: NO, needs confirmation]
4. Power-ups are optional (0-3 allowed)
5. [TODO: Can two power-ups be on same cell? Assumption: NO]

### Coin Grid
✅ **Defined** - Implementation needed:
1. Must select exactly 1 coin
2. Must select exactly 1 time range
3. Must make prediction for all cells: [TODO: Or can leave some empty?]
4. Valid predictions: Only "UP" or "DOWN": [TODO: "NEUTRAL" option?]
5. Power-ups are optional (0-3 allowed)

## 8.2 Ranking & Prediction Logic

### Market Grid Ranking Rules
❓ **[UNCLEAR - CRITICAL LOGIC]**
- **Ranking Basis**: % Change over game period
  - Formula: `((endPrice - startPrice) / startPrice) * 100`
  - [TODO: Use opening price or price at game start?]
  - [TODO: Handle coins with trading halts/delisting during game?]

- **Ranking Order**:
  - Best: Highest positive % change
  - Worst: Most negative % change
  - [TODO: Zero change - where in ranking?]

- **Player's Arrangement**:
  - [TODO: Does player's grid layout matter for scoring?]
  - [TODO: Or just which coins were chosen, then system ranks them?]
  - **NEEDS CLARIFICATION**: This is unclear in current implementation

### Coin Grid Prediction Rules
✅ **Defined**:
- **UP Prediction Correct If**: `closePrice > openPrice`
- **DOWN Prediction Correct If**: `closePrice < openPrice`
- **Exact Equal**: [TODO: closePrice === openPrice? Rare but possible]
  - Option A: Neither UP nor DOWN is correct
  - Option B: Both UP and DOWN count as correct (generous)
  - Option C: Mark as "PUSH" and exclude from scoring
  - **DECISION NEEDED**

## 8.3 Pattern Recognition Rules

### Pattern Definitions
✅ **Defined in constants** - Needs validation logic:

**All Grids**:
- **Row**: Horizontal line of cells, all with correct predictions
- **Column**: Vertical line of cells, all with correct predictions
- **Square**: 2×2 block of cells, all with correct predictions

**4H Grid Only**:
- **Diagonal**: 4 cells corner-to-corner, all correct
- **Four Corners**: 4 corner cells of grid, all correct

### Pattern Priority & Stacking
⚠️ **[INCOMPLETE - SCORING LOGIC]**
- **Question**: If a cell is part of multiple patterns, do all bonuses apply?
  - Example: Corner cell in Row + Column + Square
  - Current assumption: YES, all bonuses stack
  - [TODO: Confirm this is intended behavior]

- **Question**: Is there a maximum score cap per cell?
  - [TODO: Can one cell contribute to unlimited patterns?]

### Partial Pattern Scoring
✅ **Defined for Market Grid**:
- 3 out of 4 row: 800 points (instead of 4,000)

❓ **[UNCLEAR for Coin Grids]**:
- [TODO: Do 24H and 4H grids have partial scoring?]
- [TODO: 5 out of 6 row in 24H grid - already defined as 4,000]
- [TODO: 4 out of 6 row - scoring? Or no bonus?]

## 8.4 Power-Up Business Rules
🚫 **[BLOCKED - AWAITING GAME DESIGN DECISION]**

See Section 5.4 for detailed power-up mechanics questions.

**Confirmed Rules**:
- Maximum 3 power-ups per game (one of each type)
- Successful power-up: +1,000 points bonus
- Power-ups must be placed pre-game

**Unclear Rules**:
- Definition of "successful" [TODO]
- Interaction with scoring patterns [TODO]
- Effect on gameplay/predictions [TODO]

---

# 9. Success Metrics & Analytics

## 9.1 Game Performance Metrics
⚠️ **[INCOMPLETE - CRITICAL FOR PRODUCT SUCCESS]**

### Player Engagement
- **Daily Active Users (DAU)**: [TODO: Target?]
- **Games Per User Per Session**: [TODO: Target? Current avg?]
- **Session Duration**: [TODO: Target? Ideal session length?]
- **Retention Rates**:
  - D1: [TODO: Target %]
  - D7: [TODO: Target %]
  - D30: [TODO: Target %]

### Game Mode Popularity
- **Market Grid vs Coin Grid**: [TODO: Track % split]
- **Subtype Preferences**: [TODO: Which category most played?]
- **Time Range Preferences**: [TODO: Do users prefer 1H quick games or 24H long games?]

### Skill & Difficulty Metrics
- **Average Score by Mode**: [TODO: Benchmark for "good" score?]
- **Prediction Accuracy**: [TODO: What % of predictions are typically correct?]
  - Market Grid: [TODO: Track ranking prediction accuracy]
  - Coin Grid: [TODO: Track UP/DOWN accuracy %]
- **Pattern Completion Rates**: [TODO: How often do players get full rows/columns?]
- **Power-Up Effectiveness**: [TODO: Do power-ups improve scores? By how much?]

## 9.2 User Behavior Analytics
❓ **[UNCLEAR - DEFINE TRACKING REQUIREMENTS]**

### Drop-Off Points
- [TODO: Track where users abandon game setup]
- [TODO: Do users quit during WAIT state?]
- [TODO: Results screen - do users replay or leave?]

### User Journey Analytics
- [TODO: First game mode chosen by new users]
- [TODO: Average games before mastering patterns]
- [TODO: Most common grid configurations]

### Error & Friction Points
- [TODO: Track API failures experienced by users]
- [TODO: Invalid submission attempts]
- [TODO: Back button usage (indicator of confusion?)]

## 9.3 Business Metrics
🚫 **[BLOCKED - AWAITING MONETIZATION STRATEGY]**

### Revenue (If Applicable)
- [TODO: Monetization model undefined]
  - Option A: Free-to-play, ad-supported
  - Option B: Entry fees, prize pools
  - Option C: Freemium (power-ups, special grids)]
  - Option D: Fully free

### User Acquisition
- [TODO: Cost per acquisition]
- [TODO: Viral coefficient]
- [TODO: Referral program effectiveness]

## 9.4 Technical Performance Metrics
⚠️ **[INCOMPLETE]**
- **API Uptime**: [TODO: Target 99.9%?]
- **API Response Time**: [TODO: Target <500ms?]
- **Error Rate**: [TODO: Target <1% of requests?]
- **Client Performance**:
  - [TODO: Time to interactive]
  - [TODO: Grid rendering performance]

---

# 10. Risk Assessment

## 10.1 Technical Risks

| Risk | Probability | Impact | Mitigation Strategy | Owner | Status |
|------|------------|--------|-------------------|--------|---------|
| API rate limiting prevents games | High | High | Implement caching, multiple providers, queue system | [TODO: Eng Lead] | ⚠️ Unmitigated |
| Inaccurate price data | Medium | High | Use multiple data sources, validation checks | [TODO] | ⚠️ Unmitigated |
| Poor performance on large grids (24H) | Medium | Medium | Optimize rendering, virtual scrolling | [TODO] | ❓ Needs testing |
| Data provider downtime | Medium | Critical | Backup providers, graceful degradation | [TODO] | ⚠️ Unmitigated |
| Race conditions in state management | Low | Medium | State locking, transaction handling | [TODO] | ❓ Needs audit |

## 10.2 User Experience Risks

| Risk | Probability | Impact | Mitigation Strategy | Owner | Status |
|------|------------|--------|-------------------|--------|---------|
| Complex mechanics confuse new users | High | High | Tutorial system, progressive disclosure | [TODO: UX Lead] | 🚫 Blocked - Design |
| Long wait times disengage users | High | Medium | Progress indicators, mini-games, push notifications | [TODO] | ⚠️ Unmitigated |
| Unclear power-up mechanics | High | Medium | Tooltips, examples, help documentation | [TODO] | 🚫 Blocked - Design |
| Mobile grid too small to interact | Medium | High | Responsive design, touch-optimized UI | [TODO] | ⚠️ Unmitigated |
| Results screen overwhelming | Medium | Low | Animated reveal, step-by-step breakdown | [TODO] | ❓ Needs design |

## 10.3 Business/Market Risks

| Risk | Probability | Impact | Mitigation Strategy | Owner | Status |
|------|------------|--------|-------------------|--------|---------|
| Low user acquisition | Medium | High | [TODO: Marketing strategy undefined] | [TODO] | 🚫 Blocked |
| Poor retention after first game | High | Critical | Improved onboarding, reward systems | [TODO] | ⚠️ Unmitigated |
| Crypto market crash reduces interest | Medium | High | Diversify game mechanics, non-crypto modes | [TODO] | ❓ Unclear |
| Competition from similar games | Low | Medium | [TODO: Competitive analysis incomplete] | [TODO] | ⚠️ Unmitigated |

## 10.4 Compliance & Legal Risks

| Risk | Probability | Impact | Mitigation Strategy | Owner | Status |
|------|------------|--------|-------------------|--------|---------|
| Gambling classification (real money) | [TODO] | Critical | [TODO: Legal review - is this gambling?] | [TODO: Legal] | 🚫 Blocked |
| Data privacy (user predictions) | Low | High | Privacy policy, no PII storage | [TODO] | ⚠️ Incomplete |
| Financial advice regulations | Low | Medium | Disclaimers: "Not financial advice" | [TODO] | ⚠️ Incomplete |
| Accessibility compliance (ADA, WCAG) | Medium | Medium | Accessibility audit, remediation | [TODO] | ⚠️ Incomplete |

---

# 11. Open Questions & Decision Log

## 11.1 Critical Open Questions

### Immediate Blockers (Need resolution to proceed)
1. **Power-Up Mechanics**: What do ATTACK, GUARD, RESTORE actually do? (Section 5.4)
2. **Market Data Provider**: Which API should we use? (Section 5.1)
3. **Tie-Breaking Logic**: How to handle identical % changes? (Section 5.3)
4. **Monetization Model**: Is this free? Paid? Ad-supported? (Section 9.3)

### High Priority (Affects scope)
5. **Multiplayer Features**: Any social/competitive elements? (Status tracker)
6. **Tutorial System**: What level of onboarding? (Section 6.1)
7. **Session Persistence**: Can users resume games? (Section 5.5)
8. **Maximum Score Caps**: Any limits on score accumulation? (Section 7.3)

### Medium Priority (Affects polish)
9. **Animation Requirements**: How much motion design? (Section 6.2)
10. **Accessibility Targets**: WCAG AA or AAA compliance? (Section 6.4)
11. **Responsive Breakpoints**: Which devices are primary? (Section 6.3)
12. **Error Message Tone**: Friendly? Technical? Humorous? (Section 7.1)

### Low Priority (Can defer)
13. **Coin Logo Sources**: Where to get images? (Section 6.2)
14. **Sound Effects**: Any audio requirements? (Section 6.2)
15. **Color Scheme**: Brand colors defined? (Section 6.2)

## 11.2 Decision Log
[TODO: Populate as decisions are made]

| Date | Decision | Rationale | Decided By | Impact | Related Section |
|------|----------|-----------|------------|---------|----------------|
| [Date] | [Decision] | [Why] | [Who] | [What changes] | [Section ref] |

---

# 12. Next Steps & Action Items

## Phase 1: Critical Path (Blocks Development)
- [ ] **Define Power-Up Mechanics** - Game design meeting with Product Owner
- [ ] **Select Market Data Provider** - Technical research + cost analysis
- [ ] **Define Tie-Breaking Rules** - Product + Engineering alignment
- [ ] **Clarify Market Grid Prediction Model** - Is grid layout player-arranged or auto-ranked?

## Phase 2: User Experience (Affects Usability)
- [ ] **Create Tutorial Flow** - UX designer to mockup
- [ ] **Design WAIT State Engagement** - Reduce perceived wait time
- [ ] **Define Accessibility Requirements** - Compliance review
- [ ] **Responsive Design Specifications** - Design system definition

## Phase 3: Edge Cases (Improves Reliability)
- [ ] **API Failure Handling** - Engineering to design fallback systems
- [ ] **Score Calculation Examples** - Work through detailed examples
- [ ] **Maximum Score Calculations** - Math verification for balance

## Phase 4: Analytics & Growth (Post-Launch)
- [ ] **Define Success Metrics** - Product to set targets
- [ ] **Implement Analytics Tracking** - Engineering to instrument
- [ ] **Monetization Strategy** - Business development decision

---

# 13. Appendices

## 13.1 Terminology Guide

### User-Facing Terms
- **Grid**: The game board where predictions are made
- **Pattern**: Geometric formations (rows, columns) that award bonus points
- **Power-Up**: Special abilities that enhance scoring
- **Settlement**: The moment when the game ends and results are calculated

### Internal/Engineering Terms
- **State**: Current position in game flow (WELCOME, SETUP, WAIT, etc.)
- **Subtype**: Game category (L1_CHAINS, MEMES, DEFI)
- **OHLC**: Open, High, Low, Close (candlestick data)
- **Prediction**: User's UP/DOWN choice for a cell

### Marketing Terms
[TODO: Define once marketing strategy is set]
- [TODO: Tagline/positioning]
- [TODO: Value proposition]
- [TODO: Unique selling points]

### Terms to Avoid
- ❌ "Bet" (implies gambling)
- ❌ "Wager" (gambling connotation)
- ❌ "Guarantee" (legal risk)
- ❌ "Investment advice" (regulatory risk)

## 13.2 Related Documents
[TODO: Link to other project documents]
- **Technical Architecture**: [TODO: Add link]
- **API Documentation**: [TODO: Add link]
- **Design System**: [TODO: Add link]
- **User Research**: [TODO: Add link]

## 13.3 Glossary of Crypto Terms
[TODO: For users unfamiliar with crypto]
- **Candle/Candlestick**: [Definition]
- **Market Cap**: [Definition]
- **Volatility**: [Definition]
- **L1 Chain**: [Definition]
- **DeFi**: [Definition]
- **Meme Coin**: [Definition]

---

**SPECIFICATION STATUS**: DRAFT - IN REVIEW
**NEXT REVIEW DATE**: [TODO]
**DOCUMENT OWNER**: [TODO: Product Manager Name]

**Version History**:
- v1.0 (2025-10-28): Initial comprehensive specification with identified gaps