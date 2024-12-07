const mongoose = require("mongoose")

const apiSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    lastname: String
})

const apiModel = mongoose.model("apitest",apiSchema)

module.exports = apiModel