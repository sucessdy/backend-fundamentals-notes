// we want to create the server

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "notes are fully sucessful",

  });
});



export default app;
