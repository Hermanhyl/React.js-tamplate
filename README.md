# React + Vite + Tailwind CSS Starter

A minimal, reusable starter template for building modern React applications.

## Quick Start

```bash
# Clone the template
git clone https://github.com/YOUR_USERNAME/react-vite-starter.git my-project
cd my-project

# Install dependencies
npm install

# Start development server
npm run dev
```

## What's Included

- ⚡ **Vite 6** — Fast dev server and optimized builds
- ⚛️ **React 19** — Latest React with hooks
- 🎨 **Tailwind CSS v4** — Utility-first CSS with CSS-based config
- 🧭 **React Router v7** — Client-side routing with nested layouts
- 📐 **ESLint** — Code quality with React-specific rules
- 📱 **Responsive Layout** — Mobile-first header with hamburger menu
- 🧩 **Reusable Components** — Button, Card, Section primitives
- 🤖 **Claude Code Ready** — `CLAUDE.md` with full project context

## Project Structure

```
src/
├── components/
│   ├── layout/      # Header, Footer, Layout wrapper
│   ├── ui/          # Reusable primitives (Button, Card, Section)
│   └── sections/    # Page content blocks (Hero, Features, CTA)
├── pages/           # Route-level page components
├── hooks/           # Custom React hooks
├── utils/           # Helper functions
├── context/         # React Context providers
├── styles/          # Global CSS + Tailwind theme
└── assets/          # Static images and icons
```

## Customization

See `CLAUDE.md` for detailed project documentation and customization instructions.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## License

MIT
