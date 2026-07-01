const { Nav, MobileMenu, Footer } = window;
const { SponsorsPage } = window;
function App(){
  const [mobileOpen,setMobileOpen]=React.useState(false);
  return (<div>
    <Nav onMobileToggle={()=>setMobileOpen(!mobileOpen)} mobileOpen={mobileOpen} darkHero={true} active="sponsors.html" />
    <MobileMenu open={mobileOpen} onClose={()=>setMobileOpen(false)} />
    <SponsorsPage />
    <Footer />
  </div>);
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
