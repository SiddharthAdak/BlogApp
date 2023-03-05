const express = require("express");
const {uploadBlog, getBlogs, deleteBlog, updateBlog, addBookmark, removeBookmark} = require("../controllers/blogController.js");
const requireAuth = require("../middleware/requireAuth")
const router = express.Router();
router.use(requireAuth);

router.post("/uploadblog", uploadBlog);
router.get("/getblogs", getBlogs);
router.delete("/deleteblog/:author_id/:id", deleteBlog);
router.put("/updateblog/:id", updateBlog);
router.put("/addbookmark", addBookmark);
router.put("/removebookmark", removeBookmark);
module.exports = router;