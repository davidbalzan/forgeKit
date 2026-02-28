# ForgeKit Lite

> A production-ready monorepo starter with 5 AI skills that give your coding assistant persistent context and a structured workflow. Clone, install, and start building with AI that remembers where you left off.

---

## Quick Start

```bash
# Clone and install
git clone <your-repo-url>
cd forgekit-lite
pnpm install

# Set up environment
cp .env.example .env

# Start development
pnpm dev
# Frontend → http://localhost:5173
# API      → http://localhost:3000
```

### Verify It Works

- Open http://localhost:5173 — you should see the starter page
- Open http://localhost:3000/api/health — you should get `"status": "ok"`

---

## The 5 Commands

These work as slash commands in **Claude Code**, **Cursor**, and **VS Code Copilot**.

| Command          | What It Does                                                                        | When to Use              |
| ---------------- | ----------------------------------------------------------------------------------- | ------------------------ |
| `/kickstart`     | Walks you through project setup. Generates roadmap, phase structure, and focus doc. | Once, at the start       |
| `/plan-phase`    | Analyzes your codebase and creates a detailed task breakdown for a phase.           | When starting each phase |
| `/start-session` | Reads your docs and tells you where you left off and what to do next.               | Every coding session     |
| `/check-task`    | Marks tasks complete in your phase doc and updates progress.                        | After completing work    |
| `/update-focus`  | Records what you did, what's next, and any blockers.                                | End of each session      |

---

## How the Workflow Works

```
/kickstart          Set up project docs (once)
     ↓
/plan-phase         Create tasks for Phase 1
     ↓
/start-session  →  Code  →  /check-task  →  /update-focus
     ↑                                            ↓
     └────────────── next session ────────────────┘
```

1. **`/kickstart "My Project"`** — Answer 3 questions, get a roadmap and phase structure
2. **`/plan-phase 1 "Foundation"`** — Get 4-6 tasks with checkboxes and priorities
3. **`/start-session`** — AI loads context: current phase, progress, blockers, next steps
4. **Code** — Build features, fix bugs, ship
5. **`/check-task 1.3`** — Mark task 1, sub-step 3 as done
6. **`/update-focus "Finished auth, starting dashboard"`** — Save session progress

---

## What's Inside

### Monorepo Structure

```
forgekit-lite/
├── apps/
│   ├── web/              # React 19 + Vite + Tailwind 4
│   └── api/              # Hono API server
├── packages/
│   ├── shared/           # Types, constants, utilities
│   └── ui/               # React component library
├── docs/
│   ├── COMMANDS.md       # Command reference
│   ├── templates/        # Doc templates for /kickstart
│   └── phases/           # Phase-based task tracking
├── .claude/skills/       # Claude Code skills (5)
├── .cursor/commands/     # Cursor commands (5)
├── .vscode/prompts/      # VS Code Copilot prompts (5)
└── CURRENT_FOCUS.md      # Active work context
```

### Tech Stack

| Layer           | Technology   | Version |
| --------------- | ------------ | ------- |
| Frontend        | React        | 19.x    |
| Build           | Vite         | 6.x     |
| Styling         | Tailwind CSS | 4.x     |
| Backend         | Hono         | 4.x     |
| Runtime         | Node.js      | 22+     |
| Language        | TypeScript   | 5.x     |
| Package Manager | pnpm         | 10.x    |
| Monorepo        | Turborepo    | 2.x     |

### Scripts

```bash
pnpm dev          # Start all apps (web + api)
pnpm build        # Build for production
pnpm lint         # ESLint across all workspaces
pnpm typecheck    # TypeScript type checking
pnpm test         # Run tests via Vitest
pnpm format       # Format with Prettier
pnpm clean        # Clean build artifacts
```

---

## Multi-IDE Support

The same 5 skills are available across three IDEs:

| IDE                 | Location            | How to Invoke                     |
| ------------------- | ------------------- | --------------------------------- |
| **Claude Code**     | `.claude/skills/`   | Type `/skillname` in terminal     |
| **Cursor**          | `.cursor/commands/` | Type `/` in Agent chat            |
| **VS Code Copilot** | `.vscode/prompts/`  | Copilot Chat → paperclip → Prompt |

---

## Upgrading to Full ForgeKit

ForgeKit Lite includes the 5 essential skills. The full [ForgeKit](https://github.com/davidbalzan/forgeKit) adds:

- 6 additional skills (`/create-prd`, `/log-decision`, `/phase-status`, `/remember`, `/distill`, `/cleanup`)
- Knowledge base for persistent learnings across sessions
- Extended templates (PRD, architecture guide, design system, tech stack)
- Full methodology guide

---

## License

Use freely. Adapt for your needs.
