## API Overview
Collection of information for movies, tv-shows, actors. Includes youtube trailer url, awards, full biography, and many other usefull informations. This api provides complete and updated data for over 9 million titles ( movies, series and episodes) and 11 million actors / crew and cast members.

## API Version
v1 (current)

## Available Endpoints
The API has 4 main endpoints: Titles, Search, Actors, and Utils.

## Request and Response Format
const http = require('https');

## Authentication
- Obtain a valid RapidAPI key.
- Include headers: X-RapidAPI-Key and X-RapidAPI-Host.


## Error Handling
Common errors include:

- 401 Unauthorized — Invalid or missing  API key.

- 404 Not Found — Resource does not exist (e.g., invalid movie or actor ID).

- 429 Too Many Requests — Rate limit exceeded.

- 500 Internal Server Error — Server-side error.

## Usage Limits aand Best Practices
- Check RapidAPI subscription plan for rate limits
- Cache frequently requested data
- Validate responses
- Use pagination
- Keep API key secure
