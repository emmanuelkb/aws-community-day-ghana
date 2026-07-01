const { Nav, MobileMenu, Footer } = window;
const { CFPPage } = window;
function App(){
  const [mobileOpen,setMobileOpen]=React.useState(false);
  return (<div>
    <Nav onMobileToggle={()=>setMobileOpen(!mobileOpen)} mobileOpen={mobileOpen} darkHero={true} active="cfp.html" />
    <MobileMenu open={mobileOpen} onClose={()=>setMobileOpen(false)} />
    <CFPPage />
    <Footer />
  </div>);
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
