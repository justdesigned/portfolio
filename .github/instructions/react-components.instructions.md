---
applyTo: ['src/**/*.tsx']
description: 'Working with React component files in Astro. Patterns for interactive components, hooks, and client-side logic.'
---

# React Component (.tsx) Instructions

## File Structure

React components in Astro projects are standard TypeScript React files:

````tsx
interface Props {
  title: string;
  onAction?: () => void;
}

export default function MyComponent({
  title,
  onAction,
}: Props): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Count: {count}
      </button>
      {onAction && (
        <button
          onClick={onAction}
          className="px-4 py-2 bg-gray-200 text-gray-900 rounded hover:bg-gray-300"
        >
          Action
        </button>
      )}
    </div>
  );
}

## Using in Astro

Import React components into Astro files and use client directives:

```astro
---
import MyComponent from '../components/MyComponent.tsx';
---

<Layout>
  <MyComponent
    title="My Interactive Component"
    client:load
  />
</Layout>
````

## Client Directives

Control when/how React components hydrate:

| Directive             | Behavior                  | Use Case                   |
| --------------------- | ------------------------- | -------------------------- |
| `client:load`         | Hydrate immediately       | Interactive on page load   |
| `client:idle`         | Hydrate when browser idle | Non-critical interactivity |
| `client:visible`      | Hydrate when visible      | Below-the-fold components  |
| `client:only="react"` | Client-only rendering     | Complex dynamic content    |

## Hooks

Use React hooks naturally:

```tsx
import { useState, useEffect } from 'react';

export default function Counter(): JSX.Element {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log('Component mounted or updated');
	}, [count]);

	return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

## Props Pattern

Always define Props interface for type safety:

```tsx
interface Props {
	id: string;
	title: string;
	items?: string[];
	onSelect?: (id: string) => void;
}

export default function Component({
	id,
	title,
	items = [],
	onSelect,
}: Props): JSX.Element {
	// Component implementation
}
```

## Common Patterns

### Form Component

```tsx
import { useState } from 'react';

export default function ContactForm(): JSX.Element {
	const [email, setEmail] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Submitted:', email);
	};

	return (
		<form onSubmit={handleSubmit} className='space-y-4'>
			<input
				type='email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder='Email'
				className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
			/>
			<button
				type='submit'
				className='w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'>
				Submit
			</button>
		</form>
	);
}
```

### Data Fetching

```tsx
import { useEffect, useState } from 'react';

export default function DataComponent(): JSX.Element {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('/api/data')
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			});
	}, []);

	if (loading) return <p className='text-slate-600'>Loading...</p>;
	return (
		<div className='p-4 bg-white rounded border border-gray-200'>
			{JSON.stringify(data)}
		</div>
	);
}
```

### With Tailwind Classes

```tsx
export default function Button({ label, onClick }: Props): JSX.Element {
	return (
		<button
			className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
			onClick={onClick}>
			{label}
		</button>
	);
}
```

## Best Practices

1. **Use Tailwind CSS**: Prefer `className` with Tailwind utilities over inline styles or CSS modules
2. **Always type Props**: Use TypeScript interfaces
3. **Keep components focused**: Single responsibility
4. **Use React hooks**: For state and side effects
5. **Minimize hydration**: Only use `client:` when needed
6. **Handle loading/error states**: For better UX
7. **Responsive design**: Use Tailwind breakpoints (`md:`, `lg:`) in className strings
