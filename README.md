# AmLion Group website (Next.js)

Next.js 16 (App Router) + React 19 + TypeScript. Converted from the single-file design prototype `../amlion-landing.html`.

```bash
npm install
npm run dev      # http://localhost:3000 (use -- -p 3100 to pick a port)
npm run build && npm start
```

## Structure

```
src/
  app/
    layout.tsx        fonts (Plus Jakarta Sans, DM Mono via next/font), metadata, viewport
    page.tsx          page order: Hero, About, Accreditations, Plant, Export, News, Contact, Footer
    globals.css       design tokens (:root) and all section styles
  components/
    Hero.tsx          hero copy and CTAs (server)
    Ring.tsx          3D card ring: auto-rotate, hover pause, drag (client)
    Nav.tsx           hero nav, mobile menu, floating nav, WhatsApp button (client)
    About.tsx         about bento + product range cards
    Accreditations.tsx  certification seals + production-line banner
    Export.tsx        dotted world map, hover tooltips, country chips (client)
    News.tsx          news and events cards
    Contact.tsx       quote form (client) + CTA section
    Footer.tsx
    Effects.tsx       ScrollReveal, CountUp (client)
    ui.tsx            Sprite, Sym, Icon, Roll, Logo, Seal, CloudLayer
  data/
    content.ts        nav links, certifications, countries, map land data, contact details
    sprite.ts         shared SVG symbol library (tubes, bottles, pumps, jars)
  lib/sv.ts           inline CSS string to React style object
```

All copy and facts live in `src/components/*` and `src/data/content.ts`. The quote form does not send anything yet.
