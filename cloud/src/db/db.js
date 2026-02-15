import mongoose from "mongoose";

async function connectDb() {
    try{ 
await mongoose.connect(process.env.MONGO_URI/cloud)
console.log("connect to the DB")
    }catch(err){
        console.err("Database connection failed"); 
        process.exit(1); 

    }
    
}

export default connectDb ;
