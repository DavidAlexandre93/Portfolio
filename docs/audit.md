# Repository audit

Date: 2026-09-04

The product is a React 18 and Vite 7 SPA. The application entry point is `src/main.jsx`, composition and legacy path matching live in `src/App.jsx`, and the public routes are `/`, `/resume`, `/property`, `/crypto`, `/netflix`, `/twitch`, and `/404`. Content is currently split between `data/siteData.js`, `data/projectDetails.js`, and `context/I18nContext.js`.

The current UI is composed from `components/` and `pages/`, styled with Tailwind utilities and `styles/globals.css`. Hosting targets Firebase Hosting `dist`; the repository also contains a legacy `yarn.lock` and dependencies that are not imported by the application. This is recorded for the later hygiene task and is not removed as part of the first product slice.

The first implementation slice removes CDN animation and IP geolocation, adds a theme provider, introduces a deterministic grounded assistant over approved portfolio content, and changes contact success into an explicit `mailto:` handoff. No private AI key or remote provider is present in the browser.