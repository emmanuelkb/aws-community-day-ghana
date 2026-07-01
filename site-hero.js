(function(){
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Hero + Marquee + About + What-to-Expect + Tracks.
   Bold navy hero (Toronto/Bay Area) enriched with Ecuador-style elements:
   edition badge, countdown, marquee ticker, numbered feature cards.
   Content from the action doc: Sat 29 Aug 2026, Accra, AWS User Group Accra. */

const {
  TOKENS,
  KenteStripes,
  KenteBar,
  SectionEyebrow,
  SectionHeadline,
  AkwaabaWeave,
  Reveal,
  Adinkra
} = window;
const {
  btnPrimary,
  btnGhost,
  btnPrimaryNavy,
  btnGhostNavy
} = window;
const EVENT_DATE = "2026-08-29T08:00:00+00:00";
const LUMA_URL = window.LUMA_URL; /* sourced from site-core.jsx */

/* ───── Ghanaian black star ───── */
const StarPath = props => /*#__PURE__*/React.createElement("path", _extends({
  d: "M50 6 L61 38.5 L96 38.5 L67.5 58.5 L78.5 92 L50 71.5 L21.5 92 L32.5 58.5 L4 38.5 L39 38.5 Z"
}, props));

/* AWS Smile wordmark */
const AwsSmile = ({
  wordmark = "#fff",
  smile = "#FF9900",
  w = 130
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 304 182",
  width: w,
  height: w * 0.6,
  "aria-label": "aws"
}, /*#__PURE__*/React.createElement("path", {
  fill: wordmark,
  d: "M86.4 66.4c0 3.7.4 6.7 1.1 8.9.8 2.2 1.8 4.6 3.2 7.2.5.8.7 1.6.7 2.3 0 1-.6 2-1.9 3l-6.3 4.2c-.9.6-1.8.9-2.6.9-1 0-2-.5-3-1.4-1.4-1.5-2.6-3.1-3.6-4.7-1-1.7-2-3.6-3.1-5.9-7.8 9.2-17.6 13.8-29.4 13.8-8.4 0-15.1-2.4-20-7.2-4.9-4.8-7.4-11.2-7.4-19.2 0-8.5 3-15.4 9.1-20.6 6.1-5.2 14.2-7.8 24.5-7.8 3.4 0 6.9.3 10.6.8 3.7.5 7.5 1.3 11.5 2.2v-7.3c0-7.6-1.6-12.9-4.7-16-3.2-3.1-8.6-4.6-16.3-4.6-3.5 0-7.1.4-10.8 1.3-3.7.9-7.3 2-10.8 3.4-1.6.7-2.8 1.1-3.5 1.3-.7.2-1.2.3-1.6.3-1.4 0-2.1-1-2.1-3.1v-4.9c0-1.6.2-2.8.7-3.5.5-.7 1.4-1.4 2.8-2.1 3.5-1.8 7.7-3.3 12.6-4.5 4.9-1.3 10.1-1.9 15.6-1.9 11.9 0 20.6 2.7 26.2 8.1 5.5 5.4 8.3 13.6 8.3 24.6v32.4zM45.8 81.6c3.3 0 6.7-.6 10.3-1.8 3.6-1.2 6.8-3.4 9.5-6.4 1.6-1.9 2.8-4 3.4-6.4.6-2.4 1-5.3 1-8.7v-4.2c-2.9-.7-6-1.3-9.2-1.7-3.2-.4-6.3-.6-9.4-.6-6.7 0-11.6 1.3-14.9 4-3.3 2.7-4.9 6.5-4.9 11.5 0 4.7 1.2 8.2 3.7 10.6 2.4 2.5 5.9 3.7 10.5 3.7zm80.3 10.8c-1.8 0-3-.3-3.8-1-.8-.6-1.5-2-2.1-3.9L96.7 10.2c-.6-2-.9-3.3-.9-4 0-1.6.8-2.5 2.4-2.5h9.8c1.9 0 3.2.3 3.9 1 .8.6 1.4 2 2 3.9l16.8 66.2 15.6-66.2c.5-2 1.1-3.3 1.9-3.9.8-.6 2.2-1 4-1h8c1.9 0 3.2.3 4 1 .8.6 1.5 2 1.9 3.9l15.8 67 17.3-67c.6-2 1.3-3.3 2-3.9.8-.6 2.1-1 3.9-1h9.3c1.6 0 2.5.8 2.5 2.5 0 .5-.1 1-.2 1.6-.1.6-.3 1.4-.7 2.5l-24.1 77.3c-.6 2-1.3 3.3-2.1 3.9-.8.6-2.1 1-3.8 1h-8.6c-1.9 0-3.2-.3-4-1-.8-.7-1.5-2-1.9-4L156 23l-15.4 64.4c-.5 2-1.1 3.3-1.9 4-.8.7-2.2 1-4 1h-8.6zm128.5 2.7c-5.2 0-10.4-.6-15.4-1.8-5-1.2-8.9-2.5-11.5-4-1.6-.9-2.7-1.9-3.1-2.8-.4-.9-.6-1.9-.6-2.8v-5.1c0-2.1.8-3.1 2.3-3.1.6 0 1.2.1 1.8.3.6.2 1.5.6 2.5 1 3.4 1.5 7.1 2.7 11 3.5 4 .8 7.9 1.2 11.9 1.2 6.3 0 11.2-1.1 14.6-3.3 3.4-2.2 5.2-5.4 5.2-9.5 0-2.8-.9-5.1-2.7-7-1.8-1.9-5.2-3.6-10.1-5.2L246 52c-7.3-2.3-12.7-5.7-16-10.2-3.3-4.4-5-9.3-5-14.5 0-4.2.9-7.9 2.7-11.1 1.8-3.2 4.2-6 7.2-8.2 3-2.3 6.4-4 10.4-5.2 4-1.2 8.2-1.7 12.6-1.7 2.2 0 4.5.1 6.7.4 2.3.3 4.4.7 6.5 1.1 2 .5 3.9 1 5.7 1.6 1.8.6 3.2 1.2 4.2 1.8 1.4.8 2.4 1.6 3 2.5.6.8.9 1.9.9 3.3v4.7c0 2.1-.8 3.2-2.3 3.2-.8 0-2.1-.4-3.8-1.2-5.7-2.6-12.1-3.9-19.2-3.9-5.7 0-10.2.9-13.3 2.8-3.1 1.9-4.7 4.8-4.7 8.9 0 2.8 1 5.2 3 7.1 2 1.9 5.7 3.8 11 5.5l14.2 4.5c7.2 2.3 12.4 5.5 15.5 9.6 3.1 4.1 4.6 8.8 4.6 14 0 4.3-.9 8.2-2.6 11.6-1.8 3.4-4.2 6.4-7.3 8.8-3.1 2.5-6.8 4.3-11.1 5.6-4.5 1.4-9.2 2.1-14.3 2.1z"
}), /*#__PURE__*/React.createElement("path", {
  fill: smile,
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M273.5 143.7c-32.9 24.3-80.7 37.2-121.8 37.2-57.6 0-109.5-21.3-148.7-56.7-3.1-2.8-.3-6.6 3.4-4.4 42.4 24.6 94.7 39.5 148.8 39.5 36.5 0 76.6-7.6 113.5-23.2 5.5-2.5 10.2 3.6 4.8 7.6z"
}), /*#__PURE__*/React.createElement("path", {
  fill: smile,
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M287.2 128.1c-4.2-5.4-27.8-2.6-38.5-1.3-3.2.4-3.7-2.4-.8-4.5 18.8-13.2 49.7-9.4 53.3-5 3.6 4.5-1 35.4-18.6 50.2-2.7 2.3-5.3 1.1-4.1-1.9 4-9.9 12.9-32.2 8.7-37.5z"
}));

/* Logo B lockup */
const HeroLockup = () => /*#__PURE__*/React.createElement("div", {
  style: {
    textAlign: "center",
    fontFamily: "'Inter', sans-serif"
  }
}, /*#__PURE__*/React.createElement(AwsSmile, {
  w: 140
}), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 22,
    fontSize: "clamp(48px, 8vw, 104px)",
    lineHeight: 0.95,
    fontWeight: 800,
    letterSpacing: "0.005em",
    color: "#fff",
    textTransform: "uppercase",
    fontFamily: TOKENS.fontDisplay
  }
}, "Community Day"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginTop: 18
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    height: 1.5,
    width: 100,
    background: "rgba(255,255,255,0.55)"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  }
}, /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 100 100",
  style: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: 116,
    height: 116,
    opacity: 0.14,
    pointerEvents: "none"
  }
}, /*#__PURE__*/React.createElement(StarPath, {
  fill: "#fff"
})), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative",
    fontSize: 26,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#D4A24C",
    fontWeight: 800,
    padding: "0 6px"
  }
}, "Accra")), /*#__PURE__*/React.createElement("div", {
  style: {
    height: 1.5,
    width: 100,
    background: "rgba(255,255,255,0.55)"
  }
})));

