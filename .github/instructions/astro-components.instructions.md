---
applyTo: ['src/**/*.astro']
description: 'Working with Astro component files. Provides syntax highlighting, component patterns, and best practices for .astro files.'
---

# Astro Component (.astro) Instructions

## File Structure

Astro components use **triple-dash separator** (`---`) to divide frontmatter from template:

```astro
---
// Frontmatter: TypeScript, imports, logic
import Layout from '../layouts/Layout.astro';

interface Props {
	title: string;
}

const { title } = Astro.props;
const computedValue = Math.random();
---

<!-- HTML template with Tailwind classes -->
<div class="rounded-lg border border-slate-200 bg-slate-50 p-4">
	<h1 class="text-2xl font-bold text-slate-900">{title}</h1>
	<p class="text-slate-600">{computedValue}</p>
</div>
```

## Props

Define component properties with **TypeScript interfaces**:

```astro
---
interface Props {
	title: string;
	description?: string; // Optional
	count?: number;
}

const { title, description, count = 0 } = Astro.props;
---

<div>
	<h2>{title}</h2>
	{description && <p>{description}</p>}
	<span>Count: {count}</span>
</div>
```

## Slots

Accept **children content** via `<slot />`:

```astro
---
interface Props {
	heading: string;
}

const { heading } = Astro.props;
---

<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
	<h3 class="text-lg font-semibold text-gray-900">{heading}</h3>
	<slot />
	<!-- Child content rendered here -->
</div>
```

### Named Slots

Use named slots for **multiple content areas**:

```astro
---
// Card.astro
---

<div class="card">
	<header>
		<slot name="header" />
	</header>
	<main>
		<slot />
		<!-- Default slot -->
	</main>
	<footer>
		<slot name="footer" />
	</footer>
</div>
```

Usage:

```astro
---
import Card from './Card.astro';
---

<Card>
	<h2 slot="header">Title</h2>
	<p>Main content</p>
	<button slot="footer">Action</button>
</Card>
```

## Conditional Rendering

```astro
---
const { showBanner, items = [] } = Astro.props;
---

{showBanner && <div class="banner">Welcome!</div>}

{
	items.length > 0 ? (
		<ul>
			{items.map((item) => (
				<li>{item}</li>
			))}
		</ul>
	) : (
		<p>No items found</p>
	)
}
```

## Astro.props Special Properties

```astro
---
const { class: className, ...rest } = Astro.props;
---

<div class:list={['base-styles', className]} {...rest}>
	<slot />
</div>
```

## Class List Utility

Dynamic classes with `class:list`:

```astro
---
const { variant = 'primary', active = false } = Astro.props;
---

<button
	class:list={[
		'rounded px-4 py-2',
		{
			'bg-blue-500 text-white': variant === 'primary',
			'bg-gray-200 text-gray-900': variant === 'secondary',
		},
		active && 'ring-2 ring-blue-400',
	]}
>
	<slot />
</button>
```

**Run linters**:

```bash
pnpm lint:eslint         # Check for issues
pnpm lint:eslint:fix     # Auto-fix issues
```

### Formatting

Prettier automatically formats Astro files with:

- Consistent indentation (tabs)
- Single quotes for strings
- Semicolons enabled
- 80-character line width

**Format files**:

```bash
pnpm format              # Format all files
pnpm format:check        # Check formatting
```

### Best Practices

- **Props**: Always define TypeScript interfaces
- **Imports**: Group by type (external, internal, components)
- **Accessibility**: Use semantic HTML and ARIA attributes
- **Performance**: Minimize client-side JavaScript
- **Styling**: Prefer Tailwind classes over scoped CSS
- Consistent design tokens
- Smaller final CSS bundle

### Client-Side Scripts

Use `<script>` tags for client-side JavaScript:

```astro
<div id="interactive">Click me</div>

<script>
	document.querySelector('#interactive')?.addEventListener('click', () => {
		console.log('Clicked!');
	});
</script>
```

## Best Practices

1. **Prefer Tailwind CSS**: Use utility classes for styling over `<style>` blocks
2. **Keep pure components**: Focus on structure and presentation
3. **Use props for configuration**: Make components reusable
4. **Minimize client scripts**: Let Astro handle most rendering
5. **Use layouts**: Wrap pages with consistent templates
6. **Type everything**: Use TypeScript interfaces for Props
7. **Responsive design**: Use Tailwind breakpoints (`md:`, `lg:`) for responsive layouts

## Common Patterns

### Conditional Rendering

```astro
{condition && <p>Shown when true</p>}
{condition ? <p>True</p> : <p>False</p>}
```

### Loops

```astro
{items.map((item) => <li key={item.id}>{item.name}</li>)}
```

### Importing Components

```astro
import Button from '../components/Button.astro'; import ReactCounter from
'../components/ReactCounter.tsx';

<Button />
<ReactCounter client:load />
```

## Default Props

```astro
---
interface Props {
	size?: 'sm' | 'md' | 'lg';
	variant?: 'primary' | 'secondary';
}

const { size = 'md', variant = 'primary' } = Astro.props;
---
```
