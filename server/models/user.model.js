const mongoose = require("mongoose");
const Schema = mongoose.Schema

// schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://static.thenounproject.com/png/1994977-200.png"
    },

}, { timestamps: true });

// model
const userModel = mongoose.model('User', userSchema);
module.exports = userModel;