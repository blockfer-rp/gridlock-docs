## `/logic` - Product Logic Review Command

# LOGIC - Product Logic Review & Debug

## Phase 0: Review Setup
1. **COLLECT** all relevant documents from `$ARGUMENTS`
   - Product specifications
   - Technical implementations
   - User feedback/issues
2. **MAP** the complete feature logic flow
3. **IDENTIFY** all actors and systems involved
4. **OUTPUT**: `LOGIC REVIEW INITIALIZED`

## Phase 1: Logic Extraction

### INPUT ANALYSIS:
`$ARGUMENTS` (specs, technical docs, implementation files)

### SYSTEMATIC LOGIC MAPPING:

#### 1. Actor Identification
```
PRIMARY ACTORS:
- [Actor]: Role and capabilities
- [Actor]: Role and capabilities

SYSTEMS:
- [System]: Responsibilities
- [System]: Responsibilities
```

#### 2. State Machine Extraction
```
STATES:
- [State A]: Entry conditions, properties
- [State B]: Entry conditions, properties

TRANSITIONS:
[State A] --[trigger]--> [State B]
         --[alt trigger]--> [State C]
```

#### 3. Business Rules Catalog
```
RULE: [Rule name]
WHEN: [Condition]
THEN: [Action/Outcome]
EXCEPT: [Edge cases]
```

#### 4. Decision Points
```
DECISION: [What user/system must decide]
OPTIONS: 
  A: [Choice] → [Consequence]
  B: [Choice] → [Consequence]
DEFAULT: [What happens if no decision]
TIMEOUT: [What happens if delayed]
```

## Phase 2: Gap Analysis

### LOGIC VALIDATION CHECKLIST:

#### Completeness Check
- [ ] **Entry Points**: All ways to enter feature documented?
- [ ] **Exit Points**: All ways to leave feature documented?
- [ ] **Happy Paths**: Success scenarios fully defined?
- [ ] **Error Paths**: All failure modes handled?
- [ ] **Edge Cases**: Boundary conditions addressed?

#### Consistency Check
- [ ] **Rule Conflicts**: Any contradicting business rules?
- [ ] **State Conflicts**: Impossible state combinations?
- [ ] **Timing Conflicts**: Race conditions possible?
- [ ] **Data Conflicts**: Inconsistent data states?

#### User Story Validation
- [ ] **Coverage**: Every user story has logic path?
- [ ] **Achievability**: User can actually complete story?
- [ ] **Value Delivery**: Story achieves stated benefit?

### GAP IDENTIFICATION MATRIX:

| Logic Component | Expected | Found | Gap Type | Severity | User Impact |
|----------------|----------|-------|----------|----------|-------------|
| [Component] | [What should exist] | [What exists] | Missing/Wrong/Unclear | H/M/L | [Description] |

## Phase 3: Concern Development

### CONCERN PRIORITIZATION:

#### 🚨 CRITICAL (P0) - Block Launch
```markdown
### CRITICAL: [Issue Name]
**Component**: [Where in system]
**Current Logic**: [What it does now]
**Problem**: [Why this breaks user experience]
**User Impact**: [Specific harm to users]
**Recommendation**: [Specific fix required]
```

#### ⚠️ HIGH (P1) - Degrades Experience  
```markdown
### HIGH: [Issue Name]
**Component**: [Where in system]
**Current Logic**: [Current behavior]
**Problem**: [Why this confuses/frustrates users]
**User Scenarios Affected**: [List specific cases]
**Recommendation**: [Proposed improvement]
```

#### 📊 MEDIUM (P2) - Optimization Opportunity
```markdown
### MEDIUM: [Issue Name]
**Current**: [Current implementation]
**Opportunity**: [Better approach]
**User Benefit**: [Improvement to experience]
**Effort/Impact**: [ROI assessment]
```

## Phase 4: Dialogue Preparation

### PUSHBACK FRAMEWORK:

#### Question Formation
```markdown
## Questions for Engineering/Product Owner

### Logic Clarification Needed
1. **Question**: [Specific question]
   - **Context**: [Why this matters]
   - **Current Understanding**: [What we think]
   - **Need**: [What we need clarified]

### Design Decisions Required
1. **Decision Point**: [What needs deciding]
   - **Option A**: [Pros/Cons from user perspective]
   - **Option B**: [Pros/Cons from user perspective]
   - **Recommendation**: [Our stance and why]
```

#### User Story Defense
```markdown
## User Story at Risk

**Story**: [Original user story]
**Current Implementation**: [How it's built]
**Why It Fails**: [Specific logic gaps]
**User Consequence**: [What happens to user]
**Required Changes**: [Minimum fixes needed]
```

## Phase 5: Solution Proposals

### RECOMMENDATION MATRIX:

| Issue | Current State | Proposed Fix | User Benefit | Effort | Priority |
|-------|--------------|--------------|--------------|--------|----------|
| [Issue] | [Problem] | [Solution] | [Outcome] | S/M/L | P0/P1/P2 |

### IMPLEMENTATION GUIDANCE:
For each proposed fix:
1. **Minimal Change**: Least disruptive fix
2. **Optimal Change**: Best long-term solution
3. **Migration Path**: How to get from current to optimal

## OUTPUT FORMAT:

```markdown
# Logic Review: [Feature/System Name]

## Executive Summary
- **Logic Status**: [SOUND | GAPS FOUND | CRITICAL ISSUES]
- **User Impact**: [None | Minor | Major | Blocking]
- **Recommendation**: [Ship | Fix First | Redesign]

## ✅ Validated Logic
[What works correctly]

## ⚠️ Logic Gaps Identified
[Detailed gap analysis]

## 🚫 Critical Concerns
[Blocking issues with user impact]

## 💬 Required Decisions
[Questions needing Product Owner input]

## 📊 User Impact Assessment
[Quantified impact on user experience]

## 🎯 Recommended Actions
[Prioritized fix list]

LOGIC REVIEW COMPLETE ✓
```

## CRITICAL RULES:
- **USER ADVOCACY** - Defend user experience fiercely
- **DATA-DRIVEN** - Support concerns with specific scenarios
- **SOLUTION-ORIENTED** - Don't just identify, propose fixes
- **PRIORITY-FOCUSED** - P0s first, always
- **COLLABORATIVE** - Frame as dialogue, not criticism