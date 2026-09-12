# Casual Look Portfolio (Vite + React)

Jonathan Malicay's portfolio site, restructured from a single-file HTML/Babel
page into a proper Vite + React project.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  main.jsx              entry point
  App.jsx                assembles the page sections
  index.css               global styles (ported from the original <style> block)
  components/
    Nav.jsx, Hero.jsx, About.jsx, Cards.jsx, Gallery.jsx, Footer.jsx
    icons/                small inline SVG icon components
    modals/                Reel, CV, Terms, Privacy, Careers, Hire Me
                            (all lazy-loaded — their code and media only
                            download once a visitor opens them)
  hooks/
    useLockBodyScroll.js   shared "lock page scroll while a modal is open" hook
  config/
    nav.js                 nav link data
    email.js               contact-form recipient (see note below)
  assets/
    images/                 PNG images
    videos/                 background + reel videos
    documents/              downloadable CV PDF
```

## Contact form recipient

The "Hire Me" form posts to FormSubmit using an address read from the
`VITE_RECIPIENT_EMAIL` environment variable (`src/config/email.js`), falling
back to the original address if unset. Copy `.env.example` to `.env` to
override it locally. Note this is **not** a real secret — any value bundled
into client-side JavaScript can be read by inspecting the built files or the
network request the form makes.

## Media notes (loading-speed optimizations)

- The three JPEG photos were converted to PNG (as requested) using palette
  quantization rather than a naive lossless conversion, keeping file sizes
  close to the original JPEGs instead of 2-3x larger.
- Both videos were re-encoded to H.264 (Main profile, yuv420p, `faststart`)
  for broad device/browser compatibility. The muted, autoplaying hero
  background video also had its audio track stripped entirely, cutting its
  size by roughly 70%.
- A generated poster frame shows instantly while the hero video loads.
- All modal components are lazy-loaded, so their code and any large media
  (the reel video, the CV PDF) aren't fetched until a visitor opens them.
- Gallery images ship with explicit width/height to avoid layout shift and
  use `loading="lazy"`.
