const jwt = require("jsonwebtoken");
const User = require("../models/userModel")
const requireAuth = async (req, res, next) => {
    // verify authentication
    const url = req.path;
    if(url == "/getblogs"){
        return next();
    }
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({error: 'Authorisation token required'});
    }
    const token = authorization.split(' ')[1];
    try{
        const {_id} = jwt.verify(token, process.env.SECRET);
        user = await User.findOne({_id}).select("_id name");
        req.user = {_id: user._id, name: user.name};
        next();
    }
    catch(error){
        console.log(error);
        res.status(401).json({error: "request is not authorised"});
    }
}

module.exports = requireAuth;