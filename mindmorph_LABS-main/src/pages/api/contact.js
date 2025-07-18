import { database } from '@/utils/firebase';
import { ref, push, serverTimestamp } from 'firebase/database';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;
    
    const messagesRef = ref(database, 'messages');
    await push(messagesRef, {
      name,
      email,
      message,
      timestamp: serverTimestamp(),
      status: 'unread'
    });

    return res.status(200).json({ message: 'Message received successfully' });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ message: 'Error processing message' });
  }
}
