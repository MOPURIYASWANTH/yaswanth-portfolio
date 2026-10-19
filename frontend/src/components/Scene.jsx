import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';

function Orb() {
  return (
    <Float speed={1.5} rotationIntensity={0.7} floatIntensity={1.1}>
      <Sphere args={[1.2, 64, 64]} scale={1.05}>
        <MeshDistortMaterial color="#7c5cff" roughness={0.18} metalness={0.35} distort={0.38} speed={2.1} />
      </Sphere>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="scene" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <ambientLight intensity={1.4} />
        <directionalLight position={[3, 4, 5]} intensity={2.2} color="#8edcff" />
        <pointLight position={[-3, -2, 1]} intensity={2} color="#8a5cff" />
        <Suspense fallback={null}>
          <Orb />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
        </Suspense>
      </Canvas>
    </div>
  );
}
