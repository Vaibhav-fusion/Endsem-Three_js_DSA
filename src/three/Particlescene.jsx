import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles() {
  const ref = useRef();

  // Create an array of 1000 particles with random positions
  const particles = new Float32Array(1000 * 3).map(
    () => (Math.random() - 0.5) * 10
  );

  // Rotate the particles slowly over time
  useFrame(() => {
    ref.current.rotation.y += 0.001;
  });

  return (
    <Points ref={ref} positions={particles} stride={3}>
      <PointMaterial
        color="indigo" // Bright cyan color
        size={0.05}
        transparent
        opacity={0.7}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function RotatingScene() {
  const groupRef = useRef();

  // Scroll wheel rotates the group
  useEffect(() => {
    const handleScroll = (e) => {
      if (groupRef.current) {
        groupRef.current.rotation.y += e.deltaY * 0.001;
      }
    };
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <group ref={groupRef}>
      <Particles />
    </group>
  );
}

export default function ParticleScene({ className }) {
  return (
    <div className={className} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <RotatingScene />
      </Canvas>
    </div>
  );
}