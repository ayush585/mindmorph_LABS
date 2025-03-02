export default function Card({ 
  title, 
  description, 
  subtitle, 
  className = '', 
  children 
}) {
  return (
    <div className={`relative bg-cyber-dark border border-neon-blue/20 rounded-lg p-6 
      hover:border-neon-blue/100 transition-all duration-300 
      hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] ${className}`}>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neon-blue/5 to-transparent rounded-lg"></div>
      <div className="relative z-10">
        {title && <h3 className="text-xl font-semibold mb-2 text-white cyber-gradient">{title}</h3>}
        {subtitle && <p className="text-sm text-neon-blue mb-2">{subtitle}</p>}
        {description && <p className="text-gray-300">{description}</p>}
        {children}
      </div>
    </div>
  )
}
