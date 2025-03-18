import Button from '../ui/Button'
import SongPlayer from '../home/SongPlayer'

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center matrix-grid">
      <div className="scanline"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-transparent to-cyber-black"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-4">
            <h2 className="text-neon-blue text-xl font-mono">/ / INITIATIVE: MINDMORPH</h2>
            <h1 className="text-6xl sm:text-7xl font-bold cyber-gradient cyber-glow">
              Mindmorph Labs
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Breaking the boundaries between <span className="text-neon-purple">human intelligence</span> and 
              <span className="text-neon-blue"> artificial consciousness</span>
            </p>
          </div>
          
          <div className="flex gap-4">
            <Button variant="cyber">Enter Laboratory</Button>
            <Button variant="cyber-outline">View Research</Button>
          </div>

          <SongPlayer />

          <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
            <svg className="w-6 h-6 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
