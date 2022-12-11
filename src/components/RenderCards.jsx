// import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';




function RenderCards({url, isPikachuMode}){

 const [thisPokemon, setThisPokemon] = useState(null);
 const [savedMsg, setSavedMsg] = useState(false)

 useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(({name, id, sprites, types}) => setThisPokemon({name, id, sprites, types}))
    
 },[])
 
function handleSave(){
    setSavedMsg(true)
    setTimeout(() => {
      setSavedMsg(false)
    }, 3000);
    const pokemonData = {
        name : thisPokemon.name.toUpperCase(),
        pokeId : thisPokemon.id,
        image : thisPokemon.sprites.front_default
        
      };
      fetch("http://localhost:3000/pokemon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pokemonData),
      })
        .then((r) => r.json())
        
    }

    return(
        <div className="single-poke-card" >
            <img src={thisPokemon? thisPokemon.sprites.front_default : null} alt={'Gathering pokeballs...'}/>
            <p className={isPikachuMode? 'pikachu-text' : null}>{thisPokemon? thisPokemon.id + ' - ' + thisPokemon.name.toUpperCase() : null}</p>
            <Button variant="danger" onClick={handleSave}>Steal Pokemon</Button>
            {savedMsg && <p>Caught it!</p>}      
        </div>
    ) 
}

export default RenderCards;

