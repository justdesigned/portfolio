---
name: 'astro-dev-workflow'
description: 'Manage the Astro development server and build workflow. Use when starting dev, building, previewing, or managing the development environment.'
---

# Astro Development Workflow

Manage the Astro dev server and build process efficiently.

## Starting Development

### Background Mode (Recommended)

```bash
astro dev --background
```

This starts the dev server in the background, keeping the terminal free.

### Managing Background Server

- **Check status**: `astro dev status`
- **View logs**: `astro dev logs`
- **Stop server**: `astro dev stop`
- **Restart**: `astro dev stop` then `astro dev --background`

### Foreground Mode

```bash
astro dev
```

Direct output to terminal. Press `Ctrl+C` to stop.

## Building

### Production Build

```bash
astro build
```

Creates optimized build in `dist/` directory.

### Preview Built Site

```bash
astro preview
```

Serves the production build locally for testing.

## Development Cycle

1. **Start server**: `astro dev --background`
2. **Make changes** to `.astro`, `.tsx`, or config files
3. **Auto-reload** happens in browser
4. **View logs** if issues: `astro dev logs`
5. **Stop when done**: `astro dev stop`

## Common Commands

```bash
# Development
pnpm dev                    # Start dev server
pnpm astro dev --background # Background mode

# Building
pnpm build                  # Production build
pnpm preview               # Preview build

# Utilities
astro dev status           # Check server status
astro dev logs             # View recent logs
```

## Troubleshooting

- **Port already in use**: Check `astro dev status` and stop old instances
- **Changes not reflecting**: Check `astro dev logs` for errors
- **Build fails**: Clear cache with `rm -rf .astro` and retry

## Performance Tips

- Use background mode for multiple simultaneous tasks
- Check logs only when needed
- Always build and preview before deployment
- Monitor server logs for performance issues
