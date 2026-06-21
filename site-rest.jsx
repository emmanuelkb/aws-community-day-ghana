/* Sponsors + Venue + Community + Crew + FAQ + Newsletter + Notify modal. (Footer moved to site-core.jsx.) */

const { TOKENS, SectionEyebrow, SectionHeadline, KenteBar, KenteStripes, Marquee, Reveal } = window;
const { btnPrimary, btnGhost, btnPrimaryNavy, btnGhostNavy } = window;

const CONTACT = "awsaccrausergroup@gmail.com";

/* ───────────────────── Sponsors (tiers, no prices) ───────────────────── */
const SponsorTier = ({ tier, color, count, names }) => (
  <div style={{ marginBottom: 48 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
      <div style={{ fontSize: 14, fontWeight: 800, color: TOKENS.ink, letterSpacing: "0.18em", textTransform: "uppercase" }}>{tier}</div>
      <div style={{ width: 28, height: 3, background: color }} />
      <div style={{ flex: 1, height: 1, background: TOKENS.line }} />
    </div>
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${count}, 1fr)`, gap: 12 }} className="sponsor-row">
      {names.map((n, i) => (
        <div key={i} style={{
          height: 104, border: `1px dashed ${color}`, borderRadius: 12,
          display: "flex", alignItems: "center", justifyContent: "center", background: "#fff",
          fontSize: 11, color: TOKENS.ink2, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
        }}>{n}</div>
      ))}
    </div>
  </div>
);

const Sponsors = () => (
  <section id="sponsors" style={{ background: TOKENS.cream, padding: "120px 0", borderTop: `1px solid ${TOKENS.line}` }}>
    <Reveal>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 56px" }}>
        <SectionEyebrow>Sponsors</SectionEyebrow>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 32, marginBottom: 24 }}>
          <SectionHeadline size="large">Power the community</SectionHeadline>
          <a href="/sponsors.html" style={{ ...btnGhost(), padding: "14px 22px" }}>Get the prospectus →</a>
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: TOKENS.ink2, maxWidth: 640, marginBottom: 48 }}>
          AWS Community Day Ghana is free to attend, funded by sponsors. Five tiers are available, from headline Platinum to Community Partner. Your brand in front of 300+ builders, founders, and students in Ghana's cloud community.
        </p>
        <SponsorTier tier="Platinum" color={TOKENS.terracotta} count={1} names={["YOUR LOGO HERE"]} />
        <SponsorTier tier="Gold" color={TOKENS.gold} count={2} names={["LOGO", "LOGO"]} />
        <SponsorTier tier="Silver" color={TOKENS.indigo} count={3} names={["logo", "logo", "logo"]} />
        <SponsorTier tier="Bronze" color={TOKENS.green} count={4} names={["logo", "logo", "logo", "logo"]} />
        <SponsorTier tier="Community Partner" color={TOKENS.ink} count={5} names={Array(5).fill("·")} />
        <div style={{ marginTop: 8, fontSize: 14, color: TOKENS.ink2 }}>
          Interested? Email <a href={`mailto:${CONTACT}`} style={{ color: TOKENS.terracotta, fontWeight: 600 }}>{CONTACT}</a> for the sponsorship prospectus.
        </div>
      </div>
    </Reveal>
  </section>
);

/* ───────────────────── Venue & travel ───────────────────── */
const Venue = () => (
  <section id="venue" style={{ background: TOKENS.navy, color: "#fff", padding: "120px 56px", position: "relative" }}>
    <KenteBar height={4} />
    <Reveal>
      <div style={{ maxWidth: 1280, margin: "0 auto", paddingTop: 24 }}>
        <SectionEyebrow dark>Venue & travel</SectionEyebrow>
        <div className="venue-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, marginTop: 28 }}>
          <div>
            <SectionHeadline dark size="large">See you in Accra</SectionHeadline>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(255,255,255,0.75)", marginTop: 32, maxWidth: 540 }}>
              The day is at the Main Auditorium in Accra, a 300-seat venue with air conditioning, LED stage screen, PA system, and standby generator. Central and easy to reach from across the city.
            </p>
            <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
              {[
                ["Date", "Saturday 29 August 2026", "08:00 – 17:00"],
                ["Venue", "Main Auditorium", "Accra, Ghana"],
                ["Getting there", "Bolt / Trotro", "Central Accra"],
                ["Food", "Lunch & refreshments", "Jollof · Waakye · Fried yam"],
              ].map(([k, v, sub], i) => (
                <div key={k} style={{
                  padding: "20px 0", borderTop: "1px solid rgba(255,255,255,0.14)",
                  paddingRight: i % 2 === 0 ? 24 : 0, paddingLeft: i % 2 === 1 ? 24 : 0,
                  borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.14)" : "none",
                }}>
                  <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: TOKENS.starGold, fontWeight: 700, marginBottom: 8 }}>{k}</div>
                  <div style={{ fontSize: 16, color: "#fff", fontWeight: 600 }}>{v}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 4 }}>{sub}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32 }}>
              <a href="/venue.html" style={{ fontSize: 13, fontWeight: 700, color: TOKENS.starGold, textDecoration: "none", letterSpacing: "0.04em", display: "inline-flex", alignItems: "center", gap: 6 }}>
                Directions &amp; venue details →
              </a>
            </div>
          </div>
          <div style={{ height: 520, borderRadius: 16, position: "relative", overflow: "hidden", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ position: "absolute", inset: 0, opacity: 0.5, backgroundImage: `radial-gradient(rgba(255,255,255,0.18) 1.5px, transparent 1.5px)`, backgroundSize: "24px 24px" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: 32 }}>
              <div style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: TOKENS.starGold, fontWeight: 700, marginBottom: 16 }}>Map · venue confirmed soon</div>
              <div style={{ fontSize: 52, lineHeight: 1, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>Accra</div>
              <div style={{ fontSize: 52, lineHeight: 1, fontWeight: 800, color: "rgba(255,255,255,0.45)", letterSpacing: "-0.02em", marginTop: 6 }}>Ghana</div>
              <div style={{ marginTop: 22, fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600 }}>5.6037° N · 0.1870° W</div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  </section>
);

/* ───────────────────── Community / user groups ───────────────────── */
const Community = () => {
  const groups = ["AWS User Group Accra", "AWS User Group Kumasi", "Universities & bootcamps", "Women in tech communities", "Developer meetups"];
  return (
    <section id="community" style={{ background: TOKENS.paper, padding: "120px 56px" }}>
      <Reveal>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <SectionEyebrow>Community</SectionEyebrow>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginTop: 24, alignItems: "center" }} className="org-grid">
            <div>
              <SectionHeadline size="large">Organised by AWS User Group Accra</SectionHeadline>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: TOKENS.ink2, marginTop: 28, maxWidth: 520 }}>
                This event is run entirely by volunteers from Ghana's cloud community. We partner with user groups, universities, and developer communities across the country.
              </p>
              <a href={`mailto:${CONTACT}`} style={{ ...btnPrimary(), marginTop: 28 }}>Partner with us</a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {groups.map((g, i) => (
                <div key={g} style={{
                  display: "flex", alignItems: "center", gap: 16, padding: "20px 24px",
                  background: "#fff", border: `1px solid ${TOKENS.line}`, borderRadius: 12,
                }}>
                  <span aria-hidden style={{ width: 10, height: 10, background: [TOKENS.terracotta, TOKENS.gold, TOKENS.green, TOKENS.indigo, TOKENS.terracotta][i], borderRadius: 2, transform: "rotate(45deg)", flexShrink: 0 }} />
                  <span style={{ fontSize: 16, fontWeight: 700, color: TOKENS.ink, letterSpacing: "-0.005em" }}>{g}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

/* ───────────────────── Crew / volunteers ───────────────────── */
const Crew = () => {
  const teams = ["Registration", "Logistics & Floor", "Speaker Care", "Technical / AV", "Social Media", "Photography", "Food & Beverage", "Sponsor Liaison"];
  return (
    <section id="crew" style={{ background: TOKENS.cream, padding: "120px 56px", borderTop: `1px solid ${TOKENS.line}` }}>
      <Reveal>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 32 }}>
            <div>
              <SectionEyebrow>Join the crew</SectionEyebrow>
              <SectionHeadline size="large">Help make it happen</SectionHeadline>
            </div>
            <div style={{ fontSize: 14, color: TOKENS.ink2, maxWidth: 340, lineHeight: 1.55 }}>
              ~25 volunteers run the day across eight teams. Crew get a branded T-shirt, all meals, a certificate, and first access to future community events.
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginTop: 56 }} className="crew-grid">
            {teams.map((t, i) => (
              <div key={t} style={{
                padding: "24px", background: "#fff", border: `1px solid ${TOKENS.line}`, borderRadius: 12,
                display: "flex", flexDirection: "column", gap: 10,
              }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: [TOKENS.terracotta, TOKENS.gold, TOKENS.green, TOKENS.indigo][i % 4], letterSpacing: "0.08em" }}>0{i + 1}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: TOKENS.ink, letterSpacing: "-0.005em" }}>{t}</div>
              </div>
            ))}
          </div>
          <a href="/volunteer.html" style={{ ...btnPrimary(), marginTop: 32 }}>Apply to volunteer</a>
        </div>
      </Reveal>
    </section>
  );
};

/* ───────────────────── FAQ ───────────────────── */
const FAQ_ITEMS = [
  ["Is the event free to attend?", "Yes. AWS Community Day Ghana 2026 is free and open to anyone interested in cloud, AI, and engineering. Capacity is 300, so register early once registration opens."],
  ["When and where is it?", "Saturday 29 August 2026, 08:00–17:00, at the Main Auditorium in Accra, Ghana. The exact address is confirmed closer to the date."],
  ["How do I register?", "Registration opens on Luma. Use 'Register on Luma' in the hero above, or 'Notify me' and we'll email you the moment tickets go live."],
  ["Who is it for?", "Software engineers, cloud architects, DevOps and security practitioners, data and AI folks, founders, and students. Beginners and AWS Heroes alike."],
  ["Can I speak?", "Yes. The call for speakers is open. We want practical talks across FinTech, EdTech, AgriTech, GenAI, and more. First-time speakers are welcome."],
  ["How can my company sponsor?", `We have Platinum, Gold, Silver, Bronze, and Community Partner tiers. Email ${CONTACT} for the sponsorship prospectus.`],
  ["Can I volunteer?", "Yes. We run the day with ~25 volunteers across eight teams. See 'Join the crew' above and apply. Crew get a T-shirt, meals, and a certificate."],
  ["Will sessions be recorded?", "Main-stage talks will be recorded and shared after the event. Some breakouts may not be recorded to keep the conversation open."],
];

const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" style={{ background: TOKENS.paper, padding: "120px 56px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionEyebrow>FAQ</SectionEyebrow>
        <SectionHeadline size="large">Good questions</SectionHeadline>
        <div style={{ marginTop: 56 }}>
          {FAQ_ITEMS.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} style={{ borderTop: `1px solid ${TOKENS.line}`, ...(i === FAQ_ITEMS.length - 1 ? { borderBottom: `1px solid ${TOKENS.line}` } : {}) }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                  width: "100%", textAlign: "left", padding: "26px 0", background: "transparent", border: 0, cursor: "pointer",
                  display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, fontFamily: "inherit",
                }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(18px, 2.2vw, 24px)", color: TOKENS.ink, fontWeight: 700, letterSpacing: "-0.005em", lineHeight: 1.3 }}>{q}</span>
                  <span style={{ width: 32, height: 32, borderRadius: 8, border: `1.5px solid ${TOKENS.ink}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transform: isOpen ? "rotate(45deg)" : "rotate(0)", transition: "transform .25s" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12"><path d="M6 1 V11 M1 6 H11" stroke={TOKENS.ink} strokeWidth="1.5" /></svg>
                  </span>
                </button>
                <div style={{ overflow: "hidden", maxHeight: isOpen ? 320 : 0, transition: "max-height .35s ease", paddingBottom: isOpen ? 26 : 0 }}>
                  <div style={{ fontSize: 16, lineHeight: 1.65, color: TOKENS.ink2, maxWidth: 760 }}>{a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ───────────────────── Newsletter / notify ───────────────────── */
const Newsletter = ({ onNotify }) => (
  <section style={{ background: TOKENS.navy, color: "#fff", padding: "120px 56px", position: "relative", overflow: "hidden" }}>
    <KenteBar height={4} />
    <div style={{ position: "absolute", top: 0, right: 0, width: 280, height: "100%", opacity: 0.4 }}>
      <KenteStripes width={80} />
    </div>
    <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", position: "relative", paddingTop: 24 }}>
      <SectionEyebrow dark>Stay in the loop</SectionEyebrow>
      <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(40px, 6.5vw, 88px)", lineHeight: 1, fontWeight: 800, letterSpacing: "-0.02em", color: "#fff", textTransform: "uppercase", marginTop: 24, marginBottom: 0 }}>
        Be the first to know
      </h2>
      <p style={{ fontSize: 18, lineHeight: 1.55, color: "rgba(255,255,255,0.78)", maxWidth: 560, margin: "32px auto 0" }}>
        We'll email you when registration opens on Luma, and again as speakers and agenda details are confirmed.
      </p>
      <div style={{ marginTop: 36, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <button onClick={onNotify} style={btnPrimaryNavy()}>Notify me</button>
        <a href="#" style={btnGhostNavy()}>Follow on LinkedIn</a>
      </div>
    </div>
  </section>
);

Object.assign(window, { Sponsors, Venue, Community, Crew, FAQ, Newsletter });
