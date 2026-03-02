const mongoose = require("mongoose") ; 
const postSchema = new mongoose.Schema({ 
    image:  String, 
    caption: String 
}, {timestamps: true})
const postModel = mongoose.model("pluto", postSchema)
module.exports = postModel;