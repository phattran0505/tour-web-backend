const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION);
    console.log("connect to database successful");
  } catch {
    console.log("connect failed");
  }
}

module.exports = { connect };
