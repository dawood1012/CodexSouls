import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { posts } from '../data/posts'
import Reveal from './Reveal'

export default function BlogTeaser() {
  const latest = posts.slice(0, 3)

  return (
    <section className="relative bg-transparent dark:bg-black py-32 border-t border-zinc-200/60 dark:border-white/5 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-zinc-200 dark:border-white/8 pb-12">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-zinc-500 dark:text-white/30 mb-4">
                From the Journal
              </p>
              <h2 className="text-5xl sm:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight">
                Ideas &amp;<br />Insights
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-500 dark:text-white/35 hover:text-zinc-900 dark:hover:text-white transition-all duration-300 font-medium hover:gap-3 group"
            >
              All posts <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80} direction="up">
              <Link
                to={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-white/80 dark:bg-zinc-950 backdrop-blur-sm border-2 border-zinc-900/8 dark:border-white/8 rounded-2xl p-8 transition-all duration-500 hover:border-violet-400 dark:hover:border-violet-400/50 offset-card dark:shadow-none cursor-pointer"
              >
                {/* Colored accent line */}
                <div
                  className="h-0.5 w-12 rounded-full mb-6 transition-all duration-500 group-hover:w-20"
                  style={{ background: post.accent }}
                />

                <span
                  className="text-xs font-bold tracking-widest uppercase mb-3 inline-block"
                  style={{ color: post.accent }}
                >
                  {post.category}
                </span>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-white leading-snug mb-3 group-hover:translate-x-1 transition-transform duration-500 flex-1">
                  {post.title}
                </h3>

                <p className="text-sm text-zinc-500 dark:text-white/30 leading-relaxed mb-5 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-zinc-400 dark:text-white/20">{post.readTime}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-400 dark:text-white/25 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:gap-2 transition-all duration-300">
                    Read <ArrowUpRight size={11} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
