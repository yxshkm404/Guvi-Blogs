const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
       required:true,
       default: 'user'
    },
    profilePicture:{
        type: String,
    }
})
const User = mongoose.model('User', userSchema);
module.exports = User;