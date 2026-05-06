import { useMemo, useState, useEffect, useRef, useCallback } from 'react';

// Each icon is a render function so it works properly in JSX
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
  <img src={url} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.6, filter: 'grayscale(30%)' }} />
));

const FloatingIcon = ({ item, scrollOffset }) => {
  // Each icon has unique parallax properties for organic movement
  const parallaxY = scrollOffset * item.parallaxSpeed;
  const wobbleX = Math.sin((scrollOffset * item.wobbleFreqX) + item.phaseX) * item.wobbleAmpX;
  const wobbleY = Math.cos((scrollOffset * item.wobbleFreqY) + item.phaseY) * item.wobbleAmpY;
  const wobbleRotate = Math.sin((scrollOffset * item.wobbleFreqR) + item.phaseR) * item.wobbleAmpR;

  return (
    <div
      style={{
        position: 'absolute',
        left: `${item.x}%`,
        top: `${item.y}%`,
        width: item.size,
        height: item.size,
        opacity: item.opacity,
        color: item.color,
        filter: `drop-shadow(0 0 10px currentColor)`,
        animation: `drift-${item.id} ${item.durationX}s ease-in-out infinite`,
        transform: `translate(${wobbleX}px, ${parallaxY + wobbleY}px) rotate(${wobbleRotate}deg)`,
        transition: 'transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        willChange: 'transform',
      }}
    >
      {iconRenderers[item.iconIndex]()}
    </div>
  );
};

const TechBackground = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const rafRef = useRef(null);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      const currentY = window.scrollY;
      lastScrollY.current = currentY;
      // Normalize scroll to a manageable value for wobble calculations
      setScrollOffset(currentY * 0.01);
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  const floatingIcons = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      iconIndex: i % iconRenderers.length,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 25,
      opacity: Math.random() * 0.2 + 0.2, // Keep the nice glow brightness
      color: ['#8033ff', '#00d4f5', '#9c57ff', '#33e5ff', '#6b1fff', '#00b8d9'][Math.floor(Math.random() * 6)],
      
      // Generate multiple random points to drift to (sembarang/organic movement)
      moveX: [
        0,
        Math.random() * 150 - 75,
        Math.random() * 150 - 75,
        Math.random() * 150 - 75,
        0,
      ],
      moveY: [
        0,
        Math.random() * 150 - 75,
        Math.random() * 150 - 75,
        Math.random() * 150 - 75,
        0,
      ],
      // Un-sync the X and Y movement speeds for more natural look
      durationX: Math.random() * 40 + 50,
      durationY: Math.random() * 40 + 50,
      spinDuration: Math.random() * 30 + 30, // Smooth constant spin
      reverseSpin: Math.random() > 0.5,

      // Parallax & water wobble properties — unique per icon
      parallaxSpeed: (Math.random() * 0.6 + 0.2) * (Math.random() > 0.5 ? -1 : 1), // Some move up, some down
      wobbleAmpX: Math.random() * 15 + 5,   // Horizontal wobble amplitude (px)
      wobbleAmpY: Math.random() * 8 + 3,    // Vertical wobble amplitude (px)
      wobbleAmpR: Math.random() * 6 + 2,    // Rotation wobble amplitude (deg)
      wobbleFreqX: Math.random() * 0.3 + 0.1, // Horizontal wobble frequency
      wobbleFreqY: Math.random() * 0.4 + 0.15, // Vertical wobble frequency
      wobbleFreqR: Math.random() * 0.25 + 0.08, // Rotation wobble frequency
      phaseX: Math.random() * Math.PI * 2,  // Phase offset for unique timing
      phaseY: Math.random() * Math.PI * 2,
      phaseR: Math.random() * Math.PI * 2,
    }));
  }, []);

  return (
    <>
      <style>
        {floatingIcons.map(item => `
          @keyframes drift-${item.id} {
            0% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(${item.moveX[1]}px, ${item.moveY[1]}px) rotate(${item.reverseSpin ? -90 : 90}deg); }
            50% { transform: translate(${item.moveX[2]}px, ${item.moveY[2]}px) rotate(${item.reverseSpin ? -180 : 180}deg); }
            75% { transform: translate(${item.moveX[3]}px, ${item.moveY[3]}px) rotate(${item.reverseSpin ? -270 : 270}deg); }
            100% { transform: translate(0, 0) rotate(${item.reverseSpin ? -360 : 360}deg); }
          }
        `).join('\n')}
      </style>
      <div
      style={{
        position: 'fixed',
        inset: -100, // bleed edges so icons moving off screen look natural
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {floatingIcons.map((item) => (
        <FloatingIcon key={item.id} item={item} scrollOffset={scrollOffset} />
      ))}
      </div>
    </>
  );
};

export default TechBackground;
