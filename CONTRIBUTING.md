# Contributing

Small fixes, accessibility improvements, clearer error messages, and documented source integrations are welcome.

1. Fork the repository and create a branch.
2. Make a focused change; explain the user-facing problem.
3. Run `npm run check` and `npm test` with Node.js 20+.
4. Serve `dist/` locally, check desktop and mobile layouts, and test success, empty, failed, and denied-location flows.
5. Open a pull request describing what changed and what you verified.

Do not commit tokens, private locations, personal records, or bulk scraped directory data. New data sources need documented access, license/attribution, schema handling, timeout/error behavior, and tests. Keep free-food categories separate from paid retailers. Do not label a listing open or verified without evidence. Use synthetic fixtures in tests.

Public issues must not include credentials or a person's precise location. Describe defects with sanitized examples.
