import PageHero from '../components/PageHero'
import Work from '../components/Work'

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="Work"
        heading="Projects that make an impact."
        subtitle="A few projects we're proud to share, each one advancing our mission to raise the bar and build a better digital future with our clients."
      />
      <Work teaser={false} />
    </>
  )
}
