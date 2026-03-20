const express = require("express");
const app = express();
const authRouter = require("./routes/auth.routes")

app.use(express.json());
app.use("/" , authRouter)

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});



module.exports = app;