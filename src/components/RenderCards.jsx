// import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { useState, useEffect } from 'react'

function RenderCards({url}){

 const [thisPokemon, setThisPokemon] = useState(null);
 

 useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(({name, id, sprites, types}) => setThisPokemon({name, id, sprites, types}))
 },[])
 

//  if (thisPokemon.types.length > 1) {
//    (thisPokemon.types[0].type.name, thisPokemon.types[1].type.name)}

// types[0].type.name

function handleSave(){
    const pokemonData = {
        name : thisPokemon.name,
        pokeId : thisPokemon.id,
        image : thisPokemon.sprites.front_default,
        types : thisPokemon.types
      };
      fetch("http://localhost:3000/pokemon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pokemonData),
      })
        .then((r) => r.json())
        .then((pokemon) => console.log(pokemon));
    }




    return(
        <div className="pokeCard" >
            <img src={thisPokemon? thisPokemon.sprites.front_default : null} alt={url}/>
            <p>{thisPokemon? thisPokemon.id + ' - ' + thisPokemon.name.toUpperCase() : null}</p>
            <small>{thisPokemon? thisPokemon.types[0].type.name : null}</small>
            {/* <small>{thisPokemon.types.length === 2 ?  thisPokemon.types[1].type.name : null}</small> */}
            <button onClick={handleSave}>Steal Pokemon</button>
            
        </div>
    ) 
}

export default RenderCards;

