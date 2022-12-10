import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'
import '../App.css';
import Button from 'react-bootstrap/Button';



function Navbar(){

return (
<nav className='navbar'>
  <div className='logo-container'>
  <h1> SECRET POACHING DATABASE</h1>
  <img className='logo' src={logo}/>
  
      <div className='navlinks'>
          
          {/* <Link to="/"><Button variant="light">Find Pokemon</Button></Link>
         
          <Link to="/collection"><Button variant="light">View Collection</Button></Link> */}

        <Link to="/"><div className='pixel'><p>Find Pokemon</p></div></Link>
         
         <Link to="/collection"><div className='pixel'><p>View Collection</p></div></Link>
         
      </div>
    </div>
</nav>
  )
}

export default Navbar;