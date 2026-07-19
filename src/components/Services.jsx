import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

const services = [
  {
    title: 'Strategy',
    description: 'We combine customer insight with market expertise to shape strategies that move businesses forward.',
    skills: ['Research', 'Product Strategy', 'Digital Transformation', 'Technical Strategy', 'Architecture Planning'],
    gradient: 'linear-gradient(180deg, rgba(36,0,122,0.85) 4%, rgba(210,148,198,0.2) 100%)',
    badge: 'Strategic'
  },
  {
    title: 'Design',
    description: 'We design digital experiences where every interaction builds trust, strengthens brands, and creates lasting impact.',
    skills: ['Experience Design', 'Interaction Design', 'Design Systems', 'Brand Extension', 'Content Design'],
    gradient: 'linear-gradient(180deg, rgba(16,37,122,0.85) 4%, rgba(0,166,255,0.2) 100%)',
    badge: 'UI/UX'
  },
  {
    title: 'Build',
    description: 'We turn ambitious ideas into digital products and platforms that are built to perform, adapt, and scale.',
    skills: ['Full-Stack Engineering', 'Mobile Apps', 'Web Dev', 'Solution Architecture', 'Integrations'],
    gradient: 'linear-gradient(180deg, rgba(62,10,122,0.85) 4%, rgba(255,82,183,0.2) 100%)',
    badge: 'Engineering'
  },
  {
    title: 'Grow',
    description: 'We bring strategy, technology, and insight together to create sustainable business growth.',
    skills: ['Growth Strategy', 'Data & Analytics', 'SEO', 'CRM & Monetization', 'Experimentation'],
    gradient: 'linear-gradient(180deg, rgba(36,0,122,0.85) 4%, rgba(210,148,198,0.2) 100%)',
    badge: 'Growth'
  },
  {
    title: 'Artificial Intelligence',
    description: 'We turn AI into practical solutions that automate work, improve decisions, and unlock new opportunities.',
    skills: ['AI Consulting', 'LLMs', 'Workflow Automation', 'Implementation', 'AI-Driven UX'],
    gradient: 'linear-gradient(180deg, rgba(16,37,122,0.85) 4%, rgba(0,166,255,0.2) 100%)',
    badge: 'AI & ML'
  },
  {
    title: 'Scale',
    description: 'We become an extension of your team, bringing the expertise and capacity to help you scale with confidence.',
    skills: ['Team Augmentation', 'Dedicated Pods', 'White-Label Engineering', 'Agile Delivery'],
    gradient: 'linear-gradient(180deg, rgba(62,10,122,0.85) 4%, rgba(255,82,183,0.2) 100%)',
    badge: 'Delivery'
  },
]

export default function Services({ teaser = false }) {
  const displayedServices = teaser ? services.slice(0, 3) : services

  return (
    <section id="services" className="relative bg-transparent dark:bg-transparent py-24 transition-colors duration-500 overflow-hidden">

      <div className="relative z-10 max-w-[90rem] mx-auto px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-white/10 pb-12">
            <div>
              <p className="text-violet-400 font-bold uppercase tracking-widest text-xs mb-3">Expertise</p>
              <h2 className="preset-h2 font-bold text-white tracking-tight">
                Built on Mastery.<br />Delivered with Precision.
              </h2>
            </div>
            <p className="text-white/50 text-base max-w-sm leading-relaxed preset-body-m">
              From workflow automation, to rapid prototyping, to previously unthinkable experiences, we build products that move fast and ship right.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map(({ title, description, skills, gradient, badge }, i) => (
            <Reveal key={title} delay={i * 100} direction="up">
              <div className="group relative min-h-[520px] rounded-3xl bg-transparent overflow-hidden flex flex-col justify-center items-center p-8 transition-all duration-500 hover:scale-[1.02] transform-gpu cursor-pointer">
                {/* Dynamic animated sprite gradient background placeholder */}
                <div 
                  className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-50"
                  style={{ background: gradient }}
                />
                
                {/* ===== Content — always bottom-left ===== */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
                  {/* Badge — always visible */}
                  <span className="self-start px-3.5 py-1 rounded-full text-xs font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/20 uppercase tracking-wider mb-4">
                    {badge}
                  </span>

                  {/* Title — always visible */}
                  <h3 className="preset-h2 text-white font-bold mb-0 transition-all duration-500 group-hover:text-2xl group-hover:mb-3">{title}</h3>

                  {/* Details — hidden by default, revealed on hover */}
                  <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-out group-hover:max-h-[300px] group-hover:opacity-100">
                    <p className="preset-body-s text-white/60 mb-5 leading-relaxed">{description}</p>
                    
                    {/* Skill list */}
                    <div className="border-t border-white/10 pt-4 flex flex-wrap gap-x-3 gap-y-2">
                      {skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="text-xs font-semibold text-white/40 hover:text-white transition-colors"
                        >
                          {skill}{idx < skills.length - 1 && '  ·'}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Explore Our Expertise Footer teaser matching fueled.com layout */}
        {teaser && (
          <div className="mt-16 flex justify-center">
            <Reveal delay={200}>
              <Link 
                to="/services"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black hover:bg-violet-500 hover:text-white hover:scale-105 font-bold transition-all duration-300"
              >
                <span>What We Can Do</span>
                <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  )
}
