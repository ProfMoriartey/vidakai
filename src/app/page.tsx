import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Marquee from "../components/Marquee"
import Services from "../components/Services"
import WorkGrid from "../components/WorkGrid"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <WorkGrid />
    </main>
  )
}