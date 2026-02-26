import "@dotenvx/dotenvx/config";
import app from "./src/app.js";
import connectDb from "./src/db/db.js";
const port = process.env.PORT 
async function start() {
  await connectDb();


  console.log("await");
  app.listen( port, () => {
    console.log(`Server is running on port ${port}`);
  }); 
}

start();
