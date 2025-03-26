// Import of required modules
const express = require('express');
const path = require('path');
const app = express();

// Middleware for JSON processing
app.use(express.json());

// Distribution of static images
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Test route
app.get('/', (req, res) => {
  res.send('Photo Caption Contest API is running!');
});

// Server startup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

