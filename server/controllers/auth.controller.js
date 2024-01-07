import userModel from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hasPwd = bcryptjs.hashSync(password, 10)
    const insertUser = new userModel({ username, email, password: hasPwd });
    try {
        await insertUser.save()
        res.status(200).json({ message: "Register successful!" })
    } catch (error) {
        next(error)
    }
}   
