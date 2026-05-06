import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField = ({ count = 2000 }) => {
  const mesh = useRef();
  const light = useRef();
  
  // Fungsi untuk membuat tekstur lingkaran (bulat)
  const circleTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext('2d');
    const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
    gradient.addColorStop(0.5, 'rgba(255,255,255,0.2)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(canvas);
  }, []);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const colorPrimary = new THREE.Color('#8033ff');
    const colorAccent = new THREE.Color('#00d4f5');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 20 + 5;
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);

      positions[i3] = radius * Math.sin(theta) * Math.cos(phi);
      positions[i3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i3 + 2] = radius * Math.cos(theta);

      const color = Math.random() > 0.5 ? colorPrimary : colorAccent;
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    const { mouse, clock } = state;
    const time = clock.getElapsedTime();

    if (mesh.current) {
      mesh.current.rotation.y = time * 0.05;
      mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, mouse.y * 0.5, 0.05);
      mesh.current.rotation.y += THREE.MathUtils.lerp(0, mouse.x * 0.5, 0.05);
    }

    if (light.current) {
      light.current.position.x = THREE.MathUtils.lerp(light.current.position.x, mouse.x * 12, 0.1);
      light.current.position.y = THREE.MathUtils.lerp(light.current.position.y, mouse.y * 12, 0.1);
    }
  });

  return (
    <group>
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.positions.length / 3}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particles.colors.length / 3}
            array={particles.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          map={circleTexture}
          vertexColors
          transparent
          opacity={0.7}
          sizeAttenuation={true}
          alphaTest={0.01}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
      <pointLight ref={light} color="#8033ff" intensity={2} distance={30} />
      <ambientLight intensity={0.3} />
    </group>
  );
};

export default ParticleField;
