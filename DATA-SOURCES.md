# Data sources and attribution

## Integrated national search

Data from **Feed America, feedam.org, EIN 92-1761881**: https://feedam.org

This publisher is distinct from Feeding America. API documentation: https://feedam.org/api/openapi.json

- ZIP search: `https://feedam.org/api/resources/search?zip=90804&mode=free&radius=5&limit=100`
- Coordinates: `https://feedam.org/api/resources/nearby?lat=33.782&lng=-118.151&mode=free&radius=5&limit=100`
- Types and counts: `https://feedam.org/api/resources/types`
- Methodology: https://feedam.org/data-quality
- Terms: https://feedam.org/terms

At integration, the terms allowed reuse under Creative Commons Attribution 4.0, and a successful API response supplied `X-License: CC-BY-4.0`, a license link, attribution headers, and browser CORS access. Check current terms before reusing data. CC BY 4.0: https://creativecommons.org/licenses/by/4.0/

The software changes the presentation, removes unsupported categories and out-of-radius listings, deduplicates name/address/type, and calculates distances. Retain publisher attribution and record-level `data_source` labels. We do not independently endorse the publisher's verification claims. The MIT license applies to original software, not external data.

Accepted types: `food_pantry`, `food_bank`, `mobile_pantry`, `soup_kitchen`, `community_fridge`. SNAP retailers, schools, WIC vendors, and medical facilities are not presented as unrestricted free food.

The upstream service may expand searches or truncate records. This project enforces its own five-mile limit and discloses that more resources may exist. Calls are user initiated; there is no automatic initial search. It does not bulk-download the directory.

## External directory links

Feeding America, Findhelp, Food Finders Southern California, Food Oasis LA, LA Regional Food Bank, and 211 are linked as additional search options. Their records are not imported from those links; their own filters and policies apply. No partnership is implied.

## Privacy

Search sends a ZIP code or, with browser permission, precise coordinates to feedam.org. Its privacy policy governs its processing. Street-address lookup uses https://geocoding.geo.census.gov and sends the submitted address there. The app does not store search coordinates or send a user's saved-list to a server. Saved records are stored in browser localStorage and can be read by someone with access to that browser. Directory, provider, and Google Maps links send visitors to third-party sites. No analytics or user accounts are implemented in this portable source.
