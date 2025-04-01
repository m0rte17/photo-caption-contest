const express = require('express');
const app = express();
const path = require('path');
const imageRoutes = require('./routes/imageRoutes');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const captionRoutes = require('./routes/captionRoutes');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

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

// API Routes
app.use('/images', imageRoutes);
app.use('/auth', authRoutes);
app.use('/captions', captionRoutes);

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Make the public folder accessible to the client
app.use('/public', express.static(path.join(__dirname, 'public')));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API Documentation available at http://localhost:${PORT}/api-docs`);
});
