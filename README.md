# xStack

A modern web application built with React 19, TypeScript, Vite 8, and Tailwind CSS 4.

## Stack

- **Runtime**: Bun
- **Framework**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS 4 + shadcn/ui + CVA
- **Routing**: React Router v8
- **Lint/Format**: ESLint + Prettier
- **Icons**: Lucide React

## Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Scripts

| Command                | Description                         |
| ---------------------- | ----------------------------------- |
| `bun run dev`          | Start Vite dev server with HMR      |
| `bun run build`        | Type check and build for production |
| `bun run lint`         | Run ESLint                          |
| `bun run format`       | Format code with Prettier           |
| `bun run format:check` | Check code formatting               |
| `bun run preview`      | Preview production build locally    |

## Project Structure

```
src/
  assets/        # Static assets
  components/    # UI components (shadcn/ui)
  lib/           # Utilities and shared code
  routes/        # React Router route definitions
  main.tsx       # Application entry point
  index.css      # Global styles
```

## Key Features

- **Path Alias**: Use `@/*` to import from `src/` (e.g., `@/components/ui/button`)
- **Dark Mode**: Toggle `.dark` class on a parent element
- **Pre-commit Hooks**: Husky + lint-staged auto-fixes staged files
- **Strict TypeScript**: `noUnusedLocals`, `noUnusedParameters` enabled
