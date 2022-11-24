import { Request, Response } from "express";
import userModel from "../db/models/userModel";

export async function getAllUsers(req: Request, res: Response) {
    try {
        let data = await userModel.find()
        return res.send({ success: true, data: data });
    } catch (error) {
        return res.send({ success: false, error: true });
    }
}

exports.addUser = async (newUser) => {
    try {
        let user = new userModel(newUser)
        let data = await user.save();
        return { success: true, data: data };
    } catch (error) {
        return { success: false, error: true };
    }
}
exports.login = async ({ username }) => {
    try {
        let data = await userModel.findOne({ username })
        if (!data) return { success: false, error: true, status: 401 };
        return { success: true, data: data };
    } catch (error) {
        console.log(error);
        return { success: false, error: true, status: 500 };
    }
}