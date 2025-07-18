import Card from '@/components/ui/Card'

export default function Services() {
  const services = [
    {
      title: "AI Consulting",
      description: "Strategic guidance for AI implementation",
      details: "Comprehensive analysis and roadmap development"
    },
    {
      title: "Machine Learning Solutions",
      description: "Custom ML model development",
      details: "From data preparation to deployment"
    },
    {
      title: "Data Analytics",
      description: "Advanced analytics solutions",
      details: "Turn your data into actionable insights"
    }
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  )
}
