const mongoose = require("mongoose");
require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://shoppify:shoppify12@cluster0.pbjyh.mongodb.net/nomidb?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`db is connected over ${conn.connection.host}`.bgBlue.white);
  } catch (error) {
    console.log(`db is not connected ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
