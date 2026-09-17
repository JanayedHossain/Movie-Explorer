# MovieExplorer

A small React app for browsing and searching TV shows using the [TVMaze API](https://www.tvmaze.com/api). Built for the Movie Explorer assignment.

## What it does

- **Home page** — hero section with a CTA that drops you straight into the listing page.
- **Movie Listing page** — search bar at the top, a responsive grid of show cards below it. Typing in the search box hits TVMaze's `/search/shows` endpoint (debounced so it's not firing on every keystroke); clearing it goes back to the full `/shows` catalog.
- **Details modal** — clicking "See Details" on a card opens a modal with the backdrop image, rating, release date, genres, network, and summary. Closes with the ✕ button, the Escape key, or by clicking outside the modal.

## Stack

- React 18 + React Router
- Vite
- Tailwind CSS

## Running it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints in the terminal.

## Build for deployment

```bash
npm run build
```

This outputs a static `dist/` folder that can be deployed straight to Vercel, Netlify, or GitHub Pages.

## Notes

- No API key needed — TVMaze's API is free and open.
- If a show doesn't have a poster or backdrop image, the UI falls back to a placeholder message instead of a broken image.
