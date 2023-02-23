const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    profileImage:{
        type: Object,
        required: false
    }
})

// static signup method
userSchema.statics.signup = async function(name, email, password, confirm_password, profileImage){

    //validation
    
    if(!email || !password || !name || !confirm_password){
        throw Error("All fields must be filled");
    }
    if(!validator.isEmail(email)){
        throw Error("Email not valid");
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Password not strong enough");
    }
    if(password !== confirm_password){
        throw Error("Confirm password and password should be same");
    }
    const exists = await this.findOne({email})
    if(exists){
        throw Error("Email already in use");
    }
    
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt);
    const user =  this.create({name, email, password: hash, profileImage})
    return user;

}

userSchema.statics.login = async function(email, password){
    if(!email || !password){
        throw Error("All fields must be filled");
    }
    const user = await this.findOne({email});
    console.log(user);
    if(!user){
        throw Error("Incorrect email");
    }
    const match = await bcrypt.compare(password, user.password);
    if(!match){
        throw Error("incorrect password");

    }
    return user;
}

module.exports = mongoose.model('User', userSchema);