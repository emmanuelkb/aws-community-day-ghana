const { Nav, MobileMenu, Footer, NotifyModal } = window;
const { CoCPage } = window;
function App(){
  const [mobileOpen,setMobileOpen]=React.useState(false);
  const [notifyOpen,setNotifyOpen]=React.useState(false);
  return (<div>
    <Nav onRegister={()=>setNotifyOpen(true)} onMobileToggle={()=>setMobileOpen(!mobileOpen)} mobileOpen={mobileOpen} darkHero={true} active="code-of-conduct.html" />
    <MobileMenu open={mobileOpen} onClose={()=>setMobileOpen(false)} onRegister={()=>setNotifyOpen(true)} />
    <CoCPage />
    <Footer />
    <NotifyModal open={notifyOpen} onClose={()=>setNotifyOpen(false)} />
  </div>);
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
