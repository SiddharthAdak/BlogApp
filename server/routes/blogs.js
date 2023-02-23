const express = require("express");
const {uploadBlog, getBlogs, deleteBlog, updateBlog} = require("../controllers/blogController.js");
const requireAuth = require("../middleware/requireAuth")
const router = express.Router();
router.use(requireAuth);

router.post("/uploadblog", uploadBlog);
router.get("/getblogs", getBlogs);
router.delete("/deleteblog/:id", deleteBlog);
router.put("/updateblog/:id", updateBlog);
module.exports = router;