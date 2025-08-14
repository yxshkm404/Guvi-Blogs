const Blog = require("../models/blog");



exports.renderHomepage = async function (req, res)  {
    const allBlogs = await Blog.find({}).sort({ createdAt: -1 })
    return res.render("home",{
        user: req.user,
        blogs: allBlogs,
    });
}

exports.renderLoginpage = function (req, res)  {
    if (req.user) return res.redirect("/");
    return res.render("login");
}

exports.renderSignupPage = function (req, res)  {
     if (req.user) return res.redirect("/");
    return res.render("signup");
}