

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Tailwind', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'HTML5', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Vue.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'PHP', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'Laravel', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
      { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Firebase', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Supabase', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
      { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Figma', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'AWS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Linux', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'Nginx', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
      { name: 'Postman', image: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative bg-surface-secondary">
      {/* Top/Bottom divider lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-default to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-default to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 py-32 relative z-1">
        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <span className="inline-block font-mono text-sm text-accent-400 tracking-[0.15em] uppercase mb-4 px-4 py-1 bg-accent-400/8 border border-accent-400/15 rounded-full">
            Skills
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] text-white mb-4">
            Tools & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-[600px] mx-auto text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="glass-card p-8 md:p-10"
              data-aos="fade-up"
              data-aos-delay={200 + catIndex * 150}
            >
              <h3 className="text-lg font-bold mb-8 text-gray-100 flex items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-b from-primary-500 to-accent-500 rounded-sm" />
                {category.title}
              </h3>

              <div className="grid grid-cols-4 sm:grid-cols-4 gap-6 items-center justify-items-center">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group relative flex flex-col items-center"
                    data-aos="zoom-in"
                    data-aos-delay={400 + catIndex * 100 + skillIndex * 50}
                  >
                    <div className="relative w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2">
                      {/* Glow Effect on Hover */}
                      <div className="absolute inset-0 bg-primary-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-full h-full object-contain transition-all duration-300"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/50?text=' + skill.name[0];
                        }}
                      />
                    </div>
                    
                    {/* Tooltip-like label */}
                    <span className="mt-2 text-[10px] font-medium text-gray-500 opacity-0 group-hover:opacity-100 group-hover:text-gray-300 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-center uppercase tracking-tighter">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

