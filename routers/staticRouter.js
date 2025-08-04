const express = require('express');
const router = express.Router();
const {renderHomepage,renderLoginpage, renderSignupPage} = require('../controllers/staticController');


router.get("/", renderHomepage);
router.get("/login", renderLoginpage);
router.get("/signup", renderSignupPage);

module.exports = router;