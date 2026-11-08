# ivyandgray.ca

The Ivy and Gray website: Home, Services, Portfolio, About, FAQ and Contact, with the HoneyBook consultation form on the Contact page.

It's a static site built with [Astro](https://astro.build). Photos are resized and converted to modern formats automatically when the site builds, so you can add full-size photos straight from the camera or phone.

## Before launch: fill these in

| What | Where |
|---|---|
| Service area, public email, phone, Instagram handle | [src/site.config.ts](src/site.config.ts) |
| Starting prices (optional; leave them out and no price is shown) | `startingPrice:` in each file in [src/content/packages/](src/content/packages/) |
| The consultation-only HoneyBook form | Paste its embed code over [src/embeds/honeybook.html](src/embeds/honeybook.html) |
| Photos | See below |
| Read every page's wording and change anything that isn't quite right | [src/pages/](src/pages/) and [src/content/](src/content/) |
| Testimonials | [src/content/testimonials/](src/content/testimonials/) |

## Adding photos

Drop image files (JPG, PNG or WEBP) into these folders. Nothing else needs changing.

| Folder | Shows up |
|---|---|
| `src/assets/hero/` | Full-screen photo behind the logo on the home page (the first file alphabetically) |
| `src/assets/portfolio/reception/` (and `wedding-morning`, `maiyan-mehndi`, `jaggo`, `gurdwara`, `celebrations`) | That gallery on the Portfolio page. The home page shows the first 6 photos, starting with receptions. |
| `src/assets/packages/` | One photo per package, shown on the Services page and its home page tile: `weddings.jpg`, `receptions.jpg`, `engagements.jpg`, `milestones.jpg`, `outdoor-shoots.jpg`, `corporate-seasonal.jpg` |
| `src/assets/about/` | First photo: the two of you. Second: the warehouse or crew at work. |

**Name files by what's in them**, e.g. `gold-reception-stage-with-florals.jpg`. The file name becomes the photo's description for Google and screen readers. Photos show in file name order, so prefix numbers to control it: `01-...`, `02-...` (the number is left out of the description).

Until a folder has photos, the site shows a sage placeholder in its place.

## Editing text, packages and FAQs

- **Packages:** one file each in `src/content/packages/`. The top section sets the title, order, summary (the text on its home page tile), starting price, "Includes" list and, for Weddings, the function-by-function list; the paragraph below it is the description.
- **FAQs:** one file each in `src/content/faq/`. They show on the FAQ page, in the order set by `order:`.
- **Galleries:** titles and descriptions are in `src/content/portfolio/`. To add a gallery, add a file there and a matching folder in `src/assets/portfolio/`.
- **Testimonials:** copy `example.md`, write the real quote, and set `draft: false`. The section appears on the home page once one is published.
- **Page wording:** in `src/pages/*.astro`. It's HTML-like, and the text between the tags is safe to edit.

Once the site is on GitHub and connected to a host (below), you can make all of these edits on github.com: open the file, click the pencil, and commit. The site rebuilds and goes live in about a minute. Photos upload the same way: open the folder, then **Add file → Upload files**.

## Running it on your computer

```powershell
npm install
npm run dev        # http://localhost:4321, updates as you edit
npm run build      # builds the finished site into dist/
npm run preview    # serves dist/ to check the finished build
```

`npm run og` regenerates `public/og-image.png`, the preview image shown when the site is shared in messages or social media. Run it if the logo changes.

## Hosting

Any static host works. Push this folder to a GitHub repo, then connect the repo to one of these. Each builds the site on every commit (build command `npm run build`, output folder `dist`):

- **Cloudflare Pages** or **Netlify:** free plans allow business use.
- **Vercel:** its free Hobby plan is for non-commercial use only, so a business site needs Pro (US$20/month).

Then point `ivyandgray.ca` at the host by adding the DNS records it gives you, at your domain registrar. **Leave the existing MX, SPF, DKIM and DMARC records alone** so Google Workspace email keeps working.

After launch:

1. Add the site to [Google Search Console](https://search.google.com/search-console), put its verification code in `googleSiteVerification` in `site.config.ts`, and submit `https://ivyandgray.ca/sitemap-index.xml`.
2. Create a Google Analytics 4 property and put its ID in `googleAnalyticsId`.
3. For an Instagram feed, connect your account at [behold.so](https://behold.so) (it needs an Instagram Business or Creator account) and put the feed ID in `beholdFeedId`.

## What's built in

- Works on phones, with a full-screen opening section and a gentle fade-in on scroll (turned off for visitors who prefer reduced motion)
- Photo galleries with a full-screen viewer (previous/next buttons or arrow keys, Esc to close)
- Page titles, descriptions, social share previews, LocalBusiness structured data for Google, a sitemap and robots.txt
- Optional Google Analytics, Search Console verification and Instagram feed, each switched on by filling in `site.config.ts`
- Brand palette from the Canva brand kit, defined once at the top of [src/styles/global.css](src/styles/global.css)
