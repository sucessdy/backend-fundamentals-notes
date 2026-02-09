const express = require('express')
const taskRoute = require("./routes/task.routes")
const app = express()
const port = 3000
app.use(express.json()) ; 
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// app.get("/health", (req, res) => {

    // res.send("RADHE RADHE ❤️ , OM HARI 🦚");
  // console.log(req.headers) ; 
  // res.setHeader("OKK ")


// });      
app.use("/health", taskRoute) ; 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

