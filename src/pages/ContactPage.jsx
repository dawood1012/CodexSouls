import PageHero from '../components/PageHero'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        heading="Let's build something great together."
        subtitle="Tell us about your project and we'll get back to you within 24 hours."
      />
      <Contact />
    </>
  )
}
