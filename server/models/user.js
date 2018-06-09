const mongoose = require('mongoose');
// user model
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    age: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        default: null
    }
});

module.exports = {User};