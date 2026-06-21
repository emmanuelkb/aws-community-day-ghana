/* Three aesthetic directions for AWS Community Day Ghana
   Each is a self-contained hero+slice meant to communicate tone.
*/

const Wordmark = ({ tone = "light", compact = false }) => {
  const c = tone === "light" ? "#fff" : "#0a0a0a";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, color: c, fontFamily: "'Space Grotesk', sans-serif" }}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="1" y="1" width="26" height="26" rx="6" stroke={c} strokeWidth="1.5" />
        <path d="M7 18 L14 8 L21 18 M10 14 L18 14" stroke={c} strokeWidth="1.5" strokeLinecap="square" />
      </svg>
      <div style={{ lineHeight: 1, fontWeight: 600, letterSpacing: "-0.01em" }}>
        <div style={{ fontSize: compact ? 13 : 14 }}>AWS Community Day</div>
        <div style={{ fontSize: compact ? 11 : 12, opacity: 0.6, marginTop: 3, fontVariationSettings: '"wght" 400' }}>Ghana · 2026</div>
      </div>
    </div>
  );
};

/* ──────────────────────────── Direction A: Editorial Kente ──────────────────────────── */
const DirectionA = () => (
  <div style={{
    width: 1280, height: 820, background: "#FAF6EE", color: "#1a1410",
    fontFamily: "'Space Grotesk', sans-serif", position: "relative", overflow: "hidden",
  }}>
    {/* Kente-inspired stripe band, top right */}
    <div style={{ position: "absolute", top: 0, right: 0, width: 380, height: "100%", display: "flex", flexDirection: "column" }}>
      {[
        ["#1B3A6B", 60], ["#E8B23A", 18], ["#1a1410", 8], ["#E8B23A", 18],
        ["#C44536", 90], ["#FAF6EE", 14], ["#1B3A6B", 40], ["#E8B23A", 28],
        ["#1a1410", 12], ["#C44536", 60], ["#1B3A6B", 80], ["#E8B23A", 22],
        ["#C44536", 110], ["#1B3A6B", 50], ["#E8B23A", 18], ["#1a1410", 10],
        ["#C44536", 70], ["#FAF6EE", 12], ["#1B3A6B", 80],
      ].map(([c, h], i) => (
        <div key={i} style={{ background: c, height: h, width: "100%" }} />
      ))}
    </div>
    {/* Diagonal kente check accent block */}
    <div style={{
      position: "absolute", top: 480, right: 280, width: 220, height: 220,
      background: "repeating-linear-gradient(45deg, #1B3A6B 0 14px, #E8B23A 14px 28px, #C44536 28px 42px)",
      mixBlendMode: "multiply", opacity: 0.9,
    }} />

    <div style={{ padding: "36px 56px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 2 }}>
      <Wordmark tone="dark" />
      <div style={{ display: "flex", gap: 28, fontSize: 13, color: "#1a1410" }}>
        <span>About</span><span>Speakers</span><span>Agenda</span><span>Sponsors</span><span>FAQ</span>
      </div>
      <button style={{
        background: "#1a1410", color: "#FAF6EE", border: 0, padding: "10px 18px", borderRadius: 999,
        fontSize: 13, fontWeight: 500, fontFamily: "inherit",
      }}>Register →</button>
    </div>

    <div style={{ padding: "60px 56px", maxWidth: 820, position: "relative", zIndex: 2 }}>
      <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C44536", fontWeight: 600 }}>
        Coming soon · 1st Edition
      </div>
      <h1 style={{
        fontFamily: "'Fraunces', serif", fontSize: 132, lineHeight: 0.92, margin: "24px 0 0",
        letterSpacing: "-0.04em", fontWeight: 400, fontStyle: "italic",
      }}>
        From <span style={{ color: "#C44536" }}>Accra</span><br />
        to the cloud.
      </h1>
      <p style={{ fontSize: 19, lineHeight: 1.5, marginTop: 28, maxWidth: 560, color: "#3a2f28" }}>
        A community-led day of cloud, AI, and engineering, gathering Ghana's builders, architects, and students for talks, workshops, and connection.
      </p>

      <div style={{ display: "flex", gap: 12, marginTop: 36 }}>
        <button style={{ background: "#C44536", color: "#fff", border: 0, padding: "16px 28px", borderRadius: 6, fontSize: 14, fontWeight: 600, fontFamily: "inherit" }}>
          Get notified
        </button>
        <button style={{ background: "transparent", color: "#1a1410", border: "1px solid #1a1410", padding: "16px 28px", borderRadius: 6, fontSize: 14, fontWeight: 500, fontFamily: "inherit" }}>
          Speak at the event
        </button>
      </div>
    </div>

    <div style={{ position: "absolute", bottom: 36, left: 56, display: "flex", gap: 56, fontSize: 13, color: "#3a2f28", zIndex: 2 }}>
      <div>
        <div style={{ opacity: 0.55, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 6 }}>When</div>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontStyle: "italic" }}>Coming soon</div>
      </div>
      <div>
        <div style={{ opacity: 0.55, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 6 }}>Where</div>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontStyle: "italic" }}>Accra, Ghana</div>
      </div>
      <div>
        <div style={{ opacity: 0.55, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 6 }}>Tracks</div>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: 22, fontStyle: "italic" }}>AI · Security · DevOps · Data</div>
      </div>
    </div>
  </div>
);

/* ──────────────────────────── Direction B: Terminal / dark builder ──────────────────────────── */
const DirectionB = () => (
  <div style={{
    width: 1280, height: 820, background: "#0a0d12", color: "#e6edf3",
    fontFamily: "'JetBrains Mono', monospace", position: "relative", overflow: "hidden",
  }}>
    {/* grid */}
    <div style={{
      position: "absolute", inset: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      backgroundSize: "48px 48px",
    }} />
    {/* glow */}
    <div style={{
      position: "absolute", top: -200, right: -100, width: 700, height: 700, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(255,154,60,0.18) 0%, transparent 60%)",
    }} />

    <div style={{ padding: "32px 56px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 2 }}>
      <Wordmark tone="light" />
      <div style={{ display: "flex", gap: 28, fontSize: 12, color: "#9ba6b1" }}>
        <span>./about</span><span>./speakers</span><span>./agenda</span><span>./sponsors</span>
      </div>
      <button style={{
        background: "#FF9A3C", color: "#0a0d12", border: 0, padding: "9px 16px", borderRadius: 4,
        fontSize: 12, fontWeight: 700, fontFamily: "inherit",
      }}>$ register</button>
    </div>

    <div style={{ padding: "70px 56px", position: "relative", zIndex: 2 }}>
      <div style={{ fontSize: 12, color: "#FF9A3C", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "#56d364" }} />
        STATUS: COMING_SOON · EDITION_001
      </div>
      <h1 style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: 96, lineHeight: 1, margin: "30px 0 0",
        letterSpacing: "-0.04em", fontWeight: 700, color: "#fff",
      }}>
        $ deploy<br />
        <span style={{ color: "#FF9A3C" }}>--region=ghana</span><br />
        --community<span style={{ animation: "blink 1s step-end infinite" }}>_</span>
      </h1>

      <div style={{ marginTop: 44, display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 20, maxWidth: 880 }}>
        {[
          ["DATE", "coming.soon"],
          ["VENUE", "accra, gh"],
          ["TRACKS", "4"],
          ["TICKETS", "free"],
        ].map(([k, v]) => (
          <div key={k} style={{ border: "1px solid #1f2937", padding: "16px 18px", borderRadius: 4, background: "rgba(255,255,255,0.02)" }}>
            <div style={{ fontSize: 10, color: "#6b7785", letterSpacing: "0.18em" }}>{k}</div>
            <div style={{ fontSize: 18, color: "#e6edf3", marginTop: 6, fontWeight: 500 }}>{v}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 48, display: "flex", gap: 12 }}>
        <button style={{ background: "#FF9A3C", color: "#0a0d12", border: 0, padding: "14px 24px", borderRadius: 4, fontSize: 13, fontWeight: 700, fontFamily: "inherit" }}>
          → notify me
        </button>
        <button style={{ background: "transparent", color: "#e6edf3", border: "1px solid #2a3441", padding: "14px 24px", borderRadius: 4, fontSize: 13, fontWeight: 500, fontFamily: "inherit" }}>
          submit talk →
        </button>
      </div>
    </div>

    <div style={{
      position: "absolute", bottom: 28, left: 56, right: 56, fontSize: 11, color: "#6b7785",
      display: "flex", justifyContent: "space-between", borderTop: "1px solid #1f2937", paddingTop: 16,
    }}>
      <span>~/ghana/community-day $ <span style={{ color: "#56d364" }}>ready</span></span>
      <span>↑ scroll for agenda</span>
    </div>
  </div>
);

