(function(){
/* page-sponsors.jsx — Sponsorship prospectus page. PageHeader lives in site-core.jsx. */

const {
  TOKENS,
  PageHeader,
  Reveal,
  KenteDot,
  SectionEyebrow,
  SectionHeadline,
  btnPrimary,
  CONTACT
} = window;

/* ── Tier data (verbatim from task-8-brief §5.1) — no GH₵ prices shown publicly ── */
const TIERS = [{
  tier: "Platinum",
  color: TOKENS.terracotta,
  target: "Major banks, telcos, large fintechs",
  benefits: ["Headline sponsor billing", "15-minute keynote slot", "Premium 3m × 3m booth", "Logo on stage backdrop, T-shirts, website & all marketing", "12 VIP tickets", "Dedicated social announcement", "Branded segment in the livestream", "Inclusion in the post-event report"]
}, {
  tier: "Gold",
  color: TOKENS.gold,
  target: "Mid-size tech firms, scale-ups",
  benefits: ["Panel sponsorship rights for one track", "Standard 2m × 2m booth", "Logo on backdrop, T-shirts & website", "8 tickets", "Two social posts", "Inclusion in the post-event report"]
}, {
  tier: "Silver",
  color: TOKENS.indigo,
  target: "SMEs, growing startups",
  benefits: ["Logo on website, programme & T-shirts", "Shared booth space", "5 tickets", "One social post", "Branded item in the attendee swag bag"]
}, {
  tier: "Bronze",
  color: TOKENS.green,
  target: "Startups, agencies",
  benefits: ["Logo on website & programme", "3 tickets", "Group social mention"]
}, {
  tier: "Community Partner",
  color: TOKENS.ink,
  target: "Hubs, schools, communities",
  benefits: ["Logo on website", "2 tickets", "Group thank-you on social", "Open to non-profits, communities & bootcamps"]
}];
const IN_KIND = ["Catering or beverage supply", "Swag production (T-shirts, lanyards, notebooks)", "Photography & videography services", "Cloud credits or technical session sponsorship", "Ride-share vouchers for speakers & volunteers"];

/* ── Why-sponsor stat band (navy, matching Hero stat-band pattern) ── */
const WhySponsorBand = () => {
  const stats = [["300", "In-person builders, founders & students"], ["12+", "Sessions across 3 tracks"], ["3", "Verticals — FinTech · EdTech · AgriTech"], ["Live", "Livestream + 72-hr social clips + post-event report"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: TOKENS.navy,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-pad",
    style: {
      maxWidth: 1100,
      margin: "0 auto",
      padding: "64px 56px"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(SectionEyebrow, {
    dark: true
  }, "Why sponsor?"), /*#__PURE__*/React.createElement(SectionHeadline, {
    dark: true
  }, "Reach Ghana's cloud community"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: "rgba(255,255,255,0.72)",
      maxWidth: 620,
      marginTop: 18,
      lineHeight: 1.6
    }
  }, "AWS Community Day Ghana 2026 is Ghana's first dedicated AWS community conference. The audience is cloud practitioners, founders, and students who build for the region.")))), /*#__PURE__*/React.createElement("div", {
    className: "stat-band",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      borderTop: "1px solid rgba(255,255,255,0.16)"
    }
  }, stats.map(([n, l], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: l,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px 24px",
      textAlign: "center",
      borderRight: i < 3 ? "1px solid rgba(255,255,255,0.12)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 38,
      fontWeight: 800,
      letterSpacing: "-0.01em",
      color: "#fff"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: TOKENS.starGold,
      fontWeight: 700,
      marginTop: 8,
      lineHeight: 1.4
    }
  }, l))))));
};

/* ── Single tier card ── */
const TierCard = ({
  t
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    border: `1px solid rgba(26,20,16,0.10)`,
    display: "flex",
    flexDirection: "column"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    height: 5,
    background: t.color
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "32px 32px 36px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 20
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: TOKENS.fontDisplay,
    fontSize: 26,
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "-0.01em",
    color: TOKENS.ink,
    lineHeight: 1.0
  }
}, t.tier), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "inline-block",
    marginTop: 10,
    background: t.color + "18",
    border: `1px solid ${t.color}33`,
    color: t.color,
    borderRadius: 4,
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "5px 10px"
  }
}, t.target)), /*#__PURE__*/React.createElement("ul", {
  style: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    flex: 1
  }
}, t.benefits.map((b, i) => /*#__PURE__*/React.createElement("li", {
  key: i,
  style: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    flexShrink: 0,
    marginTop: 3
  }
}, /*#__PURE__*/React.createElement(KenteDot, {
  size: 9
})), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 14,
    color: TOKENS.ink2,
    lineHeight: 1.45
  }
}, b))))));

