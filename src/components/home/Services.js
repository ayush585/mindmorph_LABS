import Card from '../ui/Card'

export default function Services() {
  const services = [
    {
      title: "AI Neural Systems",
      description: "Advanced neural networks pushing the boundaries of machine intelligence",
      icon: "🧠"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation computing solutions for complex problems",
      icon: "⚛️"
    },
    {
      title: "Neural Interface",
      description: "Bridging human cognition with artificial intelligence",
      icon: "🔮"
    }
  ]

  return (
    <section className="py-20 bg-cyber-black relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid grid-cols-8 gap-1 opacity-10">
        {[...Array(64)].map((_, i) => (
          <div key={i} className="h-16 bg-neon-blue/20 animate-pulse" 
               style={{ animationDelay: `${i * 0.1}s` }}></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 cyber-gradient">
          Advanced Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              title={service.title}
              description={service.description}
              className="transform hover:-translate-y-2 transition-transform"
            >
              <div className="text-4xl mb-4 animate-float">{service.icon}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
