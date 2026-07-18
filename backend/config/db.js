import mongoose from "mongoose";

const connectDB = async () => {
  const { MONGODB_URI } = process.env;

  if (!MONGODB_URI || typeof MONGODB_URI !== "string" || !MONGODB_URI.trim()) {
    console.error(
      "MongoDB Connection Failed ❌\nMissing required env var: MONGODB_URI"
    );
    process.exit(1);
  }

  try {
    // Connection options help with DNS/SSL and are compatible with mongoose v9
    await mongoose.connect(MONGODB_URI, {
      autoIndex: false,
      serverSelectionTimeoutMS: 15000,
      socketTimeoutMS: 45000,
    });
    console.log("MongoDB Connected Successfully ✅");
  } catch (error) {
    console.error("MongoDB Connection Failed ❌");
    console.error("MONGODB_URI provided:", !!MONGODB_URI);
    console.error(error?.message || error);
    process.exit(1);
  }
};

export default connectDB;

