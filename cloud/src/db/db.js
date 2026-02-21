import mongoose from "mongoose";

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI)   
    }
    
catch (err) {
    console.error("❌ Database connection failed", err);
    process.exit(1);
  }
}

export default connectDb;