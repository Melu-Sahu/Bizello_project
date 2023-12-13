import AboutUs from './components/AboutUs/AboutUs';
import Achievements from './components/Achievement/Achievements';
import ClientSection from './components/Clients/ClientSection';
import HeroSection from './components/HeroSection/HeroSection';
import Work from './components/HowWorks/Work';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import PricingSection from './components/Pricing/PricingSection';
import FAQ from './components/FAQSection/FAQ';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <div id='home' style={{ width: '100%', height: '100vh', background: '#6610f2' }}>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <Work />
      <Achievements />
      <ClientSection />
      <PricingSection />
      <FAQ />
      <Contact />



    </div>
  )
}

export default App
