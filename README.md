# Himalayan Trail Co. — Web UI

Himalayan Trail Co. is a modern, responsive single-page application showcasing trekking trips, destinations, and booking flows for a Himalayan trek company. Built with React, Vite, Tailwind CSS and lightweight state in context, the app is a clean demo of a travel listing site with interactive features.

Key features
- Clean, responsive UI with accessible navigation and modals
- Treks listing and detail pages with pricing and itinerary highlights
- Save (wishlist) treks to local storage with an interactive drawer
- Localized currency display and elevation units (meters/feet)
- Booking form and simple booking persistence (local storage)
- Light / dark theme toggle (persisted to local storage)

Tech stack
- React + TypeScript + Vite
- Tailwind CSS for styling
- React Router for client-side routing
- No server required — demo data lives in `src/data/treks.ts`

Getting started (development)

1. Install dependencies

```bash
npm install
```

2. Run the development server

```bash
npm run dev
```

3. Open the app at the URL shown in the terminal (usually `https://himalyan-blush.vercel.app/`).

Deployments

- This project is configured to deploy on Vercel out of the box. If your GitHub repo is connected to Vercel, pushing to `main` will trigger a new build and deploy.
- You can also deploy manually using the Vercel CLI: `npx vercel --prod`.

Notes for contributors
- The primary UI state is managed through `src/context/AppContext.tsx`.
- Static demo data is stored in `src/data/treks.ts`.
- Styling lives in `src/index.css` and Tailwind utility classes across components.
- If you change language statistics on GitHub, a `.gitattributes` file is present to control Linguist settings.

License

This repository is provided as-is for demonstration and learning purposes. Update this section with your chosen license.
