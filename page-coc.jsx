/* page-coc.jsx — Code of Conduct page. PageHeader is defined in site-core.jsx. */

const { TOKENS, PageHeader, Reveal, CONTACT } = window;

const COC = [
  ["Our pledge", "AWS Community Day Ghana is dedicated to a harassment-free, welcoming experience for everyone, regardless of gender, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion, or technical background."],
  ["Expected behaviour", "Be respectful and considerate. Collaborate openly. Use welcoming and inclusive language. Respect differing viewpoints and the people who hold them."],
  ["Unacceptable behaviour", "Harassment, intimidation, or discrimination in any form. Unwelcome sexual attention. Disruption of talks or other events. Sharing others' private information without consent."],
  ["Reporting", `If you experience or witness unacceptable behaviour, contact a member of the organising team on the day, or email ${CONTACT}. Reports are handled confidentially.`],
  ["Consequences", "Participants asked to stop any harassing behaviour are expected to comply immediately. Organisers may take any action they deem appropriate, including warning or expulsion from the event without refund."],
];

const CoCPage = () => (
  <div>
    <PageHeader eyebrow="Code of conduct" title="A safe day for everyone" glyph="dwennimmen"
      sub="We want every attendee, speaker, volunteer, and sponsor to feel welcome and safe. These are the ground rules." />
    <section style={{ background: TOKENS.cream, padding:"80px 56px" }}>
      <div style={{ maxWidth:820, margin:"0 auto" }}>
        {COC.map(([h,b],i)=>(
          <Reveal key={h} delay={i*60} style={{ paddingTop:32, marginTop:32, borderTop:`1px solid ${TOKENS.line}` }}>
            <h2 style={{ fontFamily:TOKENS.fontDisplay, fontSize:24, fontWeight:800, margin:"0 0 12px" }}>{h}</h2>
            <p style={{ fontSize:16, lineHeight:1.7, color:TOKENS.ink2, margin:0 }}>{b}</p>
          </Reveal>
        ))}
      </div>
    </section>
  </div>
);

Object.assign(window, { CoCPage });
