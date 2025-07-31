const User = require('../models/user');
exports.handleUserLogin = function(req, res) {
    return res.render('login')
}

exports.handleUserSignup = async function(req, res) {
   const {fullName,email,password} = req.body;
   try {
    if(!fullName) throw new Error('Full name is required');
    if(!email) throw new Error('Email is required');
   if (!password || password.length < 5) throw new Error('Password is required and minimum length is 5 characters');

    await User.create({fullName, email, password});
    return res.render('login', { success: 'Signup successful! Please login.' });
   }
   catch (err) {
    res.render('signup', { error: 'An error occurred during signup. Please try again.' });
    console.log(err.message);
   }
}