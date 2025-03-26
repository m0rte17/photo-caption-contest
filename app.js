// Import of required modules
const express = require('express');
const path = require('path');
const imageRoutes = require('./routes/imageRoutes');

const app = express();

// Middleware for JSON processing
app.use(express.json());

// Static file serving (for image files in public/images)
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// API routes for images and captions
app.use('/api/images', imageRoutes);

// Root test route
app.get('/', (req, res) => {
  res.send('Photo Caption Contest API is running!');
});

// Server startup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
