# 🛒 ShopNest - Full Stack MERN E-Commerce Platform

Developed by **Sarthak Chopde**

ShopNest is a full-stack E-Commerce web application developed using the MERN stack. It provides a complete online shopping experience with secure authentication, product management, shopping cart functionality, order management, cloud-based image uploads, and Razorpay payment integration.

---

# 🚀 Features

## User Features

- User Registration & Login
- JWT Authentication
- Browse Products
- Product Details
- Add to Cart
- Shopping Cart Management
- Checkout
- Razorpay Payment Integration
- Order History
- User Profile

---

## Admin Features

- Admin Dashboard
- Add Products
- Update Products
- Delete Products
- Upload Product Images
- Manage Orders

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Redux Toolkit
- Context API
- CSS3

## Backend

- Node.js
- Express.js
- JWT Authentication
- bcryptjs
- Multer

## Database

- MongoDB
- Mongoose

## Cloud Services

- Cloudinary (Image Upload)

## Payment Gateway

- Razorpay Test Mode

---

# 📂 Project Structure

```
shopnest-ecom-MERN-master
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── server.js
│
├── frontend
│   ├── public
│   ├── src
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone <repository-url>
```

---

## 2. Install Dependencies

### Root

```bash
npm install
```

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd frontend
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/shopnest

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret

NODE_ENV=development
```

Create a `.env` file inside the `frontend` folder.

```env
REACT_APP_RAZORPAY_KEY_ID=your_razorpay_key
```

---

# 🌱 Seed Database

```bash
cd backend

npm run seed
```

Default Admin Account

```
Email:
admin@shopnest.com

Password:
password123
```

---

# ▶️ Run the Project

## Start Backend

```bash
cd backend

npm run dev
```

## Start Frontend

```bash
cd frontend

npm start
```

---

# 💳 Payment

This project uses **Razorpay Test Mode** for payment integration.

Use Razorpay test credentials/cards for testing payments.

---

# ☁️ Cloudinary

Cloudinary is used for uploading and managing product images.

---

# 📦 Main Modules

- Authentication
- Product Management
- Shopping Cart
- Checkout
- Payment Integration
- Order Management
- User Profile
- Admin Dashboard

---

# 🔒 Authentication

- JSON Web Token (JWT)
- Protected Routes
- Role-based Authorization (Admin/User)

---

# 👨‍💻 Developer

**Sarthak Chopde**

B.Tech Computer Science & Engineering

Java Full Stack & MERN Stack Developer

---

# 📜 License

This project is developed for educational and portfolio purposes.