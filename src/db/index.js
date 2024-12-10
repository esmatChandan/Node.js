import mongoose from "mongoose";
// import { DB_NAME } from "../constants";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGODB}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`\nMongoDb connected! DB host: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
