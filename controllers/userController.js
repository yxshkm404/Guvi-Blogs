const User = require('../models/user');
const { genrateTokenForUser } = require('../utils/auth');

// user login controller 
exports.handleUserLogin = async function (req, res) {
    const { email, password } = req.body;

    try {
        if (!email || !password) throw new Error('Email and password are required');
        const user = await User.findOne({ email});
        if (!user) throw new Error(`user with email ${email} not found`);
        if (user.password !== password) throw new Error(`password is incorrect`);
        const token = await genrateTokenForUser(user._id);
        
           return res.cookie("token", token).redirect("/")
}
    

    catch (err) {
        res.render("login", {
            error: err.message || 'An error occurred during login. Please try again.',
        })
    }
}


// user signup controller
exports.handleUserSignup = async function (req, res) {
    const { fullName, email, password } = req.body;
    try {
        if (!fullName) throw new Error('Full name is required');
        if (!email) throw new Error('Email is required');
        if (!password || password.length < 5) throw new Error('Password is required and minimum length is 5 characters');

        const user = await User.create({ fullName, email, password });
        const token = await genrateTokenForUser(user._id);

        return res.cookie("token",token).redirect("/")
    }
    catch (err) {
        res.render('signup', { error: 'An error occurred during signup. Please try again.' });
        console.log(err.message);
    }
}