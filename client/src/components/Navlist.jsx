import React from 'react';
import { Link } from 'react-router-dom';
function Navlist({name}) {
    return (
            <li><Link to = {name=="Home"?"/":name}>{name}</Link></li>
    )
}

export default Navlist
