const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const connectDB = require('./config/db');

const Product = require('./models/Product');
const User = require('./models/User');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    process.env.FRONTEND_URL
  ],
  credentials: true
}));

app.use(express.json());

// API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/payment', require('./routes/paymentRoutes'));
app.use('/api/analytics', require('./routes/analyticsRoutes'));

// ===============================
// DEBUG DATABASE ROUTE
// ===============================
app.get('/debug-db', async (req, res) => {
  try {
    const db = mongoose.connection.db;

    const collections = await db.listCollections().toArray();

    const result = {};

    for (const collection of collections) {
      result[collection.name] = await db
        .collection(collection.name)
        .countDocuments();
    }

    res.json({
      database: db.databaseName,
      collections: result
    });

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

// ===============================
// TEMPORARY SEED ROUTE
// ===============================
app.get('/seed', async (req, res) => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    const hashedPassword = await bcrypt.hash('password123', 10);

    await User.create({
      name: 'Admin User',
      email: 'admin@shopnest.com',
      password: hashedPassword,
      role: 'admin'
    });

    await Product.insertMany([
      {
        name: 'Wireless Noise-Cancelling Headphones',
        description: 'Immersive sound experience with advanced active noise cancellation.',
        price: 299.99,
        category: 'Electronics',
        stock: 15,
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.8,
        numReviews: 24
      },
      {
        name: 'Minimalist Modern Chair',
        description: 'A stylish and comfortable addition to any contemporary living room.',
        price: 150,
        category: 'Furniture',
        stock: 30,
        imageUrl: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.2,
        numReviews: 12
      },
      {
        name: 'Professional DSLR Camera',
        description: 'Capture stunning moments with high-resolution clarity and speed.',
        price: 1199.99,
        category: 'Electronics',
        stock: 8,
        imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.9,
        numReviews: 50
      },
      {
        name: 'Classic White Sneakers',
        description: 'Versatile and comfortable, a staple for any casual outfit.',
        price: 85,
        category: 'Clothing',
        stock: 50,
        imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.5,
        numReviews: 89
      }
    ]);

    res.json({
      success: true,
      message: 'Database seeded successfully!'
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

// Root Route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: '🚀 ShopNest Backend API is Running Successfully!',
    environment: process.env.NODE_ENV
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'API Route Not Found'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});