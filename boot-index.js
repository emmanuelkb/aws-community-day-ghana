(function(){
const {
  Nav,
  MobileMenu
} = window;
const {
  Hero,
  HeroMarquee,
  About,
  WhatToExpect,
  Tracks
} = window;
const {
  WhyAttend,
  Speakers,
  Agenda,
  CFP
} = window;
const {
  Sponsors,
  Venue,
  Community,
  Crew,
  FAQ,
  Newsletter,
  Footer
} = window;
function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, {
    onMobileToggle: () => setMobileOpen(!mobileOpen),
    mobileOpen: mobileOpen,
    darkHero: true
  }), /*#__PURE__*/React.createElement(MobileMenu, {
    open: mobileOpen,
    onClose: () => setMobileOpen(false)
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(HeroMarquee, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(WhatToExpect, null), /*#__PURE__*/React.createElement(Tracks, null), /*#__PURE__*/React.createElement(WhyAttend, null), /*#__PURE__*/React.createElement(Speakers, null), /*#__PURE__*/React.createElement(Agenda, null), /*#__PURE__*/React.createElement(CFP, null), /*#__PURE__*/React.createElement(Sponsors, null), /*#__PURE__*/React.createElement(Venue, null), /*#__PURE__*/React.createElement(Community, null), /*#__PURE__*/React.createElement(Crew, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(Newsletter, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})();
