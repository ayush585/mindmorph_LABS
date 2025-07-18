import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="bg-cyber-black/80 backdrop-blur-md border-b border-neon-blue/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl cyber-gradient">
            Mindmorph Labs
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Research', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-gray-300 hover:text-neon-blue transition-colors"
              >
                {item}
              </Link>
            ))}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-cyber-dark border border-neon-blue/20 
                       hover:border-neon-blue/100 transition-all duration-300"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
          </div>

          <button 
            className="md:hidden text-neon-blue"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {['Home', 'About', 'Services', 'Research', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-neon-blue transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
