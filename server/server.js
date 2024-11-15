const express = require('express');
const path = require('path');
const app = express();

// Serve static files from `dist`
app.use(express.static(path.join(__dirname, '../client/dist')));

// Catch-all route to serve `index.html` for any unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
