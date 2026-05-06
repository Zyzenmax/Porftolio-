import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/SocialIcons';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Using environment variables for security
    // These should be set in your .env file
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_placeholder';

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          console.log('Email sent successfully:', result.text);
          setIsSubmitted(true);
          setIsLoading(false);
          setFormState({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setIsSubmitted(false), 5000);
      }, (error) => {
          console.error('Email failed to send:', error.text);
          setIsLoading(false);
          alert('Failed to send message. Please check your EmailJS configuration.');
      });
  };

  const contactDetails = [
    { icon: <Mail size={20} />, label: 'Email', value: 'bagushasanali@gmail.com' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Indonesia' },
  ];

  return (
    <section id="contact" className="relative bg-surface-secondary">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-default to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 py-32 relative z-1">
        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <span className="inline-block font-mono text-sm text-accent-400 tracking-[0.15em] uppercase mb-4 px-4 py-1 bg-accent-400/8 border border-accent-400/15 rounded-full">
            Contact
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] text-white mb-4">
            Let's work <span className="gradient-text">together</span>
          </h2>
          <p className="text-gray-400 max-w-[600px] mx-auto text-lg">
            Got a project idea? Let's create something extraordinary
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <div data-aos="fade-right" data-aos-delay="200">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out through any of these channels.
              </p>
            </div>

            {/* Individual Contact Cards */}
            <div className="grid gap-4">
              {contactDetails.map((detail, index) => (
                <div
                  key={detail.label}
                  className="glass-card p-5 flex items-center gap-5 group hover:border-primary-500/40 transition-all duration-300 hover:-translate-x-1"
                  data-aos="fade-right"
                  data-aos-delay={300 + index * 100}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 text-primary-400 group-hover:scale-110 transition-transform duration-300">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-0.5">{detail.label}</p>
                    <p className="text-gray-200 font-medium group-hover:text-primary-300 transition-colors">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links Section */}
            <div 
              className="glass-card p-6 border-dashed border-border-subtle"
              data-aos="fade-right" 
              data-aos-delay="600"
            >
              <p className="text-sm font-medium text-gray-400 mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                Connect on Social Media
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <GithubIcon size={20} />, href: 'https://github.com/Zyzenmax', label: 'GitHub' },
                  { icon: <LinkedinIcon size={20} />, href: 'https://www.linkedin.com/in/bagus-hasan-ali/', label: 'LinkedIn' },
                  { icon: <InstagramIcon size={20} />, href: 'https://instagram.com/bagushsnali', label: 'Instagram' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-xl border border-border-subtle text-gray-400 transition-all duration-300 hover:text-primary-300 hover:border-primary-400 hover:bg-primary-500/8 hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <form 
              ref={form}
              className="glass-card p-10 relative overflow-hidden group" 
              onSubmit={handleSubmit}
            >
              {/* Background Accent Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-500/5 blur-[100px] rounded-full group-hover:bg-primary-500/10 transition-colors duration-700" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-500/5 blur-[100px] rounded-full group-hover:bg-accent-500/10 transition-colors duration-700" />
              
              <div className="relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-sm font-medium text-gray-300 ml-1">Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      placeholder="Your Name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-gray-100 outline-none transition-all duration-200 focus:border-primary-500/50 focus:bg-white/8 focus:ring-4 focus:ring-primary-500/10 placeholder:text-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="your@email.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-gray-100 outline-none transition-all duration-200 focus:border-primary-500/50 focus:bg-white/8 focus:ring-4 focus:ring-primary-500/10 placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="mb-6 space-y-2">
                  <label htmlFor="contact-subject" className="text-sm font-medium text-gray-300 ml-1">Subject</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-gray-100 outline-none transition-all duration-200 focus:border-primary-500/50 focus:bg-white/8 focus:ring-4 focus:ring-primary-500/10 placeholder:text-gray-600"
                  />
                </div>

                <div className="mb-8 space-y-2">
                  <label htmlFor="contact-message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-gray-100 outline-none transition-all duration-200 focus:border-primary-500/50 focus:bg-white/8 focus:ring-4 focus:ring-primary-500/10 placeholder:text-gray-600 resize-none min-h-[150px]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_30px_rgba(107,31,255,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={isLoading || isSubmitted}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={20} className="animate-in zoom-in duration-300" />
                      <span>Message Sent Successfully</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
