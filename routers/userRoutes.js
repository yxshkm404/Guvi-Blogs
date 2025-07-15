const express = require('express');
const router = express.Router();

router.get("/:id",function(req, res) {
    res.end("Route is under construction");
})

module.exports = router;