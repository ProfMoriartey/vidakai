"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function Particles() {
  const points = useRef<THREE.Points>(null)

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(3000 * 3)
    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25
    }
    return positions
  }, [])

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.x -= delta / 30
      points.current.rotation.y -= delta / 40
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
      <pointsMaterial 
        size={0.02} 
        color="#000000" 
        transparent 
        opacity={0.3} 
        sizeAttenuation 
      />
    </points>
  )
}

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-white">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Particles />
      </Canvas>
    </div>
  )
}