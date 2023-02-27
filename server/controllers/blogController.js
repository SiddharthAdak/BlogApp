const Blog = require("../models/blogModel.js")

const uploadBlog = async(req, res) => {
    const {title, story, image, category} = req.body;
    const {email, name} = req.user;
    
    const newBlog = new Blog({title, story, image, category, email, author:name});
    try{
        await newBlog.save();
        res.status(200).json(newBlog);
    }
    catch(error){
        res.status(400).json({message: "Something went wrong!"});
    }
}

const getBlogs = async(req, res) => {
    
    try{
        data =  await Blog.find({}).sort({ createdAt : -1 });
        res.status(200).json(data);
    }
    catch(error){
        res.status(400).json({message: "Something went wrong!"});
    }
}

const deleteBlog = async(req, res) => {
    try{
        const { id } = req.params;

        await Blog.findOneAndDelete({_id: id});
        console.log(id);
        res.status(200).json({msg: "blog deleted successfully"})
    }
    catch(error){
        res.status(400).json({msg: "Error while deleting blog"});
    }
}

const updateBlog = async(req, res) => {
    const {id}= req.params;
    const {title, story, image, category, userEmail} = req.body;
    const {email, name} = req.user;
    const editBlog = {title, story, image, category, email, author:name};
    if(userEmail !== email){
        return res.status(400).json({msg: "Unauthorised request"});
    }
    console.log(userEmail);
    try{
        response = await Blog.findByIdAndUpdate(id, editBlog, {useFindAndModify:true} );
        
        res.status(200).json({msg : "blog updated successfully"});

    }
    catch(error){
        res.status(400).json({msg: "Error while updating blog"});
    }
}

module.exports = {uploadBlog, getBlogs, deleteBlog, updateBlog};