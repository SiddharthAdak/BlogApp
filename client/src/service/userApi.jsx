import axios from "axios";
const URL = "https://blog-app-server-mvus.onrender.com/api/users";

export const signup = async(data) => {
    try{
        return await axios.post(`${URL}/signup`, data,{ withCredentials: true });
    }
    catch(error){
        return error.response;
    }
}

export const login = async(data) => {
    try{
        return await axios.post(`${URL}/login`, data,{ withCredentials: true });
    }
    catch(error){
        return error.response;
    }
}

export const checkUser = async() => {
    try{
        return await axios.get(`${URL}/checkuser` ,{ withCredentials: true });
    }
    catch(error){
        return error.response;
    }
}

export const logout = async() => {
    try{
        return await axios.get(`${URL}/logout` ,{ withCredentials: true });
    }
    catch(error){
        return error;
    }
}