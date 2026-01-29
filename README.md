# TV2 Case

Movie browser built with React + TypeScript. Fetches movies from the OMDb API and displays them in a carousel. You can mark movies as favorites and they'll stick around between sessions (saved in localStorage).

## How to run it

Make sure you have Node.js installed (v18+).

```sh
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

You'll need a `.env` file in the root with an OMDb API key:

```
VITE_OMDB_API_KEY=your_key_here
```

If the API is down or the key is missing, the app falls back to mock data so it still works.

## Tests

```sh
npm test        
```
