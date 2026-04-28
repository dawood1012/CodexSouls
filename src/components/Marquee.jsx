const companies = [
  'Compass', 'Stripe', 'Figma', 'Google', 'Microsoft', 'Vercel',
  'Notion', 'Slack', 'Airbnb', 'Shopify', 'Tesla', 'Netflix',
  'Spotify', 'Discord', 'Canva', 'Uber',
]

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-transparent dark:bg-black py-16 transition-colors duration-500">
      {/* Light mode subtle tint */}
      <div
        className="absolute inset-0 pointer-events-none dark:hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(110, 91, 255, 0.06) 0%, transparent 60%)',
        }}
      />
      {/* Dark mode tint */}
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{
          background: 'linear-gradient(180deg, rgba(110, 91, 255, 0.15) 0%, transparent 50%)',
        }}
      />

      <div className="relative overflow-hidden">
        <div
          className="flex gap-8 whitespace-nowrap"
          style={{ animation: 'scroll-left 40s linear infinite' }}
        >
          {[...companies, ...companies].map((company, i) => (
            <span key={i} className="inline-flex items-center gap-8 shrink-0">
              <span className="text-2xl font-bold tracking-widest uppercase text-zinc-900 dark:text-white">
                {company}
              </span>
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#6e5bff' }} />
            </span>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white dark:from-black to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white dark:from-black to-transparent z-20" />

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
