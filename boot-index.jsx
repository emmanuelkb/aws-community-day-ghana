const { Nav, MobileMenu } = window;
const { Hero, HeroMarquee, About, WhatToExpect, Tracks } = window;
const { WhyAttend, Speakers, Agenda, CFP } = window;
const { Sponsors, Venue, Community, Crew, FAQ, Newsletter, Footer } = window;

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div>
      <Nav onMobileToggle={() => setMobileOpen(!mobileOpen)} mobileOpen={mobileOpen} darkHero={true} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <Hero />
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
      <Newsletter />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
