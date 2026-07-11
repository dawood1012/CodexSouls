import Reveal from './Reveal'
import TiltCard from './TiltCard'

const services = [
  {
    title: 'Strategy',
    description: 'We combine customer insight with market expertise to shape strategies that move businesses forward.',
    skills: ['Research', 'Product Strategy', 'Digital Transformation', 'Technical Strategy', 'Architecture Planning'],
  },
  {
    title: 'Design',
    description: 'We design digital experiences where every interaction builds trust, strengthens brands, and creates lasting impact.',
    skills: ['Experience Design', 'Interaction Design', 'Design Systems', 'Brand Extension', 'Content Design'],
  },
  {
    title: 'Build',
    description: 'We turn ambitious ideas into digital products and platforms that are built to perform, adapt, and scale.',
    skills: ['Full-Stack Engineering', 'Mobile', 'Web', 'Solution Architecture', 'Integrations', 'Open Source'],
  },
  {
    title: 'Grow',
    description: 'We bring strategy, technology, and insight together to create sustainable business growth.',
    skills: ['Growth Strategy', 'Data & Analytics', 'SEO', 'CRM & Monetization', 'Experimentation'],
  },
  {
    title: 'Artificial Intelligence',
    description: 'We turn AI into practical solutions that automate work, improve decisions, and unlock new opportunities.',
    skills: ['AI Consulting', 'LLMs', 'Workflow Automation', 'Implementation', 'AI-Driven UX'],
  },
  {
    title: 'Scale',
    description: 'We become an extension of your team, bringing the expertise and capacity to help you scale with confidence.',
    skills: ['Team Augmentation', 'Dedicated Pods', 'White-Label Engineering', 'Agile Delivery'],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-transparent dark:bg-black py-32 transition-colors duration-500 ambient-orbs overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-zinc-200 dark:border-white/8 pb-12">
            <h2 className="text-5xl sm:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight max-w-sm">
              Our<br />Expertise
            </h2>
            <p className="text-zinc-600 dark:text-white/40 text-base max-w-sm leading-relaxed">
              Shaping ambitious ideas into high-performance digital products and scalable systems.
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
