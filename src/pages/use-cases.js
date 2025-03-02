import Card from '@/components/ui/Card'

export default function UseCases() {
  const cases = [
    {
      title: "Healthcare AI",
      description: "Predictive analytics in patient care",
      details: "Reduced diagnosis time by 45%"
    },
    {
      title: "Financial Services",
      description: "Fraud detection system",
      details: "99.9% accuracy in fraud detection"
    }
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Use Cases</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((case_, index) => (
            <Card key={index} {...case_} />
          ))}
        </div>
      </div>
    </div>
  )
}
