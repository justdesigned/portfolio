---
name: 'astro-create-component'
description: 'Create a new Astro or React component with proper structure, types, and documentation. Use when you need to add reusable components to the portfolio.'
---

# Create Astro/React Component

Scaffold a new component with TypeScript types and documentation.

## Component Types

### Astro Component

- Pure Astro components with `.astro` extension
- No JavaScript hydration
- Ideal for static content and layouts
- Can integrate other components

### React Component

- Reusable interactive components with `.tsx` extension
- Runs client-side JavaScript
- Use when interactivity is needed
- Import into Astro files with `client:` directives

## Structure

```
src/components/
├── [ComponentName]/
│   ├── [ComponentName].astro (or .tsx)
│   └── [ComponentName].types.ts (if needed)
```

## Template: Astro Component

```astro
---
interface Props {
	title: string;
	description?: string;
}

const { title, description } = Astro.props;
---

<div class="p-6 bg-white rounded-lg shadow-md border border-gray-200">
	<h2 class="text-2xl font-bold text-slate-900">{title}</h2>
	{description && <p class="text-slate-600 mt-2">{description}</p>}
</div>
```

## Template: React Component

```tsx
interface Props {
	title: string;
	description?: string;
}

export default function ComponentName({
	title,
	description,
}: Props): JSX.Element {
	return (
		<div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
			<h2 className="text-2xl font-bold text-slate-900">{title}</h2>
			{description && <p className="text-slate-600 mt-2">{description}</p>}
		</div>
	);
}
```

## Usage

When creating components:

1. Choose the appropriate type (Astro or React)
2. Use TypeScript for type safety
3. Define Props interface clearly
4. Use Tailwind CSS utility classes for styling
5. Add comments for complex logic
6. Place in appropriate `src/components/` subdirectory
7. Create separate `.types.ts` if Props/exports become complex

## Tailwind Best Practices for Components

- Use consistent spacing: `p-4`, `p-6`, `gap-4`
- Use semantic colors: `text-slate-900`, `bg-white`, `border-gray-200`
- Leverage responsive prefixes: `md:flex-row`, `lg:text-lg`
- Use state variants: `hover:`, `focus:`, `active:` for interactivity
- Avoid hardcoding pixel values when Tailwind has utilities
