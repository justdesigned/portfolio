# Portfolio Project Agents and Skills

## Project Overview

Astro 7+ portfolio website with React 19 integration, TypeScript, and Tailwind CSS 4+.

## Quick Start

- **Install**: `pnpm install`
- **Dev**: `pnpm dev`
- **Build**: `pnpm build`
- **Lint**: `pnpm lint:fix`

## Hard Constraints

1. **Images**: Use `<Image />` or `<Picture />` from `astro:assets`, never plain `<img>` for content images
2. **Component Organization**: New reusable components → `src/components/ui/`, sections → `src/components/section/`
3. **TypeScript**: All component props must have TypeScript interfaces
4. **Linting**: Run `pnpm lint:fix` before committing changes
5. **Accessibility**: All images must have descriptive `alt` attributes
6. **Tailwind**: Prefer Tailwind utility classes over scoped styles
7. **Asset Structure**: Images → `assets/images/`, Icons → `assets/icons/`, Backgrounds → `assets/background/`

## Topic Docs

- **Images** (`.github/instructions/images.instructions.md`) — Required when working with images, backgrounds, icons
- **Component Structure** (`.github/instructions/component-structure.instructions.md`) — Required when creating components
- **Astro Components** (`.github/instructions/astro-components.instructions.md`) — Reference for Astro syntax
- **React Components** (`.github/instructions/react-components.instructions.md`) — Reference when adding interactivity
- **Astro Config** (`.github/instructions/astro-config.instructions.md`) — Reference for configuration changes

## Feature Tracking

This project uses `feature_list.json` to track functionality and verification status.

### Working with Features

1. **Check status**: Review `feature_list.json` before starting work
2. **One feature at a time**: Only one feature should have `status: "in_progress"` at any time
3. **Update status**: Change status from `not_started` → `in_progress` → `passing`
4. **Verify work**: Follow verification steps for the feature
5. **Record evidence**: Update `evidence` field with proof of completion

### Status Values

- `not_started` — Feature not yet implemented
- `in_progress` — Currently being worked on (only one at a time)
- `blocked` — Cannot proceed due to documented issue
- `passing` — Verification passed and evidence recorded

### Current State

- **Passing**: 11 features (core landing page sections, UI migration, section migration, image optimization)
- **Not Started**: 1 feature (adapt CV text for homepage copy)

**Next Priority**: Feature #12 (Adapt CV text for portfolio copy)

## Session Continuity

Use `PROGRESS.md` for multi-session tracking:

### Before Each Session

- Read `PROGRESS.md` → Current Verified State
- Review `feature_list.json` → Choose next feature
- Check for blockers or known risks

### During Session

- Update feature status to `in_progress`
- Follow verification steps
- Record evidence as you work

### After Each Session

- Update `PROGRESS.md` → Add session log entry
- Update `feature_list.json` → Change status to `passing`
- Run verification: `pnpm lint:fix && pnpm build`
- Document any known risks for next session

---

## Default Agent: Astro Developer

The **Astro Developer** agent handles all Astro and portfolio-related tasks. It's automatically activated for:

- `.astro` component files
- `.tsx` React component files
- `astro.config.mjs` configuration
- Anything in `src/` directory

**Location**: `.github/agents/astro-developer.agent.md`

## Additional Agent: Content Copywriter

The **Content Copywriter** agent adapts personal resume material from `docs/CV.md` into website-ready copy for the homepage and sections, while keeping the messaging factual and conversion-focused.

**Location**: `.github/agents/content-copywriter.agent.md`

## Additional Agent: Figma Designer

The **Figma Designer** agent creates new mockups in Figma and updates existing portfolio layouts, keeping the design system aligned with the current Astro implementation and the project reference file.

**Location**: `.github/agents/figma-designer.agent.md`

---

## Available Skills

### 📄 astro-create-component

Create new Astro or React components with proper TypeScript types and structure.

**Use when**: Adding reusable components, building component libraries, or creating interactive elements.

### 📑 astro-create-page

Create new pages and dynamic routes using Astro's file-based routing.

**Use when**: Adding new portfolio sections, creating blog routes, or implementing dynamic content pages.

### 🚀 astro-dev-workflow

Manage the development server, builds, and preview environment.

**Use when**: Starting/stopping dev server, building for production, or troubleshooting dev issues.

---

## Development Commands

### Start Development

```bash
pnpm dev                  # Start Astro dev server
```

### Linting & Formatting

```bash
pnpm lint                 # Run all linters (ESLint + Stylelint + Prettier)
pnpm lint:eslint          # Run ESLint on JS/TS/Astro files
pnpm lint:style           # Run Stylelint on CSS files
pnpm format               # Format all files with Prettier
pnpm format:check         # Check if files are formatted
pnpm lint:fix             # Auto-fix all issues (ESLint + Stylelint + Prettier)
```

### Build & Preview

```bash
pnpm build                # Production build
pnpm preview              # Preview production build locally
```

---

## Project Structure

```text
src/
├── pages/           # Routes (auto-generated from filenames)
├── components/      # Reusable components
├── layouts/         # Page layouts and templates
├── styles/          # Global styles (Tailwind CSS)
└── assets/          # Images, fonts, static files
    └── images/      # Content images
    └── icons/       # SVG icons
    └── background/  # Background images
```

---

## Code Quality Tools

### ESLint

- **Version**: 10.9.1
- **Config**: Modern flat config (`eslint.config.js`)
- **Plugins**: TypeScript, React, Astro, JSX a11y, Import
- **Features**: Auto-fix on save, strict TypeScript rules, accessibility checks

### Stylelint

- **Version**: 17.14.1
- **Config**: `.stylelintrc.cjs`
- **Features**: CSS best practices, Tailwind CSS support
- **Files**: Lints `src/**/*.css`

### Prettier

- **Version**: 3.9.6
- **Config**: `.prettierrc.js`
- **Plugin**: prettier-plugin-astro (0.14.1)
- **Features**: Auto-format on save, consistent code style

### VS Code Integration

- Auto-fix on save enabled for all tools
- Configured in `.vscode/settings.json`
- Requires extensions: ESLint, Stylelint, Prettier

---

## Documentation

Full Astro documentation: <https://docs.astro.build>

### Key Guides

- [Routing & Dynamic Routes](https://docs.astro.build/en/guides/routing/)
- [Astro Components](https://docs.astro.build/en/basics/astro-components/)
- [React Component Integration](https://docs.astro.build/en/guides/framework-components/)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling & Tailwind](https://docs.astro.build/en/guides/styling/)
- [Images](https://docs.astro.build/en/guides/images/)
- [Internationalization (i18n)](https://docs.astro.build/en/guides/internationalization/)
