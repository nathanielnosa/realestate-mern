import userModel from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken";

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

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validEmail = await userModel.findOne({ email })
        if (!validEmail) return next(errorHandler(404, 'Wrong Credentials!'))
        const validPassword = bcryptjs.compareSync(password, validEmail.password)
        if (!validPassword) return next(errorHandler(401, 'Wrong Credentials!'))

        const token = jwt.sign({ id: validEmail._id }, process.env.JWT_SECRET)
        // hide password not to be licked to users
        const { password: pwd, ...otherInfo } = validEmail._doc

        res.cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json(otherInfo)
    } catch (error) {
        next(error)
    }
}
