const express = require('express');
const router = express.Router();

router.get("/create",function(req, res) {
    res.render("createBlog")
})

module.exports = router;