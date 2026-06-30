(function(){
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* page-volunteer.jsx — Volunteer page. PageHeader is defined in site-core.jsx. */

const {
  TOKENS,
  PageHeader,
  Reveal,
  Adinkra,
  SectionEyebrow,
  SectionHeadline,
  KenteDot,
  btnPrimary,
  VOLUNTEER_URL
} = window;

/* ── Teams data (verbatim from task-9-brief §7.1) ── */
const TEAMS = [["Registration", 4, "Check in attendees, distribute badges and swag, manage walk-ins."], ["Logistics & Floor", 5, "Direct attendees, manage signage, coordinate between rooms and the registration desk."], ["Speaker Care", 3, "Receive speakers, escort them to the green room, manage slide handovers and stage timing."], ["Technical / AV", 3, "Operate microphones, slide clickers, the livestream feed, and Wi-Fi support."], ["Social Media", 3, "Live coverage on LinkedIn and X, capture quotes and clips, monitor the event hashtag."], ["Photography Support", 2, "Assist the lead photographer, coordinate group photos, manage props."], ["Food & Beverage", 3, "Coordinate with the caterer, manage buffet flow, monitor water and snack stations."], ["Sponsor Liaison", 2, "Set up booths in the morning, check in with sponsors hourly, support tear-down."]];
const PERKS = ["Branded volunteer T-shirt", "All meals on the day", "Certificate of participation", "Priority access to future community events"];

/* ── Form preview sections (from doc §12 — read-only outline) ── */
const FORM_SECTIONS = [{
  id: "A",
  title: "Personal Info",
  fields: ["Full name", "Email address", "Phone number (WhatsApp preferred)", "City and region of residence", "LinkedIn or X (Twitter) handle (optional)"]
}, {
  id: "B",
  title: "Background",
  fields: ["Current role or status", "AWS experience level", "Have you volunteered for a tech community event before?", "If yes, describe recent volunteer experience"]
}, {
  id: "C",
  title: "Preferences",
  fields: ["Which team would you most like to join? (up to 2)", "What languages do you speak fluently? (English / Twi / Ga / Ewe / French / Other)", "Why do you want to volunteer?"]
}, {
  id: "D",
  title: "Logistics",
  fields: ["Are you available for the in-person briefing on Friday, 28 August 2026?", "Are you available the full day on Saturday, 29 August 2026 from 07:00 to 19:00?", "T-shirt size", "Do you have any dietary restrictions or allergies?", "Emergency contact name and phone number"]
}, {
  id: "E",
  title: "Consent",
  fields: ["I agree to the volunteer code of conduct", "I consent to photos being used for community promotion", "How did you hear about this opportunity?"]
}];

/* ── Team card ── */
const TeamCard = ({
  name,
  count,
  responsibilities
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: "#fff",
    border: `1px solid rgba(26,20,16,0.12)`,
    borderRadius: 14,
    padding: "28px 28px 24px",
    display: "flex",
    flexDirection: "column",
    gap: 16
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: TOKENS.fontDisplay,
    fontSize: 18,
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "-0.01em",
    color: TOKENS.ink,
    lineHeight: 1.1,
    flex: 1
  }
}, name), /*#__PURE__*/React.createElement("div", {
  style: {
    background: TOKENS.indigo,
    color: "#fff",
    borderRadius: 20,
    padding: "4px 12px",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.06em",
    whiteSpace: "nowrap",
    flexShrink: 0
  }
}, count, " ", count === 1 ? "volunteer" : "volunteers")), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 14,
    color: TOKENS.ink2,
    lineHeight: 1.55,
    margin: 0
  }
}, responsibilities));

/* ── Perk item ── */
const PerkItem = ({
  text
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    background: TOKENS.paper,
    border: `1px solid rgba(26,20,16,0.1)`,
    borderRadius: 10,
    padding: "18px 22px",
    flex: "1 1 200px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 10,
    height: 10,
    borderRadius: 2,
    background: `conic-gradient(from 0deg, ${TOKENS.terracotta} 0 33%, ${TOKENS.starGold} 33% 66%, #2C6B4F 66% 100%)`,
    transform: "rotate(45deg)",
    flexShrink: 0
  }
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 15,
    color: TOKENS.ink,
    fontWeight: 600,
    lineHeight: 1.35
  }
}, text));

