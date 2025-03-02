import Card from '../ui/Card'

export default function CaseStudies() {
  const cases = [
    {
      title: "AI Image Generator",
      description: "Advanced computer vision system capable of generating hyper-realistic images and art from text descriptions. Utilizing cutting-edge GAN architecture with 99.8% accuracy in style reproduction.",
      industry: "Computer Vision / GAN",
      icon: "🎨",
      techStack: "PyTorch, STABLE-DIFFUSION Architecture, StyleGAN3"
    },
    {
      title: "AI Scam Detector",
      description: "Real-time scam detection system using advanced NLP to identify fraudulent patterns in text and voice communications. Successfully prevented $2M in potential fraud attempts.",
      industry: "NLP / Security",
      icon: "🛡️",
      techStack: "Transformer Architecture, MindmorphNLP"
    }
  ]

  return (
    <section className="py-20 bg-cyber-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="matrix-grid h-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 cyber-gradient">
          Laboratory Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((case_, index) => (
            <Card
              key={index}
              title={case_.title}
              description={case_.description}
              subtitle={`${case_.industry} | ${case_.techStack}`}
              className="hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl cyber-text">{case_.icon}</div>
                <div className="text-xs text-neon-blue border border-neon-blue/30 rounded-full px-3 py-1">
                  ACTIVE PROJECT
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
