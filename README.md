# ForgeKit

> An agentic engineering toolkit template — documentation-driven development with persistent AI knowledge capture.

---

## What You Get

- **Monorepo** — Turborepo + pnpm workspaces with `apps/` and `packages/`
- **React 19 + Vite + Tailwind 4** — Modern frontend with dark/light design tokens
- **Hono API** — Lightweight, TypeScript-first backend
- **Shared packages** — Types, utilities, and UI components across apps
- **AI workflow** — Skills, knowledge base, ADRs, and phase-based planning
- **Multi-IDE support** — Claude Code, Cursor, VS Code Copilot integrations

---

## Quick Start

```bash
# Install dependencies
pnpm install

# Start dev servers (web on :5173, api on :3000)
pnpm dev

# Start database (optional)
docker compose up -d
```

---

## Project Structure

```
forgekit/
├── apps/
│   ├── web/                    # React 19 + Vite + Tailwind 4
│   └── api/                    # Hono API server
├── packages/
│   ├── shared/                 # Types, constants, utilities
│   └── ui/                     # UI component library
├── docs/
│   ├── COMMANDS.md             # AI commands reference
│   ├── DECISIONS.md            # Architectural Decision Records
│   ├── phases/                 # Phase-based task planning
│   └── templates/              # PRD template
├── .claude/
│   ├── skills/                 # 11 AI skills (kickstart, remember, distill, etc.)
│   └── knowledge/              # Domain-specific learnings
├── .cursor/                    # Cursor IDE commands & prompts
├── .vscode/                    # VS Code prompts
├── FORGEKIT_METHODOLOGY.md     # Full methodology guide
├── CURRENT_FOCUS.md            # Active work context
└── turbo.json                  # Turborepo config
```

---

## AI Workflow

### Skills

| Skill | Purpose | Frequency |
|-------|---------|-----------|
| `/start-session` | Load project context | Every session |
| `/kickstart` | Initialize project docs | Once per project |
| `/create-prd` | Generate product requirements | Before development |
| `/plan-phase` | Create phase task breakdown | Per phase |
| `/remember` | Capture learnings | Often |
| `/distill` | Formalize learning to ADR | Rarely |
| `/log-decision` | Record architecture decision | As needed |
| `/update-focus` | Update current work status | End of session |
| `/check-task` | Mark tasks complete | After tasks |
| `/phase-status` | View phase progress | Check-ins |
| `/cleanup` | Reset to template state | Reuse template |

### Knowledge Base

Persistent learnings in `.claude/knowledge/` covering: TypeScript, React, Tailwind, testing, architecture, database, AI, DevOps, process.

### ADR Workflow

Architectural decisions are tracked in `docs/DECISIONS.md` and consulted by `/start-session` at the beginning of each coding session.

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend | React | 19.x |
| Build | Vite | 6.x |
| Styling | Tailwind CSS | 4.x |
| Backend | Hono | 4.x |
| Runtime | Node.js | 22+ |
| Database | PostgreSQL | 17 |
| Package Manager | pnpm | 10.x |
| Monorepo | Turborepo | 2.x |
| Language | TypeScript | 5.x |

---

## Scripts

```bash
pnpm dev          # Start all dev servers
pnpm build        # Build all packages
pnpm lint         # Lint all packages
pnpm typecheck    # Type check all packages
pnpm format       # Format with Prettier
pnpm clean        # Clean all build artifacts
```

---

## Customization

1. **Rename the project** — Update `name` in root `package.json` and `APP_NAME` in `packages/shared/src/constants.ts`
2. **Add your PRD** — Run `/create-prd` or `/kickstart` to generate project documentation
3. **Plan phases** — Use `/plan-phase` to create task breakdowns
4. **Capture decisions** — Use `/log-decision` for architecture choices
5. **Build features** — Follow the phase-based workflow with checkbox tracking

---

## Other Resources

| Document | Purpose |
|----------|---------|
| [FORGEKIT_METHODOLOGY.md](./FORGEKIT_METHODOLOGY.md) | Full methodology guide |
| [docs/COMMANDS.md](./docs/COMMANDS.md) | All AI commands for IDEs |
| [CURRENT_FOCUS.md](./CURRENT_FOCUS.md) | Active work context |

---

**License**: Use freely. Adapt for your needs.
