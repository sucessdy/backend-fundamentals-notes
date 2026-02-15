import mongoose from "mongoose";

// we create a schema for DB to know how our data is gonna lookk like .  

const noteSchema = new mongoose.Schema({
    title : {type : String , required : true} , 

    content : {type : String}
}, 
{ timestamps: true})

const noteModel = mongoose.model("notes", noteSchema);


// const noteModel = mongoose.model("notes", (to give the name of the collection ) noteSchema);

/*
we ' want to perform this action in the Db..so we need to create a model to do all those operation 
 CRUD operation 
 create  - POST 
 read = GEt
 update = PATCH
 delete = DELTE
*/

export default noteModel ; 
