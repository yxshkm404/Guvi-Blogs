exports.renderHomepage = function (req, res)  {
    return res.render("home",{
        user: req.user
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