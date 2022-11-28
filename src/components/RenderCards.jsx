import React from 'react';
import { useState, useEffect } from 'react'

function RenderCards({url}){

 const [thisPokemon, setThisPokemon] = useState(null);

 useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(({name, id, sprites, types}) => setThisPokemon({name, id, sprites, types}))
 },[])
 
if (thisPokemon){
    console.log(thisPokemon.types)
}


    return(
        <div className="pokeCard" >
            <img src={thisPokemon? thisPokemon.sprites.front_default : null} alt={url}/>
            <p>{thisPokemon? thisPokemon.id + ' - ' + thisPokemon.name : null}</p>
            {/* <small>{thisPokemon? thisPokemon.types : null}</small> */}
            
        </div>
    ) 
}

export default RenderCards;

// pokemon.species.name 
// pokemon.sprites.front_default
// {name, id, sprites, types}