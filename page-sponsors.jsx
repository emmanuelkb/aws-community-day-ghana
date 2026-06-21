/* page-sponsors.jsx — Sponsorship prospectus page. PageHeader lives in site-core.jsx. */

const { TOKENS, PageHeader, Reveal, KenteDot, SectionEyebrow, SectionHeadline, btnPrimary, CONTACT } = window;

/* ── Tier data (verbatim from task-8-brief §5.1) — no GH₵ prices shown publicly ── */
const TIERS = [
  {
    tier: "Platinum",
    color: TOKENS.terracotta,
    target: "Major banks, telcos, large fintechs",
    benefits: [
      "Headline sponsor billing",
      "15-minute keynote slot",
      "Premium 3m × 3m booth",
      "Logo on stage backdrop, T-shirts, website & all marketing",
      "12 VIP tickets",
      "Dedicated social announcement",
      "Branded segment in the livestream",
      "Inclusion in the post-event report",
    ],
  },
  {
    tier: "Gold",
    color: TOKENS.gold,
    target: "Mid-size tech firms, scale-ups",
    benefits: [
      "Panel sponsorship rights for one track",
      "Standard 2m × 2m booth",
      "Logo on backdrop, T-shirts & website",
      "8 tickets",
      "Two social posts",
      "Inclusion in the post-event report",
    ],
  },
  {
    tier: "Silver",
    color: TOKENS.indigo,
    target: "SMEs, growing startups",
    benefits: [
      "Logo on website, programme & T-shirts",
      "Shared booth space",
      "5 tickets",
      "One social post",
      "Branded item in the attendee swag bag",
    ],
  },
  {
    tier: "Bronze",
    color: TOKENS.green,
    target: "Startups, agencies",
    benefits: [
      "Logo on website & programme",
      "3 tickets",
      "Group social mention",
    ],
  },
  {
    tier: "Community Partner",
    color: TOKENS.ink,
    target: "Hubs, schools, communities",
    benefits: [
      "Logo on website",
      "2 tickets",
      "Group thank-you on social",
      "Open to non-profits, communities & bootcamps",
    ],
  },
];

const IN_KIND = [
  "Catering or beverage supply",
  "Swag production (T-shirts, lanyards, notebooks)",
  "Photography & videography services",
  "Cloud credits or technical workshop sponsorship",
  "Ride-share vouchers for speakers & volunteers",
];

