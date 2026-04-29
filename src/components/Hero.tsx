"use client"

import { Canvas } from "@react-three/fiber"
import RotatingText from "./RotatingText"
import InteractiveShape from "./InteractiveShape"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-full overflow-hidden text-black">
      
      {/* The 3D Canvas Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <InteractiveShape />
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pointer-events-auto">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex flex-col">
          <span>Digital Craft &</span>
          <RotatingText />
            </div> 
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-12">
          VidaKai builds high-performance web applications and manages secure cloud infrastructure for ambitious brands.
        </p>

        <a 
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full text-sm font-bold tracking-tight hover:bg-gray-800 transition-colors"
        >
          Start a Project
        </a>
      </div>
    </section>
  )
}