import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    Image: String  , 
    caption: String
});

const postModel = mongoose.model("posts", postSchema);

export default postModel;
