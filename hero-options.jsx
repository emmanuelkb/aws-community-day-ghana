/* Two hero directions for AWS Community Day Ghana 2026, side by side.
   Shared content: Logo B lockup · date 29 Aug 2026 · "by the community, for the community"
   · CTA pair (Register → Luma / Notify me) · stat chips.
   A = bold navy (Toronto/Bay Area)   B = clean light (AWS-directory style) */

const HOT = {
  navy: "#1F2A3D", navy2: "#172234",
  cream: "#FAF6EE", ink: "#1a1410", ink2: "#3a2f28",
  terra: "#C44536", indigo: "#1B3A6B", gold: "#E8B23A",
  awsOrange: "#FF9900", starGold: "#FFC857", green: "#2C6B4F",
  line: "rgba(26,20,16,0.12)",
};

const StarPath = (props) => (
  <path d="M50 6 L61 38.5 L96 38.5 L67.5 58.5 L78.5 92 L50 71.5 L21.5 92 L32.5 58.5 L4 38.5 L39 38.5 Z" {...props}/>
);

const AwsSmileH = ({ wordmark = "#fff", smile = "#FF9900", w = 130 }) => (
  <svg viewBox="0 0 304 182" width={w} height={w * 0.6} aria-label="aws">
    <path fill={wordmark} d="M86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2-4.9-4.8-7.4-11.2-7.4-19.2 0-8.5 3-15.4 9.1-20.6 6.1-5.2 14.2-7.8 24.5-7.8 3.4 0 6.9.3 10.6.8 3.7.5 7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3-3.7.9-7.3 2-10.8 3.4-1.6.7-2.8 1.1-3.5 1.3-.7.2-1.2.3-1.6.3-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5.5-.7 1.4-1.4 2.8-2.1 3.5-1.8 7.7-3.3 12.6-4.5 4.9-1.3 10.1-1.9 15.6-1.9 11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4zM45.8 81.6c3.3 0 6.7-.6 10.3-1.8 3.6-1.2 6.8-3.4 9.5-6.4 1.6-1.9 2.8-4 3.4-6.4.6-2.4 1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7-3.2-.4-6.3-.6-9.4-.6-6.7 0-11.6 1.3-14.9 4-3.3 2.7-4.9 6.5-4.9 11.5 0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9L96.7 10.2c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9.8-.6 2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6-.1.6-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9-.8.6-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1-.8-.7-1.5-2-1.9-4L156 23l-15.4 64.4c-.5 2-1.1 3.3-1.9 4-.8.7-2.2 1-4 1h-8.6zm128.5 2.7c-5.2 0-10.4-.6-15.4-1.8-5-1.2-8.9-2.5-11.5-4-1.6-.9-2.7-1.9-3.1-2.8-.4-.9-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3.6.2 1.5.6 2.5 1 3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3 3.4-2.2 5.2-5.4 5.2-9.5 0-2.8-.9-5.1-2.7-7-1.8-1.9-5.2-3.6-10.1-5.2L246 52c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1 1.8-3.2 4.2-6 7.2-8.2 3-2.3 6.4-4 10.4-5.2 4-1.2 8.2-1.7 12.6-1.7 2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6 1.8.6 3.2 1.2 4.2 1.8 1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8-3.1 1.9-4.7 4.8-4.7 8.9 0 2.8 1 5.2 3 7.1 2 1.9 5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6 3.1 4.1 4.6 8.8 4.6 14 0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z"/>
    <path fill={smile} fillRule="evenodd" clipRule="evenodd" d="M273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z"/>
    <path fill={smile} fillRule="evenodd" clipRule="evenodd" d="M287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z"/>
  </svg>
);

/* Logo B lockup — configurable colors so it works on dark & light */
const LockupB = ({ wordmark, communityColor, cityColor, ruleColor, starColor, starOpacity, smile = "#FF9900", smileW = 140, big = "clamp(48px, 7vw, 96px)" }) => (
  <div style={{ textAlign: "center", fontFamily: "'Inter', sans-serif" }}>
    <AwsSmileH w={smileW} wordmark={wordmark} smile={smile} />
    <div style={{
      marginTop: 22, fontSize: big, lineHeight: 0.95, fontWeight: 800,
      letterSpacing: "0.005em", color: communityColor, textTransform: "uppercase",
    }}>
      Community Day
    </div>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginTop: 18 }}>
      <div style={{ height: 1.5, width: 96, background: ruleColor }} />
      <div style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
        <svg viewBox="0 0 100 100" style={{
          position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
          width: 120, height: 120, opacity: starOpacity, pointerEvents: "none",
        }}>
          <StarPath fill={starColor}/>
        </svg>
        <div style={{
          position: "relative", fontSize: 26, letterSpacing: "0.16em", textTransform: "uppercase",
          color: cityColor, fontWeight: 800, padding: "0 6px",
        }}>Accra</div>
      </div>
      <div style={{ height: 1.5, width: 96, background: ruleColor }} />
    </div>
  </div>
);

