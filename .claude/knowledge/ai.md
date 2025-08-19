# AI Learnings

Accumulated knowledge about AI integration patterns from project experience.

## Entries

- [2026-01-23] Use structured output (JSON schemas) for consistent AI responses
- [2026-01-23] Support multiple AI providers (Claude, local LLMs) with provider abstraction
- [2026-02-18] pi-mono (badlogic/pi-mono) has proven patterns for agent state machines, message steering/interruption, mid-session model handoff, subagent orchestration, and streaming granularity. Documented in `docs/REFERENCE_PI_MONO.md` for incremental adoption into baseAgent. We stay on Vercel AI SDK + Zod but borrow the architectural ideas.
