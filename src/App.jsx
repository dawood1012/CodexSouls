import { HashRouter, Routes, Route } from 'react-router-dom'
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
// import BlogTeaser from './components/BlogTeaser'
// import Blog from './pages/Blog'
// import BlogPost from './pages/BlogPost'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <About />
        {/* <BlogTeaser /> */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-transparent dark:bg-black text-black dark:text-white overflow-x-hidden transition-colors duration-500">
        <Cursor />
        <ScrollProgress />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} /> */}
          </Routes>
        </HashRouter>
      </div>
    </ThemeProvider>
  )
}
