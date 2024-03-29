const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    
    },
    text: {
        type: String,
        required: true,
        
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        immutable: true,
        default: Date.now,
    }
});

module.exports = mongoose.model('Todo', todoSchema);