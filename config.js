const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected!");
  } catch {
    console.log("Connection Failed!");
  }
};
module.exports= connectDB;
