const mongoose = require("mongoose");

app.get("/debug-db", async (req, res) => {
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
      collections: result,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});