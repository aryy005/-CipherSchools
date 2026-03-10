const mongoose = require("mongoose");

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000
    });

    console.log("MongoDB Atlas Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connectMongo;