/* ───── Marquee ticker (Ecuador-style) ───── */
const Marquee = ({
  items,
  bg = TOKENS.navy2,
  color = "rgba(255,255,255,0.9)",
  accent = TOKENS.starGold,
  speed = 38,
  border = "rgba(255,255,255,0.12)"
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    overflow: "hidden",
    background: bg,
    borderTop: `1px solid ${border}`,
    borderBottom: `1px solid ${border}`,
    padding: "16px 0"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 44,
    animation: `marquee ${speed}s linear infinite`,
    whiteSpace: "nowrap",
    width: "max-content"
  }
}, [...items, ...items, ...items].map((it, i) => /*#__PURE__*/React.createElement("span", {
  key: i,
  style: {
    display: "flex",
    alignItems: "center",
    gap: 44,
    fontSize: 15,
    fontWeight: 600,
    letterSpacing: "0.04em",
    color,
    textTransform: "uppercase"
  }
}, it, /*#__PURE__*/React.createElement("span", {
  "aria-hidden": true,
  style: {
    width: 9,
    height: 9,
    background: accent,
    borderRadius: 2,
    transform: "rotate(45deg)",
    display: "inline-block"
  }
})))));

/* Countdown for navy hero */
const CountdownNavy = ({
  targetDate
}) => {
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const target = targetDate ? new Date(targetDate).getTime() : null;
  const diff = target ? Math.max(0, target - now) : null;
  const d = diff != null ? Math.floor(diff / 86400000) : null;
  const h = diff != null ? Math.floor(diff / 3600000 % 24) : null;
  const m = diff != null ? Math.floor(diff / 60000 % 60) : null;
  const s = diff != null ? Math.floor(diff / 1000 % 60) : null;
  const cells = [["Days", d], ["Hrs", h], ["Min", m], ["Sec", s]];
  const pad = v => v == null ? "––" : String(v).padStart(2, "0");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, cells.map(([label, v]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      textAlign: "center",
      minWidth: 60,
      flex: "0 0 auto",
      padding: "12px 10px",
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      lineHeight: 1,
      fontWeight: 800,
      color: "#fff",
      fontVariantNumeric: "tabular-nums"
    }
  }, pad(v)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: TOKENS.starGold,
      marginTop: 6,
      fontWeight: 700
    }
  }, label))));
};

/* ───────────────────── Hero ───────────────────── */
const Hero = ({
  heroVariant
}) => {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: "relative",
      minHeight: "100vh",
      overflow: "hidden",
      background: TOKENS.navy,
      color: "#fff",
      paddingTop: 116,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(AkwaabaWeave, {
    opacity: 0.10,
    tone: "dark"
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      top: 92,
      left: 0,
      height: 6,
      width: 220,
      background: `linear-gradient(90deg, ${TOKENS.terracotta} 0 33%, ${TOKENS.starGold} 33% 66%, ${TOKENS.green} 66% 100%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-inner",
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 56px",
      position: "relative",
      zIndex: 2,
      width: "100%",
      maxWidth: 1100,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      position: "absolute",
      width: 1,
      height: 1,
      overflow: "hidden",
      clip: "rect(0 0 0 0)",
      whiteSpace: "nowrap"
    }
  }, "AWS Community Day Ghana 2026 \u2014 Accra, 29 August 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "7px 8px 7px 16px",
      borderRadius: 999,
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.16)",
      marginBottom: 34,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.04em",
      color: "rgba(255,255,255,0.85)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: TOKENS.starGold,
      fontWeight: 700
    }
  }, "Akwaaba"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5
    }
  }, "\xB7"), "1st Edition", /*#__PURE__*/React.createElement("span", {
    style: {
      background: TOKENS.terracotta,
      color: "#fff",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      padding: "5px 12px",
      borderRadius: 999
    }
  }, "Registration open")), /*#__PURE__*/React.createElement(HeroLockup, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      fontSize: 13,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: TOKENS.starGold,
      fontWeight: 700,
      textAlign: "center"
    }
  }, "Saturday 29 August 2026 \xA0\xB7\xA0 Accra, Ghana \xA0\xB7\xA0 Main Auditorium"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      fontSize: 19,
      color: "rgba(255,255,255,0.92)",
      maxWidth: 640,
      textAlign: "center",
      lineHeight: 1.45,
      fontWeight: 500
    }
  }, "Building the Backbone: Powering Ghana's Digital Ambitions Through Cloud Technology"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 10,
      fontSize: 14,
      color: "rgba(255,255,255,0.55)",
      textAlign: "center",
      letterSpacing: "0.04em"
    }
  }, "By the community, for the community."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 32,
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: LUMA_URL,
    target: "_blank",
    rel: "noopener",
    style: btnPrimaryNavy()
  }, "Register on Luma"), /*#__PURE__*/React.createElement("a", {
    href: "agenda.html",
    style: btnGhostNavy()
  }, "View the agenda")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(CountdownNavy, {
    targetDate: EVENT_DATE
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta-band",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      position: "relative",
      zIndex: 2,
      borderTop: "1px solid rgba(255,255,255,0.16)"
    }
  }, [["12+", "Sessions"], ["300", "Attendees"], ["3", "Tracks"], ["1", "Day"]].map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      padding: "24px 12px",
      textAlign: "center",
      borderRight: i < 3 ? "1px solid rgba(255,255,255,0.12)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34,
      fontWeight: 800,
      letterSpacing: "-0.01em"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: TOKENS.starGold,
      fontWeight: 700,
      marginTop: 6
    }
  }, l)))));
};

/* Marquee strip rendered right after hero */
const HeroMarquee = () => /*#__PURE__*/React.createElement(Marquee, {
  items: ["Keynotes", "Breakout Tracks", "Generative AI", "Serverless", "Bedrock", "SageMaker", "Lambda", "Networking", "AWS Heroes", "Community Builders", "Panels", "Town Hall", "Breakouts"]
});

/* ───────────────────── About ───────────────────── */
const About = () => /*#__PURE__*/React.createElement("section", {
  id: "about",
  style: {
    background: TOKENS.cream,
    padding: "120px 56px"
  }
}, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1280,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement(SectionEyebrow, null, "About the day"), /*#__PURE__*/React.createElement(SectionHeadline, {
  size: "large"
}, "What is Community Day?"), /*#__PURE__*/React.createElement("div", {
  className: "about-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "1.1fr 1fr",
    gap: 80,
    marginTop: 56,
    alignItems: "start"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 17,
    lineHeight: 1.65,
    color: TOKENS.ink2
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottom: `1px solid ${TOKENS.line}`
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    fontWeight: 700,
    color: TOKENS.terracotta,
    marginBottom: 8,
    fontFamily: "'Inter', sans-serif"
  }
}, "Theme"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 16,
    fontWeight: 600,
    color: TOKENS.ink2,
    lineHeight: 1.45,
    fontFamily: "'Inter', sans-serif"
  }
}, "Building the Backbone: Powering Ghana's Digital Ambitions Through Cloud Technology")), /*#__PURE__*/React.createElement("p", {
  style: {
    marginTop: 0
  }
}, "AWS Community Day Ghana 2026 is a one-day technology conference run by the ", /*#__PURE__*/React.createElement("strong", null, "AWS User Group Accra"), ". Cloud practitioners, developers, students, founders, and industry leaders come together to learn, swap notes, and explore how AWS is being used to build and scale real products."), /*#__PURE__*/React.createElement("p", null, "The day includes keynotes, panels, breakout tracks, and a closing town hall from AWS Heroes, Community Builders, and local practitioners. Free to attend, open to everyone, and hosted in Accra.")), /*#__PURE__*/React.createElement("div", {
  style: {
    background: TOKENS.navy,
    color: "#fff",
    padding: "36px",
    borderRadius: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: TOKENS.starGold,
    fontWeight: 700
  }
}, "On the day"), /*#__PURE__*/React.createElement("ul", {
  style: {
    listStyle: "none",
    padding: 0,
    margin: "20px 0 0",
    display: "flex",
    flexDirection: "column",
    gap: 14
  }
}, ["Keynote: Building the Backbone", "Panels on cloud and careers", "3 parallel breakout tracks", "Town Hall: Cloud Careers & Community Building", "Networking reception to close the day"].map(item => /*#__PURE__*/React.createElement("li", {
  key: item,
  style: {
    display: "flex",
    gap: 14,
    alignItems: "start",
    fontSize: 15,
    lineHeight: 1.5,
    color: "rgba(255,255,255,0.88)"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: TOKENS.awsOrange,
    marginTop: 8,
    flexShrink: 0
  }
}), item))))))));

/* ───────────────────── What to Expect (numbered) ───────────────────── */
const WhatToExpect = () => {
  const cards = [["01", "Technical Sessions", "Deep-dive talks on AWS services, architectures, and real production patterns — from people who ship them."], ["02", "Panels & Town Hall", "Keynote and panels on the main stage, plus a closing town hall on cloud careers and community building."], ["03", "Networking", "Meet builders, founders, AWS Heroes, and the cloud community over jollof and coffee."], ["04", "100% Free", "Community-led and free, funded by our sponsors. Open to everyone, from students to Heroes."]];
  const accents = [TOKENS.terracotta, TOKENS.indigo, TOKENS.green, "#1B6B8F"];
  return /*#__PURE__*/React.createElement("section", {
    id: "expect",
    style: {
      background: TOKENS.paper,
      padding: "120px 56px"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, null, "What to expect"), /*#__PURE__*/React.createElement(SectionHeadline, {
    size: "large"
  }, "A full day, end to end"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16,
      marginTop: 64
    },
    className: "expect-grid"
  }, cards.map(([num, title, desc], i) => /*#__PURE__*/React.createElement("div", {
    key: num,
    style: {
      background: "#fff",
      border: `1px solid ${TOKENS.line}`,
      borderRadius: 16,
      padding: 32,
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      letterSpacing: "0.1em",
      color: accents[i],
      fontVariantNumeric: "tabular-nums"
    }
  }, "/", num), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 22,
      fontWeight: 800,
      color: TOKENS.ink,
      margin: 0,
      letterSpacing: "-0.01em",
      lineHeight: 1.1
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

/* ───────────────────── Tracks / Format ───────────────────── */
const Tracks = () => {
  const tracks = [{
    num: "01",
    name: "Keynotes & Panels",
    color: TOKENS.terracotta,
    desc: "Keynote, panels on cloud topics, and a town hall on cloud careers and community building.",
    chips: ["Keynote", "Panels", "Town Hall"]
  }, {
    num: "02",
    name: "Parallel Tracks",
    color: "#7BA4E8",
    desc: "Three parallel breakout tracks across two sessions, with practitioner talks from engineers and builders.",
    chips: ["Track 1", "Track 2", "Track 3"]
  }, {
    num: "03",
    name: "Town Hall & Networking",
    color: TOKENS.starGold,
    desc: "A closing town hall on cloud careers and community building, then a networking reception to round off the day.",
    chips: ["Town Hall", "Careers", "Networking"]
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "tracks",
    style: {
      background: TOKENS.navy,
      color: "#fff",
      padding: "120px 56px",
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
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Adinkra, {
    name: "dwennimmen",
    size: 18,
    color: TOKENS.starGold
  }), /*#__PURE__*/React.createElement(SectionEyebrow, {
    dark: true
  }, "Programme format")), /*#__PURE__*/React.createElement(SectionHeadline, {
    dark: true,
    size: "large"
  }, "How the day is structured"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16,
      marginTop: 64
    },
    className: "tracks-grid"
  }, tracks.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.num,
    style: {
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 16,
      padding: "36px 32px",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      letterSpacing: "0.1em",
      color: t.color
    }
  }, "/", t.num), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 26,
      lineHeight: 1.05,
      color: "#fff",
      fontWeight: 800,
      letterSpacing: "-0.01em",
      textTransform: "uppercase",
      margin: 0
    }
  }, t.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.72)",
      margin: 0
    }
  }, t.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: "auto",
      paddingTop: 12,
      flexWrap: "wrap"
    }
  }, t.chips.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      fontSize: 11,
      padding: "6px 12px",
      borderRadius: 999,
      background: "rgba(255,255,255,0.06)",
      color: "rgba(255,255,255,0.85)",
      border: "1px solid rgba(255,255,255,0.1)",
      fontWeight: 500
    }
  }, c)))))))));
};
Object.assign(window, {
  Hero,
  HeroMarquee,
  Marquee,
  About,
  WhatToExpect,
  Tracks,
  AwsSmile,
  HeroLockup,
  StarPath,
  EVENT_DATE,
  LUMA_URL
});
})();
