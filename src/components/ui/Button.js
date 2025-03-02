export default function Button({ children, variant = 'cyber', ...props }) {
  const variants = {
    cyber: 'bg-transparent neon-border text-neon-blue hover:bg-neon-blue hover:text-cyber-black transition-all duration-300',
    solid: 'bg-neon-purple text-white hover:bg-neon-pink transition-colors',
    outline: 'border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-cyber-black'
  }

  return (
    <button 
      className={`px-6 py-3 rounded-lg font-medium ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  )
}
