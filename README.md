# HMP Vercel Website Template

This folder is a reusable static website template based on the platform-site surface.

## What you get

- Clean static source in `src/`
- Production build output in `dist/`
- Vercel config in `vercel.json`
- Optional API endpoint for portal requests in `api/portal-access-request.js`
- Figma Make drop-in convention for fast page swaps

## Quick start

1. Install dependencies:

```bash
npm ci
```

2. Build production output:

```bash
npm run build
```

3. Optional local preview:

```bash
npm run preview
```

4. Deploy to Vercel:

```bash
npx vercel --prod
```

## Figma Make workflow

1. Export your generated website pages/assets from Figma Make.
2. Replace or add files inside `src/`.
3. Keep shared brand assets under `src/platform-assets/`.
4. Run `npm run build`.
5. Deploy with `npx vercel --prod`.

## New client website flow

1. Copy this folder into a fresh repo.
2. In the new repo, run `git init` and push.
3. Import that repo into Vercel.
4. Set framework preset to `Other` if asked.
5. Build command: `npm run build`
6. Output directory: `dist`

## Portal form endpoint

The page posts to `/v1/platform/portal-access-request`.

Vercel rewrites that route to `/api/portal-access-request`.

Set this env var in Vercel if you want real forwarding:

- `PORTAL_ACCESS_WEBHOOK_URL`

If not set, the endpoint still returns a success-style response for demo/staging.
