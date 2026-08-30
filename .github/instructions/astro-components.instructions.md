---
applyTo: ['src/**/*.astro']
description: 'Working with Astro component files. Provides syntax highlighting, component patterns, and best practices for .astro files.'
---

# Astro Component (.astro) Instructions

## File Structure

Astro components use a triple-dash separator to divide frontmatter from template:

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
<div class="p-4 rounded-lg bg-slate-50 border border-slate-200">
	<h1 class="text-2xl font-bold text-slate-900">{title}</h1>
	<p class="text-slate-600">{computedValue}</p>
</div>
```

## Key Features

### Props

Define component properties with TypeScript interfaces:

```astro
---
interface Props {
	title: string;
	description?: string; // Optional
	count?: number;
}

const { title, description, count = 0 } = Astro.props;
---
```

### Slots

Accept children content:

```astro
---
interface Props {
	heading: string;
}
---

<div class="card bg-white shadow-md rounded-lg p-6 border border-gray-200">
	<h3 class="text-lg font-semibold text-gray-900">{heading}</h3>
	<slot />
	{/* Child content goes here */}
</div>
```

### Tailwind CSS

Use Tailwind utility classes for styling (preferred approach):

```astro
<div class="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md">
	<h2 class="text-2xl font-bold text-slate-900">Title</h2>
	<p class="text-slate-600">Description</p>
	<button
		class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
	>
		Click me
	</button>
</div>
```

**Benefits**:

- No CSS file management needed
- Responsive design with breakpoint prefixes (`md:`, `lg:`, etc.)
- State variants (`hover:`, `focus:`, `active:`)

## Code Quality

### Linting

All Astro components are checked by ESLint with these rules:

- TypeScript strict mode enabled
- React hooks rules (for embedded React components)
- Accessibility checks (eslint-plugin-jsx-a11y)
- Import ordering and organization

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
