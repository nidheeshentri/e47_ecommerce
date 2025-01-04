const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: String,
    email: {type: String, unique: true},
    password: String,
    role: {type: String, default: "user"}
})

const UserModel = mongoose.model("user", UserSchema)

module.exports = UserModel