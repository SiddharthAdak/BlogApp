import React from 'react';
import './Navbar.css';
import Navlist from './Navlist';
import Hamburger from './Hamburger';
import { logout } from '../service/userApi';
import { addUser } from '../store/actions';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
    const user = useSelector(state => state.setUser);
    const dispatch = useDispatch();
    const toggleOptions = () =>{
        let element = document.getElementById("nav-profile");
        element.classList.toggle("open_profile");
    }

    const logoutUser = async() => {
        let response = await logout();
        if(response.status === 200){
            dispatch(addUser(null));
            toggleOptions();
        }
    }

    return (
        <div>
        <header className = "navbar">
            <div className = "title">
                <h1>Navbar</h1>
            </div>
                
            <div className = "nav-container">
                {user && <ul className = "navbar_list" >
                    <Navlist name = "Home" />
                    <Navlist name = "Write" />
                    
                </ul>}
                <div>
                <img onClick = {toggleOptions} src = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"/>
                
                </div>
            <Hamburger />
            </div>
           
        </header>
        <div id = "nav-profile" className = "nav-profile">
                    <Link onClick = {toggleOptions} style = {{textDecoration:"none"}} to = "myblogs" ><p>My Blogs</p></Link>
                    
                    
                    <p onClick = {logoutUser}>Logout</p>
                </div>
        </div>
    )
}

export default Navbar
