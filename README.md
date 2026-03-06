# The Monotheist Prism

An Islamic educational brand that analyzes current events through the lens of absolute monotheism (Tawhid).

**Tagline:** Viewing modern confusion through absolute monotheism.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Sanity.io** (headless CMS)
- **Deploy target:** Vercel

## Project Structure

```
├── app/                 # Next.js App Router
│   ├── page.tsx         # Homepage
│   ├── about/
│   ├── videos/
│   ├── articles/
│   ├── layout.tsx
│   └── globals.css
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── PrismHero.tsx
├── lib/                 # Utilities & Sanity client
│   └── sanity.ts
├── public/              # Static assets
├── sanity/              # Sanity CMS
│   ├── schemaTypes/     # Article, Video schemas
│   ├── sanity.config.ts
│   └── sanity.cli.ts
└── ...
```

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables

Copy the example env file and fill in your values:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and set:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity project ID from [sanity.io/manage](https://sanity.io/manage) |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset name (e.g. `production`) |

### 3. Sanity Studio (optional)

To manage content in Sanity:

- Create a project at [sanity.io](https://sanity.io) and add the project ID to `.env.local`.
- Deploy or run Sanity Studio (e.g. in a separate `/studio` route or standalone) and deploy your schema with `npx sanity schema deploy` from the project root (with Sanity CLI configured).

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Deployment (Vercel)

1. Push the repo to GitHub (or connect your Git provider in Vercel).
2. In [Vercel](https://vercel.com), import the project and link the repo.
3. Add environment variables in the Vercel project settings (same as `.env.local`).
4. Deploy. Vercel will run `npm run build` and serve the app.

## Design

- **Colors:** Primary black (`#000000`), gold accent (`#D4AF37`), white/gray text.
- **Fonts:** Montserrat (headings), Inter (body), loaded via Next.js Google Fonts.
- **Theme:** Dark, minimal, responsive (mobile-first).

## File Structure

```
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Homepage (hero + latest content)
│   ├── globals.css         # Tailwind + theme (colors, fonts)
│   ├── icon.tsx            # Generated favicon
│   ├── about/page.tsx
│   ├── articles/page.tsx
│   └── videos/page.tsx
├── components/
│   ├── Navbar.tsx          # Header with logo + nav (mobile menu)
│   ├── Footer.tsx          # Footer with social placeholders
│   └── PrismHero.tsx       # Animated prism SVG (hero)
├── lib/
│   └── sanity.ts           # Sanity client for Next.js
├── public/                 # Static assets (add favicon.ico here if desired)
├── sanity/
│   ├── schemaTypes/
│   │   ├── article.ts      # Article schema (title, slug, body, etc.)
│   │   ├── video.ts        # Video schema (youtubeId, etc.)
│   │   └── index.ts
│   ├── sanity.config.ts
│   └── sanity.cli.ts
├── .env.local.example
├── .gitignore
└── README.md
```

## License

Private / All rights reserved.
