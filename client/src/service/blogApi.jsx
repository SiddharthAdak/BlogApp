import axios from "axios";
import store from "../store/store";

const URL = "http://localhost:8000/api/blogs";



export const uploadBlog = async(data, token) => {
    
    try{
        return await axios.post(`${URL}/uploadblog`,data , { headers: {"Authorization" : `Bearer ${token}`} });
    }
    catch(error){
        return error;
    }
}

export const getBlogs = async(token) => {
    
    try{
        return await axios.get(`${URL}/getblogs`, { headers: {"Authorization" : `Bearer ${token}`} });
    }
    catch(error){
        return error;
    }
}

export const deleteBlog = async(id, token) => {
    try{
        return await axios.delete(`${URL}/deleteblog/${id}`, { headers: {"Authorization" : `Bearer ${token}`} });
    }
    catch(error){
        return error;
    }
}

export const updateBlog = async(id, data, token) => {
    console.log(id);
    try{
        return await axios.put(`${URL}/updateblog/${id}`,data, { headers: {"Authorization" : `Bearer ${token}`} });
    }
    catch(error){
        return error;
    }
}