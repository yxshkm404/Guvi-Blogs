const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

async function genrateTokenForUser(id) {
    const user = await User.findById(id);
    const payload = {
        _id: user._id,
        email: user.email,
        fullName: user.fullName

    }
    const token= jwt.sign(payload, process.env.SECRET_KEY,)
    return token 
}

module.exports = {
    genrateTokenForUser
};