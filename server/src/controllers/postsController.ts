import { Request, Response } from "express";
import postModel from "../db/models/postModel";

export async function getAllPosts(req: Request, res: Response) {
    try {
        let data = await postModel.find().populate('owner')
        return res.send({ success: true, data: data });
    } catch (error) {
        return res.send({ success: false, error: true });
    }
}

exports.addPost = async (newPost) => {
    try {
        let post = new postModel(newPost)
        let data = await post.save();
        return { success: true, data: data };
    } catch (error) {
        return { success: false, error: true };
    }
}
exports.addLike = async ({ postId, userID }) => {
    try {
        let data = await postModel.updateOne({ _id: postId }, { $addToSet: { 'likes': userID } })
        if (data.modifiedCount > 0) {
            return { success: true, data: data };
        } else {
            return { success: false, error: true };
        }
    } catch (error) {
        return { success: false, error: true };
    }
}
exports.removeLike = async ({ postId, userID }) => {
    try {
        let data = await postModel.updateOne({ _id: postId }, { $pull: { 'likes': userID } })
        if (data.modifiedCount > 0) {
            return { success: true, data: data };
        } else {
            return { success: false, error: true };
        }
    } catch (error) {
        return { success: false, error: true };
    }
}
exports.IsLikedThePost = async ({ postId, userID }) => {
    try {
        let data = await postModel.findById(postId).populate('likes')
        let likedPost = false;
        data?.likes?.forEach(i => {
            if (i._id.equals(userID) == true) {
                likedPost = true;

            };
        });
        return likedPost ? { success: true } : { success: false, error: true };
    } catch (error) {
        return { success: false, error: true };
    }
}
exports.getMyPost = async (userID) => {
    try {
        let data = await postModel.find({ owner: userID }).populate('owner')
        return { success: true, data: data };
    } catch (error) {
        return { success: false, error: true };
    }
}