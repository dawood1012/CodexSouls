const companies = [
  'Compass',
  'Stripe',
  'Figma',
  'Google',
  'Microsoft',
  'Vercel',
  'Notion',
  'Slack',
  'Airbnb',
  'Shopify',
  'Tesla',
  'Netflix',
  'Spotify',
  'Discord',
  'Canva',
  'Uber',
]

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-black py-16">
      {/* Gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(110, 91, 255, 0.15) 0%, transparent 50%)',
        }}
      />

      {/* Marquee container */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-8 whitespace-nowrap"
          style={{
            animation: 'scroll-left 40s linear infinite',
          }}
        >
          {[...companies, ...companies].map((company, i) => (
            <span key={i} className="inline-flex items-center gap-8 shrink-0">
              <span className="text-2xl font-bold tracking-widest uppercase text-white">
                {company}
              </span>
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#6e5bff' }} />
            </span>
          ))}
        </div>
      </div>

      {/* Fade overlays */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-20" />

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
