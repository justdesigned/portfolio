---
applyTo: ['astro.config.mjs']
description: 'Configuring Astro settings, integrations, and build options. Guidance for modifying the project configuration.'
---

# Astro Configuration Instructions

## File Overview

The `astro.config.mjs` file configures your Astro project:

```js
import react from '@astrojs/react';

export default defineConfig({
	integrations: [react()],
	vite: {
		// Vite config
	},
	build: {
		// Build options
	},
	// More options...
});
```

## Common Configuration Options

### Integrations

Add framework support (React, Vue, Svelte, etc.):

```js
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	integrations: [react(), tailwind()],
});
```

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
- 📦 TypeScript support
- 🎨 Ready for Tailwind (add if needed)

## Adding Integrations

To add Astro integrations:

```bash
# Install integration
pnpm add @astrojs/tailwind

# Update config
# Add to integrations array
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
