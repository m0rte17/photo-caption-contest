# Photo Caption Contest API

A RESTful API for a photo caption contest application where users can view images, add captions, and interact with other users' captions.

## Features

- User authentication (register, login, logout)
- Image management (view all images, view single image with captions)
- Caption management (add, update, delete captions)
- Session-based authentication
- API documentation with Swagger UI
- Secure password handling
- Input validation

## Tech Stack

- Node.js
- Express.js
- PostgreSQL with Sequelize ORM
- Express Session for authentication
- Swagger UI for API documentation
- Helmet for security headers

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd photo-caption-contest
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
PORT=3000
SESSION_SECRET=your_session_secret
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
DB_HOST=localhost
```

4. Set up the database:
```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

## Running the Application

1. Start the server:
```bash
npm start
```

2. The server will start on http://localhost:3000
3. API documentation will be available at http://localhost:3000/api-docs

## API Endpoints

### Authentication
- POST `/auth/register` - Register a new user
- POST `/auth/login` - Login user
- POST `/auth/logout` - Logout user

### Images
- GET `/images` - Get all images
- GET `/images/:id` - Get specific image with captions

### Captions
- POST `/images/:id/captions` - Add caption to image
- PUT `/captions/:captionId` - Update caption
- DELETE `/captions/:captionId` - Delete caption

For detailed API documentation, please visit the Swagger UI endpoint at `/api-docs` when the server is running.

## Authentication

The API uses session-based authentication. After successful login, a session cookie will be set that needs to be included in subsequent requests to protected endpoints.

## Error Handling

The API returns appropriate HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## Development

### Database Migrations

To create a new migration:
```bash
npx sequelize-cli migration:generate --name migration-name
```

To run migrations:
```bash
npx sequelize-cli db:migrate
```

To undo migrations:
```bash
npx sequelize-cli db:migrate:undo
```

### Testing

Run tests with:
```bash
npm test
```

## Security

The application implements several security measures:
- Password hashing using bcrypt
- Session-based authentication
- Helmet for HTTP headers security
- Input validation and sanitization
- CORS protection
- Request rate limiting

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Project Link: [https://github.com/yourusername/photo-caption-contest](https://github.com/yourusername/photo-caption-contest)

## Acknowledgments

- Express.js documentation
- Sequelize documentation
- Swagger UI
- OpenAPI Specification 