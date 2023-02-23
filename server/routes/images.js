const express = require('express');
const {uploadImage, deleteImage } = require("../controllers/imageController");


const router = express.Router();
router.post("/uploadimg", uploadImage);
router.post("/deleteimg", deleteImage);
module.exports = router;