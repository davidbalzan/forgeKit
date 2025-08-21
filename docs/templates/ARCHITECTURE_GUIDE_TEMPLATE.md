# [Project Name] - Architecture Guide

> Documents **why** architectural decisions were made, not just what they are.

---

## Current Architecture Overview

```
[ASCII diagram of system components and data flow]

┌──────────┐     ┌──────────┐     ┌──────────┐
│  Client  │ ──▶ │   API    │ ──▶ │ Database │
│  (Web)   │ ◀── │ (Server) │ ◀── │          │
└──────────┘     └──────────┘     └──────────┘
```

### Key Components
- **[Component 1]**: [Purpose and responsibility]
- **[Component 2]**: [Purpose and responsibility]
- **[Component 3]**: [Purpose and responsibility]

---

## Why [Major Decision]?

### Problems [Alternative] Creates
1. **[Problem 1]**
   - [Description and impact]

2. **[Problem 2]**
   - [Description and impact]

### Why Current Approach is Better

#### [Pattern Name]
- [Benefit 1]
- [Benefit 2]
- [Benefit 3]

```tsx
// Code example showing the preferred pattern
```

---

## Directory Structure

```
apps/
├── web/src/
│   ├── components/        # Shared UI components
│   ├── features/          # Feature modules
│   ├── pages/             # Route pages
│   └── api/               # API client
│
├── api/src/
│   ├── routes/            # Route handlers
│   ├── middleware/         # Request middleware
│   ├── services/          # Business logic
│   └── config/            # Configuration
│
packages/
├── shared/src/            # Types, constants, utilities
└── ui/src/                # UI component library
```

### Feature-Based Organization

Both frontend and backend use a **feature-based** organization:

```
features/
├── [feature-name]/
│   ├── components/        # (frontend) UI components
│   ├── hooks/             # (frontend) Custom hooks
│   ├── routes/            # (backend) Route handlers
│   ├── services/          # (backend) Business logic
│   └── types.ts           # Shared types
```

---

## Related Documents
- **[Decisions Log](DECISIONS.md)** - Detailed ADRs for major choices
- **[Tech Stack](TECH_STACK.md)** - Technology choices with versions
- **[Current Focus](../CURRENT_FOCUS.md)** - What's actively being worked on

---

## Upgrade Paths

### Current State (Now)
**What:** [Current approach]
**Best for:** [Current scale/use case]
**Effort:** None - already implemented

### Growing Complexity -> [Next Approach]
**When to upgrade:**
- [Trigger condition 1]
- [Trigger condition 2]

**Migration effort:** [Low/Medium/High] ([X] days)

---

## Decision Matrix

| Need | Solution | Effort | When |
|------|----------|--------|------|
| [Need 1] | [Current approach] | Low | Now |
| [Need 2] | [Next level] | Medium | Growth |
| [Need 3] | [Advanced] | High | Maturity |

---

## Best Practices

### 1. [Pattern Name]
```tsx
// DO: Good example

// DON'T: Bad example
```

### 2. [Pattern Name]
```tsx
// DO: Good example

// DON'T: Bad example
```

---

## Performance Implications

### Current Approach
```
Bundle Size: [X]kb
API Latency: [X]ms p95
Build Time: [X]s
```

### Monitoring
- [What to monitor]
- [Key metrics]
- [Alert thresholds]
