const { Nav, MobileMenu, Footer } = window;
const { SpeakersPage } = window;
function App(){
  const [mobileOpen,setMobileOpen]=React.useState(false);
  return (<div>
    <Nav onMobileToggle={()=>setMobileOpen(!mobileOpen)} mobileOpen={mobileOpen} darkHero={true} active="speakers.html" />
    <MobileMenu open={mobileOpen} onClose={()=>setMobileOpen(false)} />
    <SpeakersPage />
    <Footer />
  </div>);
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
