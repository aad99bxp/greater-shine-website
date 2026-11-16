# Greater Shine website

A responsive, dependency-free website for Greater Shine. Course information is held centrally in `app.js`; contact and integration details are in `config.js`.

## Run locally

Use Node.js 18 or newer:

```powershell
npm start
```

Then open <http://localhost:4173>. Direct paths such as `/courses/python-programming` are served by the local fallback server.

## Before accepting enquiries

Set the real contact details in `config.js`. Set `enquiryEndpoint` to a backend or form service that accepts a JSON `POST` and returns a successful HTTP status only after the enquiry has been received. The form validates required fields and mobile/email formats; it reports an error until this endpoint is configured and never displays a false success state. The optional floating WhatsApp link appears after a WhatsApp number is added.

The backend should validate submissions again, protect against spam and define retention/access practices. Do not put private API keys in `config.js`.

## Build and SEO

```powershell
$env:SITE_URL = 'https://your-real-domain.example'
npm run build
```

Replace the sample above with Greater Shine’s actual domain. The build writes the static site to `dist/`, creates a sitemap for the known pages, and adds the sitemap location to `robots.txt`. Without `SITE_URL`, the build still works but omits the sitemap and leaves the runtime canonical URL based on the current host.

## Editable details

- Institute address and working hours: top-level constants in `app.js`.
- Phone, WhatsApp, email, backend endpoint and canonical domain: `config.js`.
- Course names, descriptions, topics and FAQs: `courses` array in `app.js`.
- Original supplied logo and generated classroom hero: `public/assets/`.

The hero image was generated for this site. Course cards use custom SVG iconography.
