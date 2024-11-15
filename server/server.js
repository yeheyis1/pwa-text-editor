const express = require('express');
const path = require('path');

const app = express();

// Middleware for serving static files from the `dist` directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Catch-all route to serve `index.html` for any unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Define the port the server will listen on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
