# xStack

## Stack

- **Runtime**: Bun (bun.lock)
- **Framework**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS 4 (`@tailwindcss/vite` plugin) + shadcn/ui + CVA
- **Routing**: react-router v8 (`src/routes/router.tsx`)
- **Lint/Format**: ESLint flat config + Prettier (semi, singleQuote, 100col)

## Commands

```
bun run dev          # Vite dev server with HMR
bun run build        # tsc -b && vite build
bun run lint         # eslint .
bun run format       # prettier --write
bun run format:check # prettier --check
bun run preview      # vite preview
```

## Key details

- **Path alias**: `@/*` maps to `./src/*` (tsconfig + Vite)
- **Entry point**: `src/main.tsx` → mounts `<RouterProvider>` at `#root` in `index.html`
- **Router**: routes defined in `src/routes/router.tsx` (currently empty — add routes there)
- **Pre-commit**: Husky + lint-staged runs `eslint --fix` + `prettier --write` on staged files
- **Strict TS**: `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly` enabled
- **Dark mode**: toggle `.dark` class on a parent element; all shadcn tokens use `oklch`
- **Component pattern**: shadcn/ui with CVA variants; `cn()` in `src/lib/utils.ts` for class merging
- **No test framework configured yet**

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, invoke the `skill` tool with `skill: "graphify"` before doing anything else.

Rules:

- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
