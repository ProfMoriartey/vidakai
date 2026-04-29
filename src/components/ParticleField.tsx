"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function Particles() {
  const points = useRef<THREE.Points>(null)

  // Generate 2000 random X, Y, Z coordinates
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10     // X axis
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10 // Y axis
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 // Z axis
    }
    return positions
  }, [])

  // Rotate the entire particle group slowly every frame
  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.x -= delta / 15
      points.current.rotation.y -= delta / 20
    }
  })

  return (
    <points ref={points}>
     <bufferGeometry>
        {/* Replace the old bufferAttribute with this: */}
        <bufferAttribute
          attach="attributes-position"
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      {/* 
        The material dictates how the particles look. 
        Using a soft gray (#a3a3a3) ensures it doesn't overpower the text.
      */}
      <pointsMaterial
        size={0.015}
        color="#a3a3a3"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}
      />
    </points>
  )
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <Particles />
      </Canvas>
    </div>
  )
}