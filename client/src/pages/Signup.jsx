import React, {useState} from 'react'
import { signup } from '../service/userApi';
import { addUser } from '../store/actions';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { LoadingSvg } from '../assets/Svg';
import "./Login.css"
function Signup() {
    const dispatch = useDispatch();
    const [signupDetails, setSignupDetails] = useState({
        name:"",
        email:"",
        password: "",
        confirm_password: "",
        profileImage: null
    })
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const handleInput = (e) => {
        setSignupDetails({...signupDetails, [e.target.name]:e.target.value})
    }

    const signupUser = async(e) => {
        setIsLoading(true);
        e.preventDefault();
        let response = await signup(signupDetails);
        if(response.status === 200){
            setIsLoading(false);
            console.log(response);
            setError(null);
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
            <h1>Welcome to Blog!</h1>
            <form className = "login-form">
            <h1>Sign Up</h1>
                <input onChange = {handleInput} type = "text" name = "name" value = {signupDetails.name} placeholder = "Name" />

                <input onChange = {handleInput} type = "email" name = "email" value = {signupDetails.email} placeholder = "Email" />

                <input onChange = {handleInput} type = "password" name = "password" value = {signupDetails.password} placeholder = "Password" />

                <input onChange = {handleInput} type = "password" name = "confirm_password" value = {signupDetails.confirm_password} placeholder = "Confirm Password" />

                {error && <p className = "login-error">Error! {error}</p>}
                {(!isLoading) ? <button onClick = {signupUser}>Sign Up</button>:
                    <div className='spinner-container'>
                        <LoadingSvg className=' animate-spin' />
                    </div>
                }
                {(!isLoading) && <p>Already have an account? <Link to = "/Login">Login</Link></p>}
            </form>
            </div>
        </div>
    )
}

export default Signup
