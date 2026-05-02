import Reveal from './Reveal'
import TiltCard from './TiltCard'

const services = [
  {
    title: 'Strategy',
    description: 'We define the vision, map the landscape, and chart the path to impact.',
    skills: ['Market Research', 'Product Strategy', 'Competitive Analysis', 'Roadmapping', 'Business Goals'],
  },
  {
    title: 'Design',
    description: 'We turn vision into interface, where brand, content, and experience speak in harmony.',
    skills: ['Experience Design', 'Interaction Design', 'Design Systems', 'Brand Extension', 'Content Design'],
  },
  {
    title: 'Build',
    description: 'We write clean, scalable code that performs under pressure and ships on time.',
    skills: ['Full-Stack Development', 'Mobile Apps', 'Cloud Infrastructure', 'API Design', 'Performance Optimization'],
  },
  {
    title: 'Deploy',
    description: 'We launch with confidence, measure impact, and iterate based on real user data.',
    skills: ['DevOps & CI/CD', 'Analytics Setup', 'Performance Monitoring', 'A/B Testing', 'Launch Strategy'],
  },
  {
    title: 'Scale',
    description: 'We grow your product sustainably, from hundreds to millions of users.',
    skills: ['Growth Marketing', 'Database Optimization', 'Load Balancing', 'Team Scaling', 'Technical Debt'],
  },
  {
    title: 'Support',
    description: 'We stay by your side, fixing issues fast and shipping improvements weekly.',
    skills: ['24/7 Monitoring', 'Incident Response', 'Bug Fixes', 'Feature Updates', 'User Support'],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-transparent dark:bg-black py-32 transition-colors duration-500 ambient-orbs overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-zinc-200 dark:border-white/8 pb-12">
            <h2 className="text-5xl sm:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight max-w-sm">
              Our<br />Services
            </h2>
            <p className="text-zinc-600 dark:text-white/40 text-base max-w-xs leading-relaxed">
              Full-spectrum capabilities from strategy to support.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, description, skills }, i) => (
            <Reveal key={title} delay={i * 100} direction="up">
              <TiltCard className="relative h-[500px] rounded-2xl overflow-hidden cursor-pointer">
                <div className="group relative h-full w-full">
                  <div className="offset-card absolute inset-0 bg-white/95 backdrop-blur-sm dark:bg-zinc-950 border-2 border-zinc-900/8 dark:border-white/10 rounded-2xl transition-all duration-500 group-hover:border-violet-400 dark:group-hover:border-violet-400/60 dark:shadow-none dark:group-hover:shadow-none" />

                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 dark:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                    }}
                  />

                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: 'linear-gradient(135deg, transparent 30%, rgba(110,91,255,0.08) 50%, transparent 70%)',
                    }}
                  />

                  <div className="relative h-full flex flex-col justify-between p-12">
                    <div className="flex-1 flex items-end">
                      <h3 className="text-6xl font-bold text-zinc-900 dark:text-white group-hover:opacity-0 group-hover:-translate-y-4 transition-all duration-500">
                        {title}
                      </h3>
                    </div>

                    <div className="absolute inset-0 p-12 flex flex-col justify-end opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <div className="mb-12">
                        <h3 className="text-5xl font-bold text-zinc-900 dark:text-white mb-6">{title}</h3>
                        <p className="text-zinc-600 dark:text-white/50 text-base leading-relaxed max-w-sm">{description}</p>
                      </div>
                      <div className="flex flex-col gap-3">
                        {skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-sm text-zinc-700 dark:text-white/60 font-medium opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                            style={{
                              transitionDelay: `${150 + idx * 70}ms`,
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-12px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
