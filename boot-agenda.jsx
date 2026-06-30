const { Nav, MobileMenu, Footer, NotifyModal } = window;
const { AgendaPage } = window;
function App(){
  const [mobileOpen,setMobileOpen]=React.useState(false);
  const [notifyOpen,setNotifyOpen]=React.useState(false);
  return (<div>
    <Nav onRegister={()=>setNotifyOpen(true)} onMobileToggle={()=>setMobileOpen(!mobileOpen)} mobileOpen={mobileOpen} darkHero={true} active="agenda.html" />
    <MobileMenu open={mobileOpen} onClose={()=>setMobileOpen(false)} onRegister={()=>setNotifyOpen(true)} />
    <AgendaPage />
    <Footer />
    <NotifyModal open={notifyOpen} onClose={()=>setNotifyOpen(false)} />
  </div>);
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
