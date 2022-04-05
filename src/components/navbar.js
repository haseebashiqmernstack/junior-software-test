import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const Navbar=()=>{
    return (<>
         <header>
            <ul>
                <li><Link to='/'>Task One</Link></li>
                <li><Link to='/tasktwo'>Task Two</Link></li>
                <li><Link to='/taskthree'>Task Three</Link></li>
            </ul>
         </header>
    </>)
}
export default Navbar;