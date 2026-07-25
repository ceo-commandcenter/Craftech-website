# Craftech Impex — Website Project

## What's inside
- `index.html` — all page content and structure
- `styles.css` — all design/styling (colors, fonts, layout, animations)
- `script.js` — loading screen, product gallery, lightbox, nav, form logic
- `images/logo/logo.jpg` — your logo (used in header, footer & loading screen)
- `images/products/` — all product photos, shown in the "Explore Our Craftsmanship" section
- `robots.txt`, `sitemap.xml` — SEO files
- `favicon.ico` — browser tab icon (generated from your logo)

## Replacing your logo
Replace `images/logo/logo.jpg` with your own file, keeping the same file name
(or update the `src="images/logo/logo.jpg"` references in `index.html` if you
rename it). For best results use a square image at least 300x300px.

## Adding / removing / editing products
Open `script.js` and find the `PRODUCTS` array near the top. Each product is
one line:

```js
{ img: "images/products/your-file.jpg", name: "Product Name", tag: "Category" },
```

- **To add a product:** put the image in `images/products/` and add a new line.
- **To remove a product:** delete its line (and the image file, if you like).
- **To rename or add a price:** just edit the `name` field, e.g.
  `name: "Hammered Copper Bottle — $18"`.

The gallery grid and the full-screen lightbox both rebuild automatically —
no HTML editing required.

## Contact form
The form currently shows an on-page confirmation message only. To receive
real enquiries by email, connect it to a service such as Formspree, EmailJS,
or your own backend endpoint — the spot to edit is clearly marked with a
`TODO` comment inside `initContactForm()` in `script.js`.

## Google Map
The contact section embeds a Google Map centered on Moradabad. To use your
exact pinned location, replace the `src` of the `<iframe>` inside the
`.contact-map` block in `index.html` with your own Google Maps embed link.

## Deploying to GoDaddy hosting
1. Log in to your GoDaddy hosting file manager (or connect via FTP).
2. Upload the **entire contents** of this folder (not the folder itself) to
   your site's root directory (usually `public_html`).
3. Make sure `index.html` ends up directly inside `public_html`.
4. Visit your domain — the site should load immediately.

## Before going live
- Update the canonical/OG URLs in `index.html` if your final domain differs
  from `https://www.craftechimpex.com/`.
- Update `sitemap.xml` and `robots.txt` the same way.
- Swap in your real product names/prices in `script.js`.
