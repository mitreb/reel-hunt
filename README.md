# 🎬 🎯 Reel Hunt (In Progress)

Modern movie search app built with Nuxt 3 and TMDB API.

![Reel Hunt Preview](docs/screenshots/preview.png)

## Features

- 🎥 Browse popular movies
- 🔍 Search by title
- 📱 Responsive design

## Tech Stack

- **Frontend:** Nuxt 3, Vue 3, TypeScript
- **UI:** Vuetify 3
- **API:** TMDB REST API
- **State:** Vue Composition API
- **Styling:** Material Design

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure environment:

```bash
cp .env.example .env
```

Add your TMDB API key to `.env` ([Get your API key here](https://developer.themoviedb.org/docs/getting-started)):

```
NUXT_TMDB_API_KEY=your_tmdb_api_key
```

3. Development:

```bash
npm run dev
```

4. Production:

```bash
npm run build
npm run start
```
