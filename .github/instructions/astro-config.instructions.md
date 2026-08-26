---
applyTo: ['astro.config.mjs']
description: 'Configuring Astro settings, integrations, and build options. Guidance for modifying the project configuration.'
---

# Astro Configuration Instructions

## File Overview

The `astro.config.mjs` file configures your Astro project:

```js
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
	integrations: [react()],
	vite: {
		plugins: [tailwindcss()],
	},
});
```

**Note**: This project is already configured with:

- ✅ React integration enabled
- ✅ Tailwind CSS 4+ via @tailwindcss/vite plugin
- ✅ TypeScript support

## Common Configuration Options

### Integrations

Add framework support (React, Vue, Svelte, etc.):

```js
import react from '@astrojs/react';

export default defineConfig({
	integrations: [react()],
});
```

**Note**: Tailwind CSS is configured via Vite plugin, not as an Astro integration in this project.

### Build Settings

```js
export default defineConfig({
	build: {
		format: 'directory', // or 'file'
	},
});
```

### Markdown

```js
export default defineConfig({
	markdown: {
		syntaxHighlight: 'shiki',
		shikiConfig: {
			theme: 'github-dark',
		},
	},
});
```

### Vite Configuration

```js
export default defineConfig({
	vite: {
		plugins: [
			/* ... */
		],
		ssr: {
			external: ['package-name'],
		},
	},
});
```

## Current Project Config

This project has:

- ✅ React integration enabled
- ✅ Tailwind CSS 4+ installed and configured
- ✅ TypeScript support
- ✅ Vite with @tailwindcss/vite plugin

## Tailwind CSS Setup

Tailwind CSS 4+ is already configured in this project using the `@tailwindcss/vite` plugin:

```js
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
});
```

Use Tailwind utility classes directly in your components:

```astro
<div class="p-6 bg-white rounded-lg shadow-md">
  <h1 class="text-2xl font-bold text-slate-900">Hello</h1>
</div>
```

### Tailwind Features

- **Utility-first**: Build designs with predefined utility classes
- **Responsive**: Mobile-first responsive design with breakpoints
- **Dark mode**: Built-in dark mode support
- **Customization**: Customize colors, spacing, and more in `tailwind.config.ts` (if created)

## Adding Integrations

To add Astro integrations (not Tailwind - it's already set up):

```bash
# Install integration
pnpm add @astrojs/vue

# Update config
# Add to integrations array in astro.config.mjs
```

## Environment Variables

Use `.env` file (not in config):

```env
PUBLIC_API_URL=https://api.example.com
SECRET_API_KEY=secret123
```

Access in code:

```astro
---
const apiUrl = import.meta.env.PUBLIC_API_URL;
---
```

## Documentation

- [Full Config Reference](https://docs.astro.build/en/reference/configuration-reference/)
- [Integrations Directory](https://astro.build/integrations/)
- [Environment Variables](https://docs.astro.build/en/guides/environment-variables/)
