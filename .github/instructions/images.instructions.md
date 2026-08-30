---
applyTo: ['src/**/*.astro', 'src/**/*.tsx']
description: 'Working with images in Astro. Rules for using Image, Picture, SVG components and background images with proper asset organization.'
---

# Images in Astro Instructions

## Asset Organization

Portfolio uses a structured assets folder:

```
src/assets/
├── images/       # Content images (photos, illustrations, graphics)
├── icons/        # SVG icons and small graphics
└── background/   # Background images and patterns
```

## Image Components

### `<Image />` — Optimized Single Image

Use for **content images** that need optimization:

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/images/hero-photo.png';
---

<Image src={heroImage} alt="Descriptive alt text" width={800} height={600} />
```

**Benefits**:

- Automatic format conversion (WebP, AVIF)
- Responsive sizing
- Lazy loading
- Optimized performance

**Use when**:

- Portfolio photos, project screenshots
- User avatars, team photos
- Any raster image (PNG, JPG, WEBP)

### `<Picture />` — Responsive Art Direction

Use for **images with multiple breakpoints**:

```astro
---
import { Picture } from 'astro:assets';
import mobileImage from '../assets/images/hero-mobile.jpg';
import desktopImage from '../assets/images/hero-desktop.jpg';
---

<Picture
	src={desktopImage}
	widths={[400, 800, 1200]}
	formats={['avif', 'webp']}
	alt="Hero image"
/>
```

**Use when**:

- Different crops for mobile/desktop
- Art direction requirements
- Performance-critical hero images

### SVG Components

Import SVG files **directly as components**:

```astro
---
import Logo from '../assets/icons/logo.svg';
import IconMenu from '../assets/icons/menu.svg';
---

<Logo class="h-8 w-8 text-blue-500" />
<IconMenu class="h-6 w-6" />
```

**Benefits**:

- Inline SVG for CSS styling
- No extra HTTP requests
- Full control over colors and animations

**Use when**:

- Icons from `assets/icons/`
- Logos, UI graphics
- Decorative elements that need CSS control

### Background Images

Use CSS `background-image` with imported assets:

```astro
---
import bgPattern from '../assets/background/hero-bg.svg';
---

<section
	class="min-h-screen bg-cover bg-center"
	style={`background-image: url(${bgPattern.src})`}
>
	<!-- Content -->
</section>
```

**Use when**:

- Hero section backgrounds
- Decorative patterns
- Images from `assets/background/`
- CSS-controlled positioning needed

## Decision Matrix

| Use Case                       | Component          | Folder        |
| ------------------------------ | ------------------ | ------------- |
| Project screenshot             | `<Image />`        | `images/`     |
| User avatar                    | `<Image />`        | `images/`     |
| Hero with mobile/desktop crops | `<Picture />`      | `images/`     |
| Navigation icon                | SVG import         | `icons/`      |
| Logo                           | SVG import         | `icons/`      |
| Hero background pattern        | `background-image` | `background/` |
| Section decorative bg          | `background-image` | `background/` |

## Public Folder

Use `public/` folder **only** for:

- Favicons and app icons
- `robots.txt`, `sitemap.xml`
- Third-party assets (e.g., Figma exports)
- Files that must maintain exact filenames

**Avoid** putting optimizable images in `public/` — use `assets/` instead.

## Performance Best Practices

1. **Always provide `alt` text** for accessibility
2. **Specify dimensions** to prevent layout shift
3. **Use appropriate formats**: WebP for photos, SVG for graphics
4. **Lazy load** below-the-fold images (default in Astro)
5. **Compress images** before adding to `assets/`
6. **Use `<Picture />`** for large hero images with art direction

## Common Patterns

### Card with Image

```astro
---
import { Image } from 'astro:assets';
import projectImage from '../assets/images/project-screenshot.png';
---

<div class="overflow-hidden rounded-lg bg-white shadow">
	<Image
		src={projectImage}
		alt="Project name"
		class="h-48 w-full object-cover"
	/>
	<div class="p-4">
		<h3>Project Title</h3>
	</div>
</div>
```

### Hero Section with Background

```astro
---
import bgImage from '../assets/background/hero-gradient.svg';
---

<section
	class="flex min-h-screen items-center justify-center"
	style={`background-image: url(${bgImage.src})`}
>
	<h1>Welcome</h1>
</section>
```

### Icon Button

```astro
---
import IconSend from '../assets/icons/send.svg';
---

<button class="flex items-center gap-2">
	<IconSend class="h-5 w-5" />
	Send Message
</button>
```
