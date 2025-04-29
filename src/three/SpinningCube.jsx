import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial } from "@react-three/drei";

export default function SpinningCube() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Direct material properties (without leva controls)
  const thickness = 0.6;
  const roughness = 0.05;  // Lower roughness for clearer refraction
  const transmission = 1;
  const ior = 1.5;
  const chromaticAberration = 0.03;
  const backside = true;
  const distortion = 0.02;
  const color = "#ffffff";  // Light color for testing refraction

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.x = Math.sin(Date.now() * 0.002) * 2;
    }
  });

  return (
    <mesh
      ref={meshRef}
      scale={0.8}
      position={[-6, 1, -1]} // Adjust position for better refraction visibility
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      castShadow
      receiveShadow
    >
      <torusGeometry args={[1, 0.3, 16, 100]} />  {/* More interesting geometry */}
      <MeshTransmissionMaterial
        color={hovered ? "#a855f7" : color}  
        ior={ior}
        transmission={transmission}
        envMapIntensity={1.5}
        backside={backside}
        roughness={roughness}
        chromaticAberration={chromaticAberration}
        distortion={distortion}
      />
    </mesh>
  );
}
