const mongoose = require("mongoose");
const uri =
  "mongodb+srv://abhishek5soni987:xYgzytV0DgEex68i@cluster1.bfm6kw4.mongodb.net/";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
module.exports = connectDB;
