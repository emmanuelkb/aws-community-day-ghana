const { Nav, MobileMenu, Footer } = window;
const { AgendaPage } = window;
function App(){
  const [mobileOpen,setMobileOpen]=React.useState(false);
  return (<div>
    <Nav onMobileToggle={()=>setMobileOpen(!mobileOpen)} mobileOpen={mobileOpen} darkHero={true} active="agenda.html" />
    <MobileMenu open={mobileOpen} onClose={()=>setMobileOpen(false)} />
    <AgendaPage />
    <Footer />
  </div>);
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
