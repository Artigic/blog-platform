# ✏️ Doodle Blog Platform

A full-stack blogging platform built using React, Node.js, Express, and MongoDB. Users can register, log in, create blog posts, and interact through comments in a fun doodle-themed interface.

---

## 🚀 Features

### Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes

### Blog Posts
- Create Posts
- View All Posts
- View Single Post
- Edit Posts (Backend)
- Delete Posts (Backend)

### Comments
- Add Comments
- View Comments
- User Interaction

### UI
- Doodle Theme Design
- Responsive Layout
- Handwritten Style Interface
- Notebook-Inspired Design

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- cors

---

## 📂 Project Structure

```text
blog-platform/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   │
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/blog-platform.git
cd blog-platform
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
```

Start backend:

```bash
npm run dev
```

Expected Output:

```text
MongoDB Connected
Server running on port 5000
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## 🔗 API Endpoints

### Authentication

| Method | Endpoint | Description |
|----------|------------|------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

### Posts

| Method | Endpoint | Description |
|----------|------------|------------|
| GET | /api/posts | Get All Posts |
| GET | /api/posts/:id | Get Single Post |
| POST | /api/posts | Create Post |
| PUT | /api/posts/:id | Update Post |
| DELETE | /api/posts/:id | Delete Post |

### Comments

| Method | Endpoint | Description |
|----------|------------|------------|
| GET | /api/comments/:postId | Get Comments |
| POST | /api/comments/:postId | Add Comment |

---

## 📸 Screenshots

### Home Page
_Add screenshot here_

### Login Page
_Add screenshot here_

### Register Page
_Add screenshot here_

### Post Details Page
_Add screenshot here_

---

## 🎯 Internship Task Requirements Completed

- ✅ User Registration
- ✅ User Login & Authentication
- ✅ Create Blog Posts
- ✅ Edit/Delete Blog Posts
- ✅ Comment System
- ✅ RESTful APIs
- ✅ MongoDB Integration
- ✅ Responsive Frontend

---

## 👨‍💻 Author

**Adarsh Galkar**

Built as a Full Stack Development Internship Assignment.

---

## 📄 License

This project is for educational and internship evaluation purposes.
