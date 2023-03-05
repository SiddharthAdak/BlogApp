const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
        title:{
            type:String,
            required: true
        },
        story:{
            type:String,
            required:true
        },
        image:{
            type: Object,
            required: true 
        },
        category:{
            type: String,
            required: true 
        },
        author:{
            type: String,
            required: true 
        },
        author_id:{
            type: String,
            required: true
        },
        user_bookmarks:{
            type: [String],
            default: []
            
        }
    },
    { timestamps: true }
)
module.exports = mongoose.model('Blog', blogSchema);