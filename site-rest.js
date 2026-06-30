(function(){
/* Sponsors + Venue + Community + Crew + FAQ + Newsletter + Notify modal. (Footer moved to site-core.jsx.) */

const {
  TOKENS,
  SectionEyebrow,
  SectionHeadline,
  KenteBar,
  KenteStripes,
  Marquee,
  Reveal
} = window;
const {
  btnPrimary,
  btnGhost,
  btnPrimaryNavy,
  btnGhostNavy
} = window;
const CONTACT = "awsaccrausergroup@gmail.com";

/* ───────────────────── Sponsors (compact landing band) ───────────────────── */
const SPONSOR_TIERS = [{
  name: "Platinum",
  color: TOKENS.terracotta
}, {
  name: "Gold",
  color: TOKENS.gold
}, {
  name: "Silver",
  color: TOKENS.indigo
}, {
  name: "Bronze",
  color: TOKENS.green
}, {
  name: "Community Partner",
  color: TOKENS.ink2
}];
const Sponsors = () => /*#__PURE__*/React.createElement("section", {
  id: "sponsors",
  style: {
    background: TOKENS.cream,
    padding: "96px 0",
    borderTop: `1px solid ${TOKENS.line}`
  }
}, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 56px"
  }
}, /*#__PURE__*/React.createElement(SectionEyebrow, null, "Sponsors"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: 56,
    marginTop: 20,
    alignItems: "center"
  },
  className: "sponsors-band-grid"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeadline, {
  size: "large"
}, "Power the community")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 17,
    lineHeight: 1.65,
    color: TOKENS.ink2,
    margin: "0 0 28px"
  }
}, "AWS Community Day Ghana is free to attend, funded by sponsors. Five tiers are available, from headline Platinum to Community Partner. Your brand in front of 300+ builders, founders, and students in Ghana's cloud community."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginBottom: 32
  }
}, SPONSOR_TIERS.map(({
  name,
  color
}) => /*#__PURE__*/React.createElement("span", {
  key: name,
  style: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    padding: "7px 14px",
    borderRadius: 3,
    border: `1.5px solid ${color}`,
    color,
    background: "transparent",
    whiteSpace: "nowrap"
  }
}, name))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "sponsors.html",
  style: btnPrimary()
}, "Become a sponsor"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 14,
    color: TOKENS.ink2
  }
}, "or email ", /*#__PURE__*/React.createElement("a", {
  href: `mailto:${CONTACT}`,
  style: {
    color: TOKENS.terracotta,
    fontWeight: 600
  }
}, CONTACT))))))));

/* ───────────────────── Venue & travel ───────────────────── */
const Venue = () => /*#__PURE__*/React.createElement("section", {
  id: "venue",
  style: {
    background: TOKENS.navy,
    color: "#fff",
    padding: "120px 56px",
    position: "relative"
  }
}, /*#__PURE__*/React.createElement(KenteBar, {
  height: 4
}), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1280,
    margin: "0 auto",
    paddingTop: 24
  }
}, /*#__PURE__*/React.createElement(SectionEyebrow, {
  dark: true
}, "Venue & travel"), /*#__PURE__*/React.createElement("div", {
  className: "venue-grid",
  style: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: 60,
    marginTop: 28
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeadline, {
  dark: true,
  size: "large"
}, "See you in Accra"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 17,
    lineHeight: 1.65,
    color: "rgba(255,255,255,0.75)",
    marginTop: 32,
    maxWidth: 540
  }
}, "The day is at the Main Auditorium in Accra, a 300-seat venue with air conditioning, LED stage screen, PA system, and standby generator. Central and easy to reach from across the city."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 40,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 0
  }
}, [["Date", "Saturday 29 August 2026", "08:00 – 17:00"], ["Venue", "Main Auditorium", "Accra, Ghana"], ["Getting there", "Bolt / Trotro", "Central Accra"], ["Food", "Lunch & refreshments", "Jollof · Waakye · Fried yam"]].map(([k, v, sub], i) => /*#__PURE__*/React.createElement("div", {
  key: k,
  style: {
    padding: "20px 0",
    borderTop: "1px solid rgba(255,255,255,0.14)",
    paddingRight: i % 2 === 0 ? 24 : 0,
    paddingLeft: i % 2 === 1 ? 24 : 0,
    borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.14)" : "none"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: TOKENS.starGold,
    fontWeight: 700,
    marginBottom: 8
  }
}, k), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 16,
    color: "#fff",
    fontWeight: 600
  }
}, v), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 12,
    color: "rgba(255,255,255,0.55)",
    marginTop: 4
  }
}, sub)))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 32
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "venue.html",
  style: {
    fontSize: 13,
    fontWeight: 700,
    color: TOKENS.starGold,
    textDecoration: "none",
    letterSpacing: "0.04em",
    display: "inline-flex",
    alignItems: "center",
    gap: 6
  }
}, "Directions & venue details \u2192"))), /*#__PURE__*/React.createElement("div", {
  style: {
    height: 520,
    borderRadius: 16,
    position: "relative",
    overflow: "hidden",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    opacity: 0.5,
    backgroundImage: `radial-gradient(rgba(255,255,255,0.18) 1.5px, transparent 1.5px)`,
    backgroundSize: "24px 24px"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 32
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
}, "Map \xB7 venue confirmed soon"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 52,
    lineHeight: 1,
    fontWeight: 800,
    color: "#fff",
    letterSpacing: "-0.02em"
  }
}, "Accra"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 52,
    lineHeight: 1,
    fontWeight: 800,
    color: "rgba(255,255,255,0.45)",
    letterSpacing: "-0.02em",
    marginTop: 6
  }
}, "Ghana"), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 22,
    fontSize: 12,
    color: "rgba(255,255,255,0.5)",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    fontWeight: 600
  }
}, "5.6037\xB0 N \xB7 0.1870\xB0 W")))))));

