const express = require("express") ;  // import the express 

const app = express() ;  // server instance 

app.get('/', (req, res)=> {  // 
res.send("hello world ") ; 
})
app.listen(9000 , () => { 
console.log("Server is running....") // server listen at port number 9000
})