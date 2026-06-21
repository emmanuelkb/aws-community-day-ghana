/* Call for Speakers page — page-cfp.jsx
   Depends on site-core.jsx loading first (window exports). */

const { TOKENS, PageHeader, Reveal, SectionEyebrow, SectionHeadline, Adinkra } = window;
const { btnPrimaryNavy, btnGhostNavy, CFP_URL } = window;

const WE_WANT = [
  "Practical talks grounded in real production experience. Show your work.",
  "African use cases across FinTech, EdTech, AgriTech, and Generative AI.",
  "Honest lessons, including the 'Cloud Horror Stories' lightning thread on what went wrong and why.",
  "First-time speakers. We will help you shape your talk.",
];

const HOW = [
  ["Submit", "Send your title, abstract, and a short bio via the speaker form."],
  ["Review", "The programme team reads every submission and matches it against tracks and formats."],
  ["Confirm", "Selected speakers are confirmed and briefed before the day."],
];

const FORMATS = [
  ["Keynote", "45 min", "High-level, inspiring, big-picture"],
  ["Breakout talk", "40 min", "Deep dive into a topic or architecture"],
  ["Panel", "60 min", "Submit your perspective; we curate"],
  ["Workshop", "varies", "Hands-on, build-along session"],
];

const CFPPage = () => (
  <main>
    {/* Page Header */}
    <PageHeader
      glyph="sankofa"
      eyebrow="Call for speakers"
      title="Share what you've built"
    />

    {/* What we're looking for */}
    <section style={{ background: TOKENS.cream, padding: "100px 56px", borderTop: `1px solid ${TOKENS.line}` }}>
      <Reveal>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <Adinkra name="sankofa" size={18} color={TOKENS.terracotta} />
            <SectionEyebrow>What we're looking for</SectionEyebrow>
          </div>
          <SectionHeadline size="large">Talks that move the room</SectionHeadline>
          <ul style={{ listStyle: "none", padding: 0, margin: "48px 0 0", display: "flex", flexDirection: "column", gap: 20, maxWidth: 760 }}>
            {WE_WANT.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: 20, alignItems: "start", paddingBottom: 20, borderBottom: `1px solid ${TOKENS.line}` }}>
                <span style={{
                  flexShrink: 0,
                  width: 28, height: 28, borderRadius: "50%",
                  background: TOKENS.terracotta, color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, fontSize: 13, marginTop: 1,
                }}>{i + 1}</span>
                <span style={{ fontSize: 17, lineHeight: 1.6, color: TOKENS.ink, fontWeight: 500 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>

    {/* Formats */}
    <section style={{ background: TOKENS.navy, color: "#fff", padding: "100px 56px", position: "relative", overflow: "hidden" }}>
      <Reveal>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: TOKENS.starGold, fontWeight: 700, marginBottom: 8 }}>Formats</div>
          <SectionHeadline dark size="large">How you can speak</SectionHeadline>
          <div style={{ marginTop: 48 }}>
            {FORMATS.map(([f, d, desc]) => (
              <div key={f} className="format-row" style={{
                padding: "24px 0",
                borderTop: "1px solid rgba(255,255,255,0.14)",
                display: "grid",
                gridTemplateColumns: "180px 80px 1fr",
                gap: 16,
                alignItems: "start",
              }}>
                <div style={{ fontSize: 16, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.02em" }}>{f}</div>
                <div style={{ fontSize: 12, color: TOKENS.starGold, paddingTop: 3, fontWeight: 700 }}>{d}</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", paddingTop: 2, lineHeight: 1.5 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>

    {/* How it works */}
    <section style={{ background: TOKENS.paper, padding: "100px 56px", borderTop: `1px solid ${TOKENS.line}` }}>
      <Reveal>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionEyebrow>How it works</SectionEyebrow>
          <SectionHeadline size="large">Three steps to the stage</SectionHeadline>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 64 }} className="how-grid">
            {HOW.map(([step, desc], i) => (
              <div key={step} style={{ paddingTop: 28, borderTop: `3px solid ${TOKENS.terracotta}` }}>
                <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: TOKENS.terracotta, fontWeight: 700, marginBottom: 12 }}>Step {i + 1}</div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 22, fontWeight: 800, color: TOKENS.ink, margin: "0 0 12px", letterSpacing: "-0.01em", textTransform: "uppercase" }}>{step}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: TOKENS.ink2, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>

    {/* Timeline note */}
    <section style={{ background: TOKENS.cream, padding: "60px 56px", borderTop: `1px solid ${TOKENS.line}` }}>
      <Reveal>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{
            background: "#fff",
            border: `1px solid ${TOKENS.line}`,
            borderLeft: `4px solid ${TOKENS.gold}`,
            borderRadius: 8,
            padding: "28px 32px",
            maxWidth: 720,
          }}>
            <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: TOKENS.gold, fontWeight: 700, marginBottom: 10 }}>Key dates</div>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: TOKENS.ink, margin: 0 }}>
              The programme long list is compiled mid-June. Keynotes and panels are confirmed by{" "}
              <strong>15 July 2026</strong>. All selected speakers submit their final bios and abstracts by{" "}
              <strong>31 July 2026</strong>.
            </p>
          </div>
        </div>
      </Reveal>
    </section>

    {/* Big CTA */}
    <section style={{ background: TOKENS.navy, color: "#fff", padding: "120px 56px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <Reveal>
        <div style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: TOKENS.starGold, fontWeight: 700, marginBottom: 16 }}>Ready?</div>
          <h2 style={{
            fontFamily: TOKENS.fontDisplay,
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            lineHeight: 1.0,
            margin: "0 0 24px",
          }}>Submit your talk</h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(255,255,255,0.72)", margin: "0 0 48px", maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
            Got something worth sharing? Whether it is your first talk or your fiftieth, send it in. The programme team reads every submission.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={CFP_URL} style={btnPrimaryNavy()}>Submit a talk</a>
            <a href="index.html#faq" style={btnGhostNavy()}>Speaker FAQ</a>
          </div>
        </div>
      </Reveal>
    </section>
  </main>
);

Object.assign(window, { CFPPage });
