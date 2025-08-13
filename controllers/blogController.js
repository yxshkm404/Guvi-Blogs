const Blog = require("../models/blog");
const Comment = require("../models/comment");


// This function renders the create blog page
exports.renderCreateBlogPage = function (req, res) {
    res.render("createBlog", {
        user: req.user
    })
};


// This function creates a new blog post
exports.createNewBlogPost = async function (req, res) {
    const { title, content } = req.body;

    try {
        if (!title || !content) throw new Error("Title and content are required");
        const blog = await Blog.create({
            content,
            title,
            coverImage: req.file.filename,
            createdBy: req.user._id
        })
        return res.render("createBlog", {
            success: "Blog created successfully",
        });

    }

    catch (error) {
        res.render("createBlog", {
            error
        })
    }
}

// This function renders a specific blog post and also fetches comments related to that blog post
exports.renderBlogPost = async function (req, res) {
    try{
        const id = req.params.id;
        const blog = await Blog.findById(id).populate("createdBy")
        const comments = await Comment.find ({blogId: Blog._id}).populate("createdBy");
        return res.render("blog",{
            user: req.user,
            blog: blog,
            comments: comments
        })
    }
    catch(error){
        res.render("home")
    }
}
    