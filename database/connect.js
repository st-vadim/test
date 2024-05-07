const mongoose = require("mongoose");
console.log("dev2");

const DB_URL = "mongodb://localhost:27017/pindie";

async function connectToDatabase() {
  try {
    await mongoose.connect(DB_URL);
    console.log("Good connect to MongoDB");
  } catch (err) {
    console.log("Error connect to MonoDB");
    console.error(err);
  }
}

module.exports = connectToDatabase;
