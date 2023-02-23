import React from 'react';
import "./Navbar.css";
import { useContext } from 'react';
import { UserContext } from '../App';
function Hamburger() {
    const { state, setState} = useContext(UserContext);
    function handleClick(){
        setState(!state);
        let ham = document.getElementById("menu");
        ham.classList.toggle("open_menu");
    }
    return (
        <div className = "ham" id = "menu" onClick = {handleClick}>
        
            <span className = "ham_bar"></span>
            <span className = "ham_bar"></span>
            <span className = "ham_bar"></span>
        </div>
    )
}

export default Hamburger
