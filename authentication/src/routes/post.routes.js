const express = require("express")
const jwt = require("jsonwebtoken")
const router = express.Router() ;
router.post("/post", (req, res) => { 
// const token = req.cookie

// console.log(req.body) ; 
// console.log(req.cookies) ; 
 const token = req.cookies.token 
 if (!token) { 
    return res.status(401).json({
        message : "Unathorized" 
    })
 }
 try { 
jwt.verify(token, process.env.JWT_SECRET )
 }
 catch (err){ 
return res.status(401).json({ 
    message : "Unathorized"

})
 }
 res.send("Post create sucessfully") 
})

module.exports = router ;