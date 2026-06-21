/* Why Attend + Speakers (featured keynotes + grid) + Agenda + CFP.
   Agenda is the real run-of-show from the action doc. Speakers mix confirmed names + TBA. */

const { TOKENS, SectionEyebrow, SectionHeadline, KenteBar, Adinkra, Reveal } = window;
const { btnPrimary, btnGhost, btnPrimaryNavy, btnGhostNavy } = window;

/* ───────────────────── Why Attend ───────────────────── */
const WhyAttend = () => {
  const cards = [
    ["Latest from AWS", "Hear the newest services, patterns, and launches explained by people who use them daily."],
    ["African use cases", "Real production stories across FinTech, EdTech, and AgriTech — built for our context."],
    ["Community", "Join a growing network of AWS users, Heroes, and Community Builders across West Africa."],
    ["Free to attend", "Community-led and free, powered by our sponsors. Everyone is welcome."],
  ];
  return (
    <section style={{ background: TOKENS.cream, padding: "120px 56px", borderTop: `1px solid ${TOKENS.line}` }}>
      <Reveal>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionEyebrow>Why attend</SectionEyebrow>
          <SectionHeadline size="large">Worth your Saturday</SectionHeadline>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 64 }} className="expect-grid">
            {cards.map(([title, desc], i) => (
              <div key={title} style={{ display: "flex", flexDirection: "column", gap: 14, paddingTop: 24, borderTop: `2px solid ${TOKENS.ink}` }}>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 20, fontWeight: 800, color: TOKENS.ink, margin: 0, letterSpacing: "-0.01em" }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: TOKENS.ink2, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

/* ───────────────────── Speakers ─────────────────────
   Featured keynotes (TBA) + grid mixing confirmed + TBA. */
const SPEAKERS = [
  { name: "David Quarguine", role: "Cloud Architect", topic: "PCI DSS & compliance patterns on AWS", track: "FinTech", initials: "DQ", confirmed: true },
  { name: "Ebow Anamuah", role: "EdTech Founder / CTO", topic: "Scaling a learning platform on AWS", track: "EdTech", initials: "EA", confirmed: true },
  { name: "Speaker TBA", role: "AgriTech engineer", topic: "IoT & satellite data pipelines on AWS", track: "AgriTech", initials: "—", confirmed: false },
  { name: "Speaker TBA", role: "GenAI startup founder", topic: "Building with Amazon Bedrock", track: "GenAI", initials: "—", confirmed: false },
  { name: "Speaker TBA", role: "Enterprise ML lead", topic: "ML in production, the hard parts", track: "GenAI", initials: "—", confirmed: false },
  { name: "Speaker TBA", role: "Community Builder", topic: "Cloud careers & community", track: "Careers", initials: "—", confirmed: false },
];
const TRACK_TINT = { FinTech: TOKENS.terracotta, EdTech: "#3B6BB8", AgriTech: TOKENS.green, GenAI: TOKENS.gold, Careers: TOKENS.indigo };

const KeynoteCard = ({ title, sub }) => (
  <div style={{
    background: TOKENS.navy, color: "#fff", borderRadius: 16, padding: "40px 36px",
    position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", gap: 16, minHeight: 240,
  }}>
    <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: TOKENS.starGold, fontWeight: 700 }}>Keynote</div>
    <div style={{ display: "flex", gap: 20, alignItems: "center", marginTop: 8 }}>
      <div style={{ width: 72, height: 72, borderRadius: 12, background: "rgba(255,255,255,0.08)", border: "1px dashed rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 24, color: "rgba(255,255,255,0.5)" }}>?</div>
      <div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 26, fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 1.05 }}>To be announced</div>
        <div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", marginTop: 8 }}>{title}</div>
      </div>
    </div>
    <p style={{ fontSize: 14, lineHeight: 1.55, color: "rgba(255,255,255,0.6)", margin: "auto 0 0" }}>{sub}</p>
  </div>
);

