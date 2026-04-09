import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to db");
  } catch (err) {
    console.log("connection to db failed", err);
    process.exit(1);
  }
};

export default connectDb;
