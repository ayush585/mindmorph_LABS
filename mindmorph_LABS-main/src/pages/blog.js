import Card from '@/components/ui/Card'

export default function Blog() {
  const posts = [
    {
      title: "The Future of AI",
      description: "Exploring upcoming AI trends",
      date: "2025-01-20"
    },
    {
      title: "Machine Learning Basics",
      description: "Getting started with ML",
      date: "2025-01-15"
    }
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <Card 
              key={index}
              title={post.title}
              description={post.description}
              subtitle={post.date}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
