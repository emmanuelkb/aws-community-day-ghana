const { Nav, MobileMenu } = window;
const { Hero, HeroMarquee, About, WhatToExpect, Tracks } = window;
const { WhyAttend, Speakers, Agenda, CFP } = window;
const { Sponsors, Venue, Community, Crew, FAQ, Newsletter, Footer, NotifyModal } = window;

function App() {
  const [notifyOpen, setNotifyOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const notify = () => setNotifyOpen(true);

  return (
    <div>
      <Nav onRegister={notify} onMobileToggle={() => setMobileOpen(!mobileOpen)} mobileOpen={mobileOpen} darkHero={true} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} onRegister={notify} />

      <Hero onNotify={notify} />
      <HeroMarquee />
      <About />
      <WhatToExpect />
      <Tracks />
      <WhyAttend />
      <Speakers />
      <Agenda />
      <CFP />
      <Sponsors />
      <Venue />
      <Community />
      <Crew />
      <FAQ />
      <Newsletter onNotify={notify} />
      <Footer />

      <NotifyModal open={notifyOpen} onClose={() => setNotifyOpen(false)} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
