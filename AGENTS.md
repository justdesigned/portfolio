# Portfolio Project Agents and Skills

## Default Agent: Astro Developer

The **Astro Developer** agent handles all Astro and portfolio-related tasks. It's automatically activated for:

- `.astro` component files
- `.tsx` React component files
- `astro.config.mjs` configuration
- Anything in `src/` directory

**Location**: `.github/agents/astro-developer.agent.md`

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

```
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

Full Astro documentation: https://docs.astro.build

### Key Guides

- [Routing & Dynamic Routes](https://docs.astro.build/en/guides/routing/)
- [Astro Components](https://docs.astro.build/en/basics/astro-components/)
- [React Component Integration](https://docs.astro.build/en/guides/framework-components/)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling & Tailwind](https://docs.astro.build/en/guides/styling/)
- [Images](https://docs.astro.build/en/guides/images/)
- [Internationalization (i18n)](https://docs.astro.build/en/guides/internationalization/)
