import React from 'react';
import "./Navbar.css";

function Hamburger() {
    
    function handleClick(){
        
        let ham = document.getElementById("menu");
        let sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle("open_sidebar");
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
