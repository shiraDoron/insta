import mongoose from "mongoose";

export interface Post extends mongoose.Document {
    img: string;
    owner: mongoose.Types.ObjectId;
    likes: [mongoose.Types.ObjectId];
}

const postSchema = new mongoose.Schema(
    {
        img: { type: String, required: true },
        owner: { type: mongoose.Schema.Types.ObjectId, ref: "users", require: true },
        likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
    }
);

const PostModel = mongoose.model<Post>("posts", postSchema);

export default PostModel;