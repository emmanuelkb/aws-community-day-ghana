/* Site core — tokens, wordmark, kente accents, section heading, countdown, nav.
   Visual language: Bay Area / Toronto AWS Community Day pattern.
   - Inter sans throughout (no Fraunces serif headlines).
   - Uppercase eyebrows in AWS orange / gold.
   - Restrained kente-stripe accents — small bands at edges, not walls.
*/

const TOKENS = {
  cream: "#FAF6EE",
  ink: "#1a1410",
  ink2: "#3a2f28",
  terracotta: "#C44536",
  indigo: "#1B3A6B",
  gold: "#E8B23A",
  paper: "#F1E9D6",
  line: "rgba(26,20,16,0.12)",
  // Navy palette (used by sections that mirror the hero)
  navy: "#1F2A3D",
  navy2: "#172234",
  awsOrange: "#FF9900",
  starGold: "#FFC857",
  green: "#2C6B4F",
  fontDisplay: "'Bricolage Grotesque', 'Inter', sans-serif",
};

const CONTACT = "awsaccrausergroup@gmail.com";
const LUMA_URL = "#";       /* TODO: real Luma event URL */
const CFP_URL = "#";        /* TODO: real CFP Google Form URL */
const VOLUNTEER_URL = "#";  /* TODO: real Volunteer Google Form URL */

const btnPrimary = () => ({ background: TOKENS.terracotta, color: "#fff", border: 0, padding: "17px 34px", borderRadius: 4, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", textDecoration: "none", display: "inline-block", letterSpacing: "0.08em", textTransform: "uppercase" });
const btnGhost = () => ({ background: "transparent", color: TOKENS.ink, border: `1px solid ${TOKENS.ink}`, padding: "17px 34px", borderRadius: 4, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", textDecoration: "none", display: "inline-block", letterSpacing: "0.08em", textTransform: "uppercase" });
const btnPrimaryNavy = () => ({ background: TOKENS.awsOrange, color: TOKENS.navy, border: 0, padding: "17px 34px", borderRadius: 4, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", textDecoration: "none", display: "inline-block", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap" });
const btnGhostNavy = () => ({ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.5)", padding: "17px 34px", borderRadius: 4, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", textDecoration: "none", display: "inline-block", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap" });

/* ───────────────────── Wordmark (Logo B, compact) ───────────────────── */
const Wordmark = ({ tone = "dark", compact = false }) => {
  const c = tone === "light" ? "#fff" : TOKENS.ink;
  const accraCol = "#D4A24C"; // official Accra-logo gold, used on both tones
  const w = compact ? 40 : 46;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 13, color: c }}>
      <svg viewBox="0 0 304 182" width={w} height={w * 0.6} aria-label="aws">
        <path fill={c} d="M86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2-4.9-4.8-7.4-11.2-7.4-19.2 0-8.5 3-15.4 9.1-20.6 6.1-5.2 14.2-7.8 24.5-7.8 3.4 0 6.9.3 10.6.8 3.7.5 7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3-3.7.9-7.3 2-10.8 3.4-1.6.7-2.8 1.1-3.5 1.3-.7.2-1.2.3-1.6.3-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5.5-.7 1.4-1.4 2.8-2.1 3.5-1.8 7.7-3.3 12.6-4.5 4.9-1.3 10.1-1.9 15.6-1.9 11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4zM45.8 81.6c3.3 0 6.7-.6 10.3-1.8 3.6-1.2 6.8-3.4 9.5-6.4 1.6-1.9 2.8-4 3.4-6.4.6-2.4 1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7-3.2-.4-6.3-.6-9.4-.6-6.7 0-11.6 1.3-14.9 4-3.3 2.7-4.9 6.5-4.9 11.5 0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9L96.7 10.2c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9.8-.6 2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6-.1.6-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9-.8.6-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1-.8-.7-1.5-2-1.9-4L156 23l-15.4 64.4c-.5 2-1.1 3.3-1.9 4-.8.7-2.2 1-4 1h-8.6zm128.5 2.7c-5.2 0-10.4-.6-15.4-1.8-5-1.2-8.9-2.5-11.5-4-1.6-.9-2.7-1.9-3.1-2.8-.4-.9-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3.6.2 1.5.6 2.5 1 3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3 3.4-2.2 5.2-5.4 5.2-9.5 0-2.8-.9-5.1-2.7-7-1.8-1.9-5.2-3.6-10.1-5.2L246 52c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1 1.8-3.2 4.2-6 7.2-8.2 3-2.3 6.4-4 10.4-5.2 4-1.2 8.2-1.7 12.6-1.7 2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6 1.8.6 3.2 1.2 4.2 1.8 1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8-3.1 1.9-4.7 4.8-4.7 8.9 0 2.8 1 5.2 3 7.1 2 1.9 5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6 3.1 4.1 4.6 8.8 4.6 14 0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z"/>
        <path fill={TOKENS.awsOrange} fillRule="evenodd" clipRule="evenodd" d="M273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z"/>
        <path fill={TOKENS.awsOrange} fillRule="evenodd" clipRule="evenodd" d="M287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z"/>
      </svg>
      <div style={{ width: 1, height: 26, background: tone === "light" ? "rgba(255,255,255,0.25)" : "rgba(26,20,16,0.2)" }} />
      <div style={{ lineHeight: 1.15, fontWeight: 800, letterSpacing: "0.02em", textTransform: "uppercase", fontFamily: TOKENS.fontDisplay }}>
        <div style={{ fontSize: compact ? 12 : 13 }}>Community Day</div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 3 }}>
          <svg viewBox="0 0 100 100" width={compact ? 9 : 10} height={compact ? 9 : 10} aria-hidden style={{ flexShrink: 0 }}>
            <path d="M50 6 L61 38.5 L96 38.5 L67.5 58.5 L78.5 92 L50 71.5 L21.5 92 L32.5 58.5 L4 38.5 L39 38.5 Z" fill={accraCol} />
          </svg>
          <span style={{ fontSize: compact ? 9 : 10, color: accraCol, fontWeight: 700, letterSpacing: "0.18em" }}>Accra</span>
        </div>
      </div>
    </div>
  );
};

/* ───────────────────── Kente stripe ──────────────────
   Reusable vertical kente-inspired stripe band */
const KenteStripes = ({ width = 100, opacity = 1 }) => {
  const stripes = [
    [TOKENS.indigo, 60], [TOKENS.gold, 16], [TOKENS.ink, 8], [TOKENS.gold, 16],
    [TOKENS.terracotta, 90], [TOKENS.cream, 12], [TOKENS.indigo, 36], [TOKENS.gold, 24],
    [TOKENS.ink, 10], [TOKENS.terracotta, 56], [TOKENS.indigo, 70], [TOKENS.gold, 18],
    [TOKENS.terracotta, 100], [TOKENS.indigo, 44], [TOKENS.gold, 16], [TOKENS.ink, 8],
    [TOKENS.terracotta, 60], [TOKENS.cream, 10], [TOKENS.indigo, 70], [TOKENS.gold, 22],
    [TOKENS.terracotta, 80], [TOKENS.ink, 10], [TOKENS.indigo, 50],
  ];
  return (
    <div style={{ width, height: "100%", display: "flex", flexDirection: "column", opacity }}>
      {stripes.map(([c, h], i) => (
        <div key={i} style={{ background: c, height: h, width: "100%", flexShrink: 0 }} />
      ))}
    </div>
  );
};

/* ───────────────────── Horizontal kente accent bar ──────────────────
   Thin 3-stripe band — used at section transitions for restraint. */
const KenteBar = ({ height = 4, reverse = false, width = "100%" }) => {
  const a = reverse
    ? "linear-gradient(90deg, #2C6B4F 0 33%, #FFC857 33% 66%, #C44536 66% 100%)"
    : "linear-gradient(90deg, #C44536 0 33%, #FFC857 33% 66%, #2C6B4F 66% 100%)";
  return <div aria-hidden style={{ height, width, background: a }} />;
};

/* ───────────────────── Section eyebrow ─────────────────────
   Uppercase Inter eyebrow with a leading dash — Bay Area style.
   Replaces the old num/kicker editorial label entirely. */
const SectionEyebrow = ({ children, color = TOKENS.terracotta, dark = false }) => (
  <div style={{
    fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase",
    fontWeight: 700, color: dark ? TOKENS.starGold : color,
    fontFamily: "'Inter', sans-serif",
  }}>
    {children}
  </div>
);

/* ───────────────────── Section headline ─────────────────────
   The Bay Area pattern: tight, uppercase, Inter 800, with optional accent line. */
const SectionHeadline = ({ children, dark = false, size = "regular" }) => {
  const fontSize = size === "large"
    ? "clamp(40px, 6vw, 88px)"
    : "clamp(32px, 4.6vw, 64px)";
  return (
    <h2 style={{
      fontFamily: TOKENS.fontDisplay,
      fontSize, lineHeight: 1.0, fontWeight: 800,
      color: dark ? "#fff" : TOKENS.ink,
      letterSpacing: "-0.015em",
      textTransform: "uppercase",
      margin: "20px 0 0",
      maxWidth: 1100,
    }}>
      {children}
    </h2>
  );
};

/* Inline kente dot — small triangular bullet for use in lists/eyebrows */
const KenteDot = ({ size = 10 }) => (
  <span aria-hidden style={{
    display: "inline-block", width: size, height: size,
    background: `conic-gradient(from 0deg, ${TOKENS.terracotta} 0 33%, ${TOKENS.starGold} 33% 66%, #2C6B4F 66% 100%)`,
    borderRadius: 2, transform: "rotate(45deg)",
  }} />
);

/* ───────────────────── Countdown ─────────────────────
   Visually present even when date TBA — shows ?? blocks.
   Restyled to match navy Bay Area grid. */
const Countdown = ({ targetDate }) => {
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const target = targetDate ? new Date(targetDate).getTime() : null;
  const diff = target ? Math.max(0, target - now) : null;
  const d = diff != null ? Math.floor(diff / 86400000) : null;
  const h = diff != null ? Math.floor((diff / 3600000) % 24) : null;
  const m = diff != null ? Math.floor((diff / 60000) % 60) : null;
  const s = diff != null ? Math.floor((diff / 1000) % 60) : null;
  const cells = [["Days", d], ["Hours", h], ["Minutes", m], ["Seconds", s]];
  const pad = (v) => v == null ? "––" : String(v).padStart(2, "0");
  return (
    <div style={{ display: "flex", gap: 0, border: `1px solid ${TOKENS.line}`, borderRadius: 4, overflow: "hidden", background: "rgba(255,255,255,0.5)" }}>
      {cells.map(([label, v], i) => (
        <div key={label} style={{
          padding: "14px 22px", minWidth: 88, textAlign: "center",
          borderRight: i < 3 ? `1px solid ${TOKENS.line}` : "none",
        }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 32, lineHeight: 1, color: TOKENS.ink, fontVariantNumeric: "tabular-nums", letterSpacing: "-0.01em" }}>{pad(v)}</div>
          <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: TOKENS.ink2, marginTop: 6, opacity: 0.6, fontWeight: 600 }}>{label}</div>
        </div>
      ))}
    </div>
  );
};

/* ───────────────────── Nav ───────────────────── */
const NAV_LINKS = [
  ["About",     "/index.html#about"],
  ["Agenda",    "/agenda.html"],
  ["Speakers",  "/speakers.html"],
  ["Sponsors",  "/sponsors.html"],
  ["Volunteer", "/volunteer.html"],
  ["FAQ",       "/index.html#faq"],
];

const Nav = ({ onRegister, onMobileToggle, mobileOpen, darkHero = false, active = "" }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When over the dark hero (not scrolled), use light text and translucent dark surface.
  // After scroll, snap to the page's normal cream nav.
  const onDark = darkHero && !scrolled;
  const textColor = onDark ? "#fff" : TOKENS.ink;
  const iconStroke = onDark ? "#fff" : TOKENS.ink;

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? "12px 40px" : "18px 40px",
      transition: "all .3s ease",
      background: scrolled ? "rgba(250,246,238,0.92)"
                : (onDark ? "rgba(31,42,61,0.4)" : "transparent"),
      backdropFilter: scrolled || onDark ? "blur(12px)" : "none",
      borderBottom: scrolled ? `1px solid ${TOKENS.line}`
                  : (onDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent"),
      display: "flex", justifyContent: "space-between", alignItems: "center",
    }}>
      <a href="/index.html" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
        <img
          src={onDark ? "/assets/logo-nav-light.svg" : "/assets/logo-nav-dark.svg"}
          alt="AWS Community Day Ghana — Accra"
          style={{ height: scrolled ? 46 : 60, width: "auto", display: "block", transition: "height .3s ease" }}
        />
      </a>
      <div className="nav-links" style={{ display: "flex", gap: 28, fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {NAV_LINKS.map(([l, href]) => {
          const isActive = active && active === href;
          return (
            <a key={href} href={href} style={{
              color: textColor, textDecoration: "none",
              opacity: isActive ? 1 : 0.78,
              borderBottom: isActive ? `2px solid ${TOKENS.awsOrange}` : "2px solid transparent",
              paddingBottom: 2,
            }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
              onMouseLeave={(e) => e.currentTarget.style.opacity = isActive ? 1 : 0.78}>
              {l}
            </a>
          );
        })}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <button onClick={onRegister} className="nav-cta" style={{
          background: onDark ? TOKENS.awsOrange : TOKENS.ink,
          color: onDark ? TOKENS.navy : TOKENS.cream,
          border: 0, padding: "11px 22px", borderRadius: 4,
          fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
          letterSpacing: "0.08em", textTransform: "uppercase",
        }}>
          Register
        </button>
        <button onClick={onMobileToggle} className="mobile-toggle" aria-label="Menu" style={{
          display: "none", background: "transparent", border: 0, padding: 6, cursor: "pointer",
        }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {mobileOpen ? (
              <path d="M5 5 L17 17 M17 5 L5 17" stroke={iconStroke} strokeWidth="1.5" />
            ) : (
              <><path d="M3 7 H19" stroke={iconStroke} strokeWidth="1.5" /><path d="M3 15 H19" stroke={iconStroke} strokeWidth="1.5" /></>
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
};

/* ───────────────────── Mobile menu drawer ───────────────────── */
const MobileMenu = ({ open, onClose, onRegister }) => {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 99,
      background: TOKENS.navy,
      transform: open ? "translateY(0)" : "translateY(-100%)",
      transition: "transform .35s cubic-bezier(.5,0,.2,1)",
      padding: "100px 40px 40px",
      display: "flex", flexDirection: "column",
    }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {NAV_LINKS.map(([l, href]) => (
          <a key={href} href={href} onClick={onClose} style={{
            color: "#fff", textDecoration: "none",
            fontFamily: "'Inter', sans-serif", fontSize: 36, fontWeight: 800,
            letterSpacing: "-0.01em", textTransform: "uppercase",
            padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.12)",
          }}>{l}</a>
        ))}
      </div>
      <button onClick={() => { onClose(); onRegister(); }} style={{
        marginTop: 40, background: TOKENS.awsOrange, color: TOKENS.navy, border: 0,
        padding: "18px 28px", borderRadius: 4, fontSize: 13, fontWeight: 700,
        fontFamily: "inherit", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer",
      }}>Register</button>
    </div>
  );
};

/* ───────────────────── Adinkra glyph set ───────────────────── */
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
    // sankofa: bird with head turned back — simplified as a heart-loop shape with a tail arrow
    sankofa:    "M50 12c-20 0-32 14-32 31 0 16 12 27 26 27 9 0 16-5 16-13 0-6-4-10-10-10-4 0-7 2-7 6h8c0 1-1 2-1 2-3 0-5-2-5-5 0-4 4-7 9-7 7 0 12 6 12 14 0 11-10 19-23 19v8l-18-14 18-14v8c8 0 13-5 13-12 0-12-9-21-21-21-15 0-26 11-26 25h-8c0-21 16-36 39-36 1 0 2 0 3 .1V12z",
    // gyenyame: concentric rings with a cross — simplified as circle + inner circle + crosshairs
    gyenyame:   "M50 8c-6 0-11 5-11 11 0 4 2 8 6 10-14 3-24 14-24 28 0 16 13 25 29 25s29-9 29-25c0-14-10-25-24-28 4-2 6-6 6-10 0-6-5-11-11-11zm0 30c10 0 19 7 19 19 0 11-9 17-19 17s-19-6-19-17c0-12 9-19 19-19z",
    // dwennimmen: two ram horns facing outward — two C-shapes mirrored
    dwennimmen: "M30 30c-11 0-19 9-19 20s8 20 19 20c8 0 15-5 18-13 3 8 10 13 18 13 11 0 19-9 19-20s-8-20-19-20c-6 0-11 3-14 8v-14h-8v14c-3-5-8-8-14-8zm0 10c6 0 10 5 10 10s-4 10-10 10-10-5-10-10 4-10 10-10zm40 0c6 0 10 5 10 10s-4 10-10 10-10-5-10-10 4-10 10-10z",
    // nkyinkyim: zigzag/twist — two S-curves side by side
    nkyinkyim:  "M20 80c0-14 12-18 12-30S20 34 20 22h10c0 9 12 13 12 28S30 66 30 80zM58 80c0-14 12-18 12-30S58 34 58 22h10c0 9 12 13 12 28S68 66 68 80z",
  };
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label={`${m.label} — ${m.meaning}`} style={{ display: "block" }}>
      <title>{title || `${m.label} — ${m.meaning}`}</title>
      <path d={paths[name] || paths.gyenyame} fill={color} />
    </svg>
  );
};

/* ───────────────────── AkwaabaWeave background ───────────────────── */
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

/* ───────────────────── Black Star (Ghanaian flag star) ───────────────────── */
const BlackStar = ({ size = 80, color = "#FFC857", opacity = 0.14 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden style={{ opacity }}>
    <path d="M50 6 L61 38.5 L96 38.5 L67.5 58.5 L78.5 92 L50 71.5 L21.5 92 L32.5 58.5 L4 38.5 L39 38.5 Z" fill={color} />
  </svg>
);

/* ───────────────────── PageHeader (shared page hero) ───────────────────── */
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

/* ───────────────────── Reveal scroll component ───────────────────── */
const Reveal = ({ children, delay = 0, as = "div", style = {} }) => {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    // Short-circuit for users who prefer reduced motion: show content immediately
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
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

/* ───────────────────── Footer (shared across all pages) ───────────────────── */
const Footer = () => (
  <footer style={{ background: TOKENS.navy2, color: "rgba(255,255,255,0.65)", padding: "80px 56px 40px" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.1)" }} className="footer-grid">
        <div>
          <img src="/assets/logo-accra-b.svg" alt="AWS Community Day Ghana — Accra" style={{ width: 200, height: "auto", display: "block" }} />
          <p style={{ fontSize: 13, lineHeight: 1.6, marginTop: 20, maxWidth: 360 }}>
            A community-led conference for cloud builders in Ghana, organised by AWS User Group Accra. Independent, free, and run by volunteers.
          </p>
          <div style={{ marginTop: 20, fontSize: 13 }}>
            <a href={`mailto:${CONTACT}`} style={{ color: TOKENS.starGold, textDecoration: "none", fontWeight: 600 }}>{CONTACT}</a>
          </div>
          <div style={{ marginTop: 20, fontSize: 11, opacity: 0.5 }}>
            "AWS" and the AWS logo are trademarks of Amazon.com, Inc. This community event is organised by AWS User Group Accra.
          </div>
        </div>
        {[
          ["Event", [["About", "/index.html#about"], ["Agenda", "/agenda.html"], ["Speakers", "/speakers.html"], ["Venue", "/venue.html"]]],
          ["Get involved", [["Register", "/index.html#top"], ["Speak", "/cfp.html"], ["Sponsor", "/sponsors.html"], ["Volunteer", "/volunteer.html"]]],
          ["More", [["FAQ", "/index.html#faq"], ["Community", "/index.html#community"], ["Code of conduct", "/code-of-conduct.html"], ["Contact", `mailto:${CONTACT}`]]],
        ].map(([t, links]) => (
          <div key={t}>
            <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: TOKENS.starGold, fontWeight: 700, marginBottom: 16 }}>{t}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {links.map(([l, h]) => (
                <a key={l} href={h} style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: 13 }}>{l}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div id="coc" style={{ paddingTop: 32, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
        <div style={{ fontSize: 12, opacity: 0.6, maxWidth: 620, lineHeight: 1.6 }}>
          <strong style={{ color: "rgba(255,255,255,0.85)" }}>Code of conduct.</strong> We're committed to a harassment-free, inclusive event for everyone. Harassment of any kind will not be tolerated. The full policy follows the AWS Community Day code of conduct — read it before you attend.
        </div>
        <div style={{ fontSize: 11, opacity: 0.5 }}>© 2026 AWS Community Day Ghana · Made in Accra</div>
      </div>
    </div>
  </footer>
);

/* ───────────────────── Notify modal ───────────────────── */
const inputStyle = { padding: "14px 16px", border: `1px solid ${TOKENS.line}`, borderRadius: 8, fontSize: 14, fontFamily: "inherit", background: "#fff", color: TOKENS.ink, outline: "none" };

const NotifyModal = ({ open, onClose }) => {
  const [step, setStep] = React.useState(0);
  const [data, setData] = React.useState({ name: "", email: "", role: "" });
  React.useEffect(() => { if (open) { setStep(0); setData({ name: "", email: "", role: "" }); } }, [open]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(15,20,32,0.78)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, backdropFilter: "blur(8px)" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: TOKENS.cream, borderRadius: 16, maxWidth: 500, width: "100%", position: "relative", overflow: "hidden" }}>
        <div style={{ height: 4, background: `linear-gradient(90deg, ${TOKENS.terracotta} 0 33%, ${TOKENS.starGold} 33% 66%, ${TOKENS.green} 66% 100%)` }} />
        <button onClick={onClose} style={{ position: "absolute", top: 14, right: 18, background: "transparent", border: 0, cursor: "pointer", fontSize: 22, color: TOKENS.ink, lineHeight: 1, padding: 6 }}>×</button>
        <div style={{ padding: "36px 40px 40px" }}>
          {step === 0 ? (
            <>
              <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: TOKENS.terracotta, fontWeight: 700 }}>Get notified</div>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 30, fontWeight: 800, lineHeight: 1.1, margin: "16px 0 8px", color: TOKENS.ink, letterSpacing: "-0.015em", textTransform: "uppercase" }}>
                Tickets open<br />on Luma soon.
              </h3>
              <p style={{ fontSize: 15, color: TOKENS.ink2, lineHeight: 1.55, margin: "0 0 24px" }}>
                Leave your email and we'll send the registration link the moment it's live.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input placeholder="Your name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} style={inputStyle} />
                <input placeholder="Email" type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} style={inputStyle} />
                <input placeholder="Role · e.g. Backend engineer (optional)" value={data.role} onChange={(e) => setData({ ...data, role: e.target.value })} style={inputStyle} />
              </div>
              <button onClick={() => data.name && data.email.includes("@") && setStep(1)} disabled={!data.name || !data.email.includes("@")} style={{ ...btnPrimary(), width: "100%", marginTop: 20, opacity: (!data.name || !data.email.includes("@")) ? 0.4 : 1, cursor: (!data.name || !data.email.includes("@")) ? "not-allowed" : "pointer" }}>
                Notify me →
              </button>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div aria-hidden style={{ width: 56, height: 56, margin: "0 auto 20px", background: `conic-gradient(from 0deg, ${TOKENS.terracotta} 0 33%, ${TOKENS.starGold} 33% 66%, ${TOKENS.green} 66% 100%)`, borderRadius: 10, transform: "rotate(45deg)" }} />
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 30, fontWeight: 800, lineHeight: 1.05, margin: "0 0 16px", color: TOKENS.ink, letterSpacing: "-0.02em", textTransform: "uppercase" }}>
                Medaase,<br /><span style={{ color: TOKENS.terracotta }}>{data.name}!</span>
              </h3>
              <p style={{ fontSize: 15, color: TOKENS.ink2, lineHeight: 1.55, maxWidth: 340, margin: "0 auto" }}>
                You're on the list. We'll email <strong>{data.email}</strong> when registration opens.
              </p>
              <button onClick={onClose} style={{ ...btnGhost(), marginTop: 28 }}>Done</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Object.assign(window, {
  TOKENS, Wordmark, KenteStripes, KenteBar, KenteDot,
  SectionEyebrow, SectionHeadline,
  Countdown, Nav, MobileMenu,
  Adinkra, ADINKRA_MEANING, AkwaabaWeave, Reveal,
  BlackStar,
  CONTACT, LUMA_URL, CFP_URL, VOLUNTEER_URL,
  btnPrimary, btnGhost, btnPrimaryNavy, btnGhostNavy,
  Footer, NotifyModal, PageHeader,
});
