const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    test: String,
    mdp: String
})


const Users = mongoose.model("usersinfo",userSchema);

module.exports = Users