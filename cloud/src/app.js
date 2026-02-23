// import express from "express";
// import multer from "multer";
// import UploadFile from "./services/storage.service.js";
// import postModel from "./model/cloud.model.js";

// const app = express();

// app.use(express.json({ limit: "6mb" }));
// app.use(express.urlencoded({ extended: true, limit: "6mb" }));

// const upload = multer({
//   storage: multer.memoryStorage(),
//   limits: { fileSize: 5 * 1024 * 1024 },
// });

// app.post("/create-post", upload.single("image"), async (req, res) => {
//   try {
//     // if (!req.file) {
//     //   return res.status(400).json({ error: "No file uploaded" });
//     // }

//     // if (!req.file.mimetype.startsWith("image/")) {
//     //   return res.status(400).json({ error: "Only images allowed" });
//     // }

//     const result = await UploadFile(req.file.buffer);

//     const post = await postModel.create({
//       image: result.url,
//       caption: req.body.caption,
//     });

//     return res.status(201).json({
//       success: true,
//       message: "message created successfully",
//       post,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Upload failed" });
//   }
// });

// export default app;


// const express = require('express');
// const multer = require('multer');
// const uploadFile = require("./services/storage.service")
// const postModel = require("./models/post.model")
// const cors = require("cors")


import express from "express";
import multer from "multer";
import UploadFile from "./services/storage.service.js";
import postModel from "./model/cloud.model.js";
import cors from "cors" ; 

const app = express();
;
app.use(cors())
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