/* ──────────────────────────── Direction C: Warm community / sun-bleached ──────────────────────────── */
const DirectionC = () => (
  <div style={{
    width: 1280, height: 820, background: "#F4ECDD", color: "#2A1F14",
    fontFamily: "'Inter', sans-serif", position: "relative", overflow: "hidden",
  }}>
    {/* warm sun */}
    <div style={{
      position: "absolute", top: -260, right: -180, width: 700, height: 700, borderRadius: "50%",
      background: "radial-gradient(circle, #E8762B 0%, #C2451B 40%, transparent 75%)",
      opacity: 0.85,
    }} />
    {/* subtle paper texture via dotted bg */}
    <div style={{
      position: "absolute", inset: 0,
      backgroundImage: "radial-gradient(rgba(42,31,20,0.06) 1px, transparent 1px)",
      backgroundSize: "20px 20px",
    }} />

    <div style={{ padding: "36px 56px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 2 }}>
      <Wordmark tone="dark" />
      <div style={{ display: "flex", gap: 28, fontSize: 13, color: "#2A1F14" }}>
        <span>About</span><span>Speakers</span><span>Agenda</span><span>Sponsors</span><span>FAQ</span>
      </div>
      <button style={{
        background: "#2A1F14", color: "#F4ECDD", border: 0, padding: "10px 18px", borderRadius: 999,
        fontSize: 13, fontWeight: 500, fontFamily: "inherit",
      }}>Register</button>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, padding: "50px 56px", position: "relative", zIndex: 2 }}>
      <div>
        <div style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "#C2451B", fontWeight: 600 }}>
          Akwaaba · 1st Edition · 2026
        </div>
        <h1 style={{
          fontFamily: "'Inter', sans-serif", fontSize: 108, lineHeight: 0.96, margin: "24px 0 0",
          letterSpacing: "-0.045em", fontWeight: 800, color: "#2A1F14",
        }}>
          The cloud, built <span style={{ fontStyle: "italic", fontWeight: 400, fontFamily: "'Fraunces', serif" }}>together</span>.
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.55, marginTop: 28, maxWidth: 480, color: "#5a4a3a" }}>
          One day. Ghana's cloud community. Talks, workshops, and the people building Africa's digital future — by the community, for the community.
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
          <button style={{ background: "#C2451B", color: "#fff", border: 0, padding: "16px 28px", borderRadius: 999, fontSize: 14, fontWeight: 600, fontFamily: "inherit" }}>
            Get notified
          </button>
          <button style={{ background: "transparent", color: "#2A1F14", border: "1.5px solid #2A1F14", padding: "16px 28px", borderRadius: 999, fontSize: 14, fontWeight: 500, fontFamily: "inherit" }}>
            Submit a talk
          </button>
        </div>
      </div>

      {/* Side card stack — placeholder community photos */}
      <div style={{ position: "relative", height: 480 }}>
        <div style={{
          position: "absolute", top: 30, right: 0, width: 320, height: 380,
          background: "linear-gradient(135deg, #8a5a2e, #5a3a1e)",
          borderRadius: 16, transform: "rotate(4deg)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "rgba(255,255,255,0.4)", fontFamily: "'JetBrains Mono', monospace", fontSize: 12,
        }}>[ photo · community ]</div>
        <div style={{
          position: "absolute", top: 80, right: 80, width: 280, height: 340,
          background: "linear-gradient(135deg, #E8762B, #C2451B)",
          borderRadius: 16, transform: "rotate(-3deg)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "rgba(255,255,255,0.6)", fontFamily: "'JetBrains Mono', monospace", fontSize: 12,
        }}>[ photo · venue ]</div>
        <div style={{
          position: "absolute", top: 130, right: 150, width: 240, height: 300,
          background: "#F4ECDD",
          border: "1px solid #2A1F14",
          borderRadius: 16, transform: "rotate(2deg)",
          padding: 20, fontSize: 12, color: "#2A1F14",
          fontFamily: "'JetBrains Mono', monospace",
          boxShadow: "0 12px 40px rgba(42,31,20,0.15)",
        }}>
          <div style={{ fontSize: 10, opacity: 0.5, letterSpacing: "0.1em" }}>· STICKY NOTE ·</div>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: 26, fontStyle: "italic", marginTop: 16, lineHeight: 1.2 }}>
            "The cloud is people."
          </div>
          <div style={{ marginTop: 14, fontSize: 11, opacity: 0.6 }}>— every community day, ever</div>
        </div>
      </div>
    </div>

    <div style={{ position: "absolute", bottom: 36, left: 56, display: "flex", gap: 48, fontSize: 13, color: "#2A1F14", zIndex: 2 }}>
      {[["When", "Coming soon"], ["Where", "Accra, Ghana"], ["Cost", "Free · community-led"]].map(([k, v]) => (
        <div key={k}>
          <div style={{ opacity: 0.5, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 6 }}>{k}</div>
          <div style={{ fontSize: 17, fontWeight: 600 }}>{v}</div>
        </div>
      ))}
    </div>
  </div>
);

Object.assign(window, { DirectionA, DirectionB, DirectionC });
