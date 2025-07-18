import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MindMorph AI</h3>
            <p className="text-gray-400">Transforming ideas into intelligent solutions</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white">About</Link>
              <Link href="/services" className="block text-gray-400 hover:text-white">Services</Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white">Contact</Link>
            </nav>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <nav className="space-y-2">
              <Link href="/blog" className="block text-gray-400 hover:text-white">Blog</Link>
              <Link href="/use-cases" className="block text-gray-400 hover:text-white">Use Cases</Link>
            </nav>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {year} MindMorph AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
