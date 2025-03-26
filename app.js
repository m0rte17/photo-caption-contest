const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');

const imageRoutes = require('./routes/imageRoutes');
const authRoutes = require('./routes/authRoutes');

const swaggerDocument = JSON.parse(fs.readFileSync('./swagger.json', 'utf8'));

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/images', imageRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Photo Caption Contest API is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
