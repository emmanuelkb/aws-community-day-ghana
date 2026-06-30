(function(){
/* page-coc.jsx — Code of Conduct page. PageHeader is defined in site-core.jsx. */

const {
  TOKENS,
  PageHeader,
  Reveal,
  CONTACT
} = window;
const COC = [["Our pledge", "AWS Community Day Ghana is a harassment-free event for everyone, regardless of gender, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion, or technical background."], ["Expected behaviour", "Be respectful and considerate. Collaborate openly. Use welcoming and inclusive language. Respect different viewpoints and the people who hold them."], ["Unacceptable behaviour", "Harassment, intimidation, or discrimination in any form. Unwelcome sexual attention. Disrupting talks or other events. Sharing someone's private information without their consent."], ["Reporting", `If you experience or witness unacceptable behaviour, speak to a member of the organising team on the day, or email ${CONTACT}. All reports are handled confidentially.`], ["Consequences", "Anyone asked to stop harassing behaviour is expected to comply immediately. Organisers may take whatever action they judge appropriate, up to and including removal from the event."]];
const CoCPage = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
  eyebrow: "Code of conduct",
  title: "A safe day for everyone",
  glyph: "dwennimmen",
  sub: "Every attendee, speaker, volunteer, and sponsor should feel welcome and safe. These are the ground rules."
}), /*#__PURE__*/React.createElement("section", {
  style: {
    background: TOKENS.cream,
    padding: "80px 56px"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 820,
    margin: "0 auto"
  }
}, COC.map(([h, b], i) => /*#__PURE__*/React.createElement(Reveal, {
  key: h,
  delay: i * 60,
  style: {
    paddingTop: 32,
    marginTop: 32,
    borderTop: `1px solid ${TOKENS.line}`
  }
}, /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: TOKENS.fontDisplay,
    fontSize: 24,
    fontWeight: 800,
    margin: "0 0 12px"
  }
}, h), /*#__PURE__*/React.createElement("p", {
  style: {
    fontSize: 16,
    lineHeight: 1.7,
    color: TOKENS.ink2,
    margin: 0
  }
}, b))))));
Object.assign(window, {
  CoCPage
});
})();