/* ── Why-sponsor stat band (navy, matching Hero stat-band pattern) ── */
const WhySponsorBand = () => {
  const stats = [
    ["300", "In-person builders, founders & students"],
    ["12+", "Sessions across 3 tracks"],
    ["3", "Verticals — FinTech · EdTech · AgriTech"],
    ["∞", "Livestream + 72-hr social clips + post-event report"],
  ];
  return (
    <section style={{ background: TOKENS.navy, color: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 56px" }}>
        <Reveal>
          <div style={{ marginBottom: 40 }}>
            <SectionEyebrow dark>Why sponsor?</SectionEyebrow>
            <SectionHeadline dark>Reach Ghana's cloud community</SectionHeadline>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.72)", maxWidth: 620, marginTop: 18, lineHeight: 1.6 }}>
              AWS Community Day Ghana 2026 is the first dedicated AWS community conference in West Africa — a concentrated audience of cloud practitioners, founders, and students who build for the region.
            </p>
          </div>
        </Reveal>
      </div>
      {/* Stat band — reuses hero meta-band grid pattern */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
        borderTop: "1px solid rgba(255,255,255,0.16)",
      }}>
        {stats.map(([n, l], i) => (
          <Reveal key={l} delay={i * 80}>
            <div style={{
              padding: "28px 24px", textAlign: "center",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.12)" : "none",
            }}>
              <div style={{ fontSize: 38, fontWeight: 800, letterSpacing: "-0.01em", color: "#fff" }}>{n}</div>
              <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: TOKENS.starGold, fontWeight: 700, marginTop: 8, lineHeight: 1.4 }}>{l}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

/* ── Single tier card ── */
const TierCard = ({ t }) => (
  <div style={{
    background: "#fff", borderRadius: 16, overflow: "hidden",
    border: `1px solid rgba(26,20,16,0.10)`,
    display: "flex", flexDirection: "column",
  }}>
    {/* accent bar */}
    <div style={{ height: 5, background: t.color }} />
    <div style={{ padding: "32px 32px 36px", flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
      {/* tier name */}
      <div>
        <div style={{
          fontFamily: TOKENS.fontDisplay,
          fontSize: 26, fontWeight: 800, textTransform: "uppercase",
          letterSpacing: "-0.01em", color: TOKENS.ink, lineHeight: 1.0,
        }}>{t.tier}</div>
        {/* target sponsor description */}
        <div style={{
          display: "inline-block", marginTop: 10,
          background: t.color + "18",
          border: `1px solid ${t.color}33`,
          color: t.color, borderRadius: 4,
          fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", padding: "5px 10px",
        }}>{t.target}</div>
      </div>
      {/* benefits list */}
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        {t.benefits.map((b, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
            <span style={{ flexShrink: 0, marginTop: 3 }}><KenteDot size={9} /></span>
            <span style={{ fontSize: 14, color: TOKENS.ink2, lineHeight: 1.45 }}>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

/* ── In-kind section ── */
const InKindSection = () => (
  <section style={{ background: TOKENS.paper, padding: "80px 56px 0" }}>
    <Reveal>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionEyebrow>In-kind sponsorship</SectionEyebrow>
        <SectionHeadline>Contribute in kind</SectionHeadline>
        <p style={{ fontSize: 16, color: TOKENS.ink2, maxWidth: 580, marginTop: 18, lineHeight: 1.6 }}>
          Can't commit to a cash tier? We also welcome in-kind contributions that directly support the event experience.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 36 }}>
          {IN_KIND.map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 10,
              background: "#fff", border: `1px solid rgba(26,20,16,0.12)`,
              borderRadius: 8, padding: "14px 18px",
            }}>
              <KenteDot size={9} />
              <span style={{ fontSize: 14, color: TOKENS.ink, fontWeight: 500 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  </section>
);

/* ── Contact CTA ── */
const ContactCTA = () => (
  <section style={{ background: TOKENS.paper, padding: "80px 56px 120px" }}>
    <Reveal>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          background: TOKENS.navy, borderRadius: 16, padding: "56px 56px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 36, position: "relative", overflow: "hidden",
        }}>
          {/* subtle weave accent */}
          <div aria-hidden style={{
            position: "absolute", inset: 0, opacity: 0.07, pointerEvents: "none",
            background: "repeating-linear-gradient(90deg, rgba(255,200,87,0.5) 0 14px, transparent 14px 28px), repeating-linear-gradient(0deg, rgba(196,69,54,0.5) 0 10px, transparent 10px 30px)",
            backgroundSize: "48px 48px",
          }} />
          <div style={{ position: "relative" }}>
            <SectionEyebrow dark>Become a sponsor</SectionEyebrow>
            <div style={{
              fontFamily: TOKENS.fontDisplay,
              fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 800,
              textTransform: "uppercase", letterSpacing: "-0.015em",
              color: "#fff", lineHeight: 1.05, marginTop: 14, maxWidth: 520,
            }}>
              Partner with Ghana's cloud community
            </div>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.72)", lineHeight: 1.6, marginTop: 16, maxWidth: 480 }}>
              Email us for the full prospectus with pricing. We'll tailor a package that fits your goals and budget.
            </p>
          </div>
          <a
            href={`mailto:${CONTACT}?subject=Sponsorship%20Enquiry%20%E2%80%94%20AWS%20Community%20Day%20Ghana%202026`}
            style={{ ...btnPrimary(), position: "relative", whiteSpace: "nowrap" }}
          >
            Email us to sponsor
          </a>
        </div>
      </div>
    </Reveal>
  </section>
);

/* ── Main page component ── */
const SponsorsPage = () => (
  <div>
    <PageHeader
      eyebrow="Sponsorship · AWS Community Day Ghana 2026"
      title="Power the community"
      glyph="gyenyame"
      sub="Your brand alongside Ghana's first AWS community conference. Five tiers to match any goal — from headline keynote to community partner."
    />

    {/* Why-sponsor stat band */}
    <WhySponsorBand />

    {/* Tier cards */}
    <section style={{ background: TOKENS.paper, padding: "96px 56px 0" }}>
      <Reveal>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionEyebrow>Sponsorship tiers</SectionEyebrow>
          <SectionHeadline>Choose your tier</SectionHeadline>
          <p style={{ fontSize: 16, color: TOKENS.ink2, maxWidth: 580, marginTop: 16, lineHeight: 1.6 }}>
            Five tiers designed to maximise visibility at every level. Email us for the full prospectus with pricing.
          </p>
        </div>
      </Reveal>
      <div style={{ maxWidth: 1100, margin: "48px auto 0", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="tiers-grid">
        {TIERS.slice(0, 3).map((t, i) => (
          <Reveal key={t.tier} delay={i * 100}>
            <TierCard t={t} />
          </Reveal>
        ))}
      </div>
      <div style={{ maxWidth: 1100, margin: "20px auto 0", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="tiers-grid-lower">
        {TIERS.slice(3).map((t, i) => (
          <Reveal key={t.tier} delay={i * 100}>
            <TierCard t={t} />
          </Reveal>
        ))}
      </div>
    </section>

    {/* In-kind */}
    <InKindSection />

    {/* Contact CTA */}
    <ContactCTA />
  </div>
);

Object.assign(window, { SponsorsPage });
