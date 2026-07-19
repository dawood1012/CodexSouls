import PageHero from '../components/PageHero'
import About from '../components/About'

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Company"
        heading="We build the digital infrastructure behind everyday life."
      />
      <About teaser={false} />
    </>
  )
}
