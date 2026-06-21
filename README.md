# 🚀 Personal Portfolio Website

A modern, responsive, and full-stack Portfolio Website built using React.js, Node.js, Express.js, and Supabase. The application showcases my skills, projects, experience, certifications, and achievements while providing an integrated Admin Dashboard to manage contact form submissions.

---

## 📖 Overview

This portfolio website serves as a professional platform to showcase:

* Personal Information
* Technical Skills
* Experience
* Projects
* Certifications
* Contact Information

The application also includes an Admin Dashboard that allows administrators to view and manage contact messages submitted through the website.

---

## ✨ Features

### 🌐 Portfolio Website

* Responsive Design
* Modern UI/UX
* Hero Section
* About Me Section
* Skills Showcase
* Experience Timeline
* Projects Gallery
* Certifications Section
* Contact Form
* Smooth Navigation
* Mobile-Friendly Layout

### 🔐 Admin Dashboard

* Secure Admin Login
* Protected Routes
* Contact Message Management
* Search Messages
* Filter Messages
* Export Data
* Dashboard Analytics

### 📧 Contact System

* Form Validation
* API Integration
* Database Storage
* Success/Error Notifications

---

## 🛠️ Technologies Used

### Frontend

* React.js
* React Router DOM
* Tailwind CSS
* React Icons
* React Hot Toast
* Axios
* Framer Motion
* Lucide React

### Backend

* Node.js
* Express.js
* JWT Authentication
* Bcrypt.js
* Nodemailer

### Database

* Supabase PostgreSQL

### Development Tools

* Git
* GitHub
* Vite
* VS Code
* Postman

---

## 🧠 Concepts Implemented

### Frontend Concepts

* Component-Based Architecture
* React Hooks
* State Management
* Conditional Rendering
* Form Validation
* Responsive Design
* API Integration
* Protected Routes

### Backend Concepts

* REST API Development
* Authentication & Authorization
* Middleware
* Error Handling
* Environment Variables
* MVC Architecture

### Database Concepts

* CRUD Operations
* Relational Database Design
* Data Validation
* Data Persistence

### Security Concepts

* JWT Authentication
* Password Encryption
* Protected Routes
* Secure Environment Variables

---

## 🏗️ System Architecture

```text
User
 │
 ▼
React Frontend
 │
 ▼
REST API
(Node + Express)
 │
 ▼
Supabase Database
 │
 ▼
Admin Dashboard
```

---

## 🔄 Project Workflow

### User Workflow

1. User visits portfolio website.
2. User explores skills and projects.
3. User fills the contact form.
4. Frontend validates the form.
5. Request sent to backend API.
6. Backend processes data.
7. Data stored in Supabase.
8. Success response displayed.

### Admin Workflow

1. Admin logs into dashboard.
2. JWT token generated.
3. Protected route verification.
4. Dashboard access granted.
5. Contact messages fetched.
6. Admin can search, filter, and manage messages.

---

## 📋 Prerequisites

Before running this project, install:

* Node.js (v18+ Recommended)
* npm
* Git
* VS Code
* Supabase Account

Verify installation:

```bash
node -v
npm -v
git --version
```

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/madhan90258/Potfolio.git
cd Potfolio
```

---

## Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

### Install Dependencies

```bash
npm install
```

### Or Install Individually

```bash
npm install react-router-dom
npm install axios
npm install react-icons
npm install react-hot-toast
npm install framer-motion
npm install lucide-react
```

### Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Run Frontend

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## Backend Setup

Navigate to backend folder:

```bash
cd backend
```

### Install Dependencies

```bash
npm install express cors dotenv
npm install jsonwebtoken bcryptjs
npm install nodemailer
npm install @supabase/supabase-js
```

### Install Development Dependency

```bash
npm install -D nodemon
```

### Run Backend

```bash
npm run dev
```

Backend URL:

```text
http://localhost:5000
```

---

## ⚡ Complete Installation Commands

### Frontend

```bash
npm install react-router-dom axios react-icons react-hot-toast framer-motion lucide-react
npm install -D tailwindcss postcss autoprefixer
```

### Backend

```bash
npm install express cors dotenv jsonwebtoken bcryptjs nodemailer @supabase/supabase-js
npm install -D nodemon
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key

JWT_SECRET=your_jwt_secret

EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

---

## 📚 Major Dependencies

### Frontend

```json
{
  "react": "^18.x",
  "react-router-dom": "^6.x",
  "axios": "^1.x",
  "react-icons": "^5.x",
  "react-hot-toast": "^2.x",
  "framer-motion": "^11.x",
  "lucide-react": "^0.x",
  "tailwindcss": "^3.x"
}
```

### Backend

```json
{
  "express": "^4.x",
  "cors": "^2.x",
  "dotenv": "^16.x",
  "jsonwebtoken": "^9.x",
  "bcryptjs": "^3.x",
  "nodemailer": "^7.x",
  "@supabase/supabase-js": "^2.x",
  "nodemon": "^3.x"
}
```

---

## 📂 Folder Structure

```text
Potfolio
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── README.md
└── package-lock.json
```

---

## 🔌 API Endpoints

### Contact Routes

```http
POST   /api/contact
GET    /api/contact
DELETE /api/contact/:id
```

### Authentication Routes

```http
POST /api/auth/login
POST /api/auth/logout
```
---

## 🚀 Future Enhancements

* Dark/Light Theme Toggle
* Blog Management System
* Resume Download Analytics
* Email Notification System
* AI Assistant Integration
* Project CMS
* Visitor Analytics Dashboard

---

## 👨‍💻 Author

**Madhan Raj**

Computer Science Engineering Student

Meenakshi College of Engineering

2023 – 2027

### Connect With Me

GitHub:
https://github.com/madhan90258

LinkedIn:
(Add Your LinkedIn URL)

Portfolio:
(Add Live Portfolio URL)

Email:
(Add Professional Email)

---

## ⭐ Support

If you like this project:

⭐ Star this repository

🍴 Fork this repository

📢 Share it with others

---

## 📜 License

This project is licensed under the MIT License.

---

### "Building innovative solutions through Full Stack Development and AI."