/* ───────────────────── Community / user groups ───────────────────── */
const Community = () => {
  const groups = ["AWS User Group Accra", "AWS User Group Kumasi", "Universities & bootcamps", "Women in tech communities", "Developer meetups"];
  return /*#__PURE__*/React.createElement("section", {
    id: "community",
    style: {
      background: TOKENS.paper,
      padding: "120px 56px"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, null, "Community"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 60,
      marginTop: 24,
      alignItems: "center"
    },
    className: "org-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/aws-ug-accra.png",
    alt: "AWS User Group Accra",
    style: {
      width: 160,
      height: 160,
      objectFit: "contain",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement(SectionHeadline, {
    size: "large"
  }, "Organised by AWS User Group Accra"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.65,
      color: TOKENS.ink2,
      marginTop: 28,
      maxWidth: 520
    }
  }, "This event is run entirely by volunteers from Ghana's cloud community. We partner with user groups, universities, and developer communities across the community."), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${CONTACT}`,
    style: {
      ...btnPrimary(),
      marginTop: 28
    }
  }, "Partner with us")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, groups.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: g,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "20px 24px",
      background: "#fff",
      border: `1px solid ${TOKENS.line}`,
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 10,
      height: 10,
      background: [TOKENS.terracotta, TOKENS.gold, TOKENS.green, TOKENS.indigo, TOKENS.terracotta][i],
      borderRadius: 2,
      transform: "rotate(45deg)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: TOKENS.ink,
      letterSpacing: "-0.005em"
    }
  }, g))))))));
};

/* ───────────────────── Crew / volunteers ───────────────────── */
const Crew = () => {
  const teams = ["Registration", "Logistics & Floor", "Speaker Care", "Technical / AV", "Social Media", "Photography", "Food & Beverage", "Sponsor Liaison"];
  return /*#__PURE__*/React.createElement("section", {
    id: "crew",
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "end",
      flexWrap: "wrap",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionEyebrow, null, "Join the crew"), /*#__PURE__*/React.createElement(SectionHeadline, {
    size: "large"
  }, "Help make it happen")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: TOKENS.ink2,
      maxWidth: 340,
      lineHeight: 1.55
    }
  }, "~25 volunteers run the day across eight teams. Crew get a branded T-shirt, all meals, a certificate, and first access to future community events.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 12,
      marginTop: 56
    },
    className: "crew-grid"
  }, teams.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      padding: "24px",
      background: "#fff",
      border: `1px solid ${TOKENS.line}`,
      borderRadius: 12,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      color: [TOKENS.terracotta, TOKENS.indigo, TOKENS.green, TOKENS.indigo][i % 4],
      letterSpacing: "0.08em"
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: TOKENS.ink,
      letterSpacing: "-0.005em"
    }
  }, t)))), /*#__PURE__*/React.createElement("a", {
    href: "volunteer.html",
    style: {
      ...btnPrimary(),
      marginTop: 32
    }
  }, "Apply to volunteer"))));
};

/* ───────────────────── FAQ ───────────────────── */
const FAQ_ITEMS = [["Is the event free to attend?", "Yes. AWS Community Day Ghana 2026 is free and open to anyone interested in cloud, AI, and engineering. Capacity is 300, so register early to secure your spot."], ["When and where is it?", "Saturday 29 August 2026, 08:00–17:00, at the Main Auditorium in Accra, Ghana. The exact address is confirmed closer to the date."], ["How do I register?", "Registration is open on Luma. Use Register on Luma at the top of the page, or head straight to our Luma page."], ["Who is it for?", "Software engineers, cloud architects, DevOps and security practitioners, data and AI folks, founders, and students. Beginners and AWS Heroes alike."], ["Can I speak?", "Yes. The call for speakers is open. We want practical talks across FinTech, EdTech, AgriTech, GenAI, and more. First-time speakers are welcome."], ["How can my company sponsor?", `We have Platinum, Gold, Silver, Bronze, and Community Partner tiers. Email ${CONTACT} for the sponsorship prospectus.`], ["Can I volunteer?", "Yes. We run the day with ~25 volunteers across eight teams. See 'Join the crew' above and apply. Crew get a T-shirt, meals, and a certificate."], ["Will sessions be recorded?", "Main-stage talks will be recorded and shared after the event. Some breakouts may not be recorded to keep the conversation open."]];
const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    style: {
      background: TOKENS.paper,
      padding: "120px 56px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, null, "FAQ"), /*#__PURE__*/React.createElement(SectionHeadline, {
    size: "large"
  }, "Good questions"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, FAQ_ITEMS.map(([q, a], i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: q,
      style: {
        borderTop: `1px solid ${TOKENS.line}`,
        ...(i === FAQ_ITEMS.length - 1 ? {
          borderBottom: `1px solid ${TOKENS.line}`
        } : {})
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: "100%",
        textAlign: "left",
        padding: "26px 0",
        background: "transparent",
        border: 0,
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 24,
        fontFamily: "inherit"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "clamp(18px, 2.2vw, 24px)",
        color: TOKENS.ink,
        fontWeight: 700,
        letterSpacing: "-0.005em",
        lineHeight: 1.3
      }
    }, q), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 8,
        border: `1.5px solid ${TOKENS.ink}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        transform: isOpen ? "rotate(45deg)" : "rotate(0)",
        transition: "transform .25s"
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 1 V11 M1 6 H11",
      stroke: TOKENS.ink,
      strokeWidth: "1.5"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden",
        maxHeight: isOpen ? 320 : 0,
        transition: "max-height .35s ease",
        paddingBottom: isOpen ? 26 : 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        lineHeight: 1.65,
        color: TOKENS.ink2,
        maxWidth: 760
      }
    }, a)));
  }))));
};

