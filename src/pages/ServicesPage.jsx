import PageHero from '../components/PageHero'
import Services from '../components/Services'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Expertise"
        heading="Fluent in Digital. Focused on Impact."
        subtitle="Elevated experiences crafted by people, accelerated by AI, and built on tools that scale."
      />
      <Services teaser={false} />
    </>
  )
}
