import { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { getPostBySlug, posts } from '../data/posts'
import Reveal from '../components/Reveal'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Section({ section }) {
  switch (section.type) {
    case 'intro':
      return (
        <p className="text-xl text-zinc-600 dark:text-white/55 leading-relaxed font-light border-l-4 border-violet-500/40 pl-6 my-8">
          {section.text}
        </p>
      )
    case 'heading':
      return (
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-4 leading-tight">
          {section.text}
        </h2>
      )
    case 'text':
      return (
        <p className="text-zinc-600 dark:text-white/50 leading-relaxed text-base mb-6">
          {section.text}
        </p>
      )
    case 'closing':
      return (
        <div className="mt-12 p-8 rounded-2xl border-2 border-violet-500/20 dark:border-violet-400/15 bg-violet-50 dark:bg-violet-500/5">
          <p className="text-zinc-800 dark:text-white/70 leading-relaxed text-base italic font-medium">
            {section.text}
          </p>
        </div>
      )
    default:
      return null
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = getPostBySlug(slug)

  useEffect(() => {
    if (!post) return
    document.title = `${post.title} — CodexSouls`
    let metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', post.excerpt)

    // Open Graph tags
    const setMeta = (property, content, attr = 'property') => {
      let el = document.querySelector(`meta[${attr}="${property}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, property)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
      el.dataset.blogPost = 'true'
    }

    setMeta('og:title', post.title)
    setMeta('og:description', post.excerpt)
    setMeta('og:type', 'article')
    setMeta('og:url', `https://dawood1012.github.io/CodexSouls/#/blog/${slug}`)
    setMeta('article:published_time', new Date(post.date).toISOString(), 'property')
    setMeta('twitter:card', 'summary_large_image', 'name')
    setMeta('twitter:title', post.title, 'name')
    setMeta('twitter:description', post.excerpt, 'name')

    // JSON-LD structured data
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'post-jsonld'
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: new Date(post.date).toISOString(),
      author: { '@type': 'Organization', name: 'CodexSouls' },
      publisher: {
        '@type': 'Organization',
        name: 'CodexSouls',
        url: 'https://dawood1012.github.io/CodexSouls/',
      },
      mainEntityOfPage: `https://dawood1012.github.io/CodexSouls/#/blog/${slug}`,
    })
    document.head.appendChild(script)

    return () => {
      document.getElementById('post-jsonld')?.remove()
      document.querySelectorAll('meta[data-blog-post]').forEach((el) => el.remove())
    }
  }, [post, slug])

  if (!post) {
    return (
      <div className="min-h-screen bg-transparent dark:bg-black flex flex-col items-center justify-center gap-6">
        <p className="text-zinc-400 text-lg">Post not found.</p>
        <Link to="/blog" className="text-violet-500 hover:underline">← Back to Blog</Link>
      </div>
    )
  }

  // Related posts (same category, different slug)
  const related = posts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2)
  const fallbackRelated = posts.filter((p) => p.slug !== slug).slice(0, 2)
  const relatedPosts = related.length ? related : fallbackRelated

  return (
    <div className="min-h-screen bg-transparent dark:bg-black text-black dark:text-white transition-colors duration-500">
      <Navbar />

      <main className="pt-36 pb-32">
        <div className="max-w-3xl mx-auto px-8 lg:px-0">
          {/* Back link */}
          <Reveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-white/30 hover:text-zinc-900 dark:hover:text-white transition-colors mb-10 group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
              All posts
            </Link>
          </Reveal>

          {/* Category + date */}
          <Reveal delay={50}>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                style={{ color: post.accent, background: `${post.accent}18` }}
              >
                {post.category}
              </span>
              <span className="text-xs text-zinc-400 dark:text-white/25">{post.date}</span>
              <span className="text-xs text-zinc-400 dark:text-white/25">·</span>
              <span className="text-xs text-zinc-400 dark:text-white/25">{post.readTime}</span>
            </div>
          </Reveal>

          {/* Title */}
          <Reveal delay={100}>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white leading-tight mb-8">
              {post.title}
            </h1>
          </Reveal>

          {/* Divider */}
          <div className="h-px bg-zinc-200 dark:bg-white/8 mb-12" />

          {/* Content */}
          <Reveal delay={150}>
            <article>
              {post.sections.map((section, i) => (
                <Section key={i} section={section} />
              ))}
            </article>
          </Reveal>

          {/* Author card */}
          <Reveal delay={200}>
            <div className="mt-16 p-6 rounded-2xl bg-white/70 dark:bg-zinc-950 border border-zinc-200 dark:border-white/8 flex items-center gap-5">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold shrink-0"
                style={{ background: `linear-gradient(135deg, ${post.accent}, #6e5bff)` }}
              >
                CS
              </div>
              <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">CodexSouls Team</p>
                <p className="text-xs text-zinc-500 dark:text-white/30 mt-0.5">
                  We build AI, web, mobile &amp; design products that move fast and ship right.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-7xl mx-auto px-8 lg:px-12 mt-24">
            <Reveal>
              <div className="border-t border-zinc-200 dark:border-white/8 pt-16 mb-10">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">More from CodexSouls</h3>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rp, i) => (
                <Reveal key={rp.slug} delay={i * 80}>
                  <Link
                    to={`/blog/${rp.slug}`}
                    className="group flex flex-col bg-white/80 dark:bg-zinc-950 backdrop-blur-sm border-2 border-zinc-900/8 dark:border-white/8 rounded-2xl overflow-hidden transition-all duration-500 hover:border-violet-400 dark:hover:border-violet-400/50 p-8 offset-card dark:shadow-none cursor-pointer"
                  >
                    <div
                      className="h-0.5 w-16 mb-6 rounded-full transition-all duration-500 group-hover:w-24"
                      style={{ background: rp.accent }}
                    />
                    <span
                      className="text-xs font-bold tracking-widest uppercase mb-3 inline-block"
                      style={{ color: rp.accent }}
                    >
                      {rp.category}
                    </span>
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-3 group-hover:translate-x-1 transition-transform duration-500">
                      {rp.title}
                    </h4>
                    <p className="text-sm text-zinc-500 dark:text-white/30 leading-relaxed line-clamp-2 flex-1 mb-4">{rp.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-zinc-400 dark:text-white/25 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:gap-2 transition-all duration-300">
                      Read <ArrowUpRight size={13} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
