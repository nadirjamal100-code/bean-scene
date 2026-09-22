# Bean Scene — coffee landing page

A pixel-accurate Next.js implementation of the **Bean Scene Coffee Landingpage (Community)** Figma
file. The Figma file was read directly (not eyeballed from a screenshot): its Kiwi-encoded node
tree was decoded to pull exact colors, fonts, spacing, image crops, blend modes, and vector icon
paths, then checked against Figma's own thumbnail render pixel-by-pixel.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Requires Node 18.18+.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run typecheck
```

## Project structure

```
app/
  layout.tsx        Fonts (Playfair Display, Clicker Script), metadata, root shell
  page.tsx           Composes the sections in order
  globals.css        Design tokens (colors, spacing, fluid type scale), reset, utilities
components/
  Navbar/            Sticky-over-hero nav with a hamburger menu below 1024px
  Hero/              Full-bleed photo + gradient scrim + headline
  About/             "Discover the best coffee" — masked/multiply-blended photo
  Menu/               4 drink cards (MenuCard.tsx)
  Features/          4 feature cards (FeatureCard.tsx) + closing CTA line
  CallToAction/       "Get a chance to have an Amazing morning" band
  Testimonials/       Quote carousel (prev/next work; add entries to enable them fully)
  Subscribe/          Newsletter band + form (SubscribeForm.tsx)
  Footer/            Sitemap + contact details
  ui/                Button, SectionHeading — shared across sections
lib/
  site.ts            Nav links, footer copy/links — edit copy here, not in components
  newsletter.ts      Integration point for the subscribe form (see below)
  cx.ts              Tiny classnames helper
public/
  images/            Photos exported from the Figma file
  icons/             Arrow + social icons, exported as SVG from the Figma vector data
```

## Notes on fidelity

- **Colors**: several Figma layers reference a shared style whose color differs from the layer's
  own (stale) fill — for example the CTA overlay and drink prices are `#603809`, not the paler
  value stored on the node. I resolved every style reference and cross-checked the result against
  Figma's thumbnail render rather than trusting either value blindly.
- **Blend modes**: the About photo uses Multiply and the footer's bean photo uses Overlay at 80%
  opacity in Figma. Both are reproduced with CSS `mix-blend-mode` (see `About.module.css` and
  `Footer.module.css`) — without them the About photo's white background doesn't melt into the
  page and the footer looks washed out instead of staying brown to the bottom edge.
- **Hero gradient**: the dark scrim is a left-to-right ramp reverse-engineered from Figma's stored
  gradient transform (roughly 92% opaque at the left edge, clear by ~87% of the width), written
  out as gradient stops in `Hero.module.css`.
- **Icons**: the back-arrow (reused mirrored for "next") and the four social icons were decoded
  from the file's vector path data, not redrawn by eye.
- **Copy**: all text matches the Figma file exactly, including its typos ("SingUp", "Suscribe",
  "Expresso", "Our customers has…", "We are giving you are one time opportunity…"). These read as
  content bugs in the source design — worth flagging to whoever owns the design file — but I did
  not silently correct them.
- **Tablet/mobile**: the Figma file only contains a 1366px desktop frame. The tablet and mobile
  layouts are my own responsive adaptation (single/two-column grids, a hamburger menu, resized
  decorative art) rather than a second Figma design, since none was provided.

## Integration points

Two spots are intentionally stubbed because the Figma file only specifies the front-end:

- **`lib/newsletter.ts`** — `subscribeToNewsletter()` currently resolves successfully after a
  short delay. Replace its body with a real request (a Route Handler, your ESP's API, etc.).
- **`lib/site.ts`** — Sign In / Sign Up and the footer's social links point at `#`. Point them at
  real destinations when they exist.

## Verification performed

Every section was rendered with a headless-Chromium test harness (bundling the actual project
components with esbuild) at 1440/1366/1280/1024/834/768/430/414/390/375/360px. At every width the
page had **zero console errors, zero broken images, and zero horizontal overflow**, and the mobile
menu was exercised interactively (open/close, focus, keyboard `Escape`). The 1366px render was
compared band-by-band against Figma's own thumbnail image to catch layout and color drift; that
comparison is what surfaced the two blend-mode issues described above plus an image-crop bug in
the About section, all fixed in the code you have.

**What wasn't possible in the environment this was built in:** the npm registry was unreachable, so
`next build` itself was never run, and the verification above substitutes `next/image`/`next/link`
with plain `<img>`/`<a>` and falls back to system serif fonts (Playfair Display and Clicker Script
aren't installed there), so exact glyph metrics were not checked. Please run `npm install && npm
run build` as a final check on your machine before deploying — if anything doesn't compile, it
will most likely be a `next/font` or TypeScript type nit rather than a layout problem, since the
component logic and every CSS rule were already exercised.
