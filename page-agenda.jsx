/* page-agenda.jsx — Full Agenda page. PageHeader is defined in site-core.jsx. */

const { TOKENS, PageHeader, Reveal, Adinkra, SectionEyebrow, btnPrimaryNavy } = window;

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

const TAG_COLOR = {
  Keynote: TOKENS.terracotta,
  Panel: TOKENS.indigo,
  Breakout: TOKENS.green,
  Networking: "#8a7a68",
  Opening: TOKENS.navy,
  Closing: TOKENS.navy,
  Break: "#b3a896",
};

/* Track chip colours per brief: FinTech = terracotta, EdTech = indigo, AgriTech = green */
function trackColor(t) {
  const tl = t.toLowerCase();
  if (tl.includes("fintech")) return TOKENS.terracotta;
  if (tl.includes("edtech")) return TOKENS.indigo;
  if (tl.includes("agritech")) return TOKENS.green;
  return "#8a7a68";
}

const AgendaPage = () => (
  <div>
    <PageHeader
      eyebrow="Agenda · 29 August 2026"
      title="Full run of show"
      glyph="nkyinkyim"
      sub="One day, one venue, three tracks. Here is how AWS Community Day Ghana 2026 runs."
    />

    {/* Cloud Horror Stories callout */}
    <section style={{ background: TOKENS.paper, padding: "64px 56px 0" }}>
      <Reveal>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{
            background: TOKENS.navy,
            borderRadius: 14,
            padding: "40px 44px",
            display: "flex",
            gap: 32,
            alignItems: "flex-start",
            color: "#fff",
          }}>
            <div style={{ flexShrink: 0, marginTop: 4 }}>
              <Adinkra name="sankofa" size={48} color={TOKENS.starGold} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: TOKENS.starGold, fontWeight: 700, marginBottom: 10 }}>Community segment</div>
              <div style={{ fontFamily: TOKENS.fontDisplay, fontSize: 26, fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 1.1, marginBottom: 14 }}>
                Cloud Horror Stories
              </div>
              <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", fontWeight: 700, marginBottom: 14 }}>
                Mistakes and Anti-Patterns Not to be Repeated
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255,255,255,0.78)", margin: 0, maxWidth: 640 }}>
                A lightning-talk thread running through the breakout sessions. Community members share
                real cloud mistakes, costly misconfigurations, and lessons from production. The Sankofa symbol
                reminds us: it is not wrong to go back and fetch what you forgot. Submit yours through the CFP.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>

    {/* Track legend */}
    <section style={{ background: TOKENS.paper, padding: "40px 56px 0" }}>
      <Reveal>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: TOKENS.ink2, marginRight: 6 }}>Track legend</span>
            {[
              { label: "FinTech on AWS", color: TOKENS.terracotta },
              { label: "EdTech on AWS", color: TOKENS.indigo },
              { label: "AgriTech on AWS", color: TOKENS.green },
            ].map(({ label, color }) => (
              <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, padding: "5px 12px", borderRadius: 4, background: color, color: "#fff", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {label}
              </span>
            ))}
            <span style={{ fontSize: 13, color: TOKENS.ink2, marginLeft: 8 }}>Three tracks run in parallel during breakout sessions.</span>
          </div>
        </div>
      </Reveal>
    </section>

    {/* Agenda table */}
    <section style={{ background: TOKENS.paper, padding: "40px 56px 120px" }}>
      <Reveal>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ background: "#fff", border: `1px solid rgba(26,20,16,0.12)`, borderRadius: 12, overflow: "hidden", color: "#1a1410" }}>
            {FULL_AGENDA.map((item, i) => {
              const c = TAG_COLOR[item.tag] || TOKENS.ink2;
              const isBreak = item.tag === "Break";
              return (
                <div key={i} style={{
                  display: "grid",
                  gridTemplateColumns: "92px 1fr auto",
                  gap: 24,
                  padding: "20px 28px",
                  borderTop: i > 0 ? `1px solid rgba(26,20,16,0.1)` : "none",
                  background: isBreak ? "rgba(26,20,16,0.03)" : "transparent",
                  alignItems: "center",
                }} className="agenda-row">
                  <div style={{ fontSize: 15, color: "#1a1410", fontWeight: 800, fontVariantNumeric: "tabular-nums", lineHeight: 1.3 }}>{item.time}</div>
                  <div>
                    <div style={{ fontSize: 16, color: "#1a1410", fontWeight: 600, lineHeight: 1.35 }}>{item.title}</div>
                    {item.sub && <div style={{ fontSize: 13, color: "#3a2f28", marginTop: 4 }}>{item.sub}</div>}
                    {item.tracks && (
                      <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
                        {item.tracks.map(t => (
                          <span key={t} style={{
                            fontSize: 10,
                            padding: "4px 9px",
                            borderRadius: 3,
                            background: trackColor(t),
                            color: "#fff",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                          }}>{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  <span style={{ fontSize: 9, padding: "5px 10px", borderRadius: 3, background: c, color: "#fff", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{item.tag}</span>
                </div>
              );
            })}
          </div>

          {/* Footer note + CTA */}
          <div style={{ marginTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div style={{ fontSize: 13, color: TOKENS.ink2, fontStyle: "italic" }}>
              Provisional — subject to change as speakers are confirmed.
            </div>
            <a href="/cfp.html" style={btnPrimaryNavy()}>Want a slot? Submit a talk</a>
          </div>
        </div>
      </Reveal>
    </section>
  </div>
);

Object.assign(window, { AgendaPage });
