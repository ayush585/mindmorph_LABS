import Card from '../ui/Card'

export default function Team() {
  const team = [
    {
      name: "Ayushman Mukherjee",
      role: "CEO/Owner",
      bio: "AI/ML specialist, AI officer",
      image: "/team/ayushman.jpg",
      glow: "neon-purple"
    },
    {
      name: "Daniel Pali",
      role: "Co-Founder & JS Expert",
      bio: "SMA Warrior, Chief Technical officer",
      image: "/team/daniel.jpg",
      glow: "neon-blue"
    },
    {
      name: "Debosmita Mallick",
      role: "Assistant CEO",
      bio: "Strategy & Operations Expert",
      image: "/team/debosmita.jpg",
      glow: "neon-pink"
    },
    {
      name: "Arkaprava Chowdhury",
      role: "Chief Designer & Managing Director",
      bio: "PhD in UI/UX",
      image: "/team/arkaprava.jpg",
      glow: "matrix-green"
    }
  ]

  return (
    <section className="py-20 bg-cyber-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="matrix-grid h-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 cyber-gradient">
          Laboratory Personnel
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              title={member.name}
              subtitle={member.role}
              description={member.bio}
              className={`hover:transform hover:scale-105 transition-all duration-300 border-${member.glow}`}
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-neon-blue">
                <div className="w-full h-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-75"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
