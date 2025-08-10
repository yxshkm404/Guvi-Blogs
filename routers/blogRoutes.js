const express = require('express');
const router = express.Router();
const multer = require('multer');
const Blog= require('../models/blog');
const {renderCreateBlogPage, createNewBlogPost} = require('../controllers/blogController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/uploads/");
    },
    filename: (req, file, cb) => {
        cb(null,`${req.user._id}-${Date.now()}-${file.originalname}`); 
    }
});

const upload = multer({ storage });

router.get("/create", renderCreateBlogPage);


router.post("/create", upload.single("coverImage"), createNewBlogPost);

module.exports = router;
