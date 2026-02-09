const express = require("express") ; 
const handlerFunction = require("../../controllers");
const router = express.Router() ; 

router.get("/api" , (res, req) =>  { 
    return res.render("home")
})
router.get("/" , handlerFunction) ; 
module.exports = router; 
