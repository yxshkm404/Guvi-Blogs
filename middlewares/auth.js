const { validateToken } = require('../utils/auth')


exports.checkForToken = (req, res, next) => {
    const token = req.cookies['token']
    if (!token) return next()
    try {
        const userPayload = validateToken(token);
        req.user = userPayload // req.user will be available in the request object
        return next();
    } catch (error) {
        return next()
    }
}

exports.onlyGrantAccessTo = function (role) {
    return function (req, res, next) {
        const token = req.cookies['token']
        if (!token) return res.redirect('/')
        try {
            const userPayload = validateToken(token);
            if (userPayload.role === role) {
                req.user = userPayload // req.user will be available in the request object
                return next();
            }else {
                 res.redirect('/')
            }

        } catch (error) {
            res.redirect('/')
        }

    }
}

exports.ensureAuthenticated = function (req, res, next) {
    if (!req.user) return res.redirect('/login')
    return next();
    }
