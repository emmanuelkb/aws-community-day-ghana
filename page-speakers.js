(function(){
/* page-speakers.jsx — Speakers & Roles page. PageHeader is defined in site-core.jsx. */

const {
  TOKENS,
  PageHeader,
  Reveal,
  Adinkra,
  SectionEyebrow,
  SectionHeadline,
  btnPrimary,
  CFP_URL,
  CONTACT
} = window;

/* ── Data arrays (verbatim from task-6-brief §6.2) ── */
const KEYNOTE_ROLES = [{
  title: "Keynote: Building the Backbone",
  who: "An AWS Hero, AWS Senior Developer Advocate, or AWS staff from EMEA or Sub-Saharan Africa."
}, {
  title: "Panel: Building the Backbone",
  who: "A senior technology leader (CTO, VP Engineering, or Head of Cloud) joining the panel discussion."
}];
const PANELS = [{
  title: "Building the Backbone",
  moderator: "AWS Community Builder or User Group Lead",
  seats: ["Panel speaker 1 — To be announced", "Panel speaker 2 — To be announced", "Panel speaker 3 — To be announced", "Panel speaker 4 — To be announced"]
}, {
  title: "Cloud Careers & Community Building",
  moderator: "AWS Community Builder",
  seats: ["Speaker 1 — To be announced", "Speaker 2 — To be announced", "Speaker 3 — To be announced", "Speaker 4 — To be announced"]
}];
const SPEAKERS = [{
  name: "Speaker TBA",
  role: "Cloud practitioner",
  topic: "To be announced",
  track: "Cloud",
  initials: "—",
  confirmed: false
}, {
  name: "Speaker TBA",
  role: "GenAI practitioner",
  topic: "To be announced",
  track: "GenAI",
  initials: "—",
  confirmed: false
}, {
  name: "Speaker TBA",
  role: "Panel speaker",
  topic: "Building the Backbone",
  track: "Panel",
  initials: "—",
  confirmed: false
}, {
  name: "Speaker TBA",
  role: "Cloud engineer",
  topic: "To be announced",
  track: "Cloud",
  initials: "—",
  confirmed: false
}, {
  name: "Speaker TBA",
  role: "Community Builder",
  topic: "Cloud careers & community",
  track: "Careers",
  initials: "—",
  confirmed: false
}, {
  name: "Speaker TBA",
  role: "Cloud practitioner",
  topic: "To be announced",
  track: "Cloud",
  initials: "—",
  confirmed: false
}];

/* Track tint colours matching site-program.jsx */
const TRACK_TINT = {
  FinTech: TOKENS.terracotta,
  EdTech: "#3B6BB8",
  AgriTech: TOKENS.green,
  GenAI: TOKENS.gold,
  Careers: TOKENS.indigo,
  Cloud: TOKENS.green,
  Panel: TOKENS.indigo,
  Keynote: TOKENS.terracotta
};

/* ── Keynote role card (navy, TBA style) ── */
const KeynoteRoleCard = ({
  title,
  who
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: TOKENS.navy,
    color: "#fff",
    borderRadius: 16,
    padding: "40px 36px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    gap: 16,
    minHeight: 240
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: TOKENS.starGold,
    fontWeight: 700
  }
}, "Keynote"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 20,
    alignItems: "center",
    marginTop: 8
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 72,
    height: 72,
    borderRadius: 12,
    background: "rgba(255,255,255,0.08)",
    border: "1px dashed rgba(255,255,255,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    fontSize: 24,
    color: "rgba(255,255,255,0.5)"
  }
}, "?"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 22,
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "-0.01em",
    lineHeight: 1.05
  }
}, "To be announced"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 14,
    color: "rgba(255,255,255,0.7)",
    marginTop: 8
  }
}, title))), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 14,
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.6)",
    margin: "auto 0 0"
  }
}, who));

/* ── Panel card ── */
const PanelCard = ({
  title,
  moderator,
  seats
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: TOKENS.paper,
    border: `1px solid rgba(26,20,16,0.12)`,
    borderRadius: 16,
    padding: "36px",
    display: "flex",
    flexDirection: "column",
    gap: 20
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: TOKENS.indigo,
    fontWeight: 700,
    marginBottom: 10
  }
}, "Panel"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: TOKENS.fontDisplay,
    fontSize: 20,
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "-0.01em",
    color: TOKENS.ink,
    lineHeight: 1.1
  }
}, title)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: TOKENS.ink2,
    fontWeight: 700,
    marginBottom: 8
  }
}, "Moderator"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: TOKENS.indigo,
    color: "#fff",
    borderRadius: 6,
    padding: "7px 14px",
    fontSize: 13,
    fontWeight: 600
  }
}, moderator)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: TOKENS.ink2,
    fontWeight: 700,
    marginBottom: 10
  }
}, "Panel seats"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 8
  }
}, seats.map((seat, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    display: "flex",
    alignItems: "center",
    gap: 10
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: TOKENS.terracotta,
    flexShrink: 0
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 14,
    color: TOKENS.ink2,
    lineHeight: 1.4
  }
}, seat))))));

/* ── Speaker card (matching site-program.jsx SpeakerCard exactly) ── */
const SpeakerCard = ({
  s
}) => {
  const c = TRACK_TINT[s.track] || TOKENS.terracotta;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: `1px solid rgba(26,20,16,0.12)`,
      borderRadius: 14,
      overflow: "hidden",
      color: "#1a1410"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: "flex",
      gap: 18,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 10,
      flexShrink: 0,
      background: s.confirmed ? TOKENS.navy : "rgba(26,20,16,0.05)",
      color: s.confirmed ? "#fff" : "#3a2f28",
      border: s.confirmed ? "none" : "1px dashed rgba(26,20,16,0.25)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 800,
      fontSize: 16
    }
  }, s.initials), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "start",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 17,
      fontWeight: 800,
      color: "#1a1410",
      textTransform: "uppercase",
      letterSpacing: "-0.005em",
      lineHeight: 1.1
    }
  }, s.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      padding: "4px 9px",
      borderRadius: 3,
      background: c,
      color: "#fff",
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      flexShrink: 0
    }
  }, s.track)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#3a2f28",
      marginTop: 4
    }
  }, s.role), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "#1a1410",
      marginTop: 12,
      fontWeight: 500,
      lineHeight: 1.4
    }
  }, "\"", s.topic, "\""))));
};

/* ── Main page component ── */
const SpeakersPage = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
  eyebrow: "Speakers \xB7 AWS Community Day Ghana 2026",
  title: "Speakers & roles",
  glyph: "gyenyame",
  sub: "Keynotes, panels, and breakout talks by cloud builders. The line-up is being confirmed. The call for speakers is open."
}), /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.paper,
    padding: "96px 56px 0"
  }
}, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1100,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 8
  }
}, /*#__PURE__*/React.createElement(Adinkra, {
  name: "gyenyame",
  size: 18,
  color: TOKENS.terracotta
}), /*#__PURE__*/React.createElement(SectionEyebrow, null, "Keynotes")), /*#__PURE__*/React.createElement(SectionHeadline, {
  size: "large"
}, "Opening keynotes"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
    marginTop: 48
  },
  className: "keynote-grid"
}, KEYNOTE_ROLES.map((k, i) => /*#__PURE__*/React.createElement(KeynoteRoleCard, {
  key: i,
  title: k.title,
  who: k.who
})))))), /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.paper,
    padding: "80px 56px 0"
  }
}, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1100,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 8
  }
}, /*#__PURE__*/React.createElement(Adinkra, {
  name: "nkyinkyim",
  size: 18,
  color: TOKENS.terracotta
}), /*#__PURE__*/React.createElement(SectionEyebrow, null, "Panels")), /*#__PURE__*/React.createElement(SectionHeadline, {
  size: "large"
}, "Panel discussions"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
    marginTop: 48
  },
  className: "panels-grid"
}, PANELS.map((p, i) => /*#__PURE__*/React.createElement(PanelCard, {
  key: i,
  title: p.title,
  moderator: p.moderator,
  seats: p.seats
})))))), /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.paper,
    padding: "80px 56px 0"
  }
}, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1100,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    flexWrap: "wrap",
    gap: 32
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 8
  }
}, /*#__PURE__*/React.createElement(Adinkra, {
  name: "dwennimmen",
  size: 18,
  color: TOKENS.terracotta
}), /*#__PURE__*/React.createElement(SectionEyebrow, null, "Speakers")), /*#__PURE__*/React.createElement(SectionHeadline, {
  size: "large"
}, "Speaker line-up")), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 14,
    color: TOKENS.ink2,
    maxWidth: 340,
    lineHeight: 1.55
  }
}, "Speakers are being confirmed. The call for speakers is open \u2014 add your name to the line-up.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 16,
    marginTop: 48
  },
  className: "speakers-grid"
}, SPEAKERS.map((s, i) => /*#__PURE__*/React.createElement(SpeakerCard, {
  key: i,
  s: s
})))))), /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.paper,
    padding: "64px 56px 120px"
  }
}, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1100,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    background: TOKENS.cream,
    border: `1px solid rgba(26,20,16,0.12)`,
    borderRadius: 16,
    padding: "48px 52px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 32
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionEyebrow, null, "Call for speakers"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: TOKENS.fontDisplay,
    fontSize: "clamp(24px, 3vw, 40px)",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "-0.015em",
    color: TOKENS.ink,
    lineHeight: 1.05,
    marginTop: 12,
    maxWidth: 520
  }
}, "Line-up is being confirmed \u2014 the call for speakers is open."), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 15,
    color: TOKENS.ink2,
    lineHeight: 1.6,
    marginTop: 16,
    maxWidth: 520
  }
}, "We want practical talks grounded in real experience, across FinTech, EdTech, AgriTech, GenAI, and beyond. First-time speakers are welcome."), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 13,
    color: TOKENS.ink2,
    lineHeight: 1.5,
    marginTop: 8,
    maxWidth: 520
  }
}, "Speaker submissions by email for now; the CFP form opens soon.")), /*#__PURE__*/React.createElement("a", {
  href: `mailto:${CONTACT}?subject=Speaker submission - AWS Community Day Ghana 2026`,
  style: btnPrimary()
}, "Submit a talk"))))));
Object.assign(window, {
  SpeakersPage
});
})();