const SpeakerCard = ({ s }) => {
  const c = TRACK_TINT[s.track] || TOKENS.terracotta;
  return (
    <div style={{ background: "#fff", border: `1px solid rgba(26,20,16,0.12)`, borderRadius: 14, overflow: "hidden", color: "#1a1410" }}>
      <div style={{ padding: 24, display: "flex", gap: 18, alignItems: "start" }}>
        <div style={{
          width: 56, height: 56, borderRadius: 10, flexShrink: 0,
          background: s.confirmed ? TOKENS.navy : "rgba(26,20,16,0.05)",
          color: s.confirmed ? "#fff" : "#3a2f28",
          border: s.confirmed ? "none" : "1px dashed rgba(26,20,16,0.25)",
          display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 16,
        }}>{s.initials}</div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: 10 }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, fontWeight: 800, color: "#1a1410", textTransform: "uppercase", letterSpacing: "-0.005em", lineHeight: 1.1 }}>{s.name}</div>
            <span style={{ fontSize: 9, padding: "4px 9px", borderRadius: 3, background: c, color: "#fff", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", flexShrink: 0 }}>{s.track}</span>
          </div>
          <div style={{ fontSize: 13, color: "#3a2f28", marginTop: 4 }}>{s.role}</div>
          <div style={{ fontSize: 14, color: "#1a1410", marginTop: 12, fontWeight: 500, lineHeight: 1.4 }}>"{s.topic}"</div>
        </div>
      </div>
    </div>
  );
};

