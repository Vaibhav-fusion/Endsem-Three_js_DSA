import React from 'react'
import { Text3D } from "@react-three/drei"

function Playtext() {
  return (
    <Text3D
      font={'/fonts/bevel.json'} // Ensure bevel.json is in public/fonts/
      position={[-3, 1, 0]}
      rotation={[0, 0.2, -100]}
      size={0.2}
      height={0.1}
      bevelEnabled
      bevelSize={0.05}
      bevelThickness={0.01}
      bevelOffset={0.01}
      bevelSegments={4}
      letterSpacing={0.03}
      castShadow
      receiveShadow
    >
      Play around 
      <meshStandardMaterial 
        color="#4f46e5" 
        metalness={0.5}
        roughness={0.3}
        emissive="#4f46e5"
        emissiveIntensity={0.15}
      />
    </Text3D>
  )
}

export default Playtext
