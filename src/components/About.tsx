"use client"

import { useCursor } from "../context/CursorContext"
import RevealText from "./RevealText"
import MouseParallax from "./MouseParallax"

export default function About() {
  const { setCursorType, setCursorText } = useCursor()

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-full overflow-hidden bg-white text-black" id="about">
      
      {/* Background Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        <MouseParallax factor={0.02} className="absolute top-[10%] right-[-5%]">
          <div className="w-[400px] h-[400px] bg-gray-50 rounded-full blur-3xl opacity-80" />
        </MouseParallax>
        
        <MouseParallax factor={-0.03} className="absolute bottom-[5%] left-[-5%]">
          <div className="w-[500px] h-[500px] bg-gray-100 rounded-full blur-3xl opacity-60" />
        </MouseParallax>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Column: Text Content */}
        <div>
          <RevealText delay={0}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8">
              Background
            </h2>
          </RevealText>
          
          <div className="space-y-6 text-gray-600 text-lg">
            <RevealText delay={0.1}>
              <p>
                VidaKai is a specialized web development agency. We engineer digital products and manage the underlying technical operations that drive real business growth.
              </p>
            </RevealText>
            
            <RevealText delay={0.2}>
              <p>
                Our foundation relies on deep analytical thinking and precise problem-solving. We treat code architecture the same way we treat physical structures—every piece must serve a deliberate purpose and withstand scale.
              </p>
            </RevealText>
            
            <RevealText delay={0.3}>
              <p>
                As the Technical Director, I oversee the full project lifecycle and international marketing strategies for every application we deploy. Our team ensures that every interface is accessible and every database is secure.
              </p>
            </RevealText>
          </div>
        </div>

        {/* Right Column: Credentials Block */}
        <div className="flex flex-col justify-center">
          <RevealText delay={0.4}>
            <div 
              className="p-8 bg-white/70 backdrop-blur-md rounded-2xl border border-gray-100 shadow-sm relative z-20 transition-colors hover:bg-white"
              onMouseEnter={() => {
                setCursorType("project")
                setCursorText("Verify")
              }}
              onMouseLeave={() => {
                setCursorType("default")
                setCursorText("")
              }}
            >
              <h3 className="text-xl font-bold mb-6 tracking-tight">Credentials</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span className="font-medium text-black">Meta Certified Professional</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span className="font-medium text-black">Google Certified Professional</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-gray-300 rounded-full" />
                  <span className="text-gray-600">B.Sc. Chemistry</span>
                </li>
              </ul>
            </div>
          </RevealText>
        </div>
        
      </div>
    </section>
  )
}