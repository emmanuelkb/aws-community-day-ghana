# AWS Community Day Ghana 2026 — Elevation & Multi-Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. This is a frontend visual build — use the **frontend-design** skill for aesthetic decisions and **/humanizer** for prose.

**Goal:** Elevate the existing single-page AWS Community Day Ghana site into a distinctive, multi-page static site that is unmistakably Ghana's — adding a shared design kit (display type, Adinkra glyphs, animated kente weave, scroll-reveal) and seven new content pages sourced from the action document.

**Architecture:** Zero-build static site. CDN React 18 + Babel-standalone compile `.jsx` in the browser. A single shared kit (`site-core.jsx`) attaches all reusable pieces to `window`; each page is an `.html` entry that loads the kit + its own page `.jsx`. No bundler, no npm, no backend.

**Tech Stack:** React 18 (UMD, CDN), Babel standalone (CDN), Google Fonts (Inter + Bricolage Grotesque), inline-style design tokens, Python `http.server` for local serving, Playwright (MCP) for browser verification.

## Global Constraints

- No build tooling, npm, bundler, or backend. Components attach to `window` and are consumed via `const { X } = window;`.
- Every fact must trace to `uploads/aws_community_day_ghana_2026_action_doc.docx.pdf`. Anything not in the doc is marked TBA — never invent speakers, sponsors, prices, or addresses.
- Event facts (verbatim): Event = "AWS Community Day Ghana 2026"; Date = Saturday 29 August 2026, 08:00–17:00; Location = Accra, Ghana, Main Auditorium (300 seats); Organiser = AWS User Group Accra; Contact = `awsaccrausergroup@gmail.com`; Target = 300 attendees, 12+ sessions, 3 tracks (FinTech / EdTech / AgriTech) + workshop.
- Headlines & wordmark: Bricolage Grotesque. Body, eyebrows, chips, captions: Inter.
- External actions link out: registration → Luma (`LUMA_URL`), CFP & volunteer → Google Forms (`CFP_URL`, `VOLUNTEER_URL`). All three are `"#"` placeholders with a `TODO` comment until real URLs are provided.
- Respect `prefers-reduced-motion`: all animation must no-op when it's set.
- Filenames: lowercase, hyphenated, no spaces.
- Test cycle (no unit runner): serve the dir, load the page in Playwright, confirm **zero console errors** (favicon 404 excepted), screenshot, and visually verify. Commit after each task.

---

## File Structure

**Shared kit (modified):**
- `site-core.jsx` — tokens (+`fontDisplay`), `Wordmark`, kente primitives, **new:** `Adinkra` glyph set, `AkwaabaWeave`, `Reveal` (scroll-reveal), button factories (moved in), `Footer` (moved in), `CONTACT`/`LUMA_URL`/`CFP_URL`/`VOLUNTEER_URL` constants. `SectionHeadline` + wordmark text switch to display font. `Nav`/`MobileMenu` take cross-page links.

**Landing (modified):**
- `index.html` — renamed from `AWS Community Day Ghana.html`; adds font link; loads kit + landing section files.
- `site-hero.jsx`, `site-program.jsx`, `site-rest.jsx` — integrate weave/Adinkra/Reveal/display font; drop now-shared button/Footer defs; prose humanized.

**New pages (each = `.html` + `page-*.jsx`):**
- `agenda.html` + `page-agenda.jsx`
- `speakers.html` + `page-speakers.jsx`
- `cfp.html` + `page-cfp.jsx`
- `sponsors.html` + `page-sponsors.jsx`
- `volunteer.html` + `page-volunteer.jsx`
- `venue.html` + `page-venue.jsx`
- `code-of-conduct.html` + `page-coc.jsx`

**Untouched:** `Hero Options.html`, `Logo Options.html`, `Directions.html`, `hero-options.jsx`, `logo-options.jsx`, `design-canvas.jsx`, `directions.jsx`, `tweaks-panel.jsx`, `color-schemes.js`.

---

## Task 0: Setup — git, serving, shared HTML head

**Files:**
- Create: `.gitignore`
- Create: `partials/head.html` (reference snippet, not loaded at runtime — documents the shared `<head>`)

- [ ] **Step 1: Init git so commits work**

```bash
cd "/Users/eowusu/Downloads/aws community day"
git init
printf '.DS_Store\n.playwright-mcp/\nsite.png\nviewport.png\n*.png.tmp\n' > .gitignore
git add -A && git commit -m "chore: initial commit of existing site"
```

- [ ] **Step 2: Record the canonical shared `<head>`**

Create `partials/head.html` with the exact head every page must use (copy into each `.html`). Note the added Bricolage Grotesque family on the existing Google Fonts link:

```html
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Bricolage+Grotesque:opsz,wght@12..96,400..800&display=swap" rel="stylesheet" />
```

- [ ] **Step 3: Start a local server for the whole build**

