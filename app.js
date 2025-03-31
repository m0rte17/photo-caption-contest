const express = require('express');
const app = express();
const path = require('path');
const imageRoutes = require('./routes/imageRoutes');

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Express server is running' });
});

app.use(express.json());
app.use('/images', imageRoutes);


// Make the public folder accessible to the client
app.use('/public', express.static(path.join(__dirname, 'public')));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
