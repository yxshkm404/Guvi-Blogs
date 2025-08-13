const express = require('express');
const router = express.Router();
const {handleUserLogin,handleUserSignup,renderUserBlogs} = require('../controllers/userController');

router.get("/logout",function(req, res) {
    return  res.clearCookie('token').redirect('/');
})

router.post('/login', handleUserLogin);

router.get('/blogs',renderUserBlogs);

router.post('/signup', handleUserSignup);

module.exports = router;