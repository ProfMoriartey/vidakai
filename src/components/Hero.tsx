"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Icosahedron } from "@react-three/drei"
import MagneticElement from "./MagneticElement"

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <Icosahedron args={[1.5, 0]} position={[0, 0, 0]}>
            <meshStandardMaterial color="black" wireframe />
          </Icosahedron>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-4 pointer-events-none flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black mb-6">
          Digital Craft
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          We build modern web experiences
        </p>
        
        <div className="pointer-events-auto">
          <MagneticElement cursorText="Start">
            <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Start a Project
            </button>
          </MagneticElement>
        </div>
      </div>
    </section>
  )
}