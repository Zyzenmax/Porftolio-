import { Trophy, Award, Medal } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: '1st Place – LKS IT Software Solution for Business',
    issuer: 'Ministry of Education',
    date: '2025',
    description: 'LKS IT Software Solution for Business challenges participants to design and develop business-oriented software solutions in the form of desktop or mobile applications, based on real-world scenarios, emphasizing problem-solving, system design, and implementation skills.',
    icon: Trophy,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20'
  },
  {
    id: 2,
    title: '3rd Place Winner – Web Development Competition',
    issuer: 'IDN Boarding School',
    date: '2025',
    description: 'Developed a web-based platform (Jaga Jiwa) focused on mental well-being, providing users with tools and resources to better understand and manage their emotional health.',
    icon: Medal,
    color: 'text-primary-400',
    bg: 'bg-primary-500/10',
    border: 'border-primary-500/20'
  },
   {
    id: 3,
    title: '3rd Place – Website Design, PesonaEdu Young Creators Competition 2025',
    issuer: 'Pesona Edu Solution',
    date: '2025',
    description: 'Developed an environmental awareness web platform (Aksi Hijau) focused on promoting climate action through interactive learning and AI-powered features, and presented it in the PesonaEdu Young Creators Competition.',
    icon: Medal,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20'
  },
  {
    id: 4,
    title: 'IT Software Solution for Business',
    issuer: 'LKS SMK Jakarta Timur',
    date: '2024',
    description: 'Awarded 3rd Runner-up (Juara Harapan 3) in the Student Competency Competition (LKS) at the city level, demonstrating proficiency in developing enterprise software solutions.',
    icon: Medal,
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/20'
  },
 {
    id: 5,
    title: 'Internet Introduction',
    issuer: 'MySkill',
    date: '2025',
    description: 'Fundamental course covering web architecture, internet protocols, and the basic infrastructure of the World Wide Web.',
    icon: Award,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20'
  },
  {
    id: 6,
    title: 'Software Engineering Competency',
    issuer: 'PPKP Jakarta Timur',
    date: '2025',
    description: 'Vocational training program (Angkatan V) focused on software engineering practices, professional development, and technical skills.',
    icon: Award,
    color: 'text-red-400',
    bg: 'bg-red-400/10',
    border: 'border-red-400/20'
  },
  {
    id: 7,
    title: 'Visual Communication Design',
    issuer: 'PPKP Jakarta Timur',
    date: '2025',
    description: 'Specialized certification in visual communication principles, layout design, and digital asset creation for vocational students.',
    icon: Award,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20'
  },
  {
    id: 8,
    title: 'Computer Network Engineering',
    issuer: 'PPKP Jakarta Timur',
    date: '2024',
    description: 'Technical training in networking infrastructure, hardware management, and computer systems architecture.',
    icon: Award,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20'
  },
  {
    id: 9,
    title: 'Front-End Development Introduction',
    issuer: 'MySkill',
    date: '2025',
    description: 'Introductory course on modern front-end technologies, focusing on building responsive user interfaces and web interactivity.',
    icon: Award,
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10',
    border: 'border-indigo-400/20'
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative bg-surface-secondary">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-default to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 py-32 relative z-1">
        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <span className="inline-block font-mono text-sm text-accent-400 tracking-[0.15em] uppercase mb-4 px-4 py-1 bg-accent-400/8 border border-accent-400/15 rounded-full">
            Awards
          </span>
          <h2 className="text-[clamp(2rem,4vw,3rem)] text-white mb-4">
            Awards & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-[600px] mx-auto text-lg">
            Milestones of my competitive and continuous learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${item.bg} blur-3xl -mx-8 -mt-8 rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${item.bg} ${item.border} ${item.color}`}>
                  <Icon size={28} />
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-bold text-gray-100">{item.title}</h3>
                </div>
                
                <div className="flex items-center gap-2 mb-4 font-mono text-xs text-gray-400 uppercase tracking-wider">
                  <span className={item.color}>{item.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <span>{item.issuer}</span>
                </div>
                
                <p className="text-gray-400 text-[0.95rem] leading-relaxed relative z-10">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