/* ── Form section preview ── */
const FormSectionPreview = ({
  id,
  title,
  fields
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: "#fff",
    border: `1px solid rgba(26,20,16,0.10)`,
    borderRadius: 12,
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    background: TOKENS.navy,
    color: "#fff",
    padding: "14px 24px",
    display: "flex",
    alignItems: "center",
    gap: 12
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 26,
    height: 26,
    borderRadius: 6,
    background: TOKENS.awsOrange,
    color: TOKENS.navy,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    fontSize: 12,
    letterSpacing: "0.04em",
    flexShrink: 0
  }
}, id), /*#__PURE__*/React.createElement("div", {
  style: {
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: "0.1em",
    textTransform: "uppercase"
  }
}, title)), /*#__PURE__*/React.createElement("div", {
  style: {
    padding: "20px 24px",
    display: "flex",
    flexDirection: "column",
    gap: 10
  }
}, fields.map((field, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    width: 5,
    height: 5,
    borderRadius: "50%",
    background: TOKENS.terracotta,
    flexShrink: 0,
    marginTop: 8
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 14,
    color: TOKENS.ink2,
    lineHeight: 1.5
  }
}, field)))));

/* ── Main page component ── */
const VolunteerPage = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
  eyebrow: "Volunteer \xB7 AWS Community Day Ghana 2026",
  title: "Join the crew",
  glyph: "dwennimmen",
  sub: "~25 volunteers run the day across eight teams."
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
  name: "dwennimmen",
  size: 18,
  color: TOKENS.terracotta
}), /*#__PURE__*/React.createElement(SectionEyebrow, null, "Eight teams")), /*#__PURE__*/React.createElement(SectionHeadline, {
  size: "large"
}, "Where you'll fit in"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 16,
    color: TOKENS.ink2,
    lineHeight: 1.6,
    marginTop: 20,
    maxWidth: 640
  }
}, "Every team matters. Pick the work that suits you, or tell us your strengths and we will find the right fit."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: 16,
    marginTop: 48
  }
}, TEAMS.map(([name, count, responsibilities], i) => /*#__PURE__*/React.createElement(TeamCard, {
  key: i,
  name: name,
  count: count,
  responsibilities: responsibilities
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
}), /*#__PURE__*/React.createElement(SectionEyebrow, null, "Volunteer perks")), /*#__PURE__*/React.createElement(SectionHeadline, null, "What you get"), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 40
  }
}, PERKS.map((perk, i) => /*#__PURE__*/React.createElement(PerkItem, {
  key: i,
  text: perk
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
  name: "gyenyame",
  size: 18,
  color: TOKENS.terracotta
}), /*#__PURE__*/React.createElement(SectionEyebrow, null, "Application preview")), /*#__PURE__*/React.createElement(SectionHeadline, null, "What we'll ask"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 15,
    color: TOKENS.ink2,
    lineHeight: 1.6,
    marginTop: 16,
    maxWidth: 640
  }
}, "The application has five sections. Here is a preview so you know what to prepare before you apply. The form is in Google Forms and takes about 10 minutes."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    background: TOKENS.cream,
    border: `1px solid rgba(26,20,16,0.14)`,
    borderLeft: `4px solid ${TOKENS.terracotta}`,
    borderRadius: 6,
    padding: "14px 20px",
    marginTop: 24,
    fontSize: 14,
    color: TOKENS.ink,
    lineHeight: 1.5
  }
}, /*#__PURE__*/React.createElement("strong", null, "Applications open 20 June 2026"), /*#__PURE__*/React.createElement("span", {
  style: {
    opacity: 0.4,
    margin: "0 4px"
  }
}, "\xB7"), "shortlisted volunteers are confirmed by 25 July 2026."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
    gap: 16,
    marginTop: 40
  }
}, FORM_SECTIONS.map(section => /*#__PURE__*/React.createElement(FormSectionPreview, _extends({
  key: section.id
}, section))))))), /*#__PURE__*/React.createElement("section", {
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
    background: TOKENS.navy,
    borderRadius: 16,
    padding: "52px 56px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 32,
    position: "relative",
    overflow: "hidden"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 6,
    background: `linear-gradient(180deg, ${TOKENS.terracotta} 0 33%, ${TOKENS.starGold} 33% 66%, #2C6B4F 66% 100%)`
  }
}), /*#__PURE__*/React.createElement("div", {
  style: {
    paddingLeft: 12
  }
}, /*#__PURE__*/React.createElement(SectionEyebrow, {
  dark: true
}, "Ready to volunteer?"), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: TOKENS.fontDisplay,
    fontSize: "clamp(24px, 3vw, 40px)",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "-0.015em",
    color: "#fff",
    lineHeight: 1.05,
    marginTop: 12,
    maxWidth: 520
  }
}, "Help us put on something the community will remember."), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 15,
    color: "rgba(255,255,255,0.72)",
    lineHeight: 1.6,
    marginTop: 16,
    maxWidth: 480
  }
}, "Applications are open now. Shortlisted volunteers are confirmed by 25 July 2026. We will send you everything you need ahead of the day.")), /*#__PURE__*/React.createElement("a", {
  href: VOLUNTEER_URL,
  target: "_blank",
  rel: "noopener",
  style: btnPrimary()
}, "Apply to volunteer \u2192"))))));
Object.assign(window, {
  VolunteerPage
});
})();
