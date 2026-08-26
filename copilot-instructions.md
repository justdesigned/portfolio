# Portfolio Project Agent Instructions

You are an expert Astro developer helping maintain and extend this portfolio website.

## Project Context

- **Framework**: Astro 7+ with React 19 integration
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4+ with @tailwindcss/vite plugin
- **Type**: Portfolio/Personal website

## Key Commands

### Development

- Start dev server (background): `astro dev --background`
- Stop dev server: `astro dev stop`
- Check status: `astro dev status`
- View logs: `astro dev logs`
- Build for production: `astro build`
- Preview build: `astro preview`

### Project Structure

- **Pages**: `src/pages/` - Route files (`.astro`, `.tsx`)
- **Components**: `src/components/` - Reusable components
- **Layouts**: `src/layouts/` - Page layouts
- **Assets**: `src/assets/` - Images, fonts, static files
- **Config**: `astro.config.mjs` - Astro configuration

## Guidelines

1. **Astro Components**: Use `.astro` extension for Astro-specific components
2. **React Components**: Use `.tsx` for React components, import in Astro files
3. **Styling**: Use Tailwind CSS utility classes for styling all components
4. **File Structure**: Keep components organized by feature/section
5. **TypeScript**: Maintain strict type safety across the project
6. **Routing**: Leverage Astro's file-based routing system

## Useful Resources

- [Astro Documentation](https://docs.astro.build)
- [Astro Routing Guide](https://docs.astro.build/en/guides/routing/)
- [Astro Components](https://docs.astro.build/en/basics/astro-components/)
- [Framework Integration](https://docs.astro.build/en/guides/framework-components/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS with Astro](https://docs.astro.build/en/guides/integrations-guide/tailwind/)

## When Working on Tasks

- Always check existing component structure before creating new ones
- Use `<Layout>` for consistent page styling
- Test changes via `astro dev` before building
- Ensure TypeScript types are properly defined
- Document complex component props and usage

## 🎨 Design Reference

**Figma**: https://www.figma.com/design/pPZaWvXIgzIozzly8pcWGW/Portfolio?m=auto&t=6jbO2F4pHbjwNpna-6
