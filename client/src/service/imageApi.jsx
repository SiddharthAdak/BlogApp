import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL
const URL = BASE_URL + "api/images";


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