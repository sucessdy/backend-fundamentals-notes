const express = require("express") ; 
const app = express() ; 
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());
app.get("/" , (req, res) => { 
    const dummyJson = { 
        users: [{ id: 1 , name: "mukta" , email:"mukta@gmail.com"} ]
    }
    return res.setHeader('Access-Control-Allow-Origin' , "http://localhost:5173").json({data: dummyJson}) ; 
})
app.put("/", (req, res) => {
  res.json({ message: "PUT request success" });
});
app.listen(8000 , () => { 
    console.log("server is listening 8000")
 })