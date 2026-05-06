import { Heart, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Awards', id: 'achievements' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <GithubIcon size={20} />, href: 'https://github.com/Zyzenmax' },
    { name: 'LinkedIn', icon: <LinkedinIcon size={20} />, href: 'https://www.linkedin.com/in/bagus-hasan-ali/' },
    { name: 'Instagram', icon: <InstagramIcon size={20} />, href: 'https://instagram.com/bagushsnali' },
  ];

  const techStack = ['React', 'Tailwind', 'Three.js', 'Framer Motion', 'Gemini AI'];

  return (
    <footer className="relative bg-dark-950 border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      <div className="absolute -top-24 left-1/4 w-64 h-64 bg-primary-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-64 h-64 bg-accent-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-6">
              <span className="font-heading text-2xl font-bold inline-flex items-center gap-2">
                <span className="gradient-text">Bagus Hasan Ali</span>
              </span>
              <p className="text-dark-200 text-lg leading-relaxed max-w-md">
                Building digital products that combine <span className="text-white font-medium">exceptional design</span> with <span className="text-white font-medium">technical excellence</span>. Let's create something remarkable together.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-dark-300 hover:text-white hover:bg-primary-500/10 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Explore</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-dark-300 hover:text-primary-400 text-[0.95rem] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-dark-600 group-hover:bg-primary-500 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack or Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Capabilities</h4>
            <ul className="flex flex-col gap-3">
              {['Web Design', 'Full-Stack Dev', 'UI/UX Design', 'AI Solutions', 'Mobile Apps'].map((item) => (
                <li key={item} className="text-dark-300 text-[0.95rem] flex items-center gap-2">
                   <div className="w-1 h-1 rounded-full bg-accent-500/50" />
                   {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div className="lg:col-span-3">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-primary-500/30 transition-all">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary-500/10 blur-2xl rounded-full group-hover:bg-primary-500/20 transition-all" />
              <h4 className="text-white font-bold text-lg mb-2">Have a project?</h4>
              <p className="text-dark-300 text-sm mb-6">Let's discuss how I can help bring your vision to life.</p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-primary-400 font-bold text-sm group/link"
              >
                Hire Me Now
                <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-dark-400 text-sm font-medium">
            © {currentYear} <span className="text-white">Bagus Hasan Ali</span>.
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-dark-500 text-[10px] uppercase tracking-tighter font-bold">Built With</span>
              <div className="flex gap-2">
                {techStack.map(tech => (
                  <span key={tech} className="text-[10px] px-2 py-0.5 bg-white/[0.03] border border-white/5 rounded text-dark-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
