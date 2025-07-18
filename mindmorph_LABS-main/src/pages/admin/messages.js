import { useEffect, useState } from 'react'
import { ref, onValue, update } from 'firebase/database'
import { database } from '@/utils/firebase'
import { formatDistanceToNow } from 'date-fns'

export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = ref(database, 'messages');
    
    // Listen for real-time updates
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList = Object.entries(data).map(([id, msg]) => ({
          id,
          ...msg,
        }));
        setMessages(messageList.reverse());
      }
    });

    return () => unsubscribe();
  }, []);

  const markAsRead = async (messageId) => {
    const messageRef = ref(database, `messages/${messageId}`);
    await update(messageRef, { status: 'read' });
  };

  return (
    <div className="p-8 bg-cyber-black min-h-screen">
      <h1 className="text-3xl font-bold mb-8 cyber-gradient">Incoming Messages</h1>
      <div className="space-y-4">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`p-4 rounded-lg border ${
              msg.status === 'unread' 
                ? 'border-neon-blue bg-cyber-dark/50' 
                : 'border-gray-600 bg-cyber-dark/20'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl text-neon-blue">{msg.name}</h3>
              <span className="text-sm text-gray-400">
                {msg.timestamp && formatDistanceToNow(new Date(msg.timestamp))} ago
              </span>
            </div>
            <p className="text-gray-300 mb-2">{msg.email}</p>
            <p className="text-white">{msg.message}</p>
            {msg.status === 'unread' && (
              <button
                onClick={() => markAsRead(msg.id)}
                className="mt-2 text-sm text-neon-blue hover:text-neon-purple"
              >
                Mark as Read
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
