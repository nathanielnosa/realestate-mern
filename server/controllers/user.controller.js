import userModel from "../models/user.model.js";
import { errorHandler } from "../utils/error.js"
import bcryptjs from 'bcryptjs';

export const test = (req, res) => {
    res.json({
        message: 'hello world'
    })
}


export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) return next(errorHandler(404, "You cant update another account"))
    console.log(req.user.id);
    try {
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10)

        }
        const updatedUser = await userModel.findByIdAndUpdate(req.params.id, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar,
            }
        }, { new: true })

        const { password, ...otherInfo } = updatedUser._doc
        res.status(200).json(otherInfo)

    } catch (error) {
        next(error)
    }
}