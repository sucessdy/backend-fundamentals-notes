// we want to create the server

import express from "express";

const app = express();

const notes = [];
let currentID = 1;
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "notes are fully sucessful",
    notes: notes,
  });
});

app.post("/notes", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      message: "title and content is required",
    });
  }

  const newNote = {
    id: currentID++,

    title,
    content,
  };
  notes.push(newNote);

  res.status(201).json({
    message: "Note created sucessfully",
    note: newNote,
  });
});
// app.patch("/notes/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const { title, content } = req.body;

//   const note = notes.find((note) => note.id === id);

//   if (!note) {
//     return res.status(404).json({
//       message: "Note not found",
//     });
//   }

//   if (title !== undefined) {
//     note.title = title;
//   }

//   if (content !== undefined) {
//     note.content = content;
//   }

//   res.status(200).json({
//     message: "note updated sucessfully",
//     note,
//   });
// });

app.patch("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { content, title } = req.body;

  const note = notes.find((note) => note.id === id);

  if (!note) {
    return res.status(404).json({
      message: "Note not found",
    });
  }

  if (title !== undefined) {
    note.title = title;
  }

  if (content !== undefined) {
    note.content = content;
  }

  res.status(200).json({
    message: "Note updated successfully",
    note,
  });
});

app.delete("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = notes.findIndex((note) => note.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "note not found",
    });
  }

  const deleteNote = notes.splice(index, 1);

  res.json({
    message: "Note delete sucessfully",
    note: deleteNote[0],
  });
});

export default app;
