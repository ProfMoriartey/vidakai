import Hero from "~/components/Hero";
import WorkGrid from "~/components/WorkGrid";
import GettingStarted from "~/components/GettingStarted";
import { Included } from "~/components/Process";
import About from "~/components/About";
import Contact from "~/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkGrid />
      <GettingStarted />
      <Included />
      <About />
      <Contact />
    </>
  );
}