const STAT_CHIPS = [["12+", "Sessions"], ["300", "Attendees"], ["3", "Tracks"], ["1", "Workshop Track"]];
const META = "Saturday 29 August 2026  ·  Accra, Ghana  ·  Main Auditorium";

/* ───────────────── HERO A — Bold Navy ───────────────── */
const HeroNavy = () => (
  <div style={{
    width: "100%", height: "100%", background: HOT.navy, color: "#fff",
    position: "relative", overflow: "hidden",
    display: "flex", flexDirection: "column",
    fontFamily: "'Inter', sans-serif",
  }}>
    <div style={{
      position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none",
      backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "44px 44px",
    }} />
    <div aria-hidden style={{ position: "absolute", top: 88, left: 0, height: 6, width: 220,
      background: `linear-gradient(90deg, ${HOT.terra} 0 33%, ${HOT.starGold} 33% 66%, ${HOT.green} 66% 100%)` }}/>
    <div aria-hidden style={{ position: "absolute", bottom: 0, right: 0, height: 6, width: 220,
      background: `linear-gradient(90deg, ${HOT.green} 0 33%, ${HOT.starGold} 33% 66%, ${HOT.terra} 66% 100%)` }}/>

    {/* mini nav */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "26px 44px", position: "relative", zIndex: 2 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 9, color: "#fff" }}>
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect x="1.5" y="1.5" width="29" height="29" rx="7" stroke="#fff" strokeWidth="1.5" />
          <path d="M8 21 L16 9 L24 21 M11.5 16.5 L20.5 16.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="square" />
        </svg>
        <div style={{ lineHeight: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700 }}>AWS Community Day</div>
          <div style={{ fontSize: 10, opacity: 0.6, marginTop: 3, letterSpacing: "0.14em", textTransform: "uppercase" }}>Ghana · 2026</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 26, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.85 }}>
        <span>About</span><span>Agenda</span><span>Speakers</span><span>Sponsors</span>
      </div>
      <div style={{ background: HOT.awsOrange, color: HOT.navy, padding: "11px 22px", borderRadius: 4, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Register</div>
    </div>

    {/* center */}
    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0 56px", position: "relative", zIndex: 2 }}>
      <LockupB
        wordmark="#fff" communityColor="#fff" cityColor={HOT.starGold}
        ruleColor="rgba(255,255,255,0.55)" starColor="#fff" starOpacity={0.16}
        smileW={132} big="clamp(46px, 6.5vw, 92px)"
      />
      <div style={{ marginTop: 28, fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", color: HOT.starGold, fontWeight: 700 }}>
        {META}
      </div>
      <p style={{ marginTop: 18, fontSize: 18, color: "rgba(255,255,255,0.78)", maxWidth: 600, textAlign: "center", lineHeight: 1.5 }}>
        By the community, for the community.
      </p>
      <div style={{ display: "flex", gap: 14, marginTop: 30 }}>
        <div style={{ background: HOT.awsOrange, color: HOT.navy, padding: "16px 32px", borderRadius: 4, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Register on Luma</div>
        <div style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.5)", padding: "16px 32px", borderRadius: 4, fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Notify me</div>
      </div>
    </div>

    {/* stat chips */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderTop: "1px solid rgba(255,255,255,0.16)", position: "relative", zIndex: 2 }}>
      {STAT_CHIPS.map(([n, l], i) => (
        <div key={l} style={{ padding: "22px 12px", textAlign: "center", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.12)" : "none" }}>
          <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.01em" }}>{n}</div>
          <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: HOT.starGold, fontWeight: 700, marginTop: 6 }}>{l}</div>
        </div>
      ))}
    </div>
  </div>
);

/* ───────────────── HERO B — Clean Light (AWS-directory style) ───────────────── */
const HeroLight = () => (
  <div style={{
    width: "100%", height: "100%", background: "#FBFAF7", color: HOT.ink,
    position: "relative", overflow: "hidden",
    display: "flex", flexDirection: "column",
    fontFamily: "'Inter', sans-serif",
  }}>
    {/* soft gradient glow, AWS-directory style */}
    <div aria-hidden style={{
      position: "absolute", top: -160, left: "50%", transform: "translateX(-50%)",
      width: 900, height: 520, borderRadius: "50%", filter: "blur(80px)", opacity: 0.5,
      background: `radial-gradient(closest-side, ${HOT.gold}55, transparent), radial-gradient(closest-side, ${HOT.terra}33, transparent 70%)`,
    }} />
    <div aria-hidden style={{
      position: "absolute", bottom: -200, right: -120, width: 560, height: 560, borderRadius: "50%",
      filter: "blur(90px)", opacity: 0.35,
      background: `radial-gradient(closest-side, ${HOT.indigo}44, transparent)`,
    }} />

    {/* mini nav */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "26px 44px", position: "relative", zIndex: 2 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 9, color: HOT.ink }}>
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <rect x="1.5" y="1.5" width="29" height="29" rx="7" stroke={HOT.ink} strokeWidth="1.5" />
          <path d="M8 21 L16 9 L24 21 M11.5 16.5 L20.5 16.5" stroke={HOT.ink} strokeWidth="1.5" strokeLinecap="square" />
        </svg>
        <div style={{ lineHeight: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700 }}>AWS Community Day</div>
          <div style={{ fontSize: 10, opacity: 0.55, marginTop: 3, letterSpacing: "0.14em", textTransform: "uppercase" }}>Ghana · 2026</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 26, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7 }}>
        <span>About</span><span>Agenda</span><span>Speakers</span><span>Sponsors</span>
      </div>
      <div style={{ background: HOT.navy, color: "#fff", padding: "11px 22px", borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Register</div>
    </div>

    {/* center */}
    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0 56px", position: "relative", zIndex: 2 }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 14px 7px 8px",
        borderRadius: 999, background: "#fff", border: `1px solid ${HOT.line}`,
        boxShadow: "0 1px 3px rgba(26,20,16,0.04)", marginBottom: 30,
      }}>
        <span style={{ background: HOT.terra, color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 999 }}>1st Edition</span>
        <span style={{ fontSize: 12, color: HOT.ink2, fontWeight: 600 }}>Akwaaba · Registration opens soon</span>
      </div>

      <LockupB
        wordmark={HOT.ink} communityColor={HOT.ink} cityColor={HOT.terra}
        ruleColor="rgba(26,20,16,0.35)" starColor={HOT.ink} starOpacity={0.1}
        smileW={132} big="clamp(46px, 6.5vw, 92px)"
      />
      <div style={{ marginTop: 26, fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: HOT.terra, fontWeight: 700 }}>
        {META}
      </div>
      <p style={{ marginTop: 16, fontSize: 18, color: HOT.ink2, maxWidth: 600, textAlign: "center", lineHeight: 1.5 }}>
        By the community, for the community.
      </p>
      <div style={{ display: "flex", gap: 14, marginTop: 30 }}>
        <div style={{ background: HOT.terra, color: "#fff", padding: "16px 32px", borderRadius: 999, fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>Register on Luma</div>
        <div style={{ background: "#fff", color: HOT.ink, border: `1px solid ${HOT.line}`, padding: "16px 32px", borderRadius: 999, fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>Notify me</div>
      </div>
    </div>

    {/* stat cards — soft rounded, directory style */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, padding: "0 44px 36px", position: "relative", zIndex: 2 }}>
      {STAT_CHIPS.map(([n, l], i) => (
        <div key={l} style={{
          background: "#fff", border: `1px solid ${HOT.line}`, borderRadius: 16, padding: "22px 24px",
          boxShadow: "0 1px 3px rgba(26,20,16,0.04)", position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 3,
            background: [HOT.terra, HOT.gold, HOT.green, HOT.indigo][i] }} />
          <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: "-0.02em", color: HOT.ink }}>{n}</div>
          <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: HOT.ink2, fontWeight: 700, marginTop: 6 }}>{l}</div>
        </div>
      ))}
    </div>
  </div>
);

window.HeroOptions = { HeroNavy, HeroLight };
