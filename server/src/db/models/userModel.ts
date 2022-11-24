import mongoose from "mongoose";

export interface User extends mongoose.Document {
    username: string;
    img: String;
}

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        img: { type: String, required: true },
    }
);

const UserModel = mongoose.model<User>("users", userSchema);

export default UserModel;