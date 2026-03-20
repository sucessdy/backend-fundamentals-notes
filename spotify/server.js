require('dotenv').config();

const app = require("./src/app");
const connectDb = require("./src/db/db");

const port = process.env.PORT || 3000;

async function start() {
  try {
    await connectDb();

    app.listen(port, () => {
      console.log(`🚀 Server is running at port ${port}`);
    });

  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1); 
  }
}

start();