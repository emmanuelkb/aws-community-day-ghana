/* page-venue.jsx — Venue & Travel page for AWS Community Day Ghana 2026 */

const { TOKENS, PageHeader, Reveal, SectionEyebrow, SectionHeadline } = window;

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

/* Map placeholder — matches styling from site-rest.jsx Venue section */
const MapPlaceholder = () => (
  <div style={{
    height: 380,
    borderRadius: 16,
    position: "relative",
    overflow: "hidden",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    maxWidth: 680,
    margin: "0 auto",
  }}>
    <div style={{
      position: "absolute",
      inset: 0,
      opacity: 0.5,
      backgroundImage: `radial-gradient(rgba(255,255,255,0.18) 1.5px, transparent 1.5px)`,
      backgroundSize: "24px 24px",
    }} />
    <div style={{
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: 32,
    }}>
      <div style={{
        fontSize: 11,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: TOKENS.starGold,
        fontWeight: 700,
        marginBottom: 16,
      }}>Map · exact venue confirmed soon</div>
      <div style={{ fontSize: 52, lineHeight: 1, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>Accra</div>
      <div style={{ fontSize: 52, lineHeight: 1, fontWeight: 800, color: "rgba(255,255,255,0.45)", letterSpacing: "-0.02em", marginTop: 6 }}>Ghana</div>
      <div style={{ marginTop: 22, fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600 }}>5.6037° N · 0.1870° W</div>
    </div>
  </div>
);

const VenuePage = () => (
  <main>
    {/* Page hero */}
    <PageHeader
      glyph="nkyinkyim"
      eyebrow="Venue & Travel"
      title="See you in Accra"
      sub="Saturday 29 August 2026 · Main Auditorium, Accra, Ghana"
    />

    {/* Facts grid */}
    <section style={{ background: TOKENS.cream, padding: "80px 56px" }}>
      <Reveal>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionEyebrow>Venue details</SectionEyebrow>
          <SectionHeadline size="large" style={{ marginBottom: 40 }}>The essentials</SectionHeadline>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, maxWidth: 860, marginTop: 40 }}>
            {VENUE_FACTS.map(([k, v, sub], i) => (
              <div key={k} style={{
                padding: "28px 0",
                borderTop: `1px solid ${TOKENS.line}`,
                paddingRight: i % 2 === 0 ? 32 : 0,
                paddingLeft: i % 2 === 1 ? 32 : 0,
                borderRight: i % 2 === 0 ? `1px solid ${TOKENS.line}` : "none",
              }}>
                <div style={{
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: TOKENS.terracotta,
                  fontWeight: 700,
                  marginBottom: 8,
                }}>{k}</div>
                <div style={{ fontSize: 17, color: TOKENS.ink, fontWeight: 700 }}>{v}</div>
                <div style={{ fontSize: 13, color: TOKENS.ink2, marginTop: 6, lineHeight: 1.5 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>

    {/* Food section */}
    <section style={{ background: TOKENS.paper, padding: "80px 56px", borderTop: `1px solid ${TOKENS.line}` }}>
      <Reveal>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionEyebrow>Food & refreshments</SectionEyebrow>
          <SectionHeadline size="large">Fuelled for the day</SectionHeadline>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32, marginTop: 48 }}>
            {FOOD.map(([label, desc]) => (
              <div key={label} style={{
                background: "#fff",
                borderRadius: 12,
                padding: "32px 28px",
                border: `1px solid ${TOKENS.line}`,
              }}>
                <div style={{
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: TOKENS.terracotta,
                  fontWeight: 700,
                  marginBottom: 14,
                }}>{label}</div>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: TOKENS.ink2 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>

    {/* Map placeholder — navy background matching site-rest.jsx Venue section */}
    <section style={{ background: TOKENS.navy, padding: "80px 56px", borderTop: `1px solid rgba(255,255,255,0.08)` }}>
      <Reveal>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionEyebrow dark>Location</SectionEyebrow>
          <SectionHeadline dark size="large">Find us</SectionHeadline>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "rgba(255,255,255,0.65)", maxWidth: 600, marginTop: 16, marginBottom: 48 }}>
            The event is at the Main Auditorium in Accra. The exact address will be shared closer to the date by email and on our social channels.
          </p>
          <MapPlaceholder />
        </div>
      </Reveal>
    </section>

    {/* Power, Wi-Fi & accessibility */}
    <section style={{ background: TOKENS.cream, padding: "80px 56px", borderTop: `1px solid ${TOKENS.line}` }}>
      <Reveal>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionEyebrow>Logistics</SectionEyebrow>
          <SectionHeadline size="large">Power, Wi-Fi &amp; accessibility</SectionHeadline>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, marginTop: 48 }}>
            {[
              {
                heading: "Power",
                body: "The venue has a standby generator so power runs throughout the day.",
              },
              {
                heading: "Wi-Fi & connectivity",
                body: "On-site Wi-Fi is available. A 4G/5G mobile router is in place as a backup for the livestream if connectivity drops.",
              },
              {
                heading: "Accessibility",
                body: "Step-free access and other accessibility details will be confirmed closer to the date. Contact us if you have specific requirements.",
              },
            ].map(({ heading, body }) => (
              <div key={heading} style={{
                background: "#fff",
                borderRadius: 12,
                padding: "32px 28px",
                border: `1px solid ${TOKENS.line}`,
              }}>
                <div style={{
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: TOKENS.terracotta,
                  fontWeight: 700,
                  marginBottom: 14,
                }}>{heading}</div>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: TOKENS.ink2 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  </main>
);

window.VenuePage = VenuePage;
