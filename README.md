# Photo Caption Contest API

A full-featured backend API for a photo caption contest platform. Users can register, log in, browse images, and submit funny captions. Built with **Node.js**, **Express**, **Sequelize**, and **PostgreSQL**.

---

## 🚀 Live API on Render

> Base URL: `https://photo-caption-contest-sgj7.onrender.com`

- Swagger Docs: `https://photo-caption-contest-sgj7.onrender.com/api-docs`
- Static Images: `https://photo-caption-contest-sgj7.onrender.com/images/image1.jpg`

---

## 📦 Technologies Used

- Node.js / Express
- PostgreSQL + Sequelize ORM
- JWT Authentication (with bcrypt)
- node-cache (for caching)
- Swagger (OpenAPI documentation)
- Render (for deployment)

---

## 📂 Project Structure

```
├── app.js
├── models/
├── routes/
├── controllers/
├── services/
├── middleware/
├── seeders/
├── migrations/
├── public/images/
├── config/config.js
├── swagger.json
└── .env
```

---

## 🧑‍💻 Getting Started Locally

### 1. Clone repo and install deps
```bash
git clone https://github.com/your-username/photo-caption-contest.git
cd photo-caption-contest
npm install
```

### 2. Setup `.env`
```
DB_USER=youruser
DB_PASSWORD=yourpassword
DB_NAME=yourdb
DB_HOST=localhost
JWT_SECRET=your_jwt_secret
```

### 3. Run migrations and seeders
```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### 4. Start server
```bash
npm start
```

Server will run on `http://localhost:3000`

---

## 🔐 API Authentication

### 🔑 Register:
`POST /api/auth/register`
```json
{
  "username": "demo",
  "email": "demo@example.com",
  "password": "password123"
}
```

### 🔑 Login:
`POST /api/auth/login`
```json
{
  "email": "demo@example.com",
  "password": "password123"
}
```

Response includes a `token`, which must be sent in the `Authorization` header for protected routes:
```
Authorization: Bearer <token>
```

---

## 📸 Image Endpoints

- `GET /api/images` → All images
- `GET /api/images/:id` → Single image with captions
- `POST /api/images/:id/captions` → Add caption (auth required)

---

## 🧪 Seed Users

| Email              | Password     |
|-------------------|--------------|
| demo@example.com  | password123  |
| meme@example.com  | password123  |

---

## 📚 API Docs

You can explore and test all endpoints at:
```
https://<your-app-name>.onrender.com/api-docs
```

---

## 🛠 Deployment

This app is deployed on **Render**:
- Database: PostgreSQL (managed by Render)
- Web Service: Node.js with build command:

```bash
npm install && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all
```

---

## ✨ Future Plans

- Frontend SPA (React)
- Voting system for captions
- Admin dashboard for moderation

---

## 📄 License
MIT
