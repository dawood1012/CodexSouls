import { ThemeProvider } from './contexts/ThemeContext'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-x-hidden transition-colors duration-500">
        <Cursor />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <Work />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
