import Hero from "~/components/Hero";
import WorkGrid from "~/components/WorkGrid";
import ProcessSection from "~/components/ProcessSection";
import { Included } from "~/components/Process";
import About from "~/components/About";
import Contact from "~/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkGrid />
      <ProcessSection />
      <Included />
      <About />
      <Contact />
    </>
  );
}
