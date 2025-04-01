const express = require('express');
const app = express();
const path = require('path');
const imageRoutes = require('./routes/imageRoutes');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const helmet = require('helmet');


// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Express server is running' });
});

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
  }));
app.use(helmet());
app.use(express.json({ limit: '10kb' }));
app.use('/images', imageRoutes);

app.use('/auth', authRoutes);

// Make the public folder accessible to the client
app.use('/public', express.static(path.join(__dirname, 'public')));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
