import Hero from '../components/Hero'
import Work from '../components/Work'
import Services from '../components/Services'
import About from '../components/About'

export default function Home() {
  return (
    <>
      <Hero />
      {/* Render Work as a teaser (first 3 projects) */}
      <Work teaser={true} />
      {/* Render Services as a teaser */}
      <Services teaser={true} />
      {/* Render a brief About snippet */}
      <About teaser={true} />
    </>
  )
}
