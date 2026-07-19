export default function VideoBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black pointer-events-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-90 mix-blend-screen contrast-125 saturate-[1.5] filter"
      >
        <source src={`${import.meta.env.BASE_URL}planet.mp4`} type="video/mp4" />
        <source src="https://fueled.com/wp-content/uploads/2025/05/Planet-BG-Large_1080.mp4" type="video/mp4" />
      </video>
      
      {/* 
        Gradient overlay to ensure text remains readable and the video 
        feels like a deep, subtle premium background.
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80" />
    </div>
  )
}
