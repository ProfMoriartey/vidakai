import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Marquee from "../components/Marquee"
import Services from "../components/Services"
import About from "../components/About"
import WorkGrid from "../components/WorkGrid"
import Footer from "~/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <About />
      <WorkGrid />
      <Footer />
    </main>
  )
}