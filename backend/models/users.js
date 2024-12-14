const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    
    test: String
})

const Users = mongoose.model("usersInfo",usersSchema)

module.exports = Users