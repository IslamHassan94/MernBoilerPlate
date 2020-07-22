const mongoose = requrie("mongoose");
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength: 50
    },
    email: {
        type: true,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastName: {
        type: String,
        maxLength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
});


const User = mongoose.model('User', userSchema);

module.exports = {User};