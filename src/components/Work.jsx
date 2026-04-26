import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import TiltCard from './TiltCard'

const projects = [
  {
    tag: 'AI · SaaS',
    title: 'NeuralDesk',
    desc: 'An AI-powered customer support platform that cut response time by 73% for a Series B startup.',
    bgDark: 'dark:bg-[#0d0d1a]',
    bgLight: 'bg-violet-50',
    accent: '#6e5bff',
  },
  {
    tag: 'Mobile · Fintech',
    title: 'PocketLedger',
    desc: 'A personal finance app with smart spending insights — 50k downloads in the first month.',
    bgDark: 'dark:bg-[#0d0a1a]',
    bgLight: 'bg-purple-50',
    accent: '#a855f7',
  },
  {
    tag: 'Web · E-commerce',
    title: 'Versa Store',
    desc: 'Headless commerce platform with sub-second load times and a 3× uplift in conversion.',
    bgDark: 'dark:bg-[#080d1a]',
    bgLight: 'bg-blue-50',
    accent: '#3b82f6',
  },
  {
    tag: 'Design · Brand',
    title: 'Luminary OS',
    desc: 'A complete design system and brand identity for a healthcare startup entering 4 new markets.',
    bgDark: 'dark:bg-[#080f12]',
    bgLight: 'bg-emerald-50',
    accent: '#10b981',
  },
  {
    tag: 'AI · Productivity',
    title: 'Cortex Notes',
    desc: 'A second-brain note-taking app with AI search — featured on Product Hunt #1 of the week.',
    bgDark: 'dark:bg-[#0a0d18]',
    bgLight: 'bg-amber-50',
    accent: '#f59e0b',
  },
  {
    tag: 'Web · Developer Tools',
    title: 'StackForge',
    desc: 'A self-hosted CI/CD platform built for indie teams. Deploys 5× faster than the alternatives.',
    bgDark: 'dark:bg-[#0e0a14]',
    bgLight: 'bg-pink-50',
    accent: '#ec4899',
  },
]

function ProjectCard({ project, isRight }) {
  const { tag, title, desc, bgDark, bgLight, accent } = project
  return (
    <TiltCard
      className={`relative ${bgLight} ${bgDark} rounded-2xl overflow-hidden cursor-pointer min-h-[420px] transition-colors duration-500`}
      maxTilt={6}
    >
      <div
        className="group relative h-full w-full p-10 flex flex-col justify-between transition-all duration-500"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)' }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"
          style={{
            background: `radial-gradient(circle at ${isRight ? '20%' : '80%'} 20%, ${accent}25 0%, transparent 50%)`,
          }}
        />

        <div className="relative">
          <span
            className="text-xs font-semibold tracking-widest uppercase mb-6 inline-block px-3 py-1 rounded-full transition-all duration-500 group-hover:px-4 group-hover:py-1.5"
            style={{ color: accent, background: `${accent}15` }}
          >
            {tag}
          </span>
          <h3 className="text-3xl font-bold text-black dark:text-white mt-3 mb-4 group-hover:translate-x-1 transition-transform duration-500">
            {title}
          </h3>
          <p className="text-black/55 dark:text-white/40 text-sm leading-relaxed max-w-sm group-hover:text-black/70 dark:group-hover:text-white/55 transition-colors duration-500">
            {desc}
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-2 text-black/40 dark:text-white/25 group-hover:text-black dark:group-hover:text-white/85 group-hover:gap-3 transition-all duration-500 text-sm font-medium">
          Read Case Study
          <ArrowUpRight
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500"
          />
        </div>
      </div>
    </TiltCard>
  )
}

export default function Work() {
  const rows = []
  for (let i = 0; i < projects.length; i += 2) {
    rows.push([projects[i], projects[i + 1]])
  }

  return (
    <section id="work" className="bg-white dark:bg-black py-32 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-black/8 dark:border-white/8 pb-12">
            <h2 className="text-5xl sm:text-6xl font-bold text-black dark:text-white tracking-tight leading-tight max-w-sm">
              Selected<br />Work
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors font-medium hover:gap-3"
            >
              View all projects <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8">
          {rows.map(([left, right], rowIdx) => (
            <div key={rowIdx} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              {left && (
                <Reveal delay={0} direction="right">
                  <ProjectCard project={left} isRight={false} />
                </Reveal>
              )}
              {right && (
                <Reveal delay={150} direction="left">
                  <div className="md:mt-32">
                    <ProjectCard project={right} isRight={true} />
                  </div>
                </Reveal>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
