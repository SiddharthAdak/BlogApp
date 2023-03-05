const express = require("express");
const dotenv = require("dotenv");
const imageRoutes = require("./routes/images.js");
const blogRoutes = require("./routes/blogs.js");
const userRoutes = require("./routes/users.js")
const Connection = require("./database/db.js")
const cookieParser = require("cookie-parser");
const Blog = require("./models/blogModel")



const cors = require("cors");
const app = express();



app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: true,
}));
app.use(express.json({limit: '10mb', extended:true}));
app.use(express.urlencoded({limit: '10mb', extended: true}));


app.use('/api/images', imageRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/users', userRoutes);

dotenv.config();
const PORT = process.env.PORT;
const URL = process.env.URL;

Connection(URL);
app.post('/addbookmark', async(req, res) => {
    try{
        const {_id} = req.body;
        console.log(req.body);
        let response = await Blog.find({_id, user_bookmarks: { $in : ["63e525812c96317f3e930a6b"]} }).count();
        if(response === 0){
            await Blog.updateOne({_id}, {$push: {user_bookmarks:"63e525812c96317f3e930a6b"}});
        }
        else{
            return res.status(400).json({msg: "failed"});
        }
        res.status(200).json({msg: response});
    }
    catch(error){
        res.status(400).json({msg: "failed"});
    }
})

app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}`);
})