import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Aksi Hijau',
    description:
      'Aksi Hijau is a web platform that turns environmental learning into an interactive and enjoyable experience. With features like AI assistance, waste detection, and educational games, users can learn, explore, and take meaningful action toward protecting the environment.',
    tags: ['Tailwind', 'React', 'Gemini API'],
    image: './assets/aksihijau.png',
    link: 'https://aksihijauedu.vercel.app', // Placeholder, user can update
  },
  {
    id: 2,
    title: 'Elearning',
    description:
      'An intuitive e-learning web application designed to simplify online learning experiences. Built with modern technology, it focuses on performance, accessibility, and engaging user interaction for both students and educators.',
    tags: ['Tailwind', 'React', 'Laravel'],
    image: './assets/elearning.png',
    link: 'http://103.167.23.83/', 
  },
  {
    id: 3,
    title: 'Jaga Jiwa',
    description:
      'Jaga Jiwa is a mental health awareness competition that emphasizes resilience, self-growth, and emotional well-being. Through this experience, I learned to embrace challenges, grow through struggles, and express meaningful perspectives on mental health.',
    tags: ['Tailwind', 'React', 'Gemini API'],
    image: './assets/jagajiwa.png',
    link: 'https://jagajiwamu.vercel.app',
  },
  {
    id: 4,
    title: 'Skillio',
    description:
      'Skillio is an interactive web platform that transforms career exploration into a structured and engaging experience. Equipped with personalized recommendations and guided learning features, it enables users to discover their strengths, explore career paths, and make smarter decisions for their future.',
    tags: ['Next.js', 'React', 'Tailwind', 'Gemini API'],
    image: './assets/skillio.png',
    link: 'https://skillioedu.vercel.app',
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card overflow-hidden cursor-pointer !p-0 group block no-underline"
      data-aos="fade-up"
      data-aos-delay={200 + index * 100}
    >
      {/* Project Preview Image */}
      <div className="relative h-[265px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Hover Overlay Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-primary-500/10 backdrop-blur-[2px]">
           <div className="w-12 h-12 rounded-full bg-white text-dark-950 flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
             <ExternalLink size={20} />
           </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 relative">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-100 group-hover:text-primary-400 transition-colors duration-300">
            {project.title}
          </h3>
          <ExternalLink size={18} className="text-dark-500 group-hover:text-primary-400 transition-colors" />
        </div>
        <p className="text-[0.95rem] text-gray-400 mb-6 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] px-3 py-1 bg-white/5 border border-white/10 rounded-full text-dark-200 group-hover:border-primary-500/30 group-hover:text-primary-300 transition-all uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative">
      {/* Decorative orb */}
      <div className="absolute top-[30%] -right-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(107,31,255,0.05)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 py-32 relative z-10">
        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <span className="inline-block font-mono text-sm text-accent-400 tracking-[0.15em] uppercase mb-4 px-4 py-1 bg-accent-400/8 border border-accent-400/15 rounded-full">
            My Portfolio
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] text-white mb-4">
            Selected <span className="gradient-text">work</span>
          </h2>
          <p className="text-dark-300 max-w-[600px] mx-auto text-lg">
            A selection of my recent projects demonstrating my skills and passions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
