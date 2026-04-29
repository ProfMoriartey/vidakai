"use client"

import { useRef, useEffect, useMemo } from "react" // Added useEffect, useMemo
import { useFrame } from "@react-three/fiber"
import { Icosahedron } from "@react-three/drei"
import * as THREE from "three"

export default function InteractiveShape() {
  const meshRef = useRef<THREE.Mesh>(null)

  // 1. Create a raw object to store the global mouse position efficiently
  // without triggering React re-renders on every mouse move.
  const globalMouse = useMemo(() => ({ x: 0, y: 0 }), [])

  // 2. Add a global window listener for global viewport tracking
  useEffect(() => {
    const handleGlobalMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates between -1 and 1 across the window
      // (clientX / innerWidth) maps to (0 to 1), then we map to (-1 to 1)
      globalMouse.x = (event.clientX / window.innerWidth) * 2 - 1
      globalMouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    // Only add listener on devices that support hover
    if (window.matchMedia("(any-hover: hover)").matches) {
      window.addEventListener("mousemove", handleGlobalMouseMove)
    }

    return () => window.removeEventListener("mousemove", handleGlobalMouseMove)
  }, [globalMouse])

  // 3. Update useFrame to use the global coordinates
  useFrame((state) => {
    if (!meshRef.current) return

    // Instead of state.pointer, we use globalMouse
    const targetX = globalMouse.x * 0.8
    const targetY = globalMouse.y * 0.8

    // The smoothing (lerp) logic stays exactly the same
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetX, 0.05)
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -targetY, 0.05)
  })

  return (
    <Icosahedron ref={meshRef} args={[2.5, 0]} position={[0, 0, 0]}>
      <meshStandardMaterial color="black" wireframe />
    </Icosahedron>
  )
}