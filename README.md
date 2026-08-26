# Portfolio Project

Modern portfolio built with Astro, React, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Astro 7.2.7
- **UI Library**: React 19.2.8
- **Styling**: Tailwind CSS 4.3.3
- **Language**: TypeScript
- **Package Manager**: pnpm 11.24.0
- **Node**: >=22.12.0

## 📁 Project Structure

```text
/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts
│   ├── components/      # Reusable components (.astro, .tsx)
│   ├── layouts/         # Page layouts
│   ├── pages/           # File-based routing
│   └── styles/          # Global CSS (Tailwind)
├── .github/
│   ├── agents/          # AI agent configurations
│   ├── instructions/    # Development guidelines
│   └── skills/          # Reusable skills
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

### Development

| Command        | Action                               |
| :------------- | :----------------------------------- |
| `pnpm install` | Install dependencies                 |
| `pnpm dev`     | Start dev server at `localhost:4321` |
| `pnpm build`   | Build production site to `./dist/`   |
| `pnpm preview` | Preview production build locally     |

### Code Quality

| Command             | Action                                     |
| :------------------ | :----------------------------------------- |
| `pnpm lint`         | Run all linters + format check             |
| `pnpm lint:eslint`  | Run ESLint on JS/TS/Astro files            |
| `pnpm lint:style`   | Run Stylelint on CSS files                 |
| `pnpm format`       | Format all files with Prettier             |
| `pnpm format:check` | Check if files are properly formatted      |
| `pnpm lint:fix`     | Auto-fix all linting and formatting issues |

## 🛠️ Development Tools

### ESLint

- Modern flat config with TypeScript, React, Astro support
- Accessibility checks via eslint-plugin-jsx-a11y
- Import ordering and organization
- Auto-fix on save in VS Code

### Stylelint

- CSS best practices enforcement
- Tailwind CSS compatibility
- Custom property support

### Prettier

- Consistent code formatting
- Astro component support
- Integrated with ESLint and Stylelint

## 📚 Documentation

- [Astro Documentation](https://docs.astro.build)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- See `AGENTS.md` for AI agent and skills documentation
