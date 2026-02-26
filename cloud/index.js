import "@dotenvx/dotenvx/config";
import app from "./src/app.js";
import connectDB from "../database/src/db/db.js";
async function start() {
  await connectDB();
  // 🧱 foundation

  console.log("await");
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  }); // 🏠 house
}

start();
