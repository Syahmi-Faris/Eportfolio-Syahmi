# Syahmi — Eportfolio

A personal eportfolio showcasing six semesters of Computer Science coursework
at Universiti Teknologi Malaysia. Organised semester by semester, subject by
subject, with featured projects per subject.

## Tech stack

- Vite + React 19 + TypeScript
- Tailwind CSS v3
- React Router v7

## Development

```bash
npm install
npm run dev
```

The site runs at <http://localhost:5173>.

## Build

```bash
npm run build       # outputs to dist/
npm run preview     # preview production build locally
```

## Project structure

```
src/
├── App.tsx                 # Routes
├── main.tsx                # Entry point
├── index.css               # Tailwind + global styles
├── components/
│   ├── Layout.tsx          # Shared layout with Nav + Footer
│   ├── Nav.tsx             # Top navigation
│   ├── Footer.tsx
│   └── Breadcrumbs.tsx
├── pages/
│   ├── Home.tsx            # Hero + 6 semester cards
│   ├── Semesters.tsx       # All semesters grid
│   ├── SemesterPage.tsx    # One semester → its subjects
│   ├── SubjectPage.tsx     # One subject → its projects
│   ├── ProjectPage.tsx     # Project detail
│   ├── Activities.tsx      # Hackathons, certs, leadership
│   └── About.tsx           # Bio + CV download
└── data/
    └── portfolio.ts        # ALL content lives here — edit this to update site
```

## Where to edit content

Almost all site content lives in **`src/data/portfolio.ts`**:

- Add or rename a semester → edit the `portfolio` array.
- Add a project to a subject → push into the `projects` array of that subject.
- Add a GitHub link, PDF, or video to a project → set `github`, `pdfPath`, or
  `videoPath` on the project.
- Add a hackathon or certification → edit the `activities` array.

For files (PDFs, videos, images):
- Place small assets in `public/` and reference them as `/filename.pdf`.
- For large videos and datasets, host on GitHub / YouTube / Vimeo and link the URL instead.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com), import the repo.
3. Vercel auto-detects Vite — accept defaults, click Deploy.
4. Done. Every push to `main` redeploys automatically.

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/semesters` | All semesters |
| `/semesters/:sem` | One semester |
| `/semesters/:sem/:subject` | One subject |
| `/semesters/:sem/:subject/:project` | Project detail |
| `/activities` | Activities & certs |
| `/about` | About + CV |
