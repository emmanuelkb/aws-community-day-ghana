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
  Footer,
  NotifyModal
} = window;
function App() {
  const [notifyOpen, setNotifyOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const notify = () => setNotifyOpen(true);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, {
    onRegister: notify,
    onMobileToggle: () => setMobileOpen(!mobileOpen),
    mobileOpen: mobileOpen,
    darkHero: true
  }), /*#__PURE__*/React.createElement(MobileMenu, {
    open: mobileOpen,
    onClose: () => setMobileOpen(false),
    onRegister: notify
  }), /*#__PURE__*/React.createElement(Hero, {
    onNotify: notify
  }), /*#__PURE__*/React.createElement(HeroMarquee, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(WhatToExpect, null), /*#__PURE__*/React.createElement(Tracks, null), /*#__PURE__*/React.createElement(WhyAttend, null), /*#__PURE__*/React.createElement(Speakers, null), /*#__PURE__*/React.createElement(Agenda, null), /*#__PURE__*/React.createElement(CFP, null), /*#__PURE__*/React.createElement(Sponsors, null), /*#__PURE__*/React.createElement(Venue, null), /*#__PURE__*/React.createElement(Community, null), /*#__PURE__*/React.createElement(Crew, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(Newsletter, {
    onNotify: notify
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(NotifyModal, {
    open: notifyOpen,
    onClose: () => setNotifyOpen(false)
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})();
