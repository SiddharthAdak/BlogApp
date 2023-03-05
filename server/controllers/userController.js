const User = require("../models/userModel")
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: maxAge});
}

const signUp = async (req, res) => {
    try{
        const {name, email, password, confirm_password, profileImage} = req.body;
        const user = await User.signup(name, email, password, confirm_password, profileImage);
        const token = createToken(user._id);
        res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge*1000, sameSite: "none", secure: true});

        res.status(200).json({_id: user._id,name, email,profileImage, token})
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
}

const logIn = async (req,res) => {
    try{
        const {email, password} = req.body;
        const user = await User.login(email, password);
        const token = createToken(user._id);
        
        res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge*1000, sameSite: "none", secure: true});
        
        res.status(200).json({_id: user._id,name:user.name, email, profileImage:user.profileImage, token});
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
}

const checkUser = async(req,res) => {
    token = req.cookies.jwt;
    if(!token){
        return res.status(400).json("user not logged in")
    }
    const {_id} = jwt.verify(token, process.env.SECRET);
    try{
        user = await User.findOne({_id});
        res.status(200).json({name:user.name, email: user.email, _id:user._id, profileImage:user.profileImage, token})
    }
    catch(error){
        res.status(400).json({message:error.message});
    }

}
const logoutUser = (req, res) => {
    res.cookie('jwt', '' , { httpOnly: true,maxAge: 1, sameSite: "none", secure: true });
    console.log("logged out");
    res.status(200).json("User logged out");
}

module.exports = {signUp, logIn, checkUser, logoutUser};