import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL
const URL = BASE_URL + "api/blogs";



export const uploadBlog = async(data, token) => {
    
    try{
        return await axios.post(`${URL}/uploadblog`,data , { headers: {"Authorization" : `Bearer ${token}`} });
    }
    catch(error){
        return error;
    }
}

export const getBlogs = async() => {
    
    try{
        return await axios.get(`${URL}/getblogs`);
    }
    catch(error){
        return error;
    }
}

export const deleteBlog = async(author_id ,id, token) => {
    try{
        return await axios.delete(`${URL}/deleteblog/${author_id}/${id}`, { headers: {"Authorization" : `Bearer ${token}`} });
    }
    catch(error){
        return error;
    }
}

export const updateBlog = async(id, data, token) => {
    console.log(data);
    try{
        return await axios.put(`${URL}/updateblog/${id}`,data, { headers: {"Authorization" : `Bearer ${token}`} });
    }
    catch(error){
        return error;
    }
}

export const addBookmark = async(data, token) => {
    try{
        return await axios.put(`${URL}/addbookmark`, data, { headers: {"Authorization" : `Bearer ${token}`} })
    }
    catch(error){
        return error;
    }
}

export const removeBookmark = async(data, token) => {
    try{
        return await axios.put(`${URL}/removebookmark`, data, { headers: {"Authorization" : `Bearer ${token}`} })
    }
    catch(error){
        return error;
    }
}