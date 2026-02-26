
import express from "express";
import multer from "multer";
import UploadFile from "./services/storage.service.js";
import postModel from "./model/cloud.model.js";
import cors from "cors" ; 

const app = express();
;
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true,
  })
);

// app.use(cors())
app.use(express.json());


const upload = multer({ storage: multer.memoryStorage() })


app.post('/create-post', upload.single("image"), async (req, res) => {

    const result = await UploadFile(req.file.buffer)

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message: "Post created successfully",
        post
    })

})

app.get("/posts", async (req, res) => {

    const posts = await postModel.find()


    return res.status(200).json({
        message: "Posts fetched successfully",
        posts
    })

})


 export default app;
