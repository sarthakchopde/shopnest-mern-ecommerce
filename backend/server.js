const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app = express();

// CORS
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    process.env.FRONTEND_URL
  ],
  credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/payment', require('./routes/paymentRoutes'));
app.use('/api/analytics', require('./routes/analyticsRoutes'));

// DEBUG ROUTE
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

// Root Route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: '🚀 ShopNest Backend API is Running Successfully!',
    environment: process.env.NODE_ENV
  });
});

// 404
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