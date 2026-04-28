import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import WorkGrid from "~/components/WorkGrid";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WorkGrid />
    </main>
  )
}