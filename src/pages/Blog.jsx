import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { posts } from '../data/posts'
import Reveal from '../components/Reveal'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GeometricShapes from '../components/GeometricShapes'

function PostCard({ post, index }) {
  const isFeatured = index === 0
  return (
    <Reveal delay={index * 80} direction="up">
      <Link
        to={`/blog/${post.slug}`}
        className={`group relative flex flex-col bg-white/80 dark:bg-zinc-950 backdrop-blur-sm border-2 border-zinc-900/8 dark:border-white/8 rounded-2xl overflow-hidden transition-all duration-500 hover:border-violet-400 dark:hover:border-violet-400/50 cursor-pointer
          offset-card dark:shadow-none ${isFeatured ? 'md:col-span-2' : ''}`}
      >
        {/* Accent top bar */}
        <div
          className="h-1 w-full transition-all duration-500 group-hover:h-1.5"
          style={{ background: `linear-gradient(90deg, ${post.accent}, transparent)` }}
        />

        <div className={`p-8 flex flex-col flex-1 ${isFeatured ? 'md:p-12' : ''}`}>
          {/* Meta */}
          <div className="flex items-center gap-3 mb-5">
            <span
              className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ color: post.accent, background: `${post.accent}18` }}
            >
              {post.category}
            </span>
            <span className="text-xs text-zinc-400 dark:text-white/25">{post.readTime}</span>
          </div>

          {/* Title */}
          <h2
            className={`font-bold text-zinc-900 dark:text-white leading-tight mb-3 group-hover:translate-x-1 transition-transform duration-500 ${
              isFeatured ? 'text-3xl sm:text-4xl' : 'text-xl'
            }`}
          >
            {post.title}
          </h2>

          {/* Excerpt */}
          <p
            className={`text-zinc-500 dark:text-white/35 leading-relaxed flex-1 mb-6 ${
              isFeatured ? 'text-base max-w-2xl' : 'text-sm'
            }`}
          >
            {post.excerpt}
          </p>

          {/* Footer row */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400 dark:text-white/20">{post.date}</span>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-zinc-500 dark:text-white/30 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:gap-2 transition-all duration-300">
              Read <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  )
}

export default function Blog() {
  useEffect(() => {
    document.title = 'Blog — CodexSouls'
    let metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', 'Insights on AI, web development, mobile apps, and design from the CodexSouls team.')

    // JSON-LD for blog listing
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'blog-jsonld'
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'CodexSouls Blog',
      description: 'Insights on AI, web development, mobile, and design.',
      url: 'https://dawood1012.github.io/CodexSouls/#/blog',
    })
    document.head.appendChild(script)
    return () => {
      document.getElementById('blog-jsonld')?.remove()
    }
  }, [])

  return (
    <div className="min-h-screen bg-transparent dark:bg-black text-black dark:text-white transition-colors duration-500">
      <Navbar />

      <main className="relative pt-40 pb-32 overflow-hidden">
        <GeometricShapes />

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12">
          {/* Header */}
          <Reveal>
            <div className="mb-16 border-b border-zinc-200 dark:border-white/8 pb-12">
              <p className="text-xs font-semibold tracking-widest uppercase text-zinc-500 dark:text-white/30 mb-5">
                Journal
              </p>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <h1 className="text-5xl sm:text-6xl font-bold gradient-text-warm dark:text-white tracking-tight leading-tight">
                  Insights &amp;<br />Thinking
                </h1>
                <p className="text-zinc-500 dark:text-white/35 text-base max-w-xs leading-relaxed">
                  AI, web, mobile, and design — written by the people building it.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Posts grid — first post is featured (spans 2 cols) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
