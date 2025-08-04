exports.renderHomepage = function (req, res)  {
    return res.render("home");
}

exports.renderLoginpage = function (req, res)  {
    if (req.cookies['token']) return res.redirect("/");
    return res.render("login");
}

exports.renderSignupPage = function (req, res)  {
    return res.render("signup");
}