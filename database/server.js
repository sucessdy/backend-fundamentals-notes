
import "@dotenvx/dotenvx/config";
import app from "./src/app.js" ; 
 
 import connectDB from "./src/db/db.js" ; 
 const PORT = 9000; 
// connectDB() ; 

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running`);
    });
  } catch (err) {
    console.error(err);
  }
}

startServer();
