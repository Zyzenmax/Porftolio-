
import { ArrowDown, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <div className="max-w-6xl mx-auto px-6 w-full" style={{ paddingTop: '8rem', paddingBottom: '8rem', position: 'relative', zIndex: 1 }}>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          {/* Left Column: Text Content */}
          <div style={{ flex: 1, maxWidth: 650 }}>
            {/* Badge */}
            <div
              data-aos="fade-down"
              data-aos-delay="200"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.4rem 1rem 0.4rem 0.6rem',
                background: 'rgba(52,211,153,0.08)',
                border: '1px solid rgba(52,211,153,0.2)',
                borderRadius: '9999px', fontSize: '0.85rem', color: '#34d399',
                marginBottom: '2rem',
              }}
            >
              <span style={{
                width: 8, height: 8, borderRadius: '50%', background: '#34d399',
                animation: 'pulse-green 2s infinite',
              }} />
              <span>Available for Projects</span>
            </div>

            {/* Heading */}
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800,
                lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-0.02em',
              }}
            >
              Hi, I'm <span className="gradient-text">Bagus Hasan Ali</span>
              <span style={{
                display: 'block', color: '#8892a4', fontWeight: 600,
                fontSize: 'clamp(1.2rem, 3vw, 2.2rem)', marginTop: '0.5rem',
              }}>
                Full-Stack Developer
              </span>
            </h1>

            {/* Subtitle */}
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              style={{
                fontSize: '1.1rem', color: '#8892a4', maxWidth: 550,
                marginBottom: '2.5rem', lineHeight: 1.8,
              }}
            >
              I craft exceptional digital experiences by combining premium design with cutting-edge technology. Let’s create something truly extraordinary together.
            </p>

            {/* Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}
            >
              <button className="btn-primary" onClick={() => scrollTo('projects')}>
                My Projects <ArrowDown size={18} />
              </button>
              <button className="btn-outline" onClick={() => scrollTo('contact')}>
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div
              data-aos="fade-in"
              data-aos-delay="900"
              style={{ display: 'flex', gap: '1rem' }}
            >
              <a href="https://github.com/Zyzenmax" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a href="https://www.linkedin.com/in/bagus-hasan-ali/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href="mailto:bagushasanali@gmail.com" className="social-link" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Photo Frame */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}
          >
            <div className="profile-glow" />
            
            {/* Decorative Rotating Ring */}
            <div
              className="animate-spin-slow"
              style={{
                position: 'absolute', inset: -15, borderRadius: '50%',
                border: '1px dashed rgba(107,31,255,0.3)',
              }}
            />

            <div className="profile-frame">
              <div className="profile-image-container">
                <img 
                  src="https://scontent.fcgk52-1.fna.fbcdn.net/v/t1.15752-9/670490790_1794056475302907_7922757390210176276_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=6VmKurawjeQQ7kNvwENH50v&_nc_oc=Adpr3swc1MvyS-ccLaSw1bO4xfoBo6hWPNGulLAfTUOpA9oRvFISV5qxJccOIVzMFRQ&_nc_zt=23&_nc_ht=scontent.fcgk52-1.fna&_nc_ss=7a2a8&oh=03_Q7cD5AESDVUm5XkEP3_hy0U1BVPQreWdOfcLquQBqPcUXtL9cQ&oe=6A080E5F" 
                  alt="Bagus Hasan Ali" 
                  className="profile-image"
                />
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div
              data-aos="fade-left"
              data-aos-delay="1000"
              style={{
                position: 'absolute', bottom: '10%', right: '5%',
                padding: '0.75rem 1.25rem', borderRadius: '1rem',
                background: 'rgba(8, 9, 13, 0.8)', backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', flexDirection: 'column', gap: '2px',
                zIndex: 10
              }}
            >
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>3+</span>
              <span style={{ fontSize: '0.7rem', color: '#8892a4', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Years of Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
