const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    email: String,
    password: String
})

const Users = mongoose.model("usersInfo",usersSchema)

module.exports = Users