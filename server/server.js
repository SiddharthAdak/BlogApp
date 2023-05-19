const express = require("express");
const dotenv = require("dotenv");
const imageRoutes = require("./routes/images.js");
const blogRoutes = require("./routes/blogs.js");
const userRoutes = require("./routes/users.js")
const Connection = require("./database/db.js")
const cookieParser = require("cookie-parser");
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

app.listen(PORT, function(){
    console.log(`Server started on port ${PORT}`);
})