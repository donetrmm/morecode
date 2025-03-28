import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import VecindApp from "@/components/vecind-app"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <VecindApp />
      <Contact />
      <Footer />
    </main>
  )
}

