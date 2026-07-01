const { Nav, MobileMenu, Footer } = window;
const { VenuePage } = window;
function App(){
  const [mobileOpen,setMobileOpen]=React.useState(false);
  return (<div>
    <Nav onMobileToggle={()=>setMobileOpen(!mobileOpen)} mobileOpen={mobileOpen} darkHero={true} active="venue.html" />
    <MobileMenu open={mobileOpen} onClose={()=>setMobileOpen(false)} />
    <VenuePage />
    <Footer />
  </div>);
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
