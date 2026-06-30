(function(){
const {
  Nav,
  MobileMenu,
  Footer,
  NotifyModal
} = window;
const {
  VenuePage
} = window;
function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [notifyOpen, setNotifyOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, {
    onRegister: () => setNotifyOpen(true),
    onMobileToggle: () => setMobileOpen(!mobileOpen),
    mobileOpen: mobileOpen,
    darkHero: true,
    active: "venue.html"
  }), /*#__PURE__*/React.createElement(MobileMenu, {
    open: mobileOpen,
    onClose: () => setMobileOpen(false),
    onRegister: () => setNotifyOpen(true)
  }), /*#__PURE__*/React.createElement(VenuePage, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(NotifyModal, {
    open: notifyOpen,
    onClose: () => setNotifyOpen(false)
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})();
