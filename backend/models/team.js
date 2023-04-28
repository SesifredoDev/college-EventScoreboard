const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    name: {type: String, required: true},
    members: {type: Array, required:true}
})

module.exports = mongoose.model('Team', postSchema)