## `/gitbook` - User Documentation Command

# GITBOOK - User Documentation Update

## Phase 0: Documentation Scope
1. **IDENTIFY** GitBook section to update from `SUMMARY.md`
2. **READ** source specification documents from `$ARGUMENTS`
3. **ANALYZE** current documentation state
4. **OUTPUT**: `DOCUMENTATION SCOPE CONFIRMED`

## Phase 1: Content Planning

### INPUT SPECIFICATIONS:
`$ARGUMENTS` (e.g., `@file_location/example`)

### AUDIENCE ANALYSIS:
Determine documentation level based on section:
- **Getting Started**: Complete beginners, no crypto knowledge
- **Game Guide**: Active players, basic crypto familiarity
- **Tokenomics**: DeFi natives, expect technical depth
- **Strategy Guide**: Experienced players, competitive focus
- **Technical Docs**: Developers, integration focus

### REFERENCE STANDARDS:
Based on section type, reference successful Web3 games:

| Section Type | Reference Games | Key Elements to Adopt |
|-------------|-----------------|----------------------|
| Onboarding | Stepn, Axie | Visual guides, step-by-step |
| Game Mechanics | Gods Unchained | Clear rules, examples |
| Tokenomics | Axie, Sandbox | Utility tables, flow diagrams |
| Economy | Decentraland | Earning mechanisms, sinks |
| Technical | Echelon Prime | API docs, integration guides |

## Phase 2: Content Creation

### DOCUMENTATION STRUCTURE:

#### Page Header
```markdown
# [Feature/Topic Name]

> **Quick Summary**: [One-line description for scanning users]
> **Difficulty**: Beginner | Intermediate | Advanced
> **Time to Read**: [X minutes]
```

#### Introduction Section
- **What**: Brief description
- **Why**: Value to player
- **When**: When to use/encounter this

#### Core Content Sections

##### For Game Mechanics
```markdown
## How [Feature] Works

### The Basics
[Simple explanation with analogy if helpful]

### Step-by-Step Guide
1. **Step Name**: Description
   - Important detail
   - Visual cue or screenshot reference
   
2. **Next Step**: Description
   [Continue...]

### Pro Tips 💡
- Advanced technique 1
- Advanced technique 2
```

##### For Economic Features
```markdown
## Understanding [Economic Feature]

### Key Concepts
| Term | Definition | Example |
|------|------------|---------|
| [Term] | [Plain English] | [In-game example] |

### How to Earn
[Clear earning mechanisms]

### How to Spend
[Clear spending options]

### Economic Flow
[Diagram showing token flow]
```

##### For Technical Guides
```markdown
## Integration Guide

### Prerequisites
- [ ] Requirement 1
- [ ] Requirement 2

### Quick Start
\```javascript
// Minimal working example
\```

### Full Implementation
[Detailed steps with code]

### Troubleshooting
| Error | Cause | Solution |
|-------|-------|----------|
```

#### Visual Guidelines
- **Screenshots**: Annotated with arrows/numbers
- **Diagrams**: Simple, focused on one concept
- **Tables**: For comparing options/features
- **Callouts**: For warnings, tips, important notes

#### Footer Elements
```markdown
## Related Topics
- [Link to related feature]
- [Link to deeper dive]

## Need Help?
- [Discord/Support link]
- [FAQ section]

---
*Last Updated: [Date]*
*Game Version: [Version]*
```

## Phase 3: Quality Checks

### CONTENT VALIDATION:
- [ ] **Accuracy**: Matches current implementation
- [ ] **Completeness**: All user scenarios covered
- [ ] **Clarity**: Grandma test (could a non-gamer understand?)
- [ ] **Consistency**: Terminology matches across docs
- [ ] **Currency**: Reflects latest game version

### STYLE VALIDATION:
- [ ] **Tone**: Friendly, not condescending
- [ ] **Length**: Scannable, not walls of text
- [ ] **Examples**: Concrete, not abstract
- [ ] **Visuals**: Support text, not replace it

### CRYPTO-NATIVE ELEMENTS:
- [ ] Wallet connection guidance
- [ ] Gas fee explanations where relevant
- [ ] Security best practices included
- [ ] Transaction confirmation steps
- [ ] Network/chain specifications

## Phase 4: Documentation Update

### FILE OPERATIONS:
1. **UPDATE** target markdown file in GitBook structure
2. **VERIFY** SUMMARY.md links remain valid
3. **CHECK** cross-references to other pages
4. **TEST** all code examples (if any)

### OUTPUT:
End with:
```
GITBOOK UPDATED ✓
Section: [Section name]
Page: [Page updated]
Version: [Doc version]
```

## CRITICAL RULES:
- **USER LANGUAGE** - No internal jargon
- **SHOW DON'T TELL** - Examples over explanations
- **PROGRESSIVE DISCLOSURE** - Basic → Advanced
- **ACTION-ORIENTED** - Help users DO things
- **SCANNABLE** - Headers, bullets, tables for quick reading
```