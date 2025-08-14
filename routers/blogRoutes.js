const express = require('express');
const router = express.Router();
const multer = require('multer');
const Blog= require('../models/blog');
const {renderCreateBlogPage, createNewBlogPost, renderBlogPost,handleDeleteBlog} = require('../controllers/blogController');
const {onlyGrantAccessTo,ensureAuthenticated} = require('../middlewares/auth');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/uploads/");
    },
    filename: (req, file, cb) => {
        cb(null,`${req.user._id}-${Date.now()}-${file.originalname}`); 
    }
});

const upload = multer({ storage });

router.get("/create",ensureAuthenticated, renderCreateBlogPage);

router.get("/view/:id", renderBlogPost);

router.get('/delete/:id',onlyGrantAccessTo('Admin'),handleDeleteBlog); 


router.post("/create", ensureAuthenticated,upload.single("coverImage"), createNewBlogPost);

module.exports = router;
