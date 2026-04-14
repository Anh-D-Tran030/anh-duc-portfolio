import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
