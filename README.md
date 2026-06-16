# the foundation

Landing page for the **One House Project**'s founding-membership advertising campaign
(deployed to `join.onehouseproject.com`).

Built with **Next.js (App Router) + TypeScript**, styled with **CSS Modules** on top of the
One House Project design-system tokens (`styles/colors_and_type.css`). Recreated from a
Claude Design HTML/CSS prototype.

## Stack & integrations

- **Next.js 16** / React 19, App Router, deployed on **Vercel**.
- **CSS Modules** + design-system CSS variables (`--color-*`, `--text-*`, `--radius-*`, `--shadow-*`).
- Self-hosted Google fonts via `next/font` (Montserrat, Comfortaa, Fuzzy Bubbles, Playfair Display, Poppins).
- **Phosphor** icons (`@phosphor-icons/react/ssr`).
- **Givebutter** donation popup + floating widget (campaign `E2ZNIT`) — see `lib/givebutter.ts`.
- **Meta Pixel** + **Vercel Analytics** — see `lib/analytics.ts` / `components/MetaPixel.tsx`.
- Generated Open Graph image (`app/opengraph-image.tsx`) and glyph favicon (`app/icon.svg`).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (typecheck + lint + static export of OG image)
npm run lint
```

## Project structure

- `app/` — `layout.tsx` (fonts, metadata, scripts), `page.tsx` (section composition),
  `opengraph-image.tsx`, `icon.svg`, `globals.css`.
- `components/` — one component + CSS Module per section (Hero, Tiers, TicketDrop, …).
- `content/` — editable copy/data that drives the repeated card grids
  (`tiers.ts`, `events.ts`, `impact.ts`, `drop.ts`, `wall.ts`).
- `lib/` — `site.ts`, `givebutter.ts`, `analytics.ts`, `accents.ts` (program-color helper).
- `styles/colors_and_type.css` — OHP design-system tokens.
- `public/assets/` — brand SVG logos, wordmark, glyph.

## Configuration

`NEXT_PUBLIC_META_PIXEL_ID` overrides the Meta Pixel ID (defaults to the production id). See `.env.example`.

## Temporary content — the Huntsville Hope Classic ticket drop

The ticket-drop campaign is **time-limited** (membership deadline Jun 23, 2026; drop Jun 24–26, 2026).
When it closes, remove these — each is fenced with `TEMPORARY … remove after the drop closes` comments:

- `components/TicketDrop.tsx` (the whole section)
- the free-ticket marquee in `components/Hero.tsx`
- `components/ExclusivityCallout.tsx`
- `components/BrandMoment.tsx`
- their entries in `app/page.tsx` (marked `TEMPORARY … END TEMPORARY`)

## The Wall

Launches with the designed empty-state placeholders. It is **data-ready**: each band in
`content/wall.ts` accepts a `names: string[]`; populate it (e.g. from the Givebutter members API)
and the band renders the name grid instead of the placeholder.
