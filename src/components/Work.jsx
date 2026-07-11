import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import TiltCard from './TiltCard'

const projects = [
  {
    tag: 'AI · SaaS',
    title: 'NeuralDesk',
    desc: 'An AI-powered customer support platform that cut response time by 73% for a Series B startup.',
    bgDark: 'dark:bg-[#0d0d1a]',
    bgLight: 'bg-white',
    accent: '#6e5bff',
  },
  {
    tag: 'Mobile · Fintech',
    title: 'PocketLedger',
    desc: 'A personal finance app with smart spending insights — 50k downloads in the first month.',
    bgDark: 'dark:bg-[#0d0a1a]',
    bgLight: 'bg-white',
    accent: '#a855f7',
  },
  {
    tag: 'Web · E-commerce',
    title: 'Versa Store',
    desc: 'Headless commerce platform with sub-second load times and a 3× uplift in conversion.',
    bgDark: 'dark:bg-[#080d1a]',
    bgLight: 'bg-white',
    accent: '#3b82f6',
  },
  {
    tag: 'Design · Brand',
    title: 'Luminary OS',
    desc: 'A complete design system and brand identity for a healthcare startup entering 4 new markets.',
    bgDark: 'dark:bg-[#080f12]',
    bgLight: 'bg-white',
    accent: '#10b981',
  },
  {
    tag: 'AI · Productivity',
    title: 'Cortex Notes',
    desc: 'A second-brain note-taking app with AI search — featured on Product Hunt #1 of the week.',
    bgDark: 'dark:bg-[#0a0d18]',
    bgLight: 'bg-white',
    accent: '#f59e0b',
  },
  {
    tag: 'Web · Developer Tools',
    title: 'StackForge',
    desc: 'A self-hosted CI/CD platform built for indie teams. Deploys 5× faster than the alternatives.',
    bgDark: 'dark:bg-[#0e0a14]',
    bgLight: 'bg-white',
    accent: '#ec4899',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative bg-transparent dark:bg-black py-32 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-zinc-200 dark:border-white/8 pb-12">
            <h2 className="text-5xl sm:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight max-w-sm">
              Selected<br />Work
            </h2>
            <p className="text-zinc-600 dark:text-white/40 text-base max-w-sm leading-relaxed">
              Complex technical challenges turned into scalable digital reality.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ tag, title, desc, accent }, i) => (
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
                      background: `linear-gradient(135deg, transparent 30%, ${accent}25 50%, transparent 70%)`,
                    }}
                  />

                  <div className="relative h-full flex flex-col justify-between p-8">
                    <div className="flex-1 flex items-end">
                      <h3 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white group-hover:opacity-0 group-hover:-translate-y-4 transition-all duration-500">
                        {title}
                      </h3>
                    </div>

                    <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <div className="mb-8">
                        <span
                          className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-4 inline-block px-3 py-1 rounded-full transition-all duration-500"
                          style={{ color: accent, background: `${accent}15` }}
                        >
                          {tag}
                        </span>
                        <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-3">{title}</h3>
                        <p className="text-zinc-600 dark:text-white/50 text-sm sm:text-base leading-relaxed max-w-sm">{desc}</p>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-500 dark:text-white/40 group-hover:text-zinc-900 dark:group-hover:text-white/85 group-hover:gap-3 transition-all duration-500 text-sm font-medium mt-auto">
                        Read Case Study
                        <ArrowUpRight
                          size={14}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
