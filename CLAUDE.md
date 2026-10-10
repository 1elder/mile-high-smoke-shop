# Mile High Smoke Shop — client site

Orlando smoke shop on **Orange Blossom Trail**. E-commerce plus local delivery. Built by Story Digital.

Prototype is built and verified. Serve it with the `milehigh` launch config (port 4162) rather than starting a server
by hand.

## What's here

`index.html`, `app.js`, `products.js`, `i18n.js`, `icons.js`, `assets/`, `preview.html`, `robots.txt`.
Inventory lives in **`products.js`** — that is the file to swap when the owner's real stock arrives.

## Status

**Real inventory is loaded** (as of Oct 2026): real products with photos and prices across glass, vapes, hookah,
rolling, and cigars. The old generic placeholders were removed; empty categories auto-hide (see `activeCategories()`
in app.js). The owner keeps sending stock in batches over several days; a few items sit at "ask in store" until she
provides a price.

Never invent products, brands, prices or stock. New inventory arrives as photos from the owner.

Build notes: optimize images into `assets/products/`, insert entries before the `];` that closes `const PRODUCTS`,
re-run the product-schema generator, and bump the `?v=N` cache-buster in index.html after any products.js change.
Use `/usr/bin/python3` (it has Pillow).

Operational details (owner contact, the WhatsApp retrieval pipeline, GBP checklist, launch/payment roadmap) live in
the private memory note, not here — this file is in a public repo.

## Rules

- **Orville's personal cell (352-430-9399) never appears on this site.** The client's own number does.
- Age-restricted products. Keep the age gate and any compliance copy intact; if a change would weaken it, say so before
  making it.
- Bilingual: `i18n.js` carries English and Spanish, and the Spanish should read naturally rather than as a translation.
- Mobile-first. Delivery customers are on phones.
- No AI writing tells in customer-facing copy.
- Verify changes in the browser preview with a screenshot before telling the client something is done.

## Related

Quick Phone Fix (`/Users/k/quick-phone-fix`) is a separate Story Digital client that also sells smoke-shop products in
Metrowest. Keep the two sites' inventory, branding and copy completely separate.
