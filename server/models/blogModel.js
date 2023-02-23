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
        email:{
            type: String,
            required: true
        }
    },
    { timestamps: true }
)
module.exports = mongoose.model('Blog', blogSchema);