# HYPERGRID ROADMAP (FOCUSED)
## Q4 2025 → Q3 2026

---

## **Q4 2025: LEGAL FOUNDATION & PASSIVE GAME MVP**
**Mission:** Establish company, build and launch MarketGrid (passive tier only)

### **October 2025: Legal Foundation**

**Entity Formation & Compliance**
- ✅ Incorporate entity (Wyoming LLC recommended for crypto)
- ✅ Open business banking (Mercury or similar crypto-friendly)
- ✅ Register for EIN, state taxes
- ✅ Draft Terms of Service (skill-based gaming language)
- ✅ Privacy Policy + KYC/AML delegation to Hyperliquid
- ✅ Legal opinion: Skill-based competition classification

**Fundraising Close**
- ✅ Finalize $250K pre-seed raise
- ✅ SAFE or Revenue Note agreements signed
- ✅ Funds transferred to business account

**Team & Infrastructure**
- ✅ Hire frontend developer (React/Next.js)
- ✅ Setup AWS/GCP hosting environment
- ✅ GitHub org, Linear project management
- ✅ Discord server for internal team comms

---

### **November 2025: MarketGrid Development**

**Core Passive Game (Week 1-8)**
- ✅ **Roster Builder UI**
  - 3×3 grid interface with drag-and-drop
  - Coin selection pool (50 Hyperliquid-listed assets)
  - Captain designation (position 0)
  - UP/DOWN direction toggle per coin
  - Lock roster button + confirmation

- ✅ **Pattern Scoring Engine**
  - Direction accuracy: 100 XP per correct prediction
  - Ranking matches: 300 XP captain, 100 XP others
  - Pattern detection: Rows (800 XP), Columns (800 XP), Diagonals (1500 XP)
  - Real-time XP calculation during competition

- ✅ **Competition Flow**
  - Entry fee collection ($25 USDC from Hyperliquid wallet)
  - Prize pool calculation (90% entry fees)
  - Hyperliquid price feed integration (candle-based settlement)
  - Leaderboard (sort by grid score)
  - Prize distribution (top 3: 70%, 20%, 10%)

- ✅ **Jackpot System**
  - Perfect Grid Jackpot (2.5% entry fees, rolls over)
  - Pattern Bonus Jackpot (2.5% entry fees, always awarded)
  - Rollover accumulation logic

**Database Schema**
- Users table (wallet address, username, avatar)
- Competitions table (start time, duration, category, status)
- Rosters table (user_id, competition_id, 9 coins + predictions)
- Results table (final rankings, grid scores, prizes)
- Transactions table (entry fees, payouts)

---

### **December 2025: Testing & Private Beta**

**Internal Testing (Week 9-10)**
- ✅ Team dogfooding (run 20+ test competitions)
- ✅ Bug bash sessions
- ✅ Load testing (simulate 100 concurrent users)
- ✅ Security audit (smart contracts + backend)

**Private Beta Launch (Week 11-13)**
- ✅ Invite 50 Hyperliquid power users
- ✅ Run 3 competitions per day (1hr, 4hr schedules)
- ✅ Collect feedback via Discord + surveys
- ✅ Iterate on UX friction points
- ✅ Monitor: Entry completion rate, time-to-first-game, roster lock rate

**Smart Contract Audit**
- ✅ Prize pool escrow contract deployed
- ✅ CertiK audit initiated (4-week timeline)
- ✅ Address any critical findings

**Marketing Prep**
- ✅ Brand assets finalized (logo, color scheme)
- ✅ Landing page live (waitlist signup)
- ✅ Tutorial video produced (5 min explainer)
- ✅ Discord community server launched

**Q4 Success Metrics:**
- ✅ Legal entity formed and compliant
- ✅ 50 beta users
- ✅ 30+ completed competitions
- ✅ <2% bug rate in production
- ✅ Smart contracts audited

---

## **Q1 2026: ACTIVE TRADING LAYER & PUBLIC LAUNCH**
**Mission:** Build TradeGrid (active tier), merge passive + active, launch publicly

### **January 2026: TradeGrid Development**

**Active Trading Infrastructure (Week 1-8)**
- ✅ **Agent Wallet System**
  - Auto-generate Hyperliquid wallet per user
  - User approval flow for wallet signature
  - $1,000 USDC deposit mechanism (user provides capital)
  - Withdrawal system post-competition

- ✅ **Builder Code Integration**
  - One-time approval flow (Hyperliquid builder code)
  - Fee collection setup (5-10 bps on trading volume)
  - Trade validation (only builder-tagged trades count)

- ✅ **Live Trading Interface**
  - LONG/SHORT buttons per coin (9 rostered coins only)
  - Leverage selector (3x, 5x, 10x, 20x with position restrictions)
  - Position management panel (open, close, add to position)
  - Real-time PnL tracking (unrealized + realized)
  - Position limits enforcement ($10K per coin, $50K total)

- ✅ **Trading Leaderboard**
  - Separate from pattern leaderboard
  - Rank by total PnL at competition end
  - Prize distribution (top 3: 70%, 20%, 10% of trading pool)

**Dual-Track Competition System**
- ✅ Single competition, two tiers (passive $25, active $100)
- ✅ Separate prize pools (pattern vs trading)
- ✅ Shared jackpots (all players eligible)
- ✅ Minimum thresholds (20 total, 5 passive, 5 active)
- ✅ Cancellation + refund logic if under threshold

---

### **February 2026: Focus Group Testing**

**Closed Alpha (Active Tier) (Week 9-11)**
- ✅ Recruit 30 traders from passive beta cohort
- ✅ Run 15 test competitions (active tier only)
- ✅ Monitor: Builder code approval rate, trades per player, PnL distribution
- ✅ Iterate on trading UX (reduce friction, clarify leverage risks)
- ✅ Test settlement accuracy (unrealized PnL from mark prices)

**Merge Testing (Week 12)**
- ✅ Combined passive + active competition (10 passive, 10 active)
- ✅ Validate prize pool separation
- ✅ Test spectator feed (passive watch active traders)
- ✅ Check dual leaderboard display

**Marketing Ramp-Up**
- ✅ Finalize public launch date (March 15, 2026)
- ✅ Onboard 5 KOL partners (Twitter, YouTube)
- ✅ Produce launch content (demo videos, screenshots)
- ✅ Press kit for crypto media outreach

---

### **March 2026: Public Beta Community Launch**

**Launch Week (Week 13)**
- ✅ Open registration (no invite required)
- ✅ Launch promotion: First 1,000 users get $10 bonus credits
- ✅ Daily competitions (1hr, 4hr schedules)
- ✅ $10K opening tournament (both tiers compete)

**Marketing Campaign: "DraftKings Meets DeFi"**
- ✅ Twitter/X ads ($15K budget, target Hyperliquid users)
- ✅ KOL partnerships (5 influencers, 50K+ followers each)
- ✅ Reddit campaign (r/hyperliquid, r/cryptocurrency)
- ✅ Discord server growth (target 500 members)
- ✅ YouTube tutorial series (3 videos, 20K views target)

**Referral Program Launch**
- ✅ 10% of friend's entry fees → in-game credits
- ✅ Leaderboard for top recruiters
- ✅ Bonus: Refer 10 users → free $25 entry

**Operations**
- ✅ Customer support system (Discord + ticket portal)
- ✅ Moderation team (3 Discord moderators)
- ✅ Daily monitoring dashboard (users, volume, errors)

**Q1 Success Metrics:**
- ✅ 1,000 registered users
- ✅ 200 competitions completed
- ✅ 100 active tier players
- ✅ $50K total wagered volume
- ✅ 60% D1 retention (passive), 70% D1 retention (active)

---

## **Q2 2026: PRODUCT REFINEMENT & POINTS CAMPAIGN**
**Mission:** Polish UX, launch XP/points economy, drive engagement and retention

### **April 2026: UX Refinement Sprint**

**Onboarding Optimization**
- ✅ Reduce time-to-first-game to <3 minutes
- ✅ Interactive tutorial (skippable for repeat users)
- ✅ Roster presets (save up to 5 favorite lineups)
- ✅ "Quick Entry" button (reuse last roster)

