import { HashRouter, Routes, Route, Outlet } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import SmoothScroll from './components/SmoothScroll'

// Import Pages
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import WorkPage from './pages/WorkPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="min-h-[85vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-transparent dark:bg-black text-black dark:text-white overflow-x-hidden transition-colors duration-500 relative">
        {/* Global Smoking Glowing Background Animation */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] opacity-40">
          <div className="absolute top-[10%] left-[-15%] w-[80vw] h-[80vw] bg-violet-600/20 rounded-full filter blur-[120px] animate-smoke-1" />
          <div className="absolute bottom-[-15%] right-[-15%] w-[70vw] h-[70vw] bg-[#FF52B7]/15 rounded-full filter blur-[130px] animate-smoke-2" />
          <div className="absolute top-[35%] left-[15%] w-[75vw] h-[75vw] bg-[#6E5BFF]/15 rounded-full filter blur-[110px] animate-smoke-3" />
        </div>
        <Cursor />
        <ScrollProgress />
        <SmoothScroll />
        <HashRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </ThemeProvider>
  )
}

