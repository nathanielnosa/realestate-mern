const userModel = require("../models/user.model.js");
const { errorHandler } = require("../utils/error.js");
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken");


// sign up controller
const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashPwd = bcryptjs.hashSync(password, 10)
    const insertUser = new userModel({ username, email, password: hashPwd });
    try {
        await insertUser.save()
        res.status(200).json({ message: "Register successful!" })
    } catch (error) {
        next(error)
    }
}

// sign in controller
const signin = async (req, res, next) => {
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

// google oauth controller
const google = async (req, res, next) => {
    try {
        const userCheck = await userModel.findOne({ email: req.body.email })
        if (userCheck) {
            const token = jwt.sign({ id: userCheck._id }, process.env.JWT_SECRET)
            const { password: pwd, ...otherInfo } = userCheck._doc;
            res.cookie('access_token', token, { httpOnly: true })
                .status(200)
                .json(otherInfo)

        } else {
            // generate pwd for new user using google oauth
            const generatePwd = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8)
            const hashPwd = bcryptjs.hashSync(generatePwd, 10);
            // convert user(nath nosa) to a username(nathnosa)
            const newUser = new userModel({ username: req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4), email: req.body.email, password: hashPwd, avatar: req.body.photo })

            await newUser.save()
            //creating a token
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET)
            // hide password not to be licked to users
            const { password: pwd, ...otherInfo } = newUser._doc

            res.cookie('access_token', token, { httpOnly: true })
                .status(200)
                .json(otherInfo)

        }
    } catch (error) {
        next(error)
    }
}

module.exports = { signup, signin, google }