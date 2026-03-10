# All Around Cleaners

Production-ready multi-page cleaning services website for `allaroundcleaners.ca`, built with Next.js 15, TypeScript, Tailwind CSS, App Router, Framer Motion, and Lucide.

## Stack

- Next.js 15+
- TypeScript
- Tailwind CSS
- App Router
- Framer Motion
- Lucide React

## Included routes

- `/`
- `/book-now`
- `/quote`
- `/pricing`
- `/services`
- `/services/[slug]`
- `/about`
- `/contact`
- `/checklist`
- `/coverage`
- `/locations/[provinceSlug]`
- `/locations/[provinceSlug]/[citySlug]`
- `/faq`
- `/join-us`
- `/terms`
- `/privacy`
- `/blog`
- `/blog/[slug]`
- `/robots.txt`
- `/sitemap.xml`

## Forms

All frontend forms submit directly to Formspree:

- Endpoint: `https://formspree.io/f/mbdzgreg`
- Forms covered: booking, quote, contact, join-us

If you want instant email notifications, confirm notification settings inside the Formspree dashboard for the `mbdzgreg` form.

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

## Deploy

Vercel is the simplest target:

1. Push this folder to a Git repository.
2. Import the project into Vercel.
3. Keep the default Next.js build settings.
4. Point your production domain to `allaroundcleaners.ca`.

No backend environment variables are required for forms because Formspree is wired directly in the client submission layer.
