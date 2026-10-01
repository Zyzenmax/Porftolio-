// Tech stack logo URLs
const techImageUrls = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
  'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
];

const iconRenderers = techImageUrls.map((url) => () => (
  <img
    src={url}
    alt=""
    draggable="false"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      opacity: 0.65,
      filter: 'grayscale(25%) drop-shadow(0 0 8px rgba(128, 51, 255, 0.35))',
      userSelect: 'none',
      pointerEvents: 'none',
    }}
  />
));

const FLOATING_ICONS = Array.from({ length: 42 }).map((_, i) => ({
  id: i,
  iconIndex: i % iconRenderers.length,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 20 + 26,
  opacity: Math.random() * 0.25 + 0.2,
  color: ['#8033ff', '#00d4f5', '#9c57ff', '#33e5ff', '#6b1fff', '#00b8d9'][Math.floor(Math.random() * 6)],

  // Gentle autonomous float path
  dx1: (Math.random() * 60 - 30).toFixed(1),
  dy1: (Math.random() * 50 - 25).toFixed(1),
  dr1: (Math.random() * 14 - 7).toFixed(1),

  dx2: (Math.random() * 70 - 35).toFixed(1),
  dy2: (Math.random() * 60 - 30).toFixed(1),
  dr2: (Math.random() * 16 - 8).toFixed(1),

  dx3: (Math.random() * 60 - 30).toFixed(1),
  dy3: (Math.random() * 50 - 25).toFixed(1),
  dr3: (Math.random() * 14 - 7).toFixed(1),

  duration: (Math.random() * 12 + 16).toFixed(1), // 16s - 28s for calm, graceful float
  delay: (Math.random() * -20).toFixed(1),       // negative delay so all icons are already moving
}));

const TechBackground = () => {
  return (
    <>
      <style>
        {FLOATING_ICONS.map((item) => `
          @keyframes float-natural-${item.id} {
            0% {
              transform: translate3d(0, 0, 0) rotate(0deg);
            }
            33% {
              transform: translate3d(${item.dx1}px, ${item.dy1}px, 0) rotate(${item.dr1}deg);
            }
            66% {
              transform: translate3d(${item.dx2}px, ${item.dy2}px, 0) rotate(${item.dr2}deg);
            }
            85% {
              transform: translate3d(${item.dx3}px, ${item.dy3}px, 0) rotate(${item.dr3}deg);
            }
            100% {
              transform: translate3d(0, 0, 0) rotate(0deg);
            }
          }
        `).join('\n')}
      </style>
      <div
        style={{
          position: 'fixed',
          inset: -60,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        {FLOATING_ICONS.map((item) => (
          <div
            key={item.id}
            style={{
              position: 'absolute',
              left: `${item.x}%`,
              top: `${item.y}%`,
              width: item.size,
              height: item.size,
              opacity: item.opacity,
              color: item.color,
              filter: 'drop-shadow(0 0 12px currentColor)',
              animation: `float-natural-${item.id} ${item.duration}s ease-in-out ${item.delay}s infinite`,
              willChange: 'transform',
            }}
          >
            {iconRenderers[item.iconIndex]()}
          </div>
        ))}
      </div>
    </>
  );
};

export default TechBackground;
