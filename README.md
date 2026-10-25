# Invitations Online

A bespoke digital invitation studio landing page. Plain HTML, CSS, and JavaScript, local fonts, original SVG artwork, no runtime dependencies, no backend.

## Local preview

With Node.js 20 or later, run `npm run dev` and open http://127.0.0.1:5173. No dependency installation is required. Run `npm run check` for JavaScript syntax checks and `npm run build` to generate `dist/`.

## Cloudflare

For Cloudflare Pages, connect this repository, select no framework, set the build command to `npm run build` and the output directory to `dist`. For Cloudflare Workers static assets, build and use the included `wrangler.jsonc` with Wrangler. This is a frontend-only site; no Worker code or secrets are needed. Nothing has been deployed by this implementation.

Configure the production hostname `invitations.online` in your Cloudflare account. The landing page uses this spelling for metadata and example subdomains. Subdomain examples are illustrations: this frontend does not provision domains or check availability. Customer subdomains must be configured separately when their invitations are deployed.

## Content and interactions

The LKR 10,000 package and WhatsApp number `94766641296` are in `index.html`; the default WhatsApp message is in `app.js`. All contact links open WhatsApp with an editable draft. Nothing is sent automatically. The live guest-name example demonstrates personalised links without navigating or storing any personal data. The sample invitation opens in a keyboard-accessible native dialog and is clearly labelled as an illustrative design preview. FAQs use native disclosure controls. Scroll reveals are progressive enhancement, with no animation libraries and reduced-motion support.

Fonts are self-hosted Latin subsets of Cormorant Garamond and Manrope, obtained from Google Fonts. Licenses are included in `fonts/`. No external scripts, trackers, or image services are used.
