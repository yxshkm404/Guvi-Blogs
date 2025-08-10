const Blog = require("../models/blog");

exports.renderCreateBlogPage = function (req, res) {
    res.render("createBlog", {
        user: req.user
    })
};

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

exports.renderBlogPost = async function (req, res) {
    try{
        const id = req.params.id;
        const blog = await Blog.findById(id).populate("createdBy")
        return res.render("blog",{
            user: req.user,
            blog: blog
        })
    }
    catch(error){
        res.render("home")
    }
}
    