/* ───────────────────── Newsletter / notify ───────────────────── */
const Newsletter = ({
  onNotify
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.navy,
    color: "#fff",
    padding: "120px 56px",
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement(KenteBar, {
  height: 4
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 280,
    height: "100%",
    opacity: 0.4
  }
}, /*#__PURE__*/React.createElement(KenteStripes, {
  width: 80
})), /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 820,
    margin: "0 auto",
    textAlign: "center",
    position: "relative",
    paddingTop: 24
  }
}, /*#__PURE__*/React.createElement(SectionEyebrow, {
  dark: true
}, "Stay in the loop"), /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "'Inter', sans-serif",
    fontSize: "clamp(40px, 6.5vw, 88px)",
    lineHeight: 1,
    fontWeight: 800,
    letterSpacing: "-0.02em",
    color: "#fff",
    textTransform: "uppercase",
    marginTop: 24,
    marginBottom: 0
  }
}, "Be the first to know"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 18,
    lineHeight: 1.55,
    color: "rgba(255,255,255,0.78)",
    maxWidth: 560,
    margin: "32px auto 0"
  }
}, "Registration is open on Luma. Subscribe and we'll send speaker drops and agenda updates as they land."), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 36,
    display: "flex",
    gap: 12,
    justifyContent: "center",
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: window.LUMA_URL,
  target: "_blank",
  rel: "noopener",
  style: btnPrimaryNavy()
}, "Register on Luma"), /*#__PURE__*/React.createElement("button", {
  onClick: onNotify,
  style: btnGhostNavy()
}, "Notify me"))));
Object.assign(window, {
  Sponsors,
  Venue,
  Community,
  Crew,
  FAQ,
  Newsletter
});
})();
