import AboutUs from './components/AboutUs/AboutUs';
import HeroSection from './components/HeroSection/HeroSection';
import Work from './components/HowWorks/Work';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';

function App() {

  return (
    <div id='home' style={{ width: '100%', height: '100vh', background: '#6610f2' }}>
      <Navbar />
      <HeroSection/>
      <AboutUs />
      <Services />
      <Work />
      


    </div>
  )
}

export default App
