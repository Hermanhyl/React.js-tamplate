# CLAUDE.md

## Project Overview

This is a **React + Vite + Tailwind CSS v4** starter template. It provides a pre-configured skeleton for building modern web applications with routing, responsive layout, and reusable components.

## Tech Stack

- **Framework**: React 19 (JavaScript, not TypeScript)
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4 (using `@tailwindcss/vite` plugin — no `tailwind.config.js` needed)
- **Routing**: React Router DOM v7
- **Linting**: ESLint 9 with React Hooks, React Refresh, and jsx-a11y (accessibility) plugins
- **Formatting**: Prettier
- **Error Handling**: ErrorBoundary component wrapping the entire app

## Project Structure

```
src/
├── main.jsx                    # App entry point
├── App.jsx                     # Root component with router setup
├── styles/
│   └── index.css               # Tailwind imports + custom theme (@theme block)
├── components/
│   ├── layout/
│   │   ├── Layout.jsx          # Page wrapper (Header + Outlet + Footer)
│   │   ├── Header.jsx          # Responsive nav with mobile menu
│   │   ├── Footer.jsx          # Site footer with link columns
│   │   └── ErrorBoundary.jsx   # Catches runtime errors with fallback UI
│   ├── ui/
│   │   ├── Button.jsx          # Polymorphic button (renders <button>, <Link>, or <a>)
│   │   ├── Card.jsx            # Card + CardHeader/Title/Description/Content
│   │   ├── Section.jsx         # Section wrapper + SectionHeader
│   │   └── Spinner.jsx         # Animated loading spinner (sm/md/lg)
│   └── sections/
│       ├── Hero.jsx            # Hero banner with CTA buttons
│       ├── Features.jsx        # Feature cards grid
│       └── CallToAction.jsx    # CTA banner section
├── pages/
│   ├── HomePage.jsx            # Composes Hero + Features + CTA sections
│   ├── AboutPage.jsx           # Placeholder about page
│   ├── ContactPage.jsx         # Contact form with validation and error feedback
│   └── NotFoundPage.jsx        # 404 page
├── hooks/
│   └── useLocalStorage.js      # localStorage sync hook
├── utils/
│   └── helpers.js              # cn() class merger, formatDate()
├── context/
│   └── AppContext.jsx          # Global state provider template
└── assets/
    ├── images/                 # Static images
    └── icons/                  # Icon assets
```

## Design Principles

### DRY (Don't Repeat Yourself)

- Never duplicate logic, markup, or styles. If something is used more than once, extract it into a reusable component, hook, or utility function.
- Shared styles should use Tailwind theme tokens or utility classes — avoid rewriting the same class combinations across files.
- Common data (nav links, feature lists, footer columns) should be defined as arrays/objects and rendered with `.map()`, not hard-coded repeatedly.

### Component-Based & Dynamic Architecture

- The UI is built entirely from composable components. Pages are composed from sections, sections from UI primitives.
- Components should accept props to control their content, appearance, and behavior — avoid hard-coding values inside components.
- Use dynamic rendering (`.map()`, conditional rendering, prop-driven variants) instead of static, repetitive markup.
- When adding new functionality, create or extend components rather than writing one-off inline code.

### Mobile-First Responsive Design

- All styling must follow a **mobile-first** approach: write base styles for small screens, then layer on responsive overrides using Tailwind breakpoint prefixes (`sm:`, `md:`, `lg:`, `xl:`).
- Always design and test the mobile layout first before scaling up to larger breakpoints.
- Navigation, grids, and layout components must be fully functional on small screens (the Header already includes a mobile hamburger menu as a reference).

## Key Conventions

### Styling

- **Tailwind CSS v4** is configured via `@tailwindcss/vite` plugin — theme customization lives in `src/styles/index.css` inside the `@theme` block.
- Custom CSS variables are defined as Tailwind tokens: `--color-primary`, `--color-text-muted`, `--color-border`, etc. These are used directly in utility classes (e.g., `text-primary`, `bg-surface`, `border-border`).
- A `.container-wrapper` utility class is defined for consistent max-width + padding.
- **No `tailwind.config.js`** — Tailwind v4 uses CSS-based configuration.

### Components

- **Layout components** live in `components/layout/` — these handle page structure.
- **UI components** live in `components/ui/` — these are reusable primitives (Button, Card, Section).
- **Section components** live in `components/sections/` — these are page-level content blocks composed from UI components.
- **Pages** live in `pages/` — these compose sections and are mapped to routes.

### Routing

- Routes are defined in `App.jsx` using React Router v7.
- All routes are nested under the `<Layout />` component which provides Header + Footer.
- The `Layout` component uses `<Outlet />` to render the active page.

### Path Alias

- `@` is aliased to `./src` in `vite.config.js` — use `import X from "@/components/..."` for clean imports.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (port 4829)
npm run build        # Production build → dist/
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
npm run format       # Format code with Prettier
npm run format:check # Check formatting without writing
```

## How to Customize This Template

1. **Rename the project**: Update `name` in `package.json` and `"ProjectName"` in Header, Footer, and `index.html`.
2. **Update theme colors**: Edit the `@theme` block in `src/styles/index.css`.
3. **Add new pages**: Create a component in `pages/`, add a `<Route>` in `App.jsx`, and add a nav link in `Header.jsx`.
4. **Add new sections**: Create components in `components/sections/` and compose them in page components.
5. **Add global state**: Use the `AppContext.jsx` template — wrap `<App />` with `<AppProvider>` in `main.jsx`.
6. **Environment variables**: Create `.env` files — prefix variables with `VITE_` for client-side access.

## Notes

- This template uses **JavaScript** (`.jsx`), not TypeScript.
- React 19 is used with `StrictMode` enabled.
- The contact form includes client-side validation with per-field error messages — replace the placeholder submission with your backend.
- An `ErrorBoundary` wraps the entire app in `main.jsx` — unhandled errors show a fallback UI instead of a blank screen.
- Sourcemaps are only generated in development, not in production builds.
- An `.env.example` file is provided as a reference for environment variables.
- The mobile navigation uses a hamburger toggle with CSS transitions.
