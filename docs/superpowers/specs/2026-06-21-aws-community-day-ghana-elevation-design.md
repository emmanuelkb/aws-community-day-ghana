# AWS Community Day Ghana 2026 — Site Elevation & Multi-Page Build

**Date:** 2026-06-21
**Status:** Approved direction, pending spec review
**Source of truth for content:** `uploads/aws_community_day_ghana_2026_action_doc.docx.pdf` (18-page action document)

## 1. Goal

Elevate the existing single-page AWS Community Day Ghana site into a distinctive, multi-page
site that is **unmistakably Ghana's** — not a clone of the other AWS Community Day sites it was
modeled on — while preserving the strong foundation already built (token system, kente accents,
AWS wordmark, accurate agenda).

Four uniqueness dimensions, all in scope:
1. **Ghanaian identity** — kente, Adinkra symbols with meaning, Ga/Twi microcopy, Accra, Black Star, local food.
2. **Bold visual & motion** — distinctive headline type, animated weave, scroll-reveal, micro-interactions.
3. **Content depth** — pull the real detail from the action doc (full agenda, tracks, speaker roles, sponsor benefits, volunteer plan).
4. **Community warmth** — by-the-community tone, crew, first-edition energy, Akwaaba hospitality.

**Guiding rule (from the user):** when a content or design decision is genuinely unclear, ask
before adding or changing — do not invent facts not supported by the action doc.

## 2. Decisions (locked)

- **Approach:** elevate the existing site; do not rebuild from scratch.
- **Stack:** keep the zero-build approach — CDN React 18 + Babel standalone, shared components
  attached to `window`, served as static files. No bundler, no npm.
- **Scope:** full multi-page site (real pages, not just anchors).
- **Typography:** headlines + wordmark in **Bricolage Grotesque** (Google Fonts); body stays **Inter**.
- **Forms:** styled on-site pages whose primary actions **link out** — Luma for ticket registration,
  Google Forms for CFP and volunteer sign-up (matches the action doc). No backend.
- **Copy:** enrich from the doc, then run `/humanizer` over prose blocks.

## 3. Page architecture

All pages share `site-core.jsx` (tokens, wordmark, nav, footer, kente/Adinkra primitives) and a new
shared `site-nav.jsx`/`site-footer.jsx` if it helps keep cross-page nav consistent. Each page is its
own `.html` entry loading the shared cores plus page-specific `.jsx`.

| Page | File | Content pulled from doc |
|---|---|---|
| Landing (elevated) | `index.html` | Hero, About (§1), What to Expect, Tracks (§6), Why Attend, Agenda preview (§6.1), Speakers teaser (§6.2), Sponsors teaser (§5), Venue teaser (§3), Community/Crew, FAQ, Newsletter |
| Full agenda | `agenda.html` | §6.1 run-of-show + keynote titles, panel composition, three breakout tracks (FinTech/EdTech/AgriTech) incl. "Cloud Horror Stories" |
| Speakers & roles | `speakers.html` | §6.2 keynote roles, panel makeup, confirmed (David Quarguine, Ebow Anamuah) + TBA slots, link to CFP |
| Call for speakers | `cfp.html` | §6 formats, what we want, speaker outreach framing; submit → Google Form |
| Sponsorship prospectus | `sponsors.html` | §5 all five tiers **with full benefits & target sponsors**, in-kind options (§5.2), why sponsor (audience = 300 builders); contact email |
| Volunteer | `volunteer.html` | §7 eight teams + counts + responsibilities, perks, timeline; §12 the 20-question form (styled, links to Google Form) |
| Venue & travel | `venue.html` | §3 Main Auditorium (300 seats, AC, LED screen, PA, generator), §8 food plan, getting there |
| Code of conduct | `code-of-conduct.html` | expanded from current footer stub; harassment-free, inclusive |

Filenames use lowercase, no spaces (current `AWS Community Day Ghana.html` is renamed to `index.html`;
old exploratory files — `Hero Options.html`, `Logo Options.html`, `Directions.html`, and their `.jsx` —
are left in place, not linked).

## 4. Uniqueness signature (the differentiators)

These are what separate this from the template it came from:

- **Adinkra glyph system** — a small set of authentic Adinkra symbols used as *meaningful* section
  motifs, each with its real meaning surfaced on hover/caption:
  - *Sankofa* (return and fetch it — learn from the past) → "Cloud Horror Stories" / lessons sessions
  - *Gye Nyame* (omnipotence) → keynote / state-of-cloud
  - *Dwennimmen* (strength + humility) → tracks
  - *Nkyinkyim* (adaptability) → agenda / the journey of the day
  Rendered as inline SVG primitives in `site-core.jsx`. Used sparingly, never as wallpaper.
- **"Akwaaba weave"** — a generative kente-weave motif as the hero backdrop and section dividers,
  subtly animated (slow drift), replacing the generic dotted grid. Built as a reusable component.
- **Local texture** — Ga/Twi eyebrows (Akwaaba, Medaase, Yɛn ara asaase ni), Black Star, real Accra
  map with landmarks on the venue page, jollof/waakye/fried-yam carried through food touchpoints.
- **Motion** — IntersectionObserver scroll-reveal on sections, existing marquee retained, animated
  countdown, weave drift, considered hover/focus states. Respect `prefers-reduced-motion`.

## 5. Typography

- Add Bricolage Grotesque via the existing Google Fonts `<link>` mechanism on every page.
- Introduce `TOKENS.fontDisplay = "'Bricolage Grotesque', 'Inter', sans-serif"`.
- `SectionHeadline`, the hero lockup wordmark text, and page titles switch to the display face.
- Body, eyebrows, chips, agenda rows, captions stay Inter.

## 6. Content & copy plan

1. Expand data structures from the doc: full agenda detail, sponsor tiers with benefits, volunteer
   teams with counts/responsibilities, speaker roles.
2. Keep all facts traceable to the doc; mark anything not in the doc as TBA rather than inventing.
3. Run `/humanizer` over prose blocks: About, Why Attend, FAQ answers, CFP intro, Sponsor intro,
   Community, Crew, Venue. Apply the edits back into the components.

## 7. Non-goals (YAGNI)

- No build tooling / npm / bundler.
- No real backend, auth, or form submission storage.
- No CMS — content lives in the `.jsx` data structures.
- No per-speaker detail pages until real speakers are confirmed (speakers page lists roles + TBA).
- Exploratory files (hero-options, logo-options, design-canvas, tweaks-panel) are not touched.

## 8. Verification

- Serve the directory (`python3 -m http.server`) and drive each page in a real browser (Playwright).
- Each page must render with no console errors (favicon 404 excepted), nav links resolve across pages,
  and layouts hold at desktop + mobile widths.
- Screenshot each page and visually confirm the weave, Adinkra glyphs, display type, and motion.

## 9. Open questions

None blocking. Real Luma URL and Google Form URLs are placeholders (`#`) until provided; clearly
marked with `TODO` in code.
