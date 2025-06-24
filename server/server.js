// server/index.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Example route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Add this route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
