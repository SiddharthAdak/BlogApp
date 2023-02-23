import React from 'react';
import Navlist from './Navlist';
import { useContext } from 'react';
import { UserContext } from '../App';
import "./Sidebar.css";
function Sidebar() {
    const { state} = useContext(UserContext);
    let style = {
        opacity : 0,
        width : "0px"
    };
    if(state){
        style.opacity = 1;
        style.width = "250px";
    }
    else{
        style.opacity = 0;
        style.width = "0px";
    }
    return (
        <div className = "sidebar" style = {style}>
            <ul className = "sidebar_list">
                    <Navlist name = "Home" />
                    <Navlist name = "Write" />
                </ul>
        </div>
    )
}

export default Sidebar
