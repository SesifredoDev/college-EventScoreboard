const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    name: {type: String, required: true},
    type:{type: String, required: true},
    max:{type: Number, required: true},
    subtraction:{type: Number, required: true},
    leaderboard: {type: Array, required: false}
})

module.exports = mongoose.model('event', postSchema)