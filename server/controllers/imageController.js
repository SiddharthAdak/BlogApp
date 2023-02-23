const cloudinary = require("../utils/cloudinary");
const uploadImage = async(req, res) => {
    try{
        const fileStr = req.body.imageData;
        let response = await cloudinary.uploader.upload(fileStr,{
            upload_preset: "myBlogApp"
        })
        
        res.status(200).json(response);
    }
    catch(error){
        console.log("image error");
        res.status(400).json({error: error.message});
    }
}

const deleteImage = async(req, res) => {

    try{
        const id = req.body.id;
        console.log("hemlo",req.body);
        let response = await cloudinary.uploader.destroy(id);
        
        res.status(200).json(response);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    uploadImage,
    deleteImage
}