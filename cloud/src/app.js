import express from "express";
import multer from "multer";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const upload = multer({storage:multer.memoryStorage()})
app.post("/create-post",upload.single("image")  , async (req, res) => {
  console.log(req.body); // Contains the parsed form data
  res.send("Form data received");
});
app.get("/", (req, res) => {
  console.log(req.body); // Contains the parsed form data
  res.send("Form data received");
});
export default app;
