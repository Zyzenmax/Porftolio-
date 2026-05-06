import { useState, useEffect } from 'react';

import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Awards' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileOpen(false);
    }
  };

  return (
    <nav
      data-aos="fade-down"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: isScrolled ? '0.75rem 0' : '1rem 0',
        background: isScrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none',
        transition: 'all 300ms ease',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: 'var(--font-mono)', fontSize: '1.3rem', fontWeight: 600,
            color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '2px'
          }}
        >
          <span style={{ color: 'var(--color-primary-400)' }}>&lt;</span>
          <span className="gradient-text">Bagus</span>
          <span style={{ color: 'var(--color-primary-400)' }}>/&gt;</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                style={{
                  position: 'relative',
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 500,
                  color: activeSection === link.id ? 'var(--text-primary)' : 'var(--text-muted)',
                  padding: '0.5rem 1rem', borderRadius: '9999px',
                  transition: 'color 150ms ease',
                }}
              >
                {link.label}
                {activeSection === link.id && (
                  <div
                    style={{
                      position: 'absolute', inset: 0,
                      background: 'var(--glass-hover-bg)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '9999px', zIndex: -1,
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* CTA */}
            <button
              className="btn-primary"
              onClick={() => scrollToSection('contact')}
              style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', transition: 'transform 150ms ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              Let's Talk
            </button>
          </div>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none', border: 'none', color: 'var(--text-secondary)',
              cursor: 'pointer', padding: '0.5rem',
            }}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div
          className="md:hidden"
          style={{
            display: 'flex', flexDirection: 'column',
            padding: '1rem 1.5rem', overflow: 'hidden',
            background: 'var(--nav-bg)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--glass-border)',
          }}
        >
          {navLinks.map((link, index) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 500,
                color: activeSection === link.id ? 'var(--color-primary-400)' : 'var(--text-muted)',
                padding: '1rem 0', textAlign: 'left',
                borderBottom: '1px solid var(--glass-border)',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
