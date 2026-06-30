(function(){
/* Call for Speakers page — page-cfp.jsx
   Depends on site-core.jsx loading first (window exports). */

const {
  TOKENS,
  PageHeader,
  Reveal,
  SectionEyebrow,
  SectionHeadline,
  Adinkra
} = window;
const {
  btnPrimaryNavy,
  btnGhostNavy,
  CFP_URL,
  CONTACT
} = window;
const WE_WANT = ["Practical talks grounded in real production experience. Show your work.", "Real-world use cases across FinTech, EdTech, AgriTech, Generative AI, and beyond.", "Honest lessons, including the 'Cloud Horror Stories' lightning thread on what went wrong and why.", "First-time speakers. We will help you shape your talk."];
const HOW = [["Submit", "Send your title, abstract, and a short bio via the speaker form."], ["Review", "The programme team reads every submission and matches it against tracks and formats."], ["Confirm", "Selected speakers are confirmed and briefed before the day."]];
const FORMATS = [["Keynote", "45 min", "High-level, inspiring, big-picture"], ["Breakout talk", "40 min", "Deep dive into a topic or architecture"], ["Panel", "60 min", "Submit your perspective; we curate"]];
const CFPPage = () => /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHeader, {
  glyph: "sankofa",
  eyebrow: "Call for speakers",
  title: "Share what you've built"
}), /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.cream,
    padding: "100px 56px",
    borderTop: `1px solid ${TOKENS.line}`
  }
}, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1280,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 4
  }
}, /*#__PURE__*/React.createElement(Adinkra, {
  name: "sankofa",
  size: 18,
  color: TOKENS.terracotta
}), /*#__PURE__*/React.createElement(SectionEyebrow, null, "What we're looking for")), /*#__PURE__*/React.createElement(SectionHeadline, {
  size: "large"
}, "Talks that move the room"), /*#__PURE__*/React.createElement("ul", {
  style: {
    listStyle: "none",
    padding: 0,
    margin: "48px 0 0",
    display: "flex",
    flexDirection: "column",
    gap: 20,
    maxWidth: 760
  }
}, WE_WANT.map((item, i) => /*#__PURE__*/React.createElement("li", {
  key: i,
  style: {
    display: "flex",
    gap: 20,
    alignItems: "start",
    paddingBottom: 20,
    borderBottom: `1px solid ${TOKENS.line}`
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    flexShrink: 0,
    width: 28,
    height: 28,
    borderRadius: "50%",
    background: TOKENS.terracotta,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    fontSize: 13,
    marginTop: 1
  }
}, i + 1), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 17,
    lineHeight: 1.6,
    color: TOKENS.ink,
    fontWeight: 500
  }
}, item))))))), /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.navy,
    color: "#fff",
    padding: "100px 56px",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1280,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: TOKENS.starGold,
    fontWeight: 700,
    marginBottom: 8
  }
}, "Formats"), /*#__PURE__*/React.createElement(SectionHeadline, {
  dark: true,
  size: "large"
}, "How you can speak"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 48
  }
}, FORMATS.map(([f, d, desc]) => /*#__PURE__*/React.createElement("div", {
  key: f,
  className: "format-row",
  style: {
    padding: "24px 0",
    borderTop: "1px solid rgba(255,255,255,0.14)",
    display: "grid",
    gridTemplateColumns: "180px 80px 1fr",
    gap: 16,
    alignItems: "start"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 16,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.02em"
  }
}, f), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: TOKENS.starGold,
    paddingTop: 3,
    fontWeight: 700
  }
}, d), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 14,
    color: "rgba(255,255,255,0.7)",
    paddingTop: 2,
    lineHeight: 1.5
  }
}, desc))))))), /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.paper,
    padding: "100px 56px",
    borderTop: `1px solid ${TOKENS.line}`
  }
}, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1280,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement(SectionEyebrow, null, "How it works"), /*#__PURE__*/React.createElement(SectionHeadline, {
  size: "large"
}, "Three steps to the stage"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 24,
    marginTop: 64
  },
  className: "how-grid"
}, HOW.map(([step, desc], i) => /*#__PURE__*/React.createElement("div", {
  key: step,
  style: {
    paddingTop: 28,
    borderTop: `3px solid ${TOKENS.terracotta}`
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: TOKENS.terracotta,
    fontWeight: 700,
    marginBottom: 12
  }
}, "Step ", i + 1), /*#__PURE__*/React.createElement("h3", {
  style: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 22,
    fontWeight: 800,
    color: TOKENS.ink,
    margin: "0 0 12px",
    letterSpacing: "-0.01em",
    textTransform: "uppercase"
  }
}, step), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 15,
    lineHeight: 1.65,
    color: TOKENS.ink2,
    margin: 0
  }
}, desc))))))), /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.cream,
    padding: "60px 56px",
    borderTop: `1px solid ${TOKENS.line}`
  }
}, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1280,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    background: "#fff",
    border: `1px solid ${TOKENS.line}`,
    borderLeft: `4px solid ${TOKENS.gold}`,
    borderRadius: 8,
    padding: "28px 32px",
    maxWidth: 720
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: TOKENS.gold,
    fontWeight: 700,
    marginBottom: 10
  }
}, "Key dates"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 15,
    lineHeight: 1.7,
    color: TOKENS.ink,
    margin: 0
  }
}, "The programme long list is compiled mid-June. Keynotes and panels are confirmed by", " ", /*#__PURE__*/React.createElement("strong", null, "15 July 2026"), ". All selected speakers submit their final bios and abstracts by", " ", /*#__PURE__*/React.createElement("strong", null, "31 July 2026"), "."))))), /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.navy,
    color: "#fff",
    padding: "120px 56px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 680,
    margin: "0 auto",
    position: "relative"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: TOKENS.starGold,
    fontWeight: 700,
    marginBottom: 16
  }
}, "Ready?"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: TOKENS.fontDisplay,
    fontSize: "clamp(36px, 5vw, 64px)",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "-0.02em",
    lineHeight: 1.0,
    margin: "0 0 24px"
  }
}, "Submit your talk"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 18,
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.72)",
    margin: "0 0 48px",
    maxWidth: 520,
    marginLeft: "auto",
    marginRight: "auto"
  }
}, "Got something worth sharing? Whether it is your first talk or your fiftieth, send it in. The programme team reads every submission."), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 14,
    color: "rgba(255,255,255,0.55)",
    marginBottom: 24,
    marginTop: -24
  }
}, "Speaker submissions by email for now; the CFP form opens soon."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 16,
    justifyContent: "center",
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: `mailto:${CONTACT}?subject=Speaker submission - AWS Community Day Ghana 2026`,
  style: btnPrimaryNavy()
}, "Submit a talk"), /*#__PURE__*/React.createElement("a", {
  href: "index.html#faq",
  style: btnGhostNavy()
}, "Speaker FAQ"))))));
Object.assign(window, {
  CFPPage
});
})();