**Performance Improvements**
- ✅ Page load time <2 seconds
- ✅ Real-time leaderboard updates (5-second refresh)
- ✅ Mobile-responsive design (iOS Safari, Android Chrome)

**Feature Adds**
- ✅ Competition history (view past rosters, results)
- ✅ Spectator enhancements (top 3 traders displayed live)
- ✅ Trade replay (watch winning trades post-competition)
- ✅ Trader profiles (win rate, avg PnL, total XP)

**A/B Testing**
- ✅ Entry flow variations (test 3 different UI paths)
- ✅ Pricing experiments (test $20 vs $25 passive entry)
- ✅ CTA optimization (upgrade prompts for passive → active)

---

### **May 2026: Points Campaign Launch**

**Unified XP Economy**
- ✅ **Earn XP from:**
  - Playing competitions (base XP per entry)
  - Winning prizes (bonus XP)
  - Pattern bonuses (jackpot badge = 2x XP)
  - Daily login streaks (50 XP per day)
  - Referrals (100 XP per successful signup)

- ✅ **Spend XP on:**
  - Exclusive tournaments (1,000 XP entry)
  - Premium roster analytics (500 XP unlock)
  - Custom profile badges (200 XP each)
  - Early access to new game modes

- ✅ **XP Leaderboard**
  - Monthly rankings
  - Top 10 get verified badges + $500 bonus pool

**In-Game Credits System**
- ✅ Earn credits from referrals, milestones, promotions
- ✅ Use credits for competition entries (1 credit = $1)
- ✅ Never expire (lifetime balance)

**Airdrop Eligibility Tracking**
- ✅ Display "HYPE Airdrop Progress" on profile
- ✅ Track builder code volume (qualify for future HYPE drops)
- ✅ Marketing angle: "Play to earn potential airdrops"

**Marketing Campaign: "Grind Season 1"**
- ✅ 60-day XP race (top 100 win prizes)
- ✅ Daily quests (complete 3 games → bonus XP)
- ✅ Weekly challenges (win 5 competitions → 500 XP)
- ✅ Content: "How to farm XP" guides

---

### **June 2026: Retention Features**

**Social Features**
- ✅ Follow system (track favorite traders)
- ✅ In-game chat (competition lobbies)
- ✅ Achievement badges (Pattern Master, Trading Legend, etc.)
- ✅ Player profiles (public stats, follower count)

**Competition Variety**
- ✅ Add 24hr duration (marathon competitions)
- ✅ Category-specific games (L1 Chains, Memes, DeFi)
- ✅ Special events (holiday tournaments, jackpot boosters)

**Analytics Dashboard (for players)**
- ✅ Personal stats (win rate, avg grid score, best trades)
- ✅ Trend analysis (performance over time)
- ✅ Coin performance (which coins you predict best)

**Infrastructure Scaling**
- ✅ Upgrade servers (handle 5K concurrent users)
- ✅ Database optimization (reduce query latency)
- ✅ CDN setup (global low-latency access)

**Q2 Success Metrics:**
- ✅ 5,000 registered users
- ✅ 500 competitions per week
- ✅ $200K total wagered volume
- ✅ 40% D7 retention, 25% D30 retention
- ✅ 10% passive → active conversion rate

---

## **Q3 2026: COMMUNITY HOSTING & REGIONAL EXPANSION**
**Mission:** Decentralize hosting, scale globally, prepare for mobile

### **July 2026: Community Hosted Games**

**Player-Hosted Competitions**
- ✅ **Host Dashboard**
  - Create custom competition (set entry fee, duration, category)
  - Minimum 10 players to start
  - Host earns 5% rake on total pot
  - Host can ban/approve players (private matches)

- ✅ **Hosting Requirements**
  - Minimum 1,000 XP to become host
  - Verified account (KYC via Hyperliquid)
  - Host reputation score (based on match quality)

- ✅ **Match Types**
  - Public (anyone can join)
  - Private (invite-only, custom entry fee)
  - Tournament (bracket-style elimination)

