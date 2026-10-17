# Solor Renewables

This is a static, mobile-responsive solar lead generation website for homes and businesses in Roorkee, Haridwar, Bhagwanpur, and nearby Uttarakhand locations.

## Features

- Responsive marketing pages for residential and commercial solar projects
- Functional solar savings calculator using a central configuration file
- Pre-filled WhatsApp enquiry flow using `NEXT_PUBLIC_WHATSAPP_NUMBER`
- Dark/light header theme toggle
- Static export ready for deployment on any static hosting provider
- SEO-friendly metadata, sitemap, and robots configuration

## Environment setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the environment template:
   ```bash
   copy .env.example .env.local
   ```
3. Update the WhatsApp number in `.env.local` with your business contact in international format without spaces or a plus sign.

## Local development

```bash
npm run dev
```

Open http://localhost:3000 to view the website locally.

## Production build and preview

```bash
npm run build
npm start
```

Because the project uses `output: "export"`, the static files are written to the `out` directory. `npm start` serves that folder with a static file server instead of `next start`.

The project is configured for static export and writes the generated files to the `out` directory for deployment.

## WhatsApp configuration

Set the value in `.env.local` as:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=919999999999
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

The number must be in international format without `+` or spaces. The enquiry form opens WhatsApp chat with a pre-filled message and the customer must click Send to submit the lead.

## Deployment

Upload the generated `out` folder to a static host such as Netlify, Cloudflare Pages, or GitHub Pages. If you have a custom domain, set `NEXT_PUBLIC_SITE_URL` to the production URL for canonical metadata and sitemap generation.
