const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/uploads/");
    },
    filename: (req, file, cb) => {
        cb(null,file.originalname); 
    }
});

const upload = multer({ storage });

router.get("/create", function(req, res) {
    res.render("createBlog");
});

router.post("/create", upload.single("coverImage"), function(req, res) {
    console.log(req.body); // text inputs
    console.log(req.file); // uploaded file info
    return res.render("createBlog");
});

module.exports = router;
