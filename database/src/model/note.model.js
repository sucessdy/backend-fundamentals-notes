import mongoose from "mongoose";

// we create a schema for DB to know how our data is gonna lookk like .  

const noteSchema = new mongoose.Schema({
    title : {type : String , required : true} , 

    content : {type : String}
})