const { response } = require("express");
const Blog = require("../models/blogModel.js")

const uploadBlog = async(req, res) => {
    const {title, story, image, category} = req.body;
    const {_id, name} = req.user;
    
    const newBlog = new Blog({title, story, image, category, author_id: _id, author:name});
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
        const { author_id, id } = req.params;
        const {_id } = req.user;
        await Blog.findOneAndDelete({_id: id});
        
        if(author_id !== _id.toString()){
            return res.status(400).json({message: "Unauthorised request"});
        }
        res.status(200).json({message: "blog deleted successfully"})
    }
    catch(error){
        res.status(400).json({message: "Error while deleting blog"});
    }
}

const updateBlog = async(req, res) => {
    const {id}= req.params;
    const {title, story, image, category, author_id} = req.body;
    const {_id, name} = req.user;
    const editBlog = {title, story, image, category, author_id, author:name};
    
    if(author_id !== _id.toString()){
        return res.status(400).json({message: "Unauthorised request"});
    }
    
    try{
        let response = await Blog.findOneAndUpdate({_id: id}, editBlog, { new: true } );
        
        res.status(200).json(response);

    }
    catch(error){
        console.log(error);
        res.status(400).json({message: "Error while updating blog"});
    }
}

const addBookmark = async(req, res) => {
    try{
        const {_id} = req.body;
        console.log(req.body);
        let response = await Blog.find({_id, user_bookmarks: { $in : [req.user._id.toString()]} }).count();
        if(response === 0){
            let blog = await Blog.findOneAndUpdate({_id}, {$push: {user_bookmarks:req.user._id.toString()}}, { new: true });
            console.log(blog);
            res.status(200).json(blog);
        }
        else{
            console.log(response);
            return res.status(400).json({message: "failed"});
        }
        
    }
    catch(error){
        res.status(400).json({message: "failed"});
    }
}

const removeBookmark = async(req, res) => {
    try{
        const {_id} = req.body;
        console.log(req.body);
        let response = await Blog.find({_id, user_bookmarks: { $in : [req.user._id.toString()]} }).count();
        if(response !== 0){
            let blog = await Blog.findOneAndUpdate({_id}, {$pull: {user_bookmarks:req.user._id.toString()}}, { new: true });
            console.log(blog);
            res.status(200).json(blog);
        }
        else{
            console.log(response);
            return res.status(400).json({message: "failed"});
        }
        
    }
    catch(error){
        res.status(400).json({message: "failed"});
    }
}

module.exports = {uploadBlog, getBlogs, deleteBlog, updateBlog, addBookmark, removeBookmark};