"use client";

import RevealText from "./RevealText";
import MouseParallax from "./MouseParallax";

export default function About() {
  return (
    <section
      className="relative max-w-full overflow-hidden px-4 py-32 text-black sm:px-6 lg:px-8"
      id="about"
    >
      {/* Background Parallax Elements */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <MouseParallax factor={0.02} className="absolute top-[10%] right-[-5%]">
          <div className="h-[400px] w-[400px] transform-gpu rounded-full bg-gray-50 opacity-80 blur-3xl" />
        </MouseParallax>

        <MouseParallax
          factor={-0.03}
          className="absolute bottom-[5%] left-[-5%]"
        >
          <div className="h-[500px] w-[500px] transform-gpu rounded-full bg-gray-100 opacity-60 blur-3xl" />
        </MouseParallax>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
        {/* Left Column: Heading */}
        <div className="md:col-span-4">
          <RevealText delay={0}>
            <h2 className="mb-4 text-sm font-bold tracking-widest text-gray-400 uppercase">
              Who We Are
            </h2>
          </RevealText>
          <RevealText delay={0.1}>
            <h3 className="text-4xl font-bold tracking-tighter md:text-5xl">
              Our Philosophy.
            </h3>
          </RevealText>
        </div>

        {/* Right Column: Text Content */}
        <div className="space-y-8 text-xl leading-relaxed font-light text-gray-600 md:col-span-8 md:text-2xl">
          <RevealText delay={0.2}>
            <p>
              VidaKai is a specialized web development agency. We engineer
              digital products and manage the underlying technical operations
              that drive real business growth.
            </p>
          </RevealText>

          <RevealText delay={0.3}>
            <p>
              Our foundation relies on deep analytical thinking and precise
              problem-solving. We treat code architecture the same way we treat
              physical structures—every piece must serve a deliberate purpose
              and withstand scale.
            </p>
          </RevealText>

          <RevealText delay={0.4}>
            <p>
              We oversee the full project lifecycle and international marketing
              strategies for every application we deploy. Our team ensures that
              every interface is accessible, every database is secure, and every
              product is built to last.
            </p>
          </RevealText>
        </div>
      </div>
    </section>
  );
}
