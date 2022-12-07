import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'
import '../App.css';



function Navbar(){

return (
<nav className='navbar'>
  <div className='logo-container'>
  <h1>Team Rocket's Super Secret Poaching Network</h1>
  <img className='logo' src={logo}/>
  
      <div className='navlinks'>
          
          <Link to="/">Home</Link>
         
          <Link to="/collection">Collection</Link>
         
      </div>
    </div>
</nav>
  )
}

export default Navbar;