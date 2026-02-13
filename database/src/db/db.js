import mongoose from "mongoose";
// we're using asycn and await, we don;t know how much time its will take sever to connect to the DB so we use await...where we server wait for the DB.... then its excute the console
async function connectDB ()  {
    try { 
await mongoose.connect(process.env.MONGO_URI) ; // i didnt add the folder in the DB 
    console.log("connect to the DB")
    }catch   (error) { 
console.error("❌ Database connection failed:", error.message);
process.exit(1); // stop server if DB fails
    }
    
}

export default connectDB ; 
