require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const path = require('path');

const app = express();

// Serve static files (index.html and config.js)
app.use(express.static(path.join(__dirname)));

// API to provide the secret key
app.get('/api/get-secret-key', (req, res) => {
    const secretKey = process.env.MY_SECRET_KEY || 'default-secret-key';
    res.json({ secretKey });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
