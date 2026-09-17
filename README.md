[![CI](https://github.com/NepSujal44/himalyan/actions/workflows/ci.yml/badge.svg)](https://github.com/NepSujal44/himalyan/actions)

# Himalayan Trail Co. — Web UI

Himalayan Trail Co. is a modern, responsive single-page application that showcases trekking trips, destinations, and a simple booking flow for a Himalayan trek operator. It’s built with React, Vite, TypeScript, and Tailwind CSS.

Why this project
- Designed to be a production-like demo of a travel listing site with an approachable codebase for contributors.
- Focuses on accessibility, responsive design, and practical UI patterns (wishlist, currency selection, theme toggle).

Highlights
- Clean, responsive UI with accessible navigation and drawers
- Trek list and detail pages with pricing and itinerary highlights
- Save (wishlist) treks persisted to local storage
- Currency and elevation unit toggles
- Light / dark theme with user preference persisted

Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

Build for production

```bash
npm run build
npm run preview
```

Deployment

- This repo is ready to deploy on Vercel. If your GitHub repo is connected to Vercel, pushes to `main` will auto-deploy.
- Manual deploy via the Vercel CLI: `npx vercel --prod`.

Screenshots

Add screenshots to the `assets/` folder and replace the examples below to showcase the UI in the README.

![Home screenshot](assets/screenshot-home.png)
![Trek detail screenshot](assets/screenshot-detail.png)

Contributing

Small, focused contributions are welcome. See `CONTRIBUTING.md` for the development workflow, how to run the project, and coding conventions.

Code structure overview
- `src/components/` — UI components and shared widgets
- `src/pages/` — Route pages (Home, Trips, Booking, etc.)
- `src/context/` — App-wide state (`AppContext`) and helpers
- `src/data/treks.ts` — Demo dataset used by the site

Package & metadata
- Project metadata lives in `package.json` for clarity.

License

This project is licensed under the MIT License. See `LICENSE` for details.

Contact

Maintainer: Sujal (https://github.com/NepSujal44)

