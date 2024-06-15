export default function handler(req, res) {
    if (req.method === 'POST') {
      const metric = req.body;
      console.log('Received metric:', metric);
  
      res.status(200).json({ message: 'Metric received' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  