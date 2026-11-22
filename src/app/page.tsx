import Hero from "~/components/Hero";
import WorkGrid from "~/components/WorkGrid";
import Templates from "~/components/Templates";
import { Included, Process } from "~/components/Process";
import About from "~/components/About";
import Contact from "~/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkGrid />
      <Templates />
      <Process />
      <Included />
      <About />
      <Contact />
    </>
  );
}
