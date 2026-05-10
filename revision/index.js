const { connect } = require("mongoose");
const app = require("./src/app"); 

async function start(params) {
    await connect ;
    console.log("server is list") ;        
    
    
}   