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

<!-- HTML template -->
<div>
  <h1>{title}</h1>
  <p>Random: {computedValue}</p>
</div>

<style>
  /* Component-scoped CSS */
  div {
    padding: 1rem;
  }
</style>
```

## Key Features

### Props

Define component properties with TypeScript interfaces:

```astro
---
interface Props {
  title: string;
  description?: string;  // Optional
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

<div class="card">
  <h3>{heading}</h3>
  <slot />  {/* Child content goes here */}
</div>
```

### Scoped CSS

CSS is automatically scoped to the component:

```astro
<style>
  h3 {
    color: red;  /* Only affects h3 in this component */
  }
</style>
```

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

1. **Keep pure components**: Focus on structure and presentation
2. **Use props for configuration**: Make components reusable
3. **Leverage scoped CSS**: Avoid global namespace pollution
4. **Minimize client scripts**: Let Astro handle most rendering
5. **Use layouts**: Wrap pages with consistent templates
6. **Type everything**: Use TypeScript interfaces for Props

## Common Patterns

### Conditional Rendering

```astro
{condition && <p>Shown when true</p>}
{condition ? <p>True</p> : <p>False</p>}
```

### Loops

```astro
{items.map((item) => (
  <li key={item.id}>{item.name}</li>
))}
```

### Importing Components

```astro
import Button from '../components/Button.astro';
import ReactCounter from '../components/ReactCounter.tsx';

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
