import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TechBackground from './components/TechBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import ChatBot from './components/ChatBot';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      duration: 800,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background Icons */}
      <TechBackground />

      {/* Gradient Orbs - Decorative backgrounds */}
      <div className="orb-top" />
      <div className="orb-bottom" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Assistant */}
      <ChatBot />
    </div>
  );
}

export default App;
