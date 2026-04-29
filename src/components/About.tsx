"use client";

import { useCursor } from "../context/CursorContext";
import RevealText from "./RevealText";
import MouseParallax from "./MouseParallax";

export default function About() {
  const { setCursorType, setCursorText } = useCursor();

  return (
    <section
      className="relative max-w-full overflow-hidden px-4 py-24 text-black sm:px-6 lg:px-8"
      id="about"
    >
      {/* Background Parallax Elements */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <MouseParallax
          transform-gpu
          factor={0.02}
          className="absolute top-[10%] right-[-5%]"
        >
          <div className="h-[400px] w-[400px] rounded-full bg-gray-50 opacity-80 blur-3xl" />
        </MouseParallax>

        <MouseParallax
          transform-gpu
          factor={-0.03}
          className="absolute bottom-[5%] left-[-5%]"
        >
          <div className="h-[500px] w-[500px] rounded-full bg-gray-100 opacity-60 blur-3xl" />
        </MouseParallax>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2">
        {/* Left Column: Text Content */}
        <div>
          <RevealText delay={0}>
            <h2 className="mb-8 text-3xl font-bold tracking-tighter md:text-5xl">
              Background
            </h2>
          </RevealText>

          <div className="space-y-6 text-lg text-gray-600">
            <RevealText delay={0.1}>
              <p>
                VidaKai is a specialized web development agency. We engineer
                digital products and manage the underlying technical operations
                that drive real business growth.
              </p>
            </RevealText>

            <RevealText delay={0.2}>
              <p>
                Our foundation relies on deep analytical thinking and precise
                problem-solving. We treat code architecture the same way we
                treat physical structures—every piece must serve a deliberate
                purpose and withstand scale.
              </p>
            </RevealText>

            <RevealText delay={0.3}>
              <p>
                As the Technical Director, I oversee the full project lifecycle
                and international marketing strategies for every application we
                deploy. Our team ensures that every interface is accessible and
                every database is secure.
              </p>
            </RevealText>
          </div>
        </div>

        {/* Right Column: Credentials Block */}
        <div className="flex flex-col justify-center">
          <RevealText delay={0.4}>
            <div
              className="relative z-20 rounded-2xl border border-gray-100 bg-white/70 p-8 shadow-sm backdrop-blur-md transition-colors hover:bg-white"
              onMouseEnter={() => {
                setCursorType("project");
                setCursorText("Verify");
              }}
              onMouseLeave={() => {
                setCursorType("default");
                setCursorText("");
              }}
            >
              <h3 className="mb-6 text-xl font-bold tracking-tight">
                Credentials
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-black" />
                  <span className="font-medium text-black">
                    Meta Certified Professional
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-black" />
                  <span className="font-medium text-black">
                    Google Certified Professional
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-gray-300" />
                  <span className="text-gray-600">B.Sc. Chemistry</span>
                </li>
              </ul>
            </div>
          </RevealText>
        </div>
      </div>
    </section>
  );
}
