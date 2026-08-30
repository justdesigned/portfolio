---
applyTo: ['src/components/**/*.astro', 'src/components/**/*.tsx']
description: 'Component organization and structure rules. Defines when to use ui/ folder for reusable components and section/ folder for page sections.'
---

# Component Structure Instructions

## Folder Organization

```
src/components/
├── ui/           # Reusable UI primitives (buttons, cards, inputs)
├── section/      # Page sections (Header, Footer, Hero)
└── [legacy]/     # Existing root-level components (kept for compatibility)
```

## When to Use `ui/` Folder

Create components in `src/components/ui/` when:

### ✅ Reusable UI Primitives

- **Buttons**: Primary, secondary, icon buttons
- **Cards**: Project card, service card, skill card
- **Inputs**: Text fields, select, checkbox, radio
- **Form Elements**: Input groups, labels, validation messages
- **Typography**: Headings, paragraph styles, links
- **Layout Primitives**: Container, Grid, Flex wrappers
- **Media**: Avatar, Image wrapper, Video player
- **Feedback**: Alerts, toasts, modals, tooltips
- **Navigation**: Breadcrumbs, pagination, tabs

### Examples

```astro
// ✅ Good: Reusable button in ui/
src/components/ui/Button.astro

// ✅ Good: Reusable card component
src/components/ui/Card.astro

// ✅ Good: Reusable input field
src/components/ui/Input.astro
```

### UI Component Pattern

```astro
---
// src/components/ui/Button.astro
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit';
}

const { variant = 'primary', size = 'md', type = 'button' } = Astro.props;
---

<button
  type={type}
  class:list={[
    'rounded-lg font-medium transition',
    {
      'bg-blue-500 text-white hover:bg-blue-600': variant === 'primary',
      'bg-gray-200 text-gray-900 hover:bg-gray-300': variant === 'secondary',
      'bg-transparent hover:bg-gray-100': variant === 'ghost',
    },
    {
      'px-3 py-1.5 text-sm': size === 'sm',
      'px-4 py-2 text-base': size === 'md',
      'px-6 py-3 text-lg': size === 'lg',
    },
  ]}
>
  <slot />
</button>
```

## When to Use `section/` Folder

Create components in `src/components/section/` when:

### ✅ Page Sections

- **Layout Sections**: Header, Footer, Sidebar, Navigation
- **Hero Sections**: Landing hero, page hero
- **Content Sections**: About section, Services section, Projects section
- **Form Sections**: Contact form, Newsletter signup
- **Call-to-Action**: CTA blocks, promotional banners

### Examples

```astro
// ✅ Good: Header navigation in section/
src/components/section/Header.astro

// ✅ Good: Hero section
src/components/section/Hero.astro

// ✅ Good: Footer with links
src/components/section/Footer.astro
```

### Section Component Pattern

```astro
---
// src/components/section/Hero.astro
import Container from '../ui/Container.astro';
import Button from '../ui/Button.astro';

interface Props {
  title: string;
  subtitle?: string;
}

const { title, subtitle } = Astro.props;
---

<section class="min-h-screen bg-gradient-to-b from-blue-50 to-white">
  <Container>
    <div class="flex flex-col items-center justify-center py-20 text-center">
      <h1 class="text-5xl font-bold text-gray-900">{title}</h1>
      {subtitle && <p class="mt-4 text-xl text-gray-600">{subtitle}</p>}
      <div class="mt-8">
        <Button variant="primary" size="lg">Get Started</Button>
      </div>
    </div>
  </Container>
</section>
```

## When to Use Root `components/` Folder

Keep in root **only for legacy compatibility**:

### ⚠️ Existing Components

- **Existing files**: `AboutSection.astro`, `ContactSection.astro`, `Hero.astro`, etc.
- **Reason**: Avoiding breaking changes in existing pages
- **Future strategy**: Gradually migrate to `ui/` or `section/` as needed

### ❌ Do NOT Create New Root Components

```astro
// ❌ Bad: New component in root
src/components/NewButton.astro

// ✅ Good: New component in ui/
src/components/ui/NewButton.astro
```

## Naming Conventions

### UI Components

- **PascalCase** filenames: `Button.astro`, `Card.astro`, `Input.astro`
- **Descriptive names**: `ProjectCard.astro`, not `Card2.astro`
- **Singular form**: `Button.astro`, not `Buttons.astro`

### Section Components

- **PascalCase** with context: `Header.astro`, `Footer.astro`, `ContactSection.astro`
- **Section suffix** when needed: `HeroSection.astro`, `AboutSection.astro`
- **Avoid generic names**: Use `ServicesSection.astro`, not `Section3.astro`

## Component Composition

### ✅ Good: Sections Use UI Components

```astro
---
// src/components/section/ProjectsSection.astro
import Card from '../ui/Card.astro';
import Button from '../ui/Button.astro';

const projects = [...];
---

<section>
  <div class="grid gap-6 md:grid-cols-3">
    {projects.map(project => (
      <Card>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Button variant="secondary">View Project</Button>
      </Card>
    ))}
  </div>
</section>
```

### ✅ Good: Pages Use Sections

```astro
---
// src/pages/index.astro
import Layout from '../layouts/Layout.astro';
import Header from '../components/section/Header.astro';
import Hero from '../components/section/Hero.astro';
import Footer from '../components/section/Footer.astro';
---

<Layout title="Home">
  <Header />
  <Hero title="Welcome" subtitle="Build amazing things" />
  <Footer />
</Layout>
```

## Migration Strategy

When refactoring existing components:

1. **Create new version** in `ui/` or `section/`
2. **Update imports** in pages
3. **Test thoroughly**
4. **Remove old version** from root
5. **Update documentation**

### Example Migration

```astro
// Before: src/components/ProjectCard.astro
// After:  src/components/ui/ProjectCard.astro

// Update imports:
- import ProjectCard from '../components/ProjectCard.astro';
+ import ProjectCard from '../components/ui/ProjectCard.astro';
```

## Decision Flowchart

```
New Component Needed?
  │
  ├─ Is it a reusable primitive (button, card, input)?
  │  └─ YES → src/components/ui/
  │
  ├─ Is it a page section (hero, header, footer)?
  │  └─ YES → src/components/section/
  │
  └─ Is it updating an existing root component?
     └─ YES → Keep in root (legacy) OR migrate to ui/section/
```

## Best Practices

1. **Keep ui/ components small**: Single responsibility, highly reusable
2. **Make section/ components composable**: Use ui/ components inside
3. **Use TypeScript interfaces**: Define clear Props for all components
4. **Export types**: Share types between related components
5. **Document usage**: Add JSDoc comments for complex components
6. **Test in isolation**: Each ui/ component should work standalone
