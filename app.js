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
const rateLimit = require('express-rate-limit');

// Rate limiting configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes'
});

// Apply rate limiting to all routes
app.use(limiter);

// Auth routes specific limiter
const authLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // Limit each IP to 5 login/register requests per hour
  message: 'Too many authentication attempts, please try again after an hour'
});

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
app.use('/auth', authLimiter, authRoutes); // Apply stricter rate limiting to auth routes
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
