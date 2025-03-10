import { useState } from 'react'
import Button from '@/components/ui/Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to send message');

      setFormData({ name: '', email: '', message: '' });
      setStatus('Message sent successfully! We will get back to you soon.');
      setTimeout(() => setStatus(''), 5000);

    } catch (error) {
      setStatus('Error sending message. Please try again.');
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="py-20 bg-cyber-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="matrix-grid h-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 cyber-gradient">Contact Laboratory</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-neon-blue mb-2">Name</label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-cyber-dark border border-neon-blue/30 rounded-lg 
                         text-white focus:border-neon-blue/100 transition-all"
                required
              />
            </div>
            
            <div>
              <label className="block text-neon-blue mb-2">Email</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            <div>
              <label className="block text-neon-blue mb-2">Email</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-cyber-dark border border-neon-blue/30 rounded-lg 
                         text-white focus:border-neon-blue/100 transition-all"
                required
              />
            </div>
            
            <div>
              <label className="block text-neon-blue mb-2">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-cyber-dark border border-neon-blue/30 rounded-lg 
                         text-white focus:border-neon-blue/100 transition-all"
                rows="6"
                required
              ></textarea>
            </div>

            {status && (
              <div className={`p-4 rounded-lg ${
                status.includes('Error') 
                  ? 'bg-red-500/20 border border-red-500 text-red-300'
                  : 'bg-green-500/20 border border-green-500 text-green-300'
              }`}>
                {status}
              </div>
            )}
            
            <Button type="submit" variant="cyber">
              Transmit Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
