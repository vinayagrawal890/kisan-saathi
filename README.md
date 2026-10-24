# Kisan Saathi — Rural Livelihoods Prototype

A lightweight, mobile-friendly front-end prototype for a rural livelihoods hackathon concept. It demonstrates sample crop listings, search/filter, a crop-listing form, and Hindi/English interface text.

## Run locally
1. Download or clone this repository.
2. Open `index.html` in a modern browser. No build step or API key is required.
3. Internet is only used for the optional Google Fonts import; the app logic itself has no external API dependency.

## Features
- Responsive layout for mobile and desktop
- Sample crop listings for demonstration
- Search listings by crop, farmer, or village
- Add a demo listing using form validation
- Switch interface text between Hindi/Hinglish and English
- Escapes user-provided text before rendering it in listing cards

## Important limitations
This is a front-end demo only. Data is held in memory and disappears when the page is refreshed. Sample prices and listings are fictional demonstration data, not live mandi prices or verified offers. There is no authentication, backend, buyer verification, payment, weather feed, or live market integration.

## Suggested next steps
- Conduct feedback sessions with farmers and local buyers.
- Verify requirements and market information with relevant official sources.
- Add a backend, secure authentication, privacy notices, moderation, and data validation before any real deployment.
- Consider accessibility testing and a low-bandwidth mode.

## Repository contents
- `index.html` — page structure and form
- `style.css` — responsive styling
- `script.js` — sample data, search, form validation, language toggle
- `docs/TECHNICAL_DESIGN.md` — architecture and data flow
- `data/sample_listings.json` — sample data
- `tests/TEST_CASES.md` — manual test cases
- `LICENSE` — MIT license

## Environment variables
None required for this front-end prototype.

## License
MIT; see `LICENSE`.
