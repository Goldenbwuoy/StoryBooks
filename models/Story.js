const mongoose = require('mongoose')

const StorySchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
        trim: true
    },
    body: {
        type: String, 
        required: true
    },
    status: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    user: {
        type: String, 
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Story', StorySchema)