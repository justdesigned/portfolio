---
name: 'astro-create-page'
description: 'Create a new page or dynamic route in the Astro portfolio. Use when adding new pages, sections, or implementing dynamic routing.'
---

# Create Astro Page

Create new pages using Astro's file-based routing system.

## File-Based Routing

Astro generates routes based on file structure in `src/pages/`:

```
src/pages/
├── index.astro          → /
├── about.astro          → /about
├── blog/
│   ├── index.astro      → /blog
│   └── [slug].astro     → /blog/:slug (dynamic)
└── projects/
    └── [id].astro       → /projects/:id
```

## Static Page Template

```astro
---
import Layout from '../layouts/Layout.astro';

const pageTitle = 'Page Title';
---

<Layout title={pageTitle}>
  <h1>{pageTitle}</h1>

  {/* Page content */}
</Layout>
```

## Dynamic Route Template

```astro
---
import Layout from '../layouts/Layout.astro';

export const getStaticPaths = () => {
  return [
    { params: { slug: 'first-post' } },
    { params: { slug: 'second-post' } },
  ];
};

const { slug } = Astro.params;
---

<Layout title={slug}>
  <h1>{slug}</h1>
  {/* Dynamic content */}
</Layout>
```

## With React Components

```astro
---
import Layout from '../layouts/Layout.astro';
import InteractiveComponent from '../components/Interactive';
---

<Layout>
  <h1>Page with React Component</h1>
  <InteractiveComponent client:load />
</Layout>
```

## Client Directives

Use these to control when React components hydrate:

- `client:load` - Hydrate immediately
- `client:idle` - Hydrate when browser is idle
- `client:visible` - Hydrate when visible in viewport
- `client:only` - No server rendering, client-only

## Best Practices

1. Keep pages in `src/pages/` for automatic routing
2. Use layouts for consistent structure
3. Leverage Astro's static generation by default
4. Add React components only where needed
5. Use dynamic routes for data-driven pages
