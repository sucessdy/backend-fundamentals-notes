// we want to create the server

import express from "express";
import noteModel from "./model/note.model.js";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "notes are fully sucessful",
  });
});

/* 
PUT = create 
GET = REAd
Delte = delete 
Patch = update 

 

*/

app.post("/notes", async (req, res) => {
  try {
    const data = req.body;
    // noteModel.create(data) ; // don't write like this
    await noteModel.create({
      title: data.title,
      content: data.content,
    });

    res.status(201).json({
      message: "Note created",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find(); // f
  //
  //   find()
  //   does not find the first element

  // It finds all matching documents
  // MongoDB return s all matches

  // findOne = return us the object
  // find = return array of object
  res.status(200).json({
    message: "Note fetch successfully",
    notes: notes,
  });
});
// for single .... notes

app.get("/notes/:id", async (req, res) => {
  const note = await noteModel.findById(req.params.id);

  if (!note) {
    return res.status(404).json({
      message: "Note not found",
    });
  }

  res.json(note);
});

// delete.

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findOneAndDelete({
    _id: id,
  });
  res.status(200).json({
    message: "Delete successfully",
  });
});

// patch

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;

  await noteModel.findOneAndUpdate(
    {
      _id: id, // tell the DB which id we want to perform the updation operatio ....
    },
    { title: title }, // what we neeed to update 
  );

  res.status(200).json({
    message: "Update sucessfully" 
    
  })
});

export default app;