**Tournament System**
- ✅ Weekly elimination brackets (32-player single elim)
- ✅ Team battles (3v3 squad competitions)
- ✅ Leaderboard integration (monthly tournament MVPs)

**Marketing Campaign: "Become a Host"**
- ✅ Highlight top-earning hosts (showcase $2K+ monthly rake)
- ✅ Host toolkit (how to promote your matches)
- ✅ Discord roles for verified hosts

---

### **August 2026: Regional Expansion (Asia)**

**Localization**
- ✅ Translate UI to Mandarin, Japanese, Korean
- ✅ Multi-language customer support (Discord mods)
- ✅ USDT deposit support (popular in Asia)

**Marketing Campaigns**
- ✅ Partner with Asian crypto communities (Telegram, WeChat)
- ✅ Sponsor trading competitions on Asian exchanges
- ✅ KOL partnerships (Chinese, Japanese influencers)

**Regional Competitions**
- ✅ Asia-only tournaments (timezone-friendly)
- ✅ Localized prize pools (CNY, JPY, KRW displays)

---

### **September 2026: Expansion (Europe) & Mobile Prep**

**European Expansion**
- ✅ Translate UI to Spanish, French, German
- ✅ EU compliance review (gaming regulations)
- ✅ EUR deposit support (via MoonPay or similar)
- ✅ Partner with European crypto communities

**Mobile App Development**
- ✅ React Native or Native iOS/Android decision
- ✅ UI/UX design for mobile (simplified roster builder)
- ✅ Beta testing (TestFlight, Google Play Beta)
- ✅ Target launch: Q4 2026

**Advanced Features**
- ✅ Copy-trading (replicate top trader positions)
- ✅ Trade alerts (push notifications for open positions)
- ✅ Advanced analytics (detailed PnL breakdowns)

**Marketing Campaign: "Global Domination"**
- ✅ $50K international tournament (all regions compete)
- ✅ Live streamed finals (Twitch, YouTube)
- ✅ Season 2 teaser (new game modes, mobile app)

**Q3 Success Metrics:**
- ✅ 10,000 registered users (50% from new regions)
- ✅ 1,000 competitions per week
- ✅ $500K total wagered volume
- ✅ 100+ active community hosts
- ✅ Mobile app in public beta (1,000+ downloads)

---

## **QUARTERLY SNAPSHOT**

| Metric | Q4 2025 | Q1 2026 | Q2 2026 | Q3 2026 |
|--------|---------|---------|---------|---------|
| **Focus** | Legal + Passive MVP | Active Layer + Launch | UX + Points | Hosting + Expansion |
| **Users** | 50 (beta) | 1,000 | 5,000 | 10,000 |
| **Weekly Volume** | $500 | $10K | $40K | $100K |
| **Monthly Revenue** | $100 | $2K | $8K | $20K |
| **Game Modes** | 1 (passive) | 2 (passive + active) | 2 + events | 2 + hosted |
| **Team Size** | 3 | 5 | 7 | 10 |

---

## **BUDGET ALLOCATION ($250K)**

| Quarter | Allocation | Primary Use |
|---------|------------|-------------|
| **Q4 2025** | $75K | Legal ($15K), Development ($40K), Testing ($10K), Reserve ($10K) |
| **Q1 2026** | $90K | Development ($50K), Marketing ($30K), Operations ($10K) |
| **Q2 2026** | $50K | Marketing ($25K), Team expansion ($15K), Infrastructure ($10K) |
| **Q3 2026** | $35K | Regional expansion ($20K), Community programs ($10K), Reserve ($5K) |

---

## **CRITICAL SUCCESS FACTORS**

**Q4:** Legal entity + working passive game (no trading complexity)  
**Q1:** Active trading layer works + public adoption begins  
**Q2:** Users stay engaged (retention) + XP economy drives repeat play  
**Q3:** Community takes ownership (hosting) + global scale achieved

---

**Ready to build?** Let me know if you want detailed sprint plans for any quarter, or specific technical architecture documents for key features.