import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Research from './components/Research'
import Writing from './components/Writing'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Research />
        <Writing />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