```bash
python3 -m http.server 8753
```
Expected: serves the directory; `curl -s -o /dev/null -w "%{http_code}" http://localhost:8753/index.html` returns `200` after Task 2.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "chore: add gitignore and shared head partial"
```

---

## Task 1: Shared kit — display font, Adinkra, weave, scroll-reveal

Enhance `site-core.jsx`. This is the foundation every page depends on; build and verify it before pages.

**Files:**
- Modify: `site-core.jsx`
- Verify via: a throwaway `_kit-test.html` (deleted at end of task)

**Interfaces — Produces (consumed by all later tasks):**
- `TOKENS.fontDisplay` = `"'Bricolage Grotesque', 'Inter', sans-serif"`
- `Adinkra({ name, size=28, color, title })` → inline SVG; `name` ∈ `"sankofa" | "gyenyame" | "dwennimmen" | "nkyinkyim"`; renders `<title>` from `title` or the symbol's default meaning.
- `ADINKRA_MEANING` = map of name → `{ label, meaning }`.
- `AkwaabaWeave({ opacity=0.08, drift=true, tone="light" })` → absolutely-positioned full-bleed animated kente-weave background layer (`position:absolute; inset:0; pointerEvents:none`).
- `Reveal({ children, delay=0, as="div" })` → wraps children; fades/translates in on scroll via IntersectionObserver; no-ops under `prefers-reduced-motion`.
- `CONTACT`, `LUMA_URL`, `CFP_URL`, `VOLUNTEER_URL` constants.
- Button factories `btnPrimary`, `btnGhost`, `btnPrimaryNavy`, `btnGhostNavy` (moved here from `site-hero.jsx`).

- [ ] **Step 1: Add the display-font token**

In `TOKENS` (top of `site-core.jsx`), add:
```js
fontDisplay: "'Bricolage Grotesque', 'Inter', sans-serif",
```

- [ ] **Step 2: Switch headline + wordmark to display font**

In `SectionHeadline`, change `fontFamily: "'Inter', sans-serif"` → `fontFamily: TOKENS.fontDisplay`. In `Wordmark`'s text block and `HeroLockup` headline (the latter lives in `site-hero.jsx`, handled in Task 3), use `TOKENS.fontDisplay`.

- [ ] **Step 3: Add the constants and move button factories into the kit**

Add near the top of `site-core.jsx`:
```js
const CONTACT = "awsaccrausergroup@gmail.com";
const LUMA_URL = "#";       /* TODO: real Luma event URL */
const CFP_URL = "#";        /* TODO: real CFP Google Form URL */
const VOLUNTEER_URL = "#";  /* TODO: real Volunteer Google Form URL */

const btnPrimary = () => ({ background: TOKENS.terracotta, color: "#fff", border: 0, padding: "17px 34px", borderRadius: 4, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", textDecoration: "none", display: "inline-block", letterSpacing: "0.08em", textTransform: "uppercase" });
const btnGhost = () => ({ background: "transparent", color: TOKENS.ink, border: `1px solid ${TOKENS.ink}`, padding: "17px 34px", borderRadius: 4, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", textDecoration: "none", display: "inline-block", letterSpacing: "0.08em", textTransform: "uppercase" });
const btnPrimaryNavy = () => ({ background: TOKENS.awsOrange, color: TOKENS.navy, border: 0, padding: "17px 34px", borderRadius: 4, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", textDecoration: "none", display: "inline-block", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap" });
const btnGhostNavy = () => ({ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.5)", padding: "17px 34px", borderRadius: 4, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", textDecoration: "none", display: "inline-block", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap" });
```
(They will be removed from `site-hero.jsx` in Task 3. `site-core.jsx` loads first, so order is safe.)

- [ ] **Step 4: Add the Adinkra glyph set**

Authentic, simplified single-path/stroke SVGs. Each carries its meaning in a `<title>` for accessibility + hover tooltip.
```js
const ADINKRA_MEANING = {
  sankofa:    { label: "Sankofa",    meaning: "Return and fetch it — learn from the past" },
  gyenyame:   { label: "Gye Nyame",  meaning: "Except for God — the omnipotence of the divine" },
  dwennimmen: { label: "Dwennimmen", meaning: "Ram's horns — strength with humility" },
  nkyinkyim:  { label: "Nkyinkyim",  meaning: "Twisting — adaptability and resolve on the journey" },
};

const Adinkra = ({ name = "gyenyame", size = 28, color = "currentColor", title }) => {
  const m = ADINKRA_MEANING[name] || ADINKRA_MEANING.gyenyame;
  const paths = {
    // Geometric, recognizable interpretations rendered on a 100x100 grid.
    sankofa:    "M50 12c-20 0-32 14-32 31 0 16 12 27 26 27 9 0 16-5 16-13 0-6-4-10-10-10-4 0-7 2-7 6h8c0 1-1 2-1 2-3 0-5-2-5-5 0-4 4-7 9-7 7 0 12 6 12 14 0 11-10 19-23 19v8l-18-14 18-14v8c8 0 13-5 13-12 0-12-9-21-21-21-15 0-26 11-26 25h-8c0-21 16-36 39-36 1 0 2 0 3 .1V12z",
    gyenyame:   "M50 8c-6 0-11 5-11 11 0 4 2 8 6 10-14 3-24 14-24 28 0 16 13 25 29 25s29-9 29-25c0-14-10-25-24-28 4-2 6-6 6-10 0-6-5-11-11-11zm0 30c10 0 19 7 19 19 0 11-9 17-19 17s-19-6-19-17c0-12 9-19 19-19z",
    dwennimmen: "M30 30c-11 0-19 9-19 20s8 20 19 20c8 0 15-5 18-13 3 8 10 13 18 13 11 0 19-9 19-20s-8-20-19-20c-6 0-11 3-14 8v-14h-8v14c-3-5-8-8-14-8zm0 10c6 0 10 5 10 10s-4 10-10 10-10-5-10-10 4-10 10-10zm40 0c6 0 10 5 10 10s-4 10-10 10-10-5-10-10 4-10 10-10z",
    nkyinkyim:  "M20 80c0-14 12-18 12-30S20 34 20 22h10c0 9 12 13 12 28S30 66 30 80zM58 80c0-14 12-18 12-30S58 34 58 22h10c0 9 12 13 12 28S68 66 68 80z",
  };
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label={`${m.label} — ${m.meaning}`} style={{ display: "block" }}>
      <title>{title || `${m.label} — ${m.meaning}`}</title>
      <path d={paths[name] || paths.gyenyame} fill={color} />
    </svg>
  );
};
```
NOTE for implementer: render all four at large size in the throwaway test page (Step 8) and eyeball them. If any path reads as an unrecognizable blob, simplify it to a clean geometric mark in the same spirit rather than shipping something misleading — accuracy of *feel* matters more than literal detail, but it must not look broken.

- [ ] **Step 5: Add the AkwaabaWeave background**

Generative kente weave with a slow drift. Uses layered repeating linear-gradients.
```js
const AkwaabaWeave = ({ opacity = 0.08, drift = true, tone = "light" }) => {
  const warp = tone === "light"
    ? "repeating-linear-gradient(90deg, #C44536 0 14px, transparent 14px 28px), repeating-linear-gradient(90deg, transparent 0 28px, #E8B23A 28px 34px), repeating-linear-gradient(0deg, #1B3A6B 0 10px, transparent 10px 30px)"
    : "repeating-linear-gradient(90deg, rgba(255,200,87,0.5) 0 14px, transparent 14px 28px), repeating-linear-gradient(0deg, rgba(196,69,54,0.5) 0 10px, transparent 10px 30px)";
  return (
    <div aria-hidden style={{
      position: "absolute", inset: 0, opacity, pointerEvents: "none", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: "-20%", backgroundImage: warp, backgroundSize: "48px 48px",
        animation: drift ? "weave-drift 60s linear infinite" : "none",
      }} />
    </div>
  );
};
```
Add the keyframes + reduced-motion guard to the page `<head>` `<style>` (documented here, applied per-page in Tasks 2 & 4):
```css
@keyframes weave-drift { from { transform: translate(0,0); } to { transform: translate(48px,48px); } }
@keyframes reveal-in { from { opacity:0; transform: translateY(18px); } to { opacity:1; transform:none; } }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
  .reveal { opacity: 1 !important; transform: none !important; }
}
```

- [ ] **Step 6: Add the Reveal scroll component**

```js
const Reveal = ({ children, delay = 0, as = "div", style = {} }) => {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") { setShown(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } });
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} className="reveal" style={{
      ...style,
      opacity: shown ? 1 : 0,
      transform: shown ? "none" : "translateY(18px)",
      transition: `opacity .6s ease ${delay}ms, transform .6s ease ${delay}ms`,
    }}>{children}</Tag>
  );
};
```

- [ ] **Step 7: Export everything**

Extend the `Object.assign(window, {...})` at the bottom of `site-core.jsx` to include: `Adinkra, ADINKRA_MEANING, AkwaabaWeave, Reveal, CONTACT, LUMA_URL, CFP_URL, VOLUNTEER_URL, btnPrimary, btnGhost, btnPrimaryNavy, btnGhostNavy`.

- [ ] **Step 8: Verify in browser**

Create `_kit-test.html` that loads React/Babel + `site-core.jsx` and renders all four Adinkra at `size={120}`, an `AkwaabaWeave` over a navy box, and three `Reveal` blocks. Serve and load `http://localhost:8753/_kit-test.html` in Playwright. Confirm: no console errors, four recognizable glyphs, a visible woven texture, blocks fade in on scroll. Screenshot and eyeball. Then delete `_kit-test.html`.

- [ ] **Step 9: Commit**

```bash
rm -f "_kit-test.html"
git add site-core.jsx && git commit -m "feat(kit): add display font, Adinkra glyphs, kente weave, scroll-reveal"
```

---

## Task 2: Cross-page Nav, shared Footer, and `index.html` shell

**Files:**
- Modify: `site-core.jsx` (Nav links → pages; move `Footer` in from `site-rest.jsx`)
- Modify: `site-rest.jsx` (remove `Footer` def; keep re-export removed)
- Create: `index.html` (rename of `AWS Community Day Ghana.html`)

**Interfaces — Produces:**
- `Nav({ onRegister, onMobileToggle, mobileOpen, darkHero, active })` — `active` is the current page key for highlighting.
- `Footer()` — shared, used by every page.
- Nav link set (used by every page): `[["About","/index.html#about"],["Agenda","/agenda.html"],["Speakers","/speakers.html"],["Sponsors","/sponsors.html"],["Volunteer","/volunteer.html"],["FAQ","/index.html#faq"]]`

- [ ] **Step 1: Point Nav + MobileMenu links at real pages**

In `site-core.jsx`, replace the `links` arrays in `Nav` and `MobileMenu` with the cross-page set above. Add an optional `active` prop; when a link's href matches `active`, render it at full opacity with a 2px `TOKENS.awsOrange` underline.

- [ ] **Step 2: Move `Footer` into the kit**

Cut the entire `Footer` component from `site-rest.jsx` and paste it into `site-core.jsx` (it already uses `CONTACT`, now defined in core). Update footer nav hrefs to cross-page URLs (`/agenda.html`, `/speakers.html`, `/sponsors.html`, `/volunteer.html`, `/venue.html`, `/code-of-conduct.html`, `/cfp.html`). Remove `Footer` from `site-rest.jsx`'s `Object.assign`. Add `Footer` to `site-core.jsx`'s `Object.assign`.

- [ ] **Step 3: Create `index.html`**

```bash
git mv "AWS Community Day Ghana.html" index.html
```
Then edit `index.html`: replace the Google Fonts `<link>` with the Task 0 Step 2 version (adds Bricolage Grotesque), and add the weave/reveal/reduced-motion keyframes from Task 1 Step 5 into the existing `<style>` block. Leave the `App` mount as-is (it already composes the landing sections).

- [ ] **Step 4: Verify**

Load `http://localhost:8753/index.html` in Playwright. Confirm: no console errors, headlines now render in Bricolage Grotesque (visibly different from Inter), nav shows the new links, footer renders, page still composes all sections. Screenshot full page and eyeball.

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: cross-page nav + shared footer + index.html shell with display font"
```

---

## Task 3: Elevate the landing sections (hero, program, rest)

Integrate the new kit into the existing landing components and remove now-shared duplicates. Visual polish guided by the **frontend-design** skill.

**Files:**
- Modify: `site-hero.jsx`, `site-program.jsx`, `site-rest.jsx`

**Interfaces — Consumes:** `AkwaabaWeave`, `Reveal`, `Adinkra`, `TOKENS.fontDisplay`, button factories, `Footer` (all from `window`).

- [ ] **Step 1: De-dupe buttons**

In `site-hero.jsx`, delete the four `btn*` factory definitions (now in core) and remove them from its `Object.assign`. Confirm `site-hero.jsx` still destructures what it needs from `window` at top.

- [ ] **Step 2: Hero weave + display type**

In `site-hero.jsx` `Hero`, replace the dotted-grid background `<div>` with `<AkwaabaWeave opacity={0.10} tone="dark" />`. Change `HeroLockup`'s "Community Day" text `fontFamily` to `TOKENS.fontDisplay`. Keep the Black Star, edition badge, countdown, stat band.

- [ ] **Step 3: Adinkra on tracks + scroll-reveal**

In `Tracks` (`site-hero.jsx`), add a small `Adinkra name="dwennimmen"` glyph in the section eyebrow row. Wrap `About`, `WhatToExpect`, `Tracks` section inner content in `Reveal`. In `site-program.jsx`, wrap `WhyAttend`, `Speakers`, `Agenda`, `CFP` inner content in `Reveal`; add `Adinkra name="gyenyame"` to the Speakers eyebrow and `name="nkyinkyim"` to the Agenda eyebrow.

- [ ] **Step 4: Cross-link landing CTAs to real pages**

Update landing hrefs: Speakers "Submit a talk" + CFP buttons → `/cfp.html`; Sponsors "Get the prospectus" → `/sponsors.html`; Crew "Apply to volunteer" → `/volunteer.html`; Agenda has a new "Full agenda →" link → `/agenda.html`; Venue teaser "Directions" → `/venue.html`. (These live across `site-program.jsx` and `site-rest.jsx`.)

- [ ] **Step 5: Verify**

Reload `http://localhost:8753/index.html`. Confirm no console errors, hero shows woven texture (not dots), sections fade in on scroll, Adinkra glyphs appear with hover tooltips, all CTAs point at the new pages. Screenshot and eyeball.

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "feat: elevate landing with weave, Adinkra, scroll-reveal, cross-page CTAs"
```

---

## Task 4: New-page template (prove the pattern with `code-of-conduct.html`)

Build the simplest new page first to lock the page scaffold, then reuse it for the content-heavy pages.

**Files:**
- Create: `code-of-conduct.html`, `page-coc.jsx`

**Interfaces — Produces:** the canonical new-page `.html` scaffold (head + roots + script order + `App` that renders `Nav`/`MobileMenu`/page body/`Footer`/`NotifyModal`). Later page tasks copy this scaffold.

- [ ] **Step 1: Create the page `.html` scaffold**

`code-of-conduct.html`:
```html
<!doctype html>
<html lang="en">
<head>
  <!-- shared head from partials/head.html -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Code of Conduct — AWS Community Day Ghana 2026</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Bricolage+Grotesque:opsz,wght@12..96,400..800&display=swap" rel="stylesheet" />
  <style>
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; scroll-behavior: smooth; }
    body { font-family: 'Inter', sans-serif; background: #FAF6EE; color: #1a1410; -webkit-font-smoothing: antialiased; }
    ::selection { background: #C44536; color: #fff; }
    @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
    @keyframes weave-drift { from { transform: translate(0,0); } to { transform: translate(48px,48px); } }
    @keyframes reveal-in { from { opacity:0; transform: translateY(18px);} to {opacity:1; transform:none;} }
    @media (prefers-reduced-motion: reduce){ *,*::before,*::after{animation:none!important;transition:none!important} .reveal{opacity:1!important;transform:none!important} }
    @media (max-width: 980px){ .nav-links,.nav-cta{display:none!important} .mobile-toggle{display:block!important} }
    @media (max-width: 600px){ section{padding-left:24px!important;padding-right:24px!important} nav{padding-left:20px!important;padding-right:20px!important} }
  </style>
</head>
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@18.3.1/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" crossorigin></script>
  <script type="text/babel" src="site-core.jsx"></script>
  <script type="text/babel" src="page-coc.jsx"></script>
  <script type="text/babel">
    const { Nav, MobileMenu, Footer, NotifyModal } = window;
    const { CoCPage } = window;
    function App(){
      const [mobileOpen,setMobileOpen]=React.useState(false);
      return (<div>
        <Nav onRegister={()=>{}} onMobileToggle={()=>setMobileOpen(!mobileOpen)} mobileOpen={mobileOpen} active="/code-of-conduct.html" />
        <MobileMenu open={mobileOpen} onClose={()=>setMobileOpen(false)} onRegister={()=>{}} />
        <CoCPage />
        <Footer />
      </div>);
    }
    ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
  </script>
</body>
</html>
```
NOTE: `NotifyModal` lives in `site-rest.jsx`, which this page does **not** load. So either (a) move `NotifyModal` into `site-core.jsx` in this step, or (b) drop it from non-landing pages. **Do (a)** — move `NotifyModal` + its `inputStyle` into `site-core.jsx`, export it, remove from `site-rest.jsx`. Then non-landing pages can offer "Notify me" too. Update the destructure above to include it and wire a `notifyOpen` state like the landing `App`.

- [ ] **Step 2: Build `page-coc.jsx`**

A `PageHeader` (reusable: navy band with eyebrow + display headline + `AkwaabaWeave`) followed by the policy body. Content (expand the footer stub, standard community CoC — no invented specifics beyond the doc's "harassment-free, inclusive"):
```jsx
const { TOKENS, SectionEyebrow, AkwaabaWeave, Reveal, CONTACT, Adinkra } = window;

const PageHeader = ({ eyebrow, title, sub, glyph }) => (
  <header style={{ background: TOKENS.navy, color:"#fff", padding:"148px 56px 72px", position:"relative", overflow:"hidden" }}>
    <AkwaabaWeave opacity={0.10} tone="dark" />
    <div style={{ maxWidth:1100, margin:"0 auto", position:"relative" }}>
      <div style={{ display:"flex", alignItems:"center", gap:12 }}>
        {glyph && <Adinkra name={glyph} size={26} color={TOKENS.starGold} />}
        <SectionEyebrow dark>{eyebrow}</SectionEyebrow>
      </div>
      <h1 style={{ fontFamily:TOKENS.fontDisplay, fontSize:"clamp(40px,6vw,84px)", lineHeight:1.0, fontWeight:800, textTransform:"uppercase", letterSpacing:"-0.015em", margin:"18px 0 0" }}>{title}</h1>
      {sub && <p style={{ fontSize:18, color:"rgba(255,255,255,0.78)", maxWidth:620, marginTop:20, lineHeight:1.55 }}>{sub}</p>}
    </div>
  </header>
);

const COC = [
  ["Our pledge", "AWS Community Day Ghana is dedicated to a harassment-free, welcoming experience for everyone, regardless of gender, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion, or technical background."],
  ["Expected behaviour", "Be respectful and considerate. Collaborate openly. Use welcoming and inclusive language. Respect differing viewpoints and the people who hold them."],
  ["Unacceptable behaviour", "Harassment, intimidation, or discrimination in any form. Unwelcome sexual attention. Disruption of talks or other events. Sharing others' private information without consent."],
  ["Reporting", `If you experience or witness unacceptable behaviour, contact a member of the organising team on the day, or email ${CONTACT}. Reports are handled confidentially.`],
  ["Consequences", "Participants asked to stop any harassing behaviour are expected to comply immediately. Organisers may take any action they deem appropriate, including warning or expulsion from the event without refund."],
];

const CoCPage = () => (
  <div>
    <PageHeader eyebrow="Code of conduct" title="A safe day for everyone" glyph="dwennimmen"
      sub="We want every attendee, speaker, volunteer, and sponsor to feel welcome and safe. These are the ground rules." />
    <section style={{ background: TOKENS.cream, padding:"80px 56px" }}>
      <div style={{ maxWidth:820, margin:"0 auto" }}>
        {COC.map(([h,b],i)=>(
          <Reveal key={h} delay={i*60} style={{ paddingTop:32, marginTop:32, borderTop:`1px solid ${TOKENS.line}` }}>
            <h2 style={{ fontFamily:TOKENS.fontDisplay, fontSize:24, fontWeight:800, margin:"0 0 12px" }}>{h}</h2>
            <p style={{ fontSize:16, lineHeight:1.7, color:TOKENS.ink2, margin:0 }}>{b}</p>
          </Reveal>
        ))}
      </div>
    </section>
  </div>
);

Object.assign(window, { CoCPage, PageHeader });
```
NOTE: `PageHeader` is exported here and **reused** by Tasks 5–10 (do not redefine it there — import from `window`).

- [ ] **Step 3: Verify**

Load `http://localhost:8753/code-of-conduct.html`. Confirm no console errors, nav/footer present, header weave + glyph render, sections reveal on scroll, "Code of conduct" nav state if applicable. Screenshot, eyeball.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "feat: code-of-conduct page + reusable PageHeader + move NotifyModal to kit"
```

---

## Task 5: Full agenda page

**Files:** Create `agenda.html`, `page-agenda.jsx`. Copy the `.html` scaffold from Task 4 (swap title → "Agenda — AWS Community Day Ghana 2026", script → `page-agenda.jsx`, render `<AgendaPage/>`, `active="/agenda.html"`).

**Interfaces — Consumes:** `PageHeader`, `TOKENS`, `Reveal`, `Adinkra`, `btnPrimaryNavy`.

- [ ] **Step 1: Build the agenda data (verbatim from doc §6.1 + §6.2)**

```jsx
const FULL_AGENDA = [
  { time:"08:00–09:00", title:"Arrival, registration & breakfast snacks", tag:"Networking" },
  { time:"09:00–09:30", title:"Opening remarks & welcome", tag:"Opening", sub:"MC + AWS User Group Accra Lead" },
  { time:"09:30–10:15", title:"Opening Keynote — The State of Cloud in Africa", tag:"Keynote", sub:"AWS Hero / Senior Developer Advocate / AWS Sub-Saharan Africa team" },
  { time:"10:15–11:00", title:"Keynote 2 — Building for Scale on AWS", tag:"Keynote", sub:"Senior technology leader from a Ghanaian or pan-African company" },
  { time:"11:00–11:15", title:"Coffee break", tag:"Break" },
  { time:"11:15–12:15", title:"Panel — African Builders on Generative AI", tag:"Panel", sub:"4 panelists + moderator: GenAI founder, enterprise ML lead, academic researcher, regulated-industry PM" },
  { time:"12:15–13:15", title:"Lunch & networking", tag:"Networking", sub:"Jollof · Waakye · Fried yam" },
  { time:"13:15–14:00", title:"Breakout Session 1 (45 min)", tag:"Breakout", tracks:["FinTech on AWS — Hubtel","EdTech on AWS — ITC","AgriTech on AWS"] },
  { time:"14:00–14:45", title:"Breakout Session 2 (40 min)", tag:"Breakout", tracks:["FinTech on AWS","EdTech on AWS","AgriTech on AWS"] },
  { time:"14:45–15:30", title:"Breakout Session 3 (40 min) — community talks", tag:"Breakout", sub:"Speakers selected from the open call", tracks:["Track 1","Track 2","Track 3"] },
  { time:"15:30–15:45", title:"Tea break", tag:"Break" },
  { time:"15:45–16:30", title:"Fireside — Cloud Careers & Community Building", tag:"Panel", sub:"4 panelists + moderator: career-switcher, recruiter/talent lead, recent grad in cloud, community organiser" },
  { time:"16:30–17:00", title:"Closing ceremony, raffle & group photo", tag:"Closing" },
  { time:"17:00 →", title:"Networking reception", tag:"Networking" },
];
```

- [ ] **Step 2: Build a "Cloud Horror Stories" callout**

The doc lists "Cloud Horror Stories: Mistakes and Anti-Patterns Not to be Repeated" under the programme. Add a highlighted card above the table, marked with `Adinkra name="sankofa"` (learn from the past), describing it as a recurring lightning-talk thread woven through the breakouts. Copy must say it is a community segment; do not invent specific stories.

- [ ] **Step 3: Build the table + three-track legend**

Reuse the landing `Agenda` row layout (grid `92px 1fr auto`, tag chips, track chips, break shading). Add a `Track legend` chip row (FinTech = terracotta, EdTech = indigo, AgriTech = green) and a note: "Three tracks run in parallel during breakout sessions." Wrap rows in `Reveal`. Add a "Provisional — subject to change" note and a `btnPrimaryNavy` linking to `/cfp.html` ("Want a slot? Submit a talk").

- [ ] **Step 4: Verify** — load `http://localhost:8753/agenda.html`, no console errors, full run-of-show renders, tracks legend correct, Sankofa callout present. Screenshot, eyeball.

- [ ] **Step 5: Commit** — `git add -A && git commit -m "feat: full agenda page with tracks legend and Cloud Horror Stories callout"`

---

## Task 6: Speakers & roles page

**Files:** Create `speakers.html`, `page-speakers.jsx` (scaffold from Task 4; title "Speakers — …", render `<SpeakersPage/>`, `active="/speakers.html"`).

**Interfaces — Consumes:** `PageHeader`, `TOKENS`, `Reveal`, `btnPrimary`, `CFP_URL`.

- [ ] **Step 1: Keynote + panel role cards (from doc §6.2)**

```jsx
const KEYNOTE_ROLES = [
  { title:"The State of Cloud in Africa", who:"An AWS Hero, AWS Senior Developer Advocate, or AWS staff from EMEA / Sub-Saharan Africa." },
  { title:"Building for Scale on AWS", who:"A senior technology leader (CTO, VP Engineering, or Head of Cloud) from a recognised Ghanaian or pan-African company." },
];
const PANELS = [
  { title:"African Builders on Generative AI", moderator:"AWS Community Builder or User Group Lead", seats:["GenAI startup founder","Enterprise ML lead","Academic researcher","PM applying GenAI in a regulated industry"] },
  { title:"Cloud Careers & Community Building", moderator:"AWS Community Builder", seats:["AWS-certified mid-career switcher","Recruiter / talent lead","Recent graduate now in cloud","Community organiser"] },
];
```

- [ ] **Step 2: Confirmed + TBA speaker grid (reuse landing `SpeakerCard` pattern; do not invent names)**

```jsx
const SPEAKERS = [
  { name:"David Quarguine", role:"Cloud Architect", topic:"PCI DSS & compliance patterns on AWS", track:"FinTech", initials:"DQ", confirmed:true },
  { name:"Ebow Anamuah", role:"EdTech Founder / CTO", topic:"Scaling a learning platform on AWS", track:"EdTech", initials:"EA", confirmed:true },
  { name:"Speaker TBA", role:"AgriTech engineer", topic:"IoT & satellite data pipelines on AWS", track:"AgriTech", initials:"—", confirmed:false },
  { name:"Speaker TBA", role:"Fintech senior engineer", topic:"Payments, lending, or mobile money on AWS", track:"FinTech", initials:"—", confirmed:false },
  { name:"Speaker TBA", role:"Serverless practitioner", topic:"A serverless pattern for learning platforms", track:"EdTech", initials:"—", confirmed:false },
  { name:"Speaker TBA", role:"Data engineer", topic:"Data pipelines on AWS for agricultural use cases", track:"AgriTech", initials:"—", confirmed:false },
];
```

- [ ] **Step 3: Assemble page** — `PageHeader` (glyph `gyenyame`) → keynote role cards (navy) → panel cards (moderator + seat list) → speaker grid → CFP call-to-action (`btnPrimary` → `CFP_URL`) with line "Line-up is being confirmed — the call for speakers is open." Wrap blocks in `Reveal`.

- [ ] **Step 4: Verify** — load `http://localhost:8753/speakers.html`, no console errors, roles/panels/grid render, TBA slots dashed, CFP CTA links to cfp page. Screenshot, eyeball.

- [ ] **Step 5: Commit** — `git add -A && git commit -m "feat: speakers & roles page"`

---

## Task 7: Call for speakers page

**Files:** Create `cfp.html`, `page-cfp.jsx` (scaffold; title "Call for Speakers — …", render `<CFPPage/>`, `active`= none/CFP).

**Interfaces — Consumes:** `PageHeader`, `TOKENS`, `Reveal`, `btnPrimaryNavy`, `btnGhostNavy`, `CFP_URL`.

- [ ] **Step 1: Formats + what-we-want + how-it-works**

Reuse the landing CFP "Formats" list (Keynote 45m, Breakout talk 40m, Panel 60m, Workshop varies). Add:
```jsx
const WE_WANT = [
  "Practical, specific talks grounded in real production experience.",
  "African use cases across FinTech, EdTech, AgriTech, and Generative AI.",
  "Honest lessons — including a 'Cloud Horror Stories' lightning thread on what went wrong and why.",
  "First-time speakers. We'll help you shape your talk.",
];
const HOW = [
  ["Submit", "Send your title, abstract, and a short bio through the speaker form."],
  ["Review", "The programme team reviews every submission against the tracks and formats."],
  ["Confirm", "Selected speakers are confirmed and briefed ahead of the day."],
];
```
Timeline note from doc §6.3 (paraphrase, no invented dates beyond doc): long list compiled mid-June, keynotes/panels confirmed by 15 July 2026, bios & abstracts by 31 July 2026.

- [ ] **Step 2: Assemble page** — `PageHeader` (glyph `sankofa`, eyebrow "Call for speakers", title "Share what you've built") → "What we're looking for" list → formats table → "How it works" 3-step → big CTA: `btnPrimaryNavy` "Submit a talk" → `CFP_URL` (TODO) + `btnGhostNavy` "Speaker FAQ" → `/index.html#faq`. Wrap in `Reveal`.

- [ ] **Step 3: Verify** — load `http://localhost:8753/cfp.html`, no console errors, all blocks render, submit links to placeholder. Screenshot, eyeball.

- [ ] **Step 4: Commit** — `git add -A && git commit -m "feat: call-for-speakers page"`

---

## Task 8: Sponsorship prospectus page

**Files:** Create `sponsors.html`, `page-sponsors.jsx` (scaffold; title "Sponsor — …", render `<SponsorsPage/>`, `active="/sponsors.html"`).

**Interfaces — Consumes:** `PageHeader`, `TOKENS`, `Reveal`, `btnPrimary`, `CONTACT`.

- [ ] **Step 1: Tier data with full benefits (verbatim from doc §5.1) — no prices shown publicly per existing site convention; keep benefits, drop GH₵ figures**

```jsx
const TIERS = [
  { tier:"Platinum", color:TOKENS.terracotta, target:"Major banks, telcos, large fintechs", benefits:["Headline sponsor billing","15-minute keynote slot","Premium 3m × 3m booth","Logo on stage backdrop, T-shirts, website & all marketing","12 VIP tickets","Dedicated social announcement","Branded segment in the livestream","Inclusion in the post-event report"] },
  { tier:"Gold", color:TOKENS.gold, target:"Mid-size tech firms, scale-ups", benefits:["Panel sponsorship rights for one track","Standard 2m × 2m booth","Logo on backdrop, T-shirts & website","8 tickets","Two social posts","Inclusion in the post-event report"] },
  { tier:"Silver", color:TOKENS.indigo, target:"SMEs, growing startups", benefits:["Logo on website, programme & T-shirts","Shared booth space","5 tickets","One social post","Branded item in the attendee swag bag"] },
  { tier:"Bronze", color:TOKENS.green, target:"Startups, agencies", benefits:["Logo on website & programme","3 tickets","Group social mention"] },
  { tier:"Community Partner", color:TOKENS.ink, target:"Hubs, schools, communities", benefits:["Logo on website","2 tickets","Group thank-you on social","Open to non-profits, communities & bootcamps"] },
];
const IN_KIND = ["Catering or beverage supply","Swag production (T-shirts, lanyards, notebooks)","Photography & videography services","Cloud credits or technical workshop sponsorship","Ride-share vouchers for speakers & volunteers"];
```

- [ ] **Step 2: Why-sponsor band** — audience stats from doc: 300 in-person builders, founders & students; 12+ sessions; 3 verticals (FinTech/EdTech/AgriTech); livestream + 72-hour social clips + post-event report reach. Present as a navy stat band (reuse hero stat-band styling).

- [ ] **Step 3: Assemble page** — `PageHeader` (glyph `gyenyame`, "Power the community") → why-sponsor band → tier cards (each: tier name, accent bar, target sponsors, benefit list with kente-dot bullets) → in-kind section → contact CTA (`btnPrimary` mailto `CONTACT`, line "Email us for the full prospectus with pricing"). Wrap tiers in `Reveal`.

- [ ] **Step 4: Verify** — load `http://localhost:8753/sponsors.html`, no console errors, five tiers with correct benefits, in-kind list, mailto works. Screenshot, eyeball.

- [ ] **Step 5: Commit** — `git add -A && git commit -m "feat: sponsorship prospectus page"`

---

## Task 9: Volunteer page

**Files:** Create `volunteer.html`, `page-volunteer.jsx` (scaffold; title "Volunteer — …", render `<VolunteerPage/>`, `active="/volunteer.html"`).

**Interfaces — Consumes:** `PageHeader`, `TOKENS`, `Reveal`, `btnPrimary`, `VOLUNTEER_URL`.

- [ ] **Step 1: Teams data (verbatim from doc §7.1, with counts + responsibilities)**

```jsx
const TEAMS = [
  ["Registration", 4, "Check in attendees, distribute badges and swag, manage walk-ins."],
  ["Logistics & Floor", 5, "Direct attendees, manage signage, coordinate between rooms and the registration desk."],
  ["Speaker Care", 3, "Receive speakers, escort them to the green room, manage slide handovers and stage timing."],
  ["Technical / AV", 3, "Operate microphones, slide clickers, the livestream feed, and Wi-Fi support."],
  ["Social Media", 3, "Live coverage on LinkedIn and X, capture quotes and clips, monitor the event hashtag."],
  ["Photography Support", 2, "Assist the lead photographer, coordinate group photos, manage props."],
  ["Food & Beverage", 3, "Coordinate with the caterer, manage buffet flow, monitor water and snack stations."],
  ["Sponsor Liaison", 2, "Set up booths in the morning, check in with sponsors hourly, support tear-down."],
];
const PERKS = ["Branded volunteer T-shirt","All meals on the day","Certificate of participation","Priority access to future community events"];
```

- [ ] **Step 2: "What we'll ask" form preview (from doc §12 — list the real fields, do NOT build a submitting form; submit links out)**

Render the 20-question form as a styled, read-only outline grouped by the doc's sections (A Personal Info, B Background, C Preferences, D Logistics, E Consent), so applicants know what to expect, then a `btnPrimary` "Apply to volunteer →" linking to `VOLUNTEER_URL` (TODO). Include a note: "Applications open 20 June 2026; shortlisted volunteers are confirmed by 25 July 2026." (doc §7.2 / timeline).

- [ ] **Step 3: Assemble page** — `PageHeader` (glyph `dwennimmen`, "Join the crew", sub "~25 volunteers run the day across eight teams") → teams grid (name, count badge, responsibilities) → perks row → form-preview outline → apply CTA. Wrap blocks in `Reveal`.

- [ ] **Step 4: Verify** — load `http://localhost:8753/volunteer.html`, no console errors, eight teams with counts, perks, form outline, apply links to placeholder. Screenshot, eyeball.

- [ ] **Step 5: Commit** — `git add -A && git commit -m "feat: volunteer page with teams, perks, and form preview"`

---

## Task 10: Venue & travel page

**Files:** Create `venue.html`, `page-venue.jsx` (scaffold; title "Venue & Travel — …", render `<VenuePage/>`, `active`= none).

**Interfaces — Consumes:** `PageHeader`, `TOKENS`, `Reveal`.

- [ ] **Step 1: Venue facts (doc §3.2 / §8) + food plan**

```jsx
const VENUE_FACTS = [
  ["Date","Saturday 29 August 2026","08:00 – 17:00"],
  ["Venue","Main Auditorium","Accra, Ghana — exact address confirmed closer to the date"],
  ["Capacity","300 seats","Air-conditioned, LED stage screen, PA system, standby generator"],
  ["Getting there","Bolt / Trotro","Central Accra"],
];
const FOOD = [
  ["Lunch (12:15–13:15)","Jollof rice, waakye, and fried yam, with vegetarian portions reserved."],
  ["Refreshments","Bottled water, soft drinks, tea, coffee, biscuits, and fresh fruit throughout the day."],
];
```

- [ ] **Step 2: Map block** — reuse the landing `Venue` stylised "Accra · Ghana · 5.6037° N · 0.1870° W" placeholder card (marked "exact venue confirmed soon"); do not embed a real map or invent an address.

- [ ] **Step 3: Assemble page** — `PageHeader` (glyph `nkyinkyim`, "See you in Accra") → facts grid → food section → map block → reduced "Power, Wi-Fi & accessibility" note (standby generator, 4G/5G backup per doc risk register; step-free access TBA). Wrap in `Reveal`.

- [ ] **Step 4: Verify** — load `http://localhost:8753/venue.html`, no console errors, facts/food/map render. Screenshot, eyeball.

- [ ] **Step 5: Commit** — `git add -A && git commit -m "feat: venue & travel page"`

---

## Task 11: Humanizer pass on all prose

**Files:** Modify any `.jsx` containing prose: `site-hero.jsx` (About, WhatToExpect), `site-program.jsx` (WhyAttend, CFP intro), `site-rest.jsx` (Sponsors intro, Community, Crew, Venue, FAQ answers), `page-cfp.jsx`, `page-sponsors.jsx`, `page-volunteer.jsx`, `page-venue.jsx`, `page-coc.jsx`, `page-speakers.jsx`, `page-agenda.jsx`.

- [ ] **Step 1: Extract prose** — collect every multi-sentence string (paragraphs, FAQ answers, card descriptions, sub-lines) into a scratch list.

- [ ] **Step 2: Run `/humanizer`** on the collected prose. Target the patterns it flags: rule-of-three, em-dash overuse, promotional adjectives, "—ing" trailing analyses, vague attributions, negative parallelism. Keep event facts exact; keep Ghanaian warmth (Akwaaba/Medaase) intact.

- [ ] **Step 3: Apply edits** back into each component verbatim from the humanized output.

- [ ] **Step 4: Verify** — reload each affected page; no console errors; copy reads naturally; facts unchanged. Screenshot the landing + two content pages, eyeball.

- [ ] **Step 5: Commit** — `git add -A && git commit -m "chore: humanize prose across landing and content pages"`

---

## Task 12: Cross-page verification & polish

**Files:** any, as needed for fixes found.

- [ ] **Step 1: Link audit** — from `index.html`, click through nav + every CTA to all seven pages and back; confirm no 404s and `active` nav state is correct per page. Use Playwright navigation + console check on each.

- [ ] **Step 2: Responsive check** — at 1440px and 390px widths, load index + agenda + sponsors + volunteer; confirm grids collapse (no horizontal scroll), nav switches to mobile toggle, mobile menu links navigate. Screenshot each width.

- [ ] **Step 3: Motion + a11y check** — toggle `prefers-reduced-motion` (Playwright emulate) and confirm weave/reveal stop animating and content is fully visible. Confirm Adinkra glyphs expose their `aria-label`/`<title>` meanings.

- [ ] **Step 4: Console sweep** — every page loads with zero console errors (favicon 404 allowed). Fix any that appear.

- [ ] **Step 5: Final screenshots + commit**

```bash
git add -A && git commit -m "fix: cross-page link, responsive, and motion polish"
```

---

## Self-Review (completed by plan author)

**Spec coverage:** §3 page architecture → Tasks 2,4–10 (all 8 pages). §4 uniqueness signature → Task 1 (Adinkra, weave, Reveal) + Task 3 (applied to landing) + glyphs on each page. §5 typography → Task 1 Steps 1–2 + Task 2 (font link). §6 copy/humanizer → Task 11. §7 non-goals respected (no build, no backend, exploratory files untouched, link-out forms). §8 verification → per-task browser checks + Task 12.

**Placeholder scan:** No "TBD/handle appropriately" in steps; all data structures and component code provided verbatim. `LUMA_URL`/`CFP_URL`/`VOLUNTEER_URL`/venue address are intentional content placeholders per Global Constraints, each `TODO`-marked — these are real-world unknowns, not plan gaps.

**Type consistency:** `PageHeader` defined once (Task 4) and consumed by Tasks 5–10. `Adinkra`/`AkwaabaWeave`/`Reveal`/button factories defined in Task 1, consumed everywhere. `Footer`/`NotifyModal` moved to core (Tasks 2,4) before any non-landing page consumes them. Nav `active` prop added in Task 2, used by every page scaffold.
