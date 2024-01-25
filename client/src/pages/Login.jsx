import React, {useState} from 'react'
import "./Login.css"
import {login} from "../service/userApi";
import { addUser } from '../store/actions';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { LoadingSvg } from '../assets/Svg';
function Login() {
    const dispatch = useDispatch();
    const [loginDetails, setLoginDetails] = useState({
        email:"",
        password: "",
    })
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const handleInput = (e) => {
        setLoginDetails({...loginDetails, [e.target.name]:e.target.value})
    }

    const loginUser = async(e) => {
        setIsLoading(true);
        e.preventDefault();
        let response = await login(loginDetails);
        if(response.status === 200){
            setIsLoading(false);
            console.log(response);
            setError(null)
            dispatch(addUser(response.data));
        }
        else{
            setError(response.data.message);
            setIsLoading(false);
            console.log(response);
        }
    }

    return (
        
        <div className = "login">
            <div className = "login-container">
                <h1>Welcome Back!</h1>
                <form className = "login-form">
                <h1>Login</h1>
                <input onChange = {handleInput} type = "email" name = "email" value = {loginDetails.email} placeholder = "Email" />

                <input onChange = {handleInput} type = "password" name = "password" value = {loginDetails.password} placeholder = "Password" />
                {error && <p className = "login-error">Error! {error}</p>}
                {(!isLoading) ? <button onClick = {loginUser}>Login</button>:
                
                    <div className='spinner-container'>
                        <LoadingSvg className=' animate-spin' />
                    </div>
                
                }
                {(!isLoading) && <p>Don't have an account? <Link to = "/Signup">Sign Up</Link></p>}
                </form>
            </div>
        </div>
    )
}

export default Login
