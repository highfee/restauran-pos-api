import mongoose from "mongoose";

const MONGODB_URI = "mongodb://127.0.0.1:27017/restaurant_pos_beebee";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`.red.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
