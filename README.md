# Janeeta Faiza — Portfolio

Next.js (App Router) + Tailwind CSS v4 + Recharts. Static, fast, and deployable to Vercel.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. In Vercel: **Add New → Project → Import** that repository. Framework is detected as Next.js; keep the defaults.
3. Click **Deploy**. To keep the address `janeeta-portfolio.vercel.app`, import into the existing Vercel project instead of creating a new one (Project → Settings → Git → Connect).

## Edit content (no component changes needed)

| What | File |
| --- | --- |
| Name, headline, intro, quick facts, links, about text, roles open to | `data/site.ts` |
| Projects and case studies | `data/projects.ts` |
| Experience & leadership | `data/experience.ts` |
| Awards and certifications | `data/recognition.ts` |
| Research list | `data/research.ts` |
| Skill groups ("Demonstrated in") | `data/capabilities.ts` |
| Skills page (explorer, top skills, tools) | `data/skills.ts` |
| Navbar items | `data/nav.ts` |
| Animated logo words, stats, education, Instagram | `data/site.ts` |
| Interactive showcase data | `data/showcase.ts` |
| Hobbies & Activities (Strava, races, books, movies, songs) | `data/hobbies.ts` |

- **Certificate links:** add `url: "https://..."` to a certification in `data/recognition.ts` to show a "Show credential" button.
- **GitHub button:** add your URL to `links.github` in `data/site.ts`. Empty links are hidden.
- **Project images:** each project has `public/projects/<slug>/main.jpg` (cover) and `01.jpg, 02.jpg…` (the card-stack gallery). Set `image`, `gallery` and `documents` in `data/projects.ts`. Use `imageFit: "contain"` for posters/maps that shouldn't be cropped. Without an image, an animated illustration is shown.
- **Demo / Source buttons:** add `demo` or `source` URLs to a project.
- **Trial explorer (TA-1):** the values in `trialMetrics` are SAMPLE numbers. Replace them with your real measurements, then set `trialIsSample = false`.
- **Resume PDF:** replace `public/Janeeta-Faiza-CV.pdf`.
- **Experience photos:** add `photos: ["/exp/file.jpg"]` to a role in `data/experience.ts` to show a gallery in its details window.
- **Photo:** replace `public/portrait.jpg`.
- **School logos:** `public/logos/itb.png` and `public/logos/mutbun-mark.png`, set per school in `data/site.ts` → `education`.
- **Races:** edit `races` and `personalBests` in `data/hobbies.ts`; race photos live in `public/races/`.
- **Accent color:** change `--accent` (and `--series-*`) in `app/globals.css`.

## Strava live stats

The Hobbies page reads your running totals (last 4 weeks, this year, all time) and latest runs straight from Strava, refreshed at most once an hour. Until it's connected, it shows the snapshot in `data/hobbies.ts`.

1. Go to https://www.strava.com/settings/api and create an app (Website: your Vercel URL, Authorization Callback Domain: `localhost`). Note the **Client ID** and **Client Secret**.
2. In your browser, open (replace `YOUR_ID`):
   `https://www.strava.com/oauth/authorize?client_id=YOUR_ID&response_type=code&redirect_uri=http://localhost&approval_prompt=force&scope=read,activity:read`
   Click **Authorize**. The browser goes to a `localhost` page that won't load; copy the `code=...` value from its address bar.
3. Exchange the code for a refresh token (in a terminal):
   ```bash
   curl -X POST https://www.strava.com/oauth/token \
     -d client_id=YOUR_ID -d client_secret=YOUR_SECRET \
     -d code=THE_CODE -d grant_type=authorization_code
   ```
   Copy `refresh_token` from the response.
4. In Vercel → Project → Settings → Environment Variables add `STRAVA_CLIENT_ID`, `STRAVA_CLIENT_SECRET`, `STRAVA_REFRESH_TOKEN`, then **Redeploy**.

The badge on the widget switches from "Snapshot" to "Live". Keep the secret and refresh token out of GitHub. Live stats need the Vercel (server) build; a static `npm run export` only captures the numbers at build time.

## Static copy (optional)

`npm run export` writes a fully static site to `out/` for any static host.