/* ── In-kind section ── */
const InKindSection = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.paper,
    padding: "80px 56px 0"
  }
}, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1100,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement(SectionEyebrow, null, "In-kind sponsorship"), /*#__PURE__*/React.createElement(SectionHeadline, null, "Contribute in kind"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 16,
    color: TOKENS.ink2,
    maxWidth: 580,
    marginTop: 18,
    lineHeight: 1.6
  }
}, "Can't commit to a cash tier? We also welcome in-kind contributions that directly support the event."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 36
  }
}, IN_KIND.map((item, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "#fff",
    border: `1px solid rgba(26,20,16,0.12)`,
    borderRadius: 8,
    padding: "14px 18px"
  }
}, /*#__PURE__*/React.createElement(KenteDot, {
  size: 9
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 14,
    color: TOKENS.ink,
    fontWeight: 500
  }
}, item)))))));

/* ── Contact CTA ── */
const ContactCTA = () => /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.paper,
    padding: "80px 56px 120px"
  }
}, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1100,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    background: TOKENS.navy,
    borderRadius: 16,
    padding: "56px 56px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 36,
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  "aria-hidden": true,
  style: {
    position: "absolute",
    inset: 0,
    opacity: 0.07,
    pointerEvents: "none",
    background: "repeating-linear-gradient(90deg, rgba(255,200,87,0.5) 0 14px, transparent 14px 28px), repeating-linear-gradient(0deg, rgba(196,69,54,0.5) 0 10px, transparent 10px 30px)",
    backgroundSize: "48px 48px"
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "relative"
  }
}, /*#__PURE__*/React.createElement(SectionEyebrow, {
  dark: true
}, "Become a sponsor"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: TOKENS.fontDisplay,
    fontSize: "clamp(26px, 3.5vw, 44px)",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "-0.015em",
    color: "#fff",
    lineHeight: 1.05,
    marginTop: 14,
    maxWidth: 520
  }
}, "Partner with Ghana's cloud community"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 15,
    color: "rgba(255,255,255,0.72)",
    lineHeight: 1.6,
    marginTop: 16,
    maxWidth: 480
  }
}, "Email us for the full prospectus with pricing. We can put together a package that fits your budget.")), /*#__PURE__*/React.createElement("a", {
  href: `mailto:${CONTACT}?subject=Sponsorship%20Enquiry%20%E2%80%94%20AWS%20Community%20Day%20Ghana%202026`,
  style: {
    ...btnPrimary(),
    position: "relative",
    whiteSpace: "nowrap"
  }
}, "Email us to sponsor")))));

/* ── Main page component ── */
const SponsorsPage = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
  eyebrow: "Sponsorship \xB7 AWS Community Day Ghana 2026",
  title: "Power the community",
  glyph: "gyenyame",
  sub: "Your brand at Ghana's first AWS community conference. Five tiers, from headline keynote slot to community partner."
}), /*#__PURE__*/React.createElement(WhySponsorBand, null), /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.paper,
    padding: "96px 56px 0"
  }
}, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1100,
    margin: "0 auto"
  }
}, /*#__PURE__*/React.createElement(SectionEyebrow, null, "Sponsorship tiers"), /*#__PURE__*/React.createElement(SectionHeadline, null, "Choose your tier"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 16,
    color: TOKENS.ink2,
    maxWidth: 580,
    marginTop: 16,
    lineHeight: 1.6
  }
}, "Five tiers at different levels of visibility and involvement. Email us for the full prospectus with pricing."))), /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1100,
    margin: "48px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 20
  },
  className: "tiers-grid"
}, TIERS.slice(0, 3).map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
  key: t.tier,
  delay: i * 100
}, /*#__PURE__*/React.createElement(TierCard, {
  t: t
})))), /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 1100,
    margin: "20px auto 0",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 20
  },
  className: "tiers-grid-lower"
}, TIERS.slice(3).map((t, i) => /*#__PURE__*/React.createElement(Reveal, {
  key: t.tier,
  delay: i * 100
}, /*#__PURE__*/React.createElement(TierCard, {
  t: t
}))))), /*#__PURE__*/React.createElement(InKindSection, null), /*#__PURE__*/React.createElement(ContactCTA, null));
Object.assign(window, {
  SponsorsPage
});
})();
