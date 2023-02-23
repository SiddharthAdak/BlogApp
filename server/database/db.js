const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const Connection = async (URL) => {
    
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("Database connected successfully.")
    }
    catch(e){
        console.log("Error while connecting with the database ", e);
        
    }
}
module.exports =  Connection;