(function(){
/* page-agenda.jsx — Full Agenda page. PageHeader is defined in site-core.jsx. */

const {
  TOKENS,
  PageHeader,
  Reveal,
  Adinkra,
  btnPrimaryNavy
} = window;
const FULL_AGENDA = [{
  time: "08:00 – 09:00",
  title: "Arrival & registration",
  tag: "Networking"
}, {
  time: "09:00 – 09:30",
  title: "Opening remarks & welcome",
  tag: "Opening",
  sub: "MC + AWS User Group Accra Lead"
}, {
  time: "09:30 – 10:00",
  title: "Keynote: Building the Backbone",
  tag: "Keynote"
}, {
  time: "10:10 – 10:20",
  title: "Message from 1st Platinum Sponsor",
  tag: "Sponsor"
}, {
  time: "10:20 – 10:35",
  title: "Coffee break",
  tag: "Break"
}, {
  time: "10:40 – 10:50",
  title: "Message from 2nd Platinum Sponsor",
  tag: "Sponsor"
}, {
  time: "11:15 – 12:00",
  title: "Panel: Building the Backbone",
  tag: "Panel",
  sub: "4 speakers + moderator"
}, {
  time: "12:00 – 12:10",
  title: "Picture with panelists (all participants)",
  tag: "Networking"
}, {
  time: "12:15 – 12:45",
  title: "Lunch & networking",
  tag: "Networking",
  sub: "Jollof · Waakye · Fried yam"
}, {
  time: "12:50 – 13:00",
  title: "Message from 3rd Platinum Sponsor",
  tag: "Sponsor"
}, {
  time: "13:00 – 14:00",
  title: "Breakout Session 1 (3 tracks, 1 hour)",
  tag: "Breakout",
  tracks: ["Track 1", "Track 2", "Track 3"]
}, {
  time: "14:00 – 14:20",
  title: "Coffee break",
  tag: "Break"
}, {
  time: "14:20 – 15:20",
  title: "Breakout Session 2 (3 tracks, 1 hour)",
  tag: "Breakout",
  tracks: ["Track 1", "Track 2", "Track 3"]
}, {
  time: "15:30 – 16:30",
  title: "Town Hall: Cloud Careers & Community Building",
  tag: "Panel",
  sub: "4 speakers + moderator, audience Q&A"
}, {
  time: "16:30 – 17:00",
  title: "Closing ceremony, raffle & group photo",
  tag: "Closing"
}, {
  time: "17:00 onwards",
  title: "Networking reception",
  tag: "Networking"
}];
const TAG_COLOR = {
  Keynote: TOKENS.terracotta,
  Panel: TOKENS.indigo,
  Breakout: TOKENS.green,
  Networking: "#8a7a68",
  Opening: TOKENS.navy,
  Closing: TOKENS.navy,
  Break: "#b3a896",
  Sponsor: "#E8B23A"
};

/* Track chip colours for the three parallel tracks */
function trackColor(t) {
  const tl = t.toLowerCase();
  if (tl.includes("track 1")) return TOKENS.terracotta;
  if (tl.includes("track 2")) return TOKENS.indigo;
  if (tl.includes("track 3")) return TOKENS.green;
  return "#8a7a68";
}
const AgendaPage = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
  eyebrow: "Agenda \xB7 29 August 2026",
  title: "Full run of show",
  glyph: "nkyinkyim",
  sub: "One day, one venue, three tracks. Here is how AWS Community Day Ghana 2026 runs."
}), /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.paper,
    padding: "64px 56px 0"
  }
}, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1100,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    background: TOKENS.navy,
    borderRadius: 14,
    padding: "40px 44px",
    display: "flex",
    gap: 32,
    alignItems: "flex-start",
    color: "#fff"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    flexShrink: 0,
    marginTop: 4
  }
}, /*#__PURE__*/React.createElement(Adinkra, {
  name: "sankofa",
  size: 48,
  color: TOKENS.starGold
})), /*#__PURE__*/React.createElement("div", {
  style: {
    flex: 1
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: TOKENS.starGold,
    fontWeight: 700,
    marginBottom: 10
  }
}, "Community segment"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: TOKENS.fontDisplay,
    fontSize: 26,
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "-0.01em",
    lineHeight: 1.1,
    marginBottom: 14
  }
}, "Cloud Horror Stories"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.55)",
    fontWeight: 700,
    marginBottom: 14
  }
}, "Mistakes and Anti-Patterns Not to be Repeated"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 15,
    lineHeight: 1.65,
    color: "rgba(255,255,255,0.78)",
    margin: 0,
    maxWidth: 640
  }
}, "A lightning-talk thread running through the breakout sessions. Community members share real cloud mistakes, costly misconfigurations, and lessons from production. The Sankofa symbol reminds us: it is not wrong to go back and fetch what you forgot. Submit yours through the CFP.")))))), /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.paper,
    padding: "40px 56px 0"
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
    gap: 10,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: TOKENS.ink2,
    marginRight: 6
  }
}, "Track legend"), [{
  label: "Track 1",
  color: TOKENS.terracotta
}, {
  label: "Track 2",
  color: TOKENS.indigo
}, {
  label: "Track 3",
  color: TOKENS.green
}].map(({
  label,
  color
}) => /*#__PURE__*/React.createElement("span", {
  key: label,
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontSize: 11,
    padding: "5px 12px",
    borderRadius: 4,
    background: color,
    color: "#fff",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase"
  }
}, label)), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 13,
    color: TOKENS.ink2,
    marginLeft: 8
  }
}, "Three tracks run in parallel during breakout sessions."))))), /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.paper,
    padding: "40px 56px 120px"
  }
}, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1100,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    background: "#fff",
    border: `1px solid rgba(26,20,16,0.12)`,
    borderRadius: 12,
    overflow: "hidden",
    color: "#1a1410"
  }
}, FULL_AGENDA.map((item, i) => {
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
      fontSize: 15,
      color: "#1a1410",
      fontWeight: 800,
      fontVariantNumeric: "tabular-nums",
      lineHeight: 1.3
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
      background: trackColor(t),
      color: "#fff",
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
    marginTop: 28,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    color: TOKENS.ink2,
    fontStyle: "italic"
  }
}, "Provisional \u2014 subject to change as speakers are confirmed."), /*#__PURE__*/React.createElement("a", {
  href: "cfp.html",
  style: btnPrimaryNavy()
}, "Want a slot? Submit a talk"))))));
Object.assign(window, {
  AgendaPage
});
})();
