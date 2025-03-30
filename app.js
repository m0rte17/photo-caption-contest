const express = require('express');
const app = express();

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Express server is running' });
});

// Make the public folder accessible to the client
app.use('/public', express.static(path.join(__dirname, 'public')));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
