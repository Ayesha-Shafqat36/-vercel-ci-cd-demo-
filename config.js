const express = require('express');
const app = express();

app.get('/api/get-secret-key', (req, res) => {
    res.json({ secretKey: process.env.MY_SECRET_KEY });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
