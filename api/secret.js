export default function handler(req, res) {
    res.status(200).json({ secretKey: process.env.MY_SECRET_KEY });
  }
  