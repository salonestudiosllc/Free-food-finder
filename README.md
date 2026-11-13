# USA Food Finder

An open-source, dark-mode website for finding food assistance within five miles of any U.S. ZIP code or browser-provided location.

**Live website:** https://usa-food-finder.higgsfield.app

Created for SALONE STUDIOS LLC with AI-assisted implementation. This repository is a portable version of the current national website. The frontend search script, filtering logic, and stylesheet match the live Higgsfield site byte for byte. The API logic is the JavaScript version used to create the live TypeScript handler. Hosting adapters differ; changing GitHub does not automatically redeploy the live site. The original repository README is preserved in ORIGINAL-README.md.

## Features

- National ZIP searches and optional browser geolocation.
- Food pantries, food banks, mobile pantries, soup kitchens, and community fridges.
- Keyword, category, and record-source filters.
- Strict five-mile straight-line distance filtering of returned records.
- Deduplicated listings, directions, contact links, and browser-local saved places.
- Publisher-reported verification dates and explicit source attribution.
- Responsive dark design and print styling.

## Run locally

Install Node.js 20 or newer. No package installation or API key is needed.

```bash
npm run build
npm start
```

Open http://localhost:8000. The local server serves the website and its address/search API routes. Use this server rather than opening the HTML file or serving only static files: address geocoding needs the same-origin server endpoint. Geolocation requires localhost or HTTPS and browser permission.

## Check the code

With Node.js 20 or newer:

```bash
npm run check
npm test
```

Tests use synthetic fixtures; they require no internet connection and do not verify the external service's uptime. No dependencies need installation.

## Project map

| File | Purpose |
| --- | --- |
| `dist/index.html` | Page content and controls |
| `dist/style.css` | Responsive dark theme and print layout |
| `dist/app.js` | Requests, filters, cards, saved places, errors |
| `dist/national.js` | Category rules, distance, normalization, deduplication |
| `test/verify-release.mjs` | Offline tests for important search rules |
| `DATA-SOURCES.md` | API, attribution, limits, and privacy |

`dist/` contains editable source files, not generated/minified output. Use the included server or a Cloudflare Worker host for the generated dist/server/index.js. The Sites project identity and private repository history are intentionally excluded.

## Data and limitations

Data comes from the independent publisher **Feed America (feedam.org, EIN 92-1761881)**, distinct from Feeding America. This is one API integrating records with multiple original source labels, not separate direct API connections to those organizations. This repository does not bundle the national directory or claim ownership of its records.

In a November 12, 2026 check, the publisher's counts totaled 65,451 records across the five included free-food categories. This is a dated publisher report, not an independently verified count of unique operating providers. The API returns a limited subset (requested limit: 100); the UI sorts that subset and filters it to five miles. It does not guarantee all nearby resources or the nearest resources nationally.

Inventory is not live. Hours, addresses, intake requirements, and geocodes may be inaccurate or stale. Food banks may supply agencies rather than serve visitors. Always call ahead. Live browser checks passed for empty initial state, searches near 90804, 10001, and 60601, a Census street address, category/keyword filters, saved places, mobile width, service-error handling, and geolocation with test coordinates. These checks do not guarantee provider details or ongoing upstream uptime.

See [DATA-SOURCES.md](DATA-SOURCES.md) for attribution and [CONTRIBUTING.md](CONTRIBUTING.md) to help improve the project.

## License

Original application code: [MIT](LICENSE). External directory data retains its own license and attribution requirements; see [DATA-SOURCES.md](DATA-SOURCES.md). The software license does not grant rights to third-party names, trademarks, or datasets.
