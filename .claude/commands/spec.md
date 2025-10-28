# PRODUCT MANAGER COMMAND REQUIREMENTS

## `/spec` - Feature Specification Command

# SPEC - Feature Specification Creation

## Phase 0: Document Setup
1. **CREATE** specification document: `_PM/[feature-name]_Feature_Specification.md`
2. **READ** relevant technical implementation documents
3. **IDENTIFY** all user touchpoints and business logic flows
4. **OUTPUT**: `SPECIFICATION INITIALIZED`

## Phase 1: Discovery & Analysis

### TECHNICAL INPUT:
`$ARGUMENTS`

**MANDATORY DISCOVERY PROCESS:**
1. **Map User Journey**
   - Entry points to feature
   - Decision points and user choices
   - Success and failure paths
   - Exit conditions

2. **Extract Business Logic**
   - Core rules and constraints
   - State transitions
   - Value exchanges
   - Economic implications

3. **Identify Dependencies**
   - Upstream features required
   - Downstream features affected
   - External system integrations
   - Data requirements

4. **Flag Concerns** (NEVER ASSUME - ASK)
   - ❓ Unclear technical implementations
   - ⚠️ User experience friction points
   - 🚫 Logic gaps or contradictions
   - 📊 Metrics/success criteria missing

## Phase 2: Specification Development

### DOCUMENT STRUCTURE:

#### Executive Summary
- Problem being solved
- User value proposition
- Business value proposition

#### Status Tracker
```
### Implementation Status
✅ **Resolved**: [Confirmed and clear elements]
⚠️ **Pending Discussion**: [Items needing Product Owner input]
❓ **Unclear**: [Technical ambiguities requiring clarification]
🚫 **Blocked**: [Dependencies or decisions preventing progress]
```

#### User Stories
```
AS A [user type]
I WANT TO [action/goal]
SO THAT [benefit/value]

ACCEPTANCE CRITERIA:
- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3
```

#### Business Logic Flow
- State diagrams for complex flows
- Decision trees for user choices
- Sequence diagrams for multi-actor interactions
- **NO CODE** - Only logical representations

#### User Journey Maps
```
[Entry] → [Action 1] → [Decision Point] → [Outcome A/B]
                              ↓
                        [Alternative Path]
```

#### Competitive Analysis
| Feature Aspect | HYPERGRID | Competitor A | Competitor B | Our Advantage |
|---------------|-----------|--------------|--------------|---------------|
| [Aspect]      | [Our impl]| [Their impl] | [Their impl] | [Why better]  |

#### Success Metrics
- **Adoption**: How we measure feature uptake
- **Engagement**: User interaction metrics
- **Business**: Revenue/value metrics
- **Quality**: Error rates, support tickets

#### Risk Assessment
| Risk | Probability | Impact | Mitigation Strategy | Owner |
|------|------------|--------|-------------------|--------|
| [Risk description] | H/M/L | H/M/L | [Strategy] | [Who] |

#### Terminology Guide
- **User-Facing Terms**: What we call it in UI
- **Internal Terms**: What engineering calls it
- **Marketing Terms**: How we promote it
- **DON'T SAY**: Terms to avoid

#### Decision Log
| Date | Decision | Rationale | Decided By | Impact |
|------|----------|-----------|------------|---------|
| [Date] | [What was decided] | [Why] | [Who] | [What changes] |

## Phase 3: Validation & Review

### COLLABORATION CHECKPOINTS:
1. **Technical Feasibility Review**
   - [ ] Engineering confirms implementation approach
   - [ ] No architectural conflicts identified
   - [ ] Performance requirements achievable

2. **Business Alignment Review**
   - [ ] Product Owner approves user value
   - [ ] Business metrics defined
   - [ ] Go-to-market strategy clear

3. **User Experience Review**
   - [ ] User flows are intuitive
   - [ ] Error states handled gracefully
   - [ ] Accessibility requirements met

### OUTPUT:
End specification with:
```
STATUS: [DRAFT | IN REVIEW | APPROVED | IMPLEMENTED]
SPECIFICATION COMPLETE ✓
```

## CRITICAL RULES:
- **NEVER ASSUME** - Ask Product Owner when unclear
- **USER FIRST** - Every feature must map to user value
- **BUSINESS LOGIC ONLY** - No implementation details
- **LIVING DOCUMENT** - Update as decisions are made
- **TRACE DEPENDENCIES** - Map all connections
```