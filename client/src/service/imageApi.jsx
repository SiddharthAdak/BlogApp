import axios from "axios";
const URL = "https://blog-app-server-mvus.onrender.com/api/images";


export const uploadImage = async(data) =>{
    try{
        return await axios.post(`${URL}/uploadimg`, {imageData: data});
    }
    catch(error){
        return error;
    }
}

export const deleteImage = async(data) =>{
    console.log(data);
    try{
        return await axios.post(`${URL}/deleteimg`, data);
    }
    catch(error){
        return error;
    }
}