import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

const projects = [
  {
    tag: 'AI · SaaS',
    title: 'NeuralDesk',
    desc: 'An AI-powered customer support platform that cut response time by 73% for a Series B startup.',
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)',
    accent: '#6E5BFF',
    tags: ['AI-Native', 'Backend', 'Design', 'Research', 'SaaS'],
    logoText: 'NeuralDesk',
    headline: 'We Scaled Automated Customer Support',
  },
  {
    tag: 'Mobile · Fintech',
    title: 'PocketLedger',
    desc: 'A personal finance app with smart spending insights — 50k downloads in the first month.',
    gradient: 'linear-gradient(135deg, #180029 0%, #4c0519 100%)',
    accent: '#FF52B7',
    tags: ['iOS App', 'Branding', 'Mobile Dev', 'Fintech', 'Research'],
    logoText: 'PocketLedger',
    headline: 'We Sparked Mobile Savings Growth',
  },
  {
    tag: 'Web · E-commerce',
    title: 'Versa Store',
    desc: 'Headless commerce platform with sub-second load times and a 3× uplift in conversion.',
    gradient: 'linear-gradient(135deg, #022c22 0%, #064e3b 100%)',
    accent: '#00A6FF',
    tags: ['Backend', 'Commerce', 'Next.js', 'Web Dev', 'SEO'],
    logoText: 'Versa Store',
    headline: 'We Put Headless E-commerce on the Map',
  },
  {
    tag: 'Design · Brand',
    title: 'Luminary OS',
    desc: 'A complete design system and brand identity for a healthcare startup entering 4 new markets.',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
    accent: '#FBBC09',
    tags: ['Design System', 'Brand Identity', 'Healthcare', 'Research'],
    logoText: 'Luminary OS',
    headline: 'We Engineered Healthcare Design Systems',
  },
  {
    tag: 'AI · Productivity',
    title: 'Cortex Notes',
    desc: 'A second-brain note-taking app with AI search — featured on Product Hunt #1 of the week.',
    gradient: 'linear-gradient(135deg, #311042 0%, #030712 100%)',
    accent: '#6E5BFF',
    tags: ['Product Design', 'React Native', 'AI Integration', 'Productivity'],
    logoText: 'Cortex Notes',
    headline: 'We Reimagined Productivity Tools',
  },
  {
    tag: 'Web · Developer Tools',
    title: 'StackForge',
    desc: 'A self-hosted CI/CD platform built for indie teams. Deploys 5× faster than the alternatives.',
    gradient: 'linear-gradient(135deg, #050505 0%, #1e1e24 100%)',
    accent: '#FF52B7',
    tags: ['CI/CD', 'Docker', 'React', 'DevOps', 'Developer Tool'],
    logoText: 'StackForge',
    headline: 'We Accelerated Development Workflows',
  },
]

export default function Work({ teaser = false }) {
  const displayedProjects = teaser ? projects.slice(0, 3) : projects

  return (
    <section id="work" className="bg-transparent dark:bg-transparent py-24 transition-colors duration-500 overflow-hidden">
      <div className="max-w-none w-full mx-auto px-4 lg:px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-zinc-200 dark:border-white/8 pb-12">
            <div>
              <p className="text-violet-500 font-bold uppercase tracking-widest text-xs mb-3">Case Studies</p>
              <h2 className="preset-h2 font-bold text-zinc-900 dark:text-white tracking-tight">
                Selected Work
              </h2>
            </div>
            <p className="text-zinc-600 dark:text-white/40 text-base max-w-sm leading-relaxed preset-body-m">
              Digital agency delivering sharp strategy and precision execution, making an impact.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-12">
          {displayedProjects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100} direction="up">
              <div 
                className="group relative min-h-[500px] rounded-[40px] overflow-hidden flex flex-col justify-center items-center cursor-pointer transition-transform duration-700 hover:scale-[1.02] transform-gpu"
                style={{
                  background: project.gradient,
                }}
              >
                {/* Background Dim Tint overlay */}
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition-all duration-500" />
                
                {/* Interactive gradient glow border decoration */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-violet-500/30 rounded-[40px] transition-all duration-500" />

                {/* Content wrapper — always bottom-left */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-16">

                  {/* Tag — always visible */}
                  <span 
                    className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
                    style={{ color: project.accent }}
                  >
                    {project.tag}
                  </span>

                  {/* Title — always visible */}
                  <h3 
                    className="text-4xl md:text-6xl font-bold tracking-tight mb-0 transition-all duration-500 group-hover:mb-5 group-hover:text-3xl md:group-hover:text-4xl"
                    style={{ color: project.accent }}
                  >
                    {project.logoText}
                  </h3>

                  {/* Details — hidden by default, revealed on hover */}
                  <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-out group-hover:max-h-[400px] group-hover:opacity-100">
                    <h4 className="preset-h4 text-white font-bold mb-3">
                      {project.headline}
                    </h4>

                    <p className="preset-body-m text-white/70 max-w-lg mb-4">
                      {project.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3.5 py-1 rounded-full text-xs font-semibold text-white/50 border border-white/10 group-hover:border-white/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read Case Study Button */}
                    <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-semibold text-sm transition-all duration-300 cursor-pointer">
                      <span>Read Case Study</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Explore Our Work Footer teaser */}
        {teaser && (
          <div className="mt-16 flex justify-center">
            <Reveal delay={200}>
              <Link 
                to="/work"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black/90 dark:bg-white text-white dark:text-black hover:bg-violet-500 dark:hover:bg-violet-500 dark:hover:text-white hover:scale-105 font-bold transition-all duration-300"
              >
                <span>Explore Our Work</span>
                <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  )
}
