/* Sponsors + Venue + Community + Crew + FAQ + Code of Conduct + Newsletter + Footer + Notify modal. */

const { TOKENS, SectionEyebrow, SectionHeadline, KenteBar, KenteStripes, Marquee } = window;
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
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 56px" }}>
      <SectionEyebrow>Sponsors</SectionEyebrow>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 32, marginBottom: 24 }}>
        <SectionHeadline size="large">Power the community</SectionHeadline>
        <a href="#" style={{ ...btnGhost(), padding: "14px 22px" }}>Get the prospectus →</a>
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: TOKENS.ink2, maxWidth: 640, marginBottom: 48 }}>
        AWS Community Day Ghana is free to attend, made possible by sponsors. Five tiers are available — from headline Platinum to Community Partner. Reach 300+ builders, founders, and students across Ghana's cloud ecosystem.
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
  </section>
);

/* ───────────────────── Venue & travel ───────────────────── */
const Venue = () => (
  <section id="venue" style={{ background: TOKENS.navy, color: "#fff", padding: "120px 56px", position: "relative" }}>
    <KenteBar height={4} />
    <div style={{ maxWidth: 1280, margin: "0 auto", paddingTop: 24 }}>
      <SectionEyebrow dark>Venue & travel</SectionEyebrow>
      <div className="venue-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 60, marginTop: 28 }}>
        <div>
          <SectionHeadline dark size="large">See you in Accra</SectionHeadline>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "rgba(255,255,255,0.75)", marginTop: 32, maxWidth: 540 }}>
            The day takes place at the Main Auditorium in Accra — a 300-seat venue with air conditioning, an LED stage screen, public-address system, and a standby generator. Easy to reach across the city.
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
  </section>
);

/* ───────────────────── Community / user groups ───────────────────── */
const Community = () => {
  const groups = ["AWS User Group Accra", "AWS User Group Kumasi", "Universities & bootcamps", "Women in tech communities", "Developer meetups"];
  return (
    <section id="community" style={{ background: TOKENS.paper, padding: "120px 56px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <SectionEyebrow>Community</SectionEyebrow>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginTop: 24, alignItems: "center" }} className="org-grid">
          <div>
            <SectionHeadline size="large">Organised by AWS User Group Accra</SectionHeadline>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: TOKENS.ink2, marginTop: 28, maxWidth: 520 }}>
              This is a community-led event, run entirely by volunteers from Ghana's cloud community. We partner with user groups, universities, and developer communities across the country.
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
    </section>
  );
};

/* ───────────────────── Crew / volunteers ───────────────────── */
const Crew = () => {
  const teams = ["Registration", "Logistics & Floor", "Speaker Care", "Technical / AV", "Social Media", "Photography", "Food & Beverage", "Sponsor Liaison"];
  return (
    <section id="crew" style={{ background: TOKENS.cream, padding: "120px 56px", borderTop: `1px solid ${TOKENS.line}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 32 }}>
          <div>
            <SectionEyebrow>Join the crew</SectionEyebrow>
            <SectionHeadline size="large">Help make it happen</SectionHeadline>
          </div>
          <div style={{ fontSize: 14, color: TOKENS.ink2, maxWidth: 340, lineHeight: 1.55 }}>
            ~25 volunteers run the day across eight teams. Crew get a branded T-shirt, all meals, a certificate, and priority access to future community events.
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
        <a href="#" style={{ ...btnPrimary(), marginTop: 32 }}>Apply to volunteer</a>
      </div>
    </section>
  );
};

/* ───────────────────── FAQ ───────────────────── */
const FAQ_ITEMS = [
  ["Is the event free to attend?", "Yes. AWS Community Day Ghana 2026 is free, community-led, and open to anyone interested in cloud, AI, and engineering. Capacity is limited to 300, so register early once registration opens."],
  ["When and where is it?", "Saturday 29 August 2026, 08:00–17:00, at the Main Auditorium in Accra, Ghana. The exact venue address is confirmed closer to the date."],
  ["How do I register?", "Registration opens on Luma. Hit 'Register on Luma' in the hero, or 'Notify me' to be emailed the moment tickets go live."],
  ["Who is it for?", "Software engineers, cloud architects, DevOps and security folks, data and AI practitioners, founders, and students — from total beginners to AWS Heroes."],
  ["Can I speak?", "Yes — the call for speakers is open. We're after practical talks across FinTech, EdTech, AgriTech, GenAI, and more. First-time speakers welcome."],
  ["How can my company sponsor?", `We have Platinum, Gold, Silver, Bronze, and Community Partner tiers. Email ${CONTACT} for the sponsorship prospectus.`],
  ["Can I volunteer?", "Absolutely. We run the day with ~25 volunteers across eight teams. See 'Join the crew' and apply — crew get a T-shirt, meals, and a certificate."],
  ["Will sessions be recorded?", "Main-stage talks are recorded and shared after the event. Some breakouts may not be recorded to encourage open conversation."],
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
        We'll email you the moment registration opens on Luma — plus speaker drops and agenda updates.
      </p>
      <div style={{ marginTop: 36, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <button onClick={onNotify} style={btnPrimaryNavy()}>Notify me</button>
        <a href="#" style={btnGhostNavy()}>Follow on LinkedIn</a>
      </div>
    </div>
  </section>
);

/* ───────────────────── Footer (with Code of Conduct) ───────────────────── */
const Footer = () => (
  <footer style={{ background: TOKENS.navy2, color: "rgba(255,255,255,0.65)", padding: "80px 56px 40px" }}>
    <div style={{ maxWidth: 1280, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.1)" }} className="footer-grid">
        <div>
          <div style={{ color: "#fff", display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="1.5" y="1.5" width="29" height="29" rx="7" stroke="#fff" strokeWidth="1.5" />
              <path d="M8 21 L16 9 L24 21 M11.5 16.5 L20.5 16.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>AWS Community Day</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", marginTop: 2, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>Ghana · 29 Aug 2026</div>
            </div>
          </div>
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
          ["Event", [["About", "#about"], ["Agenda", "#agenda"], ["Speakers", "#speakers"], ["Venue", "#venue"]]],
          ["Get involved", [["Register", "#top"], ["Speak", "#cfp"], ["Sponsor", "#sponsors"], ["Volunteer", "#crew"]]],
          ["More", [["FAQ", "#faq"], ["Community", "#community"], ["Code of conduct", "#coc"], ["Contact", `mailto:${CONTACT}`]]],
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

const inputStyle = { padding: "14px 16px", border: `1px solid ${TOKENS.line}`, borderRadius: 8, fontSize: 14, fontFamily: "inherit", background: "#fff", color: TOKENS.ink, outline: "none" };

Object.assign(window, { Sponsors, Venue, Community, Crew, FAQ, Newsletter, Footer, NotifyModal });
