require("dotenv").config() ; 
const app = require("./src/app"); 
const connectDB = require("./src/db/db")


async function start() {
  await connectDB();
  // 🧱 foundation

  console.log("await");
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  }); // 🏠 house
}

start();
