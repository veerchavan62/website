import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogoMarquee from './components/LogoMarquee';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoMarquee />
        <Services />
        <WhyUs />
        <Projects />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
