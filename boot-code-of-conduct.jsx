const { Nav, MobileMenu, Footer } = window;
const { CoCPage } = window;
function App(){
  const [mobileOpen,setMobileOpen]=React.useState(false);
  return (<div>
    <Nav onMobileToggle={()=>setMobileOpen(!mobileOpen)} mobileOpen={mobileOpen} darkHero={true} active="code-of-conduct.html" />
    <MobileMenu open={mobileOpen} onClose={()=>setMobileOpen(false)} />
    <CoCPage />
    <Footer />
  </div>);
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
