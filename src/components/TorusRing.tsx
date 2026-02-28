import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SpiralGalaxy = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const coreRef = useRef<THREE.Points>(null);
  const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 3000 : 8000;
  const coreCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 500 : 1500;

  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const siz = new Float32Array(count);
    const arms = 4;
    const armSpread = 0.6;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 4.5 + 0.3;
      const armIndex = i % arms;
      const armAngle = (armIndex / arms) * Math.PI * 2;
      const spiralAngle = radius * 1.2;
      const angle = armAngle + spiralAngle;

      const randomX = (Math.random() - 0.5) * armSpread * (radius / 4);
      const randomY = (Math.random() - 0.5) * 0.3 * Math.exp(-radius * 0.3);
      const randomZ = (Math.random() - 0.5) * armSpread * (radius / 4);

      pos[i3] = Math.cos(angle) * radius + randomX;
      pos[i3 + 1] = randomY;
      pos[i3 + 2] = Math.sin(angle) * radius + randomZ;

      // Color: cyan at center → purple at edges
      const t = radius / 5;
      const cyan = new THREE.Color('hsl(186, 100%, 60%)');
      const purple = new THREE.Color('hsl(270, 80%, 65%)');
      const c = cyan.clone().lerp(purple, t);

      col[i3] = c.r;
      col[i3 + 1] = c.g;
      col[i3 + 2] = c.b;

      siz[i] = Math.random() * 0.04 + 0.01;
    }
    return [pos, col, siz];
  }, [count]);

  // Bright galaxy core
  const [corePositions, coreColors] = useMemo(() => {
    const pos = new Float32Array(coreCount * 3);
    const col = new Float32Array(coreCount * 3);
    const white = new THREE.Color('hsl(186, 50%, 85%)');

    for (let i = 0; i < coreCount; i++) {
      const i3 = i * 3;
      const r = Math.random() * 0.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      pos[i3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = r * Math.cos(phi) * 0.3;
      pos[i3 + 2] = r * Math.sin(phi) * Math.sin(theta);

      col[i3] = white.r;
      col[i3 + 1] = white.g;
      col[i3 + 2] = white.b;
    }
    return [pos, col];
  }, [coreCount]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.06;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group position={[0, 0, -2]} rotation={[Math.PI / 5, 0, 0.2]}>
      {/* Spiral arms */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          vertexColors
          transparent
          opacity={0.7}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Bright core */}
      <points ref={coreRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[corePositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[coreColors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
};

export default SpiralGalaxy;
