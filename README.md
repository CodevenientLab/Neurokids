# Genesis NeuroKids Centre

Codevenient Consulting’s review concept for a developmental paediatrics practice.

## Run locally

```sh
npm ci
npm run dev
```

`npm run build` creates a relative-path static build in `dist/`, suitable for deployment under a repository subpath. Run `SINGLE=1 npm run build` to produce one review HTML file that opens directly in a browser.

## Before public launch

Confirm the practice’s phone and WhatsApp numbers, email address, room details, clinician title, qualifications, practice number, service wording and first-visit guide with the practice. Ask the practice to review the website privacy notice against how it actually handles enquiries. The review build includes a `noindex, nofollow` directive. Remove it after public launch is approved and the site is ready to be indexed.

WhatsApp links open a draft with the selected hospital when one is chosen. The site has no server-side enquiry form, tracking scripts or analytics.

## GitHub Pages

Run `npm run build:pages` and commit the updated `docs/` folder alongside the source. GitHub Pages publishes from `main`, using `/docs` as its source.
