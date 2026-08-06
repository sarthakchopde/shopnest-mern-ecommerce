const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("==================================");
    console.log("MongoDB Host:", conn.connection.host);
    console.log("MongoDB Database:", conn.connection.name);
    console.log("MongoDB ReadyState:", conn.connection.readyState);
    console.log("==================================");

  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;