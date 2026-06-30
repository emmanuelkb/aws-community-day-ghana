(function(){
/* Why Attend + Speakers (featured keynotes + grid) + Agenda + CFP.
   Agenda is the real run-of-show from the action doc. Speakers mix confirmed names + TBA. */

const {
  TOKENS,
  SectionEyebrow,
  SectionHeadline,
  KenteBar,
  Adinkra,
  Reveal
} = window;
const {
  btnPrimary,
  btnGhost,
  btnPrimaryNavy,
  btnGhostNavy
} = window;

/* ───────────────────── Why Attend ───────────────────── */
const WhyAttend = () => {
  const cards = [["Latest from AWS", "Hear about new services, patterns, and launches from people who use them every day."], ["Real-world use cases", "Production patterns and lessons you can apply anywhere, whatever you're building."], ["Community", "Meet AWS users, Heroes, and Community Builders from across the cloud community."], ["Free to attend", "Community-led and free, funded by our sponsors. Everyone is welcome."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: TOKENS.cream,
      padding: "120px 56px",
      borderTop: `1px solid ${TOKENS.line}`
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, null, "Why attend"), /*#__PURE__*/React.createElement(SectionHeadline, {
    size: "large"
  }, "Worth your Saturday"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16,
      marginTop: 64
    },
    className: "expect-grid"
  }, cards.map(([title, desc], i) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      paddingTop: 24,
      borderTop: `2px solid ${TOKENS.ink}`
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 20,
      fontWeight: 800,
      color: TOKENS.ink,
      margin: 0,
      letterSpacing: "-0.01em"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: TOKENS.ink2,
      margin: 0
    }
  }, desc)))))));
};

/* ───────────────────── Speakers (compact landing band) ─────────────────────
   No TBA cards on the landing. The full line-up lives on speakers.html. */
const Speakers = () => /*#__PURE__*/React.createElement("section", {
  id: "speakers",
  style: {
    background: TOKENS.paper,
    padding: "96px 56px"
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
    gap: 8
  }
}, /*#__PURE__*/React.createElement(Adinkra, {
  name: "gyenyame",
  size: 18,
  color: TOKENS.terracotta
}), /*#__PURE__*/React.createElement(SectionEyebrow, null, "Speakers")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: 56,
    marginTop: 20,
    alignItems: "center"
  },
  className: "speakers-band-grid"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeadline, {
  size: "large"
}, "Speakers & keynotes")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 17,
    lineHeight: 1.65,
    color: TOKENS.ink2,
    margin: "0 0 32px"
  }
}, "Keynotes and speakers are being confirmed now. The call for speakers is open, so the line-up is yours to join."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "cfp.html",
  style: btnPrimary()
}, "Submit a talk"), /*#__PURE__*/React.createElement("a", {
  href: "speakers.html",
  style: btnGhost()
}, "See speaker roles")))))));

/* ───────────────────── Agenda (real run-of-show) ───────────────────── */
const AGENDA = [{
  time: "08:00",
  title: "Arrival & registration",
  tag: "Networking"
}, {
  time: "09:00",
  title: "Opening remarks & welcome",
  tag: "Opening",
  sub: "MC + AWS User Group Accra Lead"
}, {
  time: "09:30",
  title: "Keynote: Building the Backbone",
  tag: "Keynote"
}, {
  time: "10:10",
  title: "Message from 1st Platinum Sponsor",
  tag: "Sponsor"
}, {
  time: "10:20",
  title: "Coffee break",
  tag: "Break"
}, {
  time: "10:40",
  title: "Message from 2nd Platinum Sponsor",
  tag: "Sponsor"
}, {
  time: "11:15",
  title: "Panel: Building the Backbone",
  tag: "Panel",
  sub: "4 speakers + moderator"
}, {
  time: "12:00",
  title: "Picture with panelists (all participants)",
  tag: "Networking"
}, {
  time: "12:15",
  title: "Lunch & networking",
  tag: "Networking",
  sub: "Jollof · Waakye · Fried yam"
}, {
  time: "12:50",
  title: "Message from 3rd Platinum Sponsor",
  tag: "Sponsor"
}, {
  time: "13:00",
  title: "Breakout Session 1 (3 tracks, 1 hour)",
  tag: "Breakout",
  tracks: ["Track 1", "Track 2", "Track 3"]
}, {
  time: "14:00",
  title: "Coffee break",
  tag: "Break"
}, {
  time: "14:20",
  title: "Breakout Session 2 (3 tracks, 1 hour)",
  tag: "Breakout",
  tracks: ["Track 1", "Track 2", "Track 3"]
}, {
  time: "15:30",
  title: "Town Hall: Cloud Careers & Community Building",
  tag: "Panel",
  sub: "4 speakers + moderator, audience Q&A"
}, {
  time: "16:30",
  title: "Closing ceremony, raffle & group photo",
  tag: "Closing"
}, {
  time: "17:00",
  title: "Networking reception",
  tag: "Networking"
}];
const TAG_COLOR = {
  Keynote: TOKENS.terracotta,
  Panel: TOKENS.indigo,
  Breakout: TOKENS.green,
  Workshop: TOKENS.gold,
  Networking: "#8a7a68",
  Opening: TOKENS.navy,
  Closing: TOKENS.navy,
  Break: "#b3a896",
  Sponsor: "#E8B23A"
};
const Agenda = () => /*#__PURE__*/React.createElement("section", {
  id: "agenda",
  style: {
    background: TOKENS.cream,
    padding: "120px 56px",
    borderTop: `1px solid ${TOKENS.line}`
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
    gap: 8
  }
}, /*#__PURE__*/React.createElement(Adinkra, {
  name: "nkyinkyim",
  size: 18,
  color: TOKENS.terracotta
}), /*#__PURE__*/React.createElement(SectionEyebrow, null, "Agenda \xB7 29 August 2026")), /*#__PURE__*/React.createElement(SectionHeadline, {
  size: "large"
}, "Run of show"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 56,
    background: "#fff",
    border: `1px solid rgba(26,20,16,0.12)`,
    borderRadius: 12,
    overflow: "hidden",
    color: "#1a1410"
  }
}, AGENDA.map((item, i) => {
  const c = TAG_COLOR[item.tag] || TOKENS.ink2;
  const isBreak = item.tag === "Break";
  return /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "92px 1fr auto",
      gap: 24,
      padding: "20px 28px",
      borderTop: i > 0 ? `1px solid rgba(26,20,16,0.1)` : "none",
      background: isBreak ? "rgba(26,20,16,0.03)" : "transparent",
      alignItems: "center"
    },
    className: "agenda-row"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      color: "#1a1410",
      fontWeight: 800,
      fontVariantNumeric: "tabular-nums"
    }
  }, item.time), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: "#1a1410",
      fontWeight: 600,
      lineHeight: 1.35
    }
  }, item.title), item.sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#3a2f28",
      marginTop: 4
    }
  }, item.sub), item.tracks && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 10,
      flexWrap: "wrap"
    }
  }, item.tracks.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontSize: 10,
      padding: "4px 9px",
      borderRadius: 3,
      background: "rgba(26,20,16,0.06)",
      color: "#3a2f28",
      fontWeight: 700,
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, t)))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      padding: "5px 10px",
      borderRadius: 3,
      background: c,
      color: "#fff",
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      whiteSpace: "nowrap"
    }
  }, item.tag));
})), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    color: TOKENS.ink2
  }
}, "Agenda is provisional and subject to change as speakers are confirmed."), /*#__PURE__*/React.createElement("a", {
  href: "agenda.html",
  style: {
    fontSize: 13,
    fontWeight: 700,
    color: TOKENS.terracotta,
    textDecoration: "none",
    letterSpacing: "0.04em"
  }
}, "Full agenda \u2192")))));

/* ───────────────────── CFP ───────────────────── */
const CFP = () => /*#__PURE__*/React.createElement("section", {
  id: "cfp",
  style: {
    background: TOKENS.navy,
    color: "#fff",
    padding: "120px 56px",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(KenteBar, {
  height: 4
}), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1280,
    margin: "0 auto",
    position: "relative",
    paddingTop: 24
  }
}, /*#__PURE__*/React.createElement(SectionEyebrow, {
  dark: true
}, "Call for speakers"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr",
    gap: 80,
    marginTop: 24,
    alignItems: "start"
  },
  className: "cfp-grid"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeadline, {
  dark: true,
  size: "large"
}, "Share what you've built"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 18,
    lineHeight: 1.6,
    marginTop: 32,
    color: "rgba(255,255,255,0.78)",
    maxWidth: 580
  }
}, "We want practical talks grounded in real experience \u2014 FinTech, EdTech, AgriTech, GenAI, and beyond. First-time speakers are welcome."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 14,
    marginTop: 36,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "cfp.html",
  style: btnPrimaryNavy()
}, "Submit a talk"), /*#__PURE__*/React.createElement("a", {
  href: "cfp.html",
  style: btnGhostNavy()
}, "Speaker FAQ"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: TOKENS.starGold,
    fontWeight: 700,
    marginBottom: 8
  }
}, "Formats"), [["Keynote", "45 min", "High-level, inspiring, big-picture"], ["Breakout talk", "40 min", "Deep dive into a topic or architecture"], ["Panel", "60 min", "Submit your perspective; we curate"]].map(([f, d, desc]) => /*#__PURE__*/React.createElement("div", {
  key: f,
  className: "format-row",
  style: {
    padding: "20px 0",
    borderTop: "1px solid rgba(255,255,255,0.14)",
    display: "grid",
    gridTemplateColumns: "150px 70px 1fr",
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
    fontSize: 13,
    color: "rgba(255,255,255,0.7)",
    paddingTop: 2,
    lineHeight: 1.5
  }
}, desc))))))));
Object.assign(window, {
  WhyAttend,
  Speakers,
  Agenda,
  CFP
});
})();
