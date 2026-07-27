import mongoose from "mongoose";

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("mongo db connected");
  } catch (error) {
    console.error("mongo db connection error", error);
    process.exit(1);
  }
};

export default connectdb;
