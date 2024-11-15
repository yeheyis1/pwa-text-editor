const express = require('express');
const path = require('path');

// Initialize Express app
const app = express();

// Middleware to serve static files from `dist` directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Catch-all route to serve the main `index.html` file for any unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/service-worker.js'));
});

// Define the server port
const PORT = process.env.PORT || 3000;

// Start the server and log the listening URL
app.listen(PORT, () => {
  console.log(`✅ Server is running at: http://localhost:${PORT}`);
});
