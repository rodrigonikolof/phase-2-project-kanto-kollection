import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'
import '../App.css';




function Navbar({isPikachuMode, onPikachuModeClick}){

return (
<nav className={'navbar ' + (isPikachuMode ? "pikachu" : "")}>
  <div className='logo-container'>
  <h1> SECRET POACHING DATABASE</h1>
  <img className='logo' src={logo}/>
  <button onClick={onPikachuModeClick}>{isPikachuMode? 'Rocket Mode':'Pikachu Mode'}</button>

      <div className='navlinks'>
          
         <Link to="/"><div className='pixel'><p>Find Pokemon</p></div></Link>
         
         <Link to="/collection"><div className='pixel'><p>View Collection</p></div></Link>
         
      </div>
    </div>
</nav>
  )
}

export default Navbar;