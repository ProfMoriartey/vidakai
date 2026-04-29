"use client"

import { useRef, useEffect, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Icosahedron } from "@react-three/drei"
import * as THREE from "three"

export default function InteractiveShape() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  const globalMouse = useMemo(() => ({ x: 0, y: 0 }), [])
  
  // 1. Setup refs to track interaction time without causing React re-renders
  // We initialize it 4 seconds in the past so it auto-rotates immediately on page load
  const lastInteractionTime = useRef<number>(Date.now() - 4000)
  const isIdle = useRef<boolean>(true)

  useEffect(() => {
    const handleInteraction = (event: MouseEvent | TouchEvent) => {
      lastInteractionTime.current = Date.now()
      isIdle.current = false

      let clientX = 0
      let clientY = 0

      // Handle both mouse and touch coordinates safely
      if ('touches' in event) {
        // Extract the first touch object directly
        const firstTouch = event.touches[0]
        
        // Check if the object actually exists to satisfy TypeScript
        if (firstTouch) {
          clientX = firstTouch.clientX
          clientY = firstTouch.clientY
        } else {
          return // Exit if no touch is detected
        }
      } else {
        clientX = (event as MouseEvent).clientX
        clientY = (event as MouseEvent).clientY
      }

      globalMouse.x = (clientX / window.innerWidth) * 2 - 1
      globalMouse.y = -(clientY / window.innerHeight) * 2 + 1
    }

    // 3. Listen for both mouse and mobile touch events
    window.addEventListener("mousemove", handleInteraction)
    window.addEventListener("touchmove", handleInteraction, { passive: true })
    window.addEventListener("touchstart", handleInteraction, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleInteraction)
      window.removeEventListener("touchmove", handleInteraction)
      window.removeEventListener("touchstart", handleInteraction)
    }
  }, [globalMouse])

  // 4. The delta parameter gives us the time between frames, 
  // ensuring the rotation speed is consistent regardless of the user's monitor refresh rate.
  useFrame((state, delta) => {
    if (!meshRef.current) return

    // 5. Check if 3 seconds (3000ms) have passed since the last movement
    if (Date.now() - lastInteractionTime.current > 3000) {
      isIdle.current = true
    }

    if (isIdle.current) {
      // Idle Mode: Smooth, continuous auto-rotation
      meshRef.current.rotation.y += delta * 0.2
      meshRef.current.rotation.x += delta * 0.15
    } else {
      // Active Mode: Magnetic mouse tracking
      const targetX = globalMouse.x * 0.8
      const targetY = globalMouse.y * 0.8

      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetX, 0.05)
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -targetY, 0.05)
    }
  })

  return (
    <Icosahedron ref={meshRef} args={[2.5, 0]} position={[0, 0, 0]}>
      <meshStandardMaterial color="black" wireframe />
    </Icosahedron>
  )
}