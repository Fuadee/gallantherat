# JoinJoy Krabi Journeys Landing Page

A responsive landing page built with React, Vite, TailwindCSS, and React-Leaflet to showcase Krabi highlights.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the printed local URL in your browser to view the page.

## Project Structure
- `src/components` – Reusable UI elements like the navbar, filters, and highlight card.
- `src/sections` – Page sections such as the hero and info cards.
- `src/data/content.js` – Centralized static text content for easy updates.
- `src/assets` – Place for static assets if needed.

## Notes
- The map uses React-Leaflet with OpenStreetMap tiles.
- TailwindCSS powers styling; utility classes and small helpers live in `src/index.css`.
