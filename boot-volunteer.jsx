const { Nav, MobileMenu, Footer } = window;
const { VolunteerPage } = window;
function App(){
  const [mobileOpen,setMobileOpen]=React.useState(false);
  return (<div>
    <Nav onMobileToggle={()=>setMobileOpen(!mobileOpen)} mobileOpen={mobileOpen} darkHero={true} active="volunteer.html" />
    <MobileMenu open={mobileOpen} onClose={()=>setMobileOpen(false)} />
    <VolunteerPage />
    <Footer />
  </div>);
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
