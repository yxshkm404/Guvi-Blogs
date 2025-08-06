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
