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
};

/* ───────────────────── Wordmark (Logo B, compact) ───────────────────── */
const Wordmark = ({ tone = "dark", compact = false }) => {
  const c = tone === "light" ? "#fff" : TOKENS.ink;
  const ghanaCol = tone === "light" ? TOKENS.starGold : TOKENS.terracotta;
  const w = compact ? 40 : 46;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 13, color: c }}>
      <svg viewBox="0 0 304 182" width={w} height={w * 0.6} aria-label="aws">
        <path fill={c} d="M86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2-4.9-4.8-7.4-11.2-7.4-19.2 0-8.5 3-15.4 9.1-20.6 6.1-5.2 14.2-7.8 24.5-7.8 3.4 0 6.9.3 10.6.8 3.7.5 7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3-3.7.9-7.3 2-10.8 3.4-1.6.7-2.8 1.1-3.5 1.3-.7.2-1.2.3-1.6.3-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5.5-.7 1.4-1.4 2.8-2.1 3.5-1.8 7.7-3.3 12.6-4.5 4.9-1.3 10.1-1.9 15.6-1.9 11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4zM45.8 81.6c3.3 0 6.7-.6 10.3-1.8 3.6-1.2 6.8-3.4 9.5-6.4 1.6-1.9 2.8-4 3.4-6.4.6-2.4 1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7-3.2-.4-6.3-.6-9.4-.6-6.7 0-11.6 1.3-14.9 4-3.3 2.7-4.9 6.5-4.9 11.5 0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9L96.7 10.2c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9.8-.6 2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6-.1.6-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9-.8.6-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1-.8-.7-1.5-2-1.9-4L156 23l-15.4 64.4c-.5 2-1.1 3.3-1.9 4-.8.7-2.2 1-4 1h-8.6zm128.5 2.7c-5.2 0-10.4-.6-15.4-1.8-5-1.2-8.9-2.5-11.5-4-1.6-.9-2.7-1.9-3.1-2.8-.4-.9-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3.6.2 1.5.6 2.5 1 3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3 3.4-2.2 5.2-5.4 5.2-9.5 0-2.8-.9-5.1-2.7-7-1.8-1.9-5.2-3.6-10.1-5.2L246 52c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1 1.8-3.2 4.2-6 7.2-8.2 3-2.3 6.4-4 10.4-5.2 4-1.2 8.2-1.7 12.6-1.7 2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6 1.8.6 3.2 1.2 4.2 1.8 1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8-3.1 1.9-4.7 4.8-4.7 8.9 0 2.8 1 5.2 3 7.1 2 1.9 5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6 3.1 4.1 4.6 8.8 4.6 14 0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z"/>
        <path fill={TOKENS.awsOrange} fillRule="evenodd" clipRule="evenodd" d="M273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z"/>
        <path fill={TOKENS.awsOrange} fillRule="evenodd" clipRule="evenodd" d="M287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z"/>
      </svg>
      <div style={{ width: 1, height: 26, background: tone === "light" ? "rgba(255,255,255,0.25)" : "rgba(26,20,16,0.2)" }} />
      <div style={{ lineHeight: 1.15, fontWeight: 800, letterSpacing: "0.02em", textTransform: "uppercase" }}>
        <div style={{ fontSize: compact ? 12 : 13 }}>Community Day</div>
        <div style={{ fontSize: compact ? 9 : 10, color: ghanaCol, marginTop: 3, fontWeight: 700, letterSpacing: "0.16em" }}>Ghana · 2026</div>
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
      fontFamily: "'Inter', sans-serif",
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
const Nav = ({ onRegister, onMobileToggle, mobileOpen, darkHero = false }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [["About", "about"], ["Tracks", "tracks"], ["Speakers", "speakers"], ["Agenda", "agenda"], ["Sponsors", "sponsors"], ["FAQ", "faq"]];

  // When over the dark hero (not scrolled), use light text and translucent dark surface.
  // After scroll, snap to the page's normal cream nav.
  const onDark = darkHero && !scrolled;
  const textColor = onDark ? "#fff" : TOKENS.ink;
  const iconStroke = onDark ? "#fff" : TOKENS.ink;

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? "14px 40px" : "22px 40px",
      transition: "all .3s ease",
      background: scrolled ? "rgba(250,246,238,0.92)"
                : (onDark ? "rgba(31,42,61,0.4)" : "transparent"),
      backdropFilter: scrolled || onDark ? "blur(12px)" : "none",
      borderBottom: scrolled ? `1px solid ${TOKENS.line}`
                  : (onDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent"),
      display: "flex", justifyContent: "space-between", alignItems: "center",
    }}>
      <a href="#top" style={{ textDecoration: "none" }}>
        <Wordmark compact={scrolled} tone={onDark ? "light" : "dark"} />
      </a>
      <div className="nav-links" style={{ display: "flex", gap: 28, fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {links.map(([l, id]) => (
          <a key={id} href={`#${id}`} style={{ color: textColor, textDecoration: "none", opacity: 0.78 }}
             onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
             onMouseLeave={(e) => e.currentTarget.style.opacity = 0.78}>
            {l}
          </a>
        ))}
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
  const links = [["About", "about"], ["Tracks", "tracks"], ["Speakers", "speakers"], ["Agenda", "agenda"], ["Sponsors", "sponsors"], ["FAQ", "faq"]];
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
        {links.map(([l, id]) => (
          <a key={id} href={`#${id}`} onClick={onClose} style={{
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

Object.assign(window, {
  TOKENS, Wordmark, KenteStripes, KenteBar, KenteDot,
  SectionEyebrow, SectionHeadline,
  Countdown, Nav, MobileMenu,
});
