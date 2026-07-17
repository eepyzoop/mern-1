# Izma Qamar — Portfolio

Personal portfolio site built with Next.js, showcasing projects, skills, and a working contact
pipeline with an authenticated admin dashboard behind it.

**Live:** [portfolio-mern-eepykitty04.vercel.app](https://portfolio-mern-eepykitty04.vercel.app)

## Features

- Home, Projects, Tools, and Contact pages with per-page SEO metadata, sitemap, robots, and JSON-LD
- Contact form that saves to a Postgres database and sends an email notification
- Admin dashboard (`/admin`) behind Supabase Auth, protected by reCAPTCHA v3 and IP-based rate
  limiting on login
  - Stats overview, a list of every contact message, and inline status updates (Pending / Done /
    Completed / Resolved)
- Pastel, minimalist design system with scroll animations, built entirely with hand-written CSS

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, TypeScript)
- [Prisma](https://www.prisma.io/) + [Supabase](https://supabase.com/) (Postgres + Auth)
- [Resend](https://resend.com/) for transactional email
- [Google reCAPTCHA v3](https://developers.google.com/recaptcha) for login protection
- Deployed on [Vercel](https://vercel.com/)

## Getting started

```bash
npm install
npm run dev
```

The app expects a `.env` file with:

```
DATABASE_URL=
DIRECT_URL=
RESEND_API_KEY=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_EMAIL=
ADMIN_PASSWORD=
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
RECAPTCHA_SECRET_KEY=
```

Once the database vars are set, seed the one admin account with:

```bash
npm run seed:admin
```

## Scripts

| Command              | What it does                          |
| --------------------- | -------------------------------------- |
| `npm run dev`          | Start the dev server (Turbopack)       |
| `npm run build`        | Production build                       |
| `npm run start`        | Run the production build locally       |
| `npm run lint`         | Lint the codebase                      |
| `npm run seed:admin`   | Create/verify the admin login          |

## Author

**Izma Qamar** — [LinkedIn](https://www.linkedin.com/in/izma-qamar-2b04b3379/) ·
[GitHub](https://github.com/eepyzoop)