const Speakers = () => (
  <section id="speakers" style={{ background: TOKENS.paper, padding: "120px 56px" }}>
    <Reveal>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 32 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Adinkra name="gyenyame" size={18} color={TOKENS.terracotta} />
              <SectionEyebrow>Speakers</SectionEyebrow>
            </div>
            <SectionHeadline size="large">Speakers &amp; keynotes</SectionHeadline>
          </div>
          <div style={{ fontSize: 14, color: TOKENS.ink2, maxWidth: 340, lineHeight: 1.55 }}>
            Keynotes and a first wave of speakers are being confirmed. The call for speakers is open — add your name to the line-up.
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 56 }} className="keynote-grid">
          <KeynoteCard title="The State of Cloud in Africa" sub="An AWS Hero, Senior Developer Advocate, or AWS Sub-Saharan Africa leader." />
          <KeynoteCard title="Building for Scale on AWS" sub="A senior technology leader from a recognised Ghanaian or pan-African company." />
        </div>

        <div className="speakers-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 16 }}>
          {SPEAKERS.map((s, i) => <SpeakerCard key={i} s={s} />)}
        </div>

        <div style={{ marginTop: 24, display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <a href="/cfp.html" style={btnPrimary()}>Submit a talk</a>
          <span style={{ fontSize: 13, color: TOKENS.ink2 }}>Full line-up announced closer to the event.</span>
        </div>
      </div>
    </Reveal>
  </section>
);

/* ───────────────────── Agenda (real run-of-show) ───────────────────── */
const AGENDA = [
  { time: "08:00", title: "Arrival, registration & breakfast snacks", tag: "Networking" },
  { time: "09:00", title: "Opening remarks & welcome", tag: "Opening", sub: "MC + User Group Lead" },
  { time: "09:30", title: "Opening Keynote — The State of Cloud in Africa", tag: "Keynote" },
  { time: "10:15", title: "Keynote 2 — Building for Scale on AWS", tag: "Keynote" },
  { time: "11:00", title: "Coffee break", tag: "Break" },
  { time: "11:15", title: "Panel — African Builders on Generative AI", tag: "Panel", sub: "4 speakers + moderator" },
  { time: "12:15", title: "Lunch & networking", tag: "Networking", sub: "Jollof · Waakye · Fried yam" },
  { time: "13:15", title: "Breakout Session 1", tag: "Breakout", tracks: ["FinTech", "EdTech", "AgriTech"] },
  { time: "14:00", title: "Breakout Session 2", tag: "Breakout", tracks: ["FinTech", "EdTech", "AgriTech"] },
  { time: "14:45", title: "Breakout Session 3 — community talks", tag: "Breakout", tracks: ["Track A", "Track B", "Track C"] },
  { time: "15:30", title: "Tea break", tag: "Break" },
  { time: "15:45", title: "Fireside — Cloud Careers & Community Building", tag: "Panel", sub: "4 speakers + moderator" },
  { time: "16:30", title: "Closing ceremony, raffle & group photo", tag: "Closing" },
  { time: "17:00", title: "Networking reception", tag: "Networking" },
];
const TAG_COLOR = { Keynote: TOKENS.terracotta, Panel: TOKENS.indigo, Breakout: TOKENS.green, Workshop: TOKENS.gold, Networking: "#8a7a68", Opening: TOKENS.navy, Closing: TOKENS.navy, Break: "#b3a896" };

const Agenda = () => (
  <section id="agenda" style={{ background: TOKENS.cream, padding: "120px 56px", borderTop: `1px solid ${TOKENS.line}` }}>
    <Reveal>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Adinkra name="nkyinkyim" size={18} color={TOKENS.terracotta} />
          <SectionEyebrow>Agenda · 29 August 2026</SectionEyebrow>
        </div>
        <SectionHeadline size="large">Run of show</SectionHeadline>
        <div style={{ marginTop: 56, background: "#fff", border: `1px solid rgba(26,20,16,0.12)`, borderRadius: 12, overflow: "hidden", color: "#1a1410" }}>
          {AGENDA.map((item, i) => {
            const c = TAG_COLOR[item.tag] || TOKENS.ink2;
            const isBreak = item.tag === "Break";
            return (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "92px 1fr auto", gap: 24, padding: "20px 28px",
                borderTop: i > 0 ? `1px solid rgba(26,20,16,0.1)` : "none",
                background: isBreak ? "rgba(26,20,16,0.03)" : "transparent", alignItems: "center",
              }} className="agenda-row">
                <div style={{ fontSize: 17, color: "#1a1410", fontWeight: 800, fontVariantNumeric: "tabular-nums" }}>{item.time}</div>
                <div>
                  <div style={{ fontSize: 16, color: "#1a1410", fontWeight: 600, lineHeight: 1.35 }}>{item.title}</div>
                  {item.sub && <div style={{ fontSize: 13, color: "#3a2f28", marginTop: 4 }}>{item.sub}</div>}
                  {item.tracks && (
                    <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
                      {item.tracks.map(t => (
                        <span key={t} style={{ fontSize: 10, padding: "4px 9px", borderRadius: 3, background: "rgba(26,20,16,0.06)", color: "#3a2f28", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{t}</span>
                      ))}
                    </div>
                  )}
                </div>
                <span style={{ fontSize: 9, padding: "5px 10px", borderRadius: 3, background: c, color: "#fff", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{item.tag}</span>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ fontSize: 13, color: TOKENS.ink2 }}>
            Agenda is provisional and subject to change as speakers are confirmed.
          </div>
          <a href="/agenda.html" style={{ fontSize: 13, fontWeight: 700, color: TOKENS.terracotta, textDecoration: "none", letterSpacing: "0.04em" }}>Full agenda →</a>
        </div>
      </div>
    </Reveal>
  </section>
);

/* ───────────────────── CFP ───────────────────── */
const CFP = () => (
  <section id="cfp" style={{ background: TOKENS.navy, color: "#fff", padding: "120px 56px", position: "relative", overflow: "hidden" }}>
    <KenteBar height={4} />
    <Reveal>
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", paddingTop: 24 }}>
        <SectionEyebrow dark>Call for speakers</SectionEyebrow>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 80, marginTop: 24, alignItems: "start" }} className="cfp-grid">
          <div>
            <SectionHeadline dark size="large">Share what you've built</SectionHeadline>
            <p style={{ fontSize: 18, lineHeight: 1.6, marginTop: 32, color: "rgba(255,255,255,0.78)", maxWidth: 580 }}>
              We want practical, specific talks grounded in real experience — across FinTech, EdTech, AgriTech, GenAI, and beyond. First-time speakers especially welcome.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
              <a href="/cfp.html" style={btnPrimaryNavy()}>Submit a talk</a>
              <a href="/cfp.html" style={btnGhostNavy()}>Speaker FAQ</a>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: TOKENS.starGold, fontWeight: 700, marginBottom: 8 }}>Formats</div>
            {[
              ["Keynote", "45 min", "High-level, inspiring, big-picture"],
              ["Breakout talk", "40 min", "Deep dive into a topic or architecture"],
              ["Panel", "60 min", "Submit your perspective; we curate"],
              ["Workshop", "varies", "Hands-on, build-along session"],
            ].map(([f, d, desc]) => (
              <div key={f} style={{ padding: "20px 0", borderTop: "1px solid rgba(255,255,255,0.14)", display: "grid", gridTemplateColumns: "150px 70px 1fr", gap: 16, alignItems: "start" }}>
                <div style={{ fontSize: 16, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.02em" }}>{f}</div>
                <div style={{ fontSize: 12, color: TOKENS.starGold, paddingTop: 3, fontWeight: 700 }}>{d}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", paddingTop: 2, lineHeight: 1.5 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  </section>
);

Object.assign(window, { WhyAttend, Speakers, Agenda, CFP });
