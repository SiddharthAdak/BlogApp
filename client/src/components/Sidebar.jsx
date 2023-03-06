import React from 'react';
import Navlist from './Navlist';

import "./Sidebar.css";
function Sidebar() {
    
    
    return (
        <div id = "sidebar" className = "sidebar" >
            <ul className = "sidebar_list">
                    <Navlist name = "Home" />
                    <Navlist name = "Write" />
                </ul>
        </div>
    )
}

export default Sidebar
