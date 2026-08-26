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
astro dev --background    # Recommended - keeps terminal free
astro dev                  # Foreground mode with live output
```

### Manage Server

```bash
astro dev status          # Check if server is running
astro dev logs            # View recent server logs
astro dev stop            # Stop background server
```

### Build & Preview

```bash
astro build               # Production build
astro preview             # Preview production build locally
```

---

## Project Structure

```
src/
├── pages/       # Routes (auto-generated from filenames)
├── components/  # Reusable components
├── layouts/     # Page layouts and templates
└── assets/      # Images, fonts, static files
```

---

## Documentation

Full Astro documentation: https://docs.astro.build

### Key Guides

- [Routing & Dynamic Routes](https://docs.astro.build/en/guides/routing/)
- [Astro Components](https://docs.astro.build/en/basics/astro-components/)
- [React Component Integration](https://docs.astro.build/en/guides/framework-components/)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling & Tailwind](https://docs.astro.build/en/guides/styling/)
- [Internationalization (i18n)](https://docs.astro.build/en/guides/internationalization/)
