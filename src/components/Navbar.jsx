import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'
import '../App.css';



function Navbar(){

return (
<nav>
<img className='logo' src={logo}/>
    <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        
        <li>
        <Link to="/collection">Collection</Link>
        </li>
    </ul>
</nav>
  )
}

export default Navbar;