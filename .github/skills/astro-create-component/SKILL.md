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

<div class="component">
  <h2>{title}</h2>
  {description && <p>{description}</p>}
</div>

<style>
  .component {
    /* Component styles */
  }
</style>
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
		<div className='component'>
			<h2>{title}</h2>
			{description && <p>{description}</p>}
		</div>
	);
}
```

## Usage

When creating components:

1. Choose the appropriate type (Astro or React)
2. Use TypeScript for type safety
3. Define Props interface clearly
4. Add comments for complex logic
5. Place in appropriate `src/components/` subdirectory
6. Create separate `.types.ts` if Props/exports become complex
