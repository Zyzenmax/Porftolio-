import { Code2, Palette, Rocket, Coffee } from 'lucide-react';

const stats = [
  { icon: <Code2 size={22} />, value: '3+', label: 'Years of Experience' },
  { icon: <Palette size={22} />, value: '50+', label: 'Projects Completed' },
  { icon: <Rocket size={22} />, value: '30+', label: 'Satisfied Clients' },
  { icon: <Coffee size={22} />, value: '∞', label: 'Cups of Coffee' },
];

const About = () => {

  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative orb */}
      <div style={{
        position: 'absolute', top: '20%', left: '-10%', width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(107,31,255,0.06) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div className="max-w-6xl mx-auto px-6" style={{ padding: '8rem 1.5rem', position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div
          data-aos="fade-up"
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span className="section-label">About</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            Passionate about crafting <span className="gradient-text">digital excellence</span>
          </h2>
          <p style={{ color: '#8892a4', maxWidth: 600, margin: '0 auto', fontSize: '1.1rem' }}>
          A brief introduction to who I am and what drives me
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Text Content */}
          <div
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: '#ebedf2' }}>Who I Am</h3>
              <p style={{ marginBottom: '1rem', color: '#b0b7c5', lineHeight: 1.8 }}>
               I’m a Full-Stack Developer based in Indonesia, focused on building functional and user-centered digital products. With over 3 years of experience, I develop modern web applications that are reliable and efficient.
              </p>
              <p style={{ marginBottom: '1rem', color: '#b0b7c5', lineHeight: 1.8 }}>
               I started out curious about how the internet works, and that curiosity grew into a career in web development. I value clean code, practical design, and continuous learning.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={500 + index * 100}
                className="glass-card"
                style={{ padding: '2rem', textAlign: 'center', cursor: 'default' }}
              >
                <div style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 48, height: 48, borderRadius: '0.75rem',
                  background: 'linear-gradient(135deg, rgba(107,31,255,0.15), rgba(0,184,217,0.15))',
                  color: 'var(--color-primary-300)', marginBottom: '1rem',
                }}>
                  {stat.icon}
                </div>
                <div className="gradient-text" style={{
                  fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, marginBottom: '0.25rem',
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#8892a4', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
