//Create a model to test the sending of the data

const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({
    _id: Number,
    desc: String,
    tags: String
})

const dataModel = mongoose.model("datatest",dataSchema)

module.exports = dataModel