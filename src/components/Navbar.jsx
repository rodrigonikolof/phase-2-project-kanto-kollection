import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'
import '../App.css';




function Navbar({isPikachuMode, onPikachuModeClick}){

return (
<nav className={'navbar ' + (isPikachuMode ? "pikachu" : "")}>

<div className='title'>
<h1 className={isPikachuMode? 'pikachu-text' : null}> SECRET POACHING DATABASE</h1>
</div>
  
  <div className='logo-container'> 
  
  <img className='logo' src={logo}/>
  
  </div>
      <div className='navlinks'>
          
         <Link to="/"><div className={isPikachuMode?'pixel2':'pixel'}><p>Find Pokemon</p></div></Link>
         
         <Link to="/collection"><div className={isPikachuMode?'pixel2':'pixel'}><p>View Collection</p></div></Link>

         <div className={isPikachuMode?'pixel2':'pixel'} onClick={onPikachuModeClick}><p>{isPikachuMode? 'Rocket Mode':'Pikachu Mode'}</p></div>
         
      
    </div>
</nav>
  )
}

export default Navbar;