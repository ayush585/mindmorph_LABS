export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;
    
    // Here you could:
    // 1. Send an email
    // 2. Store in database
    // 3. Forward to another service
    
    // For now, just logging
    console.log('Contact form submission:', { name, email, message });

    return res.status(200).json({ message: 'Message received successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error processing message' });
  }
}
