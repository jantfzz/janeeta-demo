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

- **Certificate links:** add `url: "https://..."` to a certification in `data/recognition.ts` to show a "Show credential" button.
- **GitHub button:** add your URL to `links.github` in `data/site.ts`. Empty links are hidden.
- **Project images:** put a screenshot in `public/` and add `image: "/file.png"` to the project. Without one, a generated illustration is shown.
- **Demo / Source buttons:** add `demo` or `source` URLs to a project.
- **Trial explorer (TA-1):** the values in `trialMetrics` are SAMPLE numbers. Replace them with your real measurements, then set `trialIsSample = false`.
- **Résumé PDF:** replace `public/Janeeta-Faiza-CV.pdf`.
- **Photo:** replace `public/portrait.jpg`.
- **Accent color:** change `--accent` (and `--series-*`) in `app/globals.css`.

## Static copy (optional)

`npm run export` writes a fully static site to `out/` for any static host.
