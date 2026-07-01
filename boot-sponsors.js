(function(){
const {
  Nav,
  MobileMenu,
  Footer
} = window;
const {
  SponsorsPage
} = window;
function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, {
    onMobileToggle: () => setMobileOpen(!mobileOpen),
    mobileOpen: mobileOpen,
    darkHero: true,
    active: "sponsors.html"
  }), /*#__PURE__*/React.createElement(MobileMenu, {
    open: mobileOpen,
    onClose: () => setMobileOpen(false)
  }), /*#__PURE__*/React.createElement(SponsorsPage, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})();
