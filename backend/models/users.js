const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    
    test: { 
        type: String,
        required: true
     }
})

const Users = mongoose.model("usersInfo",usersSchema)

module.exports = Users