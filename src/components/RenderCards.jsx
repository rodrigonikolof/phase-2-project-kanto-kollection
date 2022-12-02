// import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { useState, useEffect } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function RenderCards({url}){

 const [thisPokemon, setThisPokemon] = useState(null);
 const [savedMsg, setSavedMsg] = useState(false)
 

 useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(({name, id, sprites, types}) => setThisPokemon({name, id, sprites, types}))
 },[])
 

//  if (thisPokemon.types.length > 1) {
//    (thisPokemon.types[0].type.name, thisPokemon.types[1].type.name)}

// types[0].type.name

function handleSave(){
    setSavedMsg(true)
    setTimeout(() => {
      setSavedMsg(false)
    }, 3000);
    const pokemonData = {
        name : thisPokemon.name,
        pokeId : thisPokemon.id,
        image : thisPokemon.sprites.front_default
        // types : thisPokemon.types
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

    // const Modal = () => (
    //   <Popup trigger={<button className="button"> Open Modal </button>} modal>
    //     <span> Modal content </span>
    //   </Popup>
    // );

 

    

    return(
        <div className="pokeCard" >
            <img src={thisPokemon? thisPokemon.sprites.front_default : null} alt={url}/>
            <p>{thisPokemon? thisPokemon.id + ' - ' + thisPokemon.name.toUpperCase() : null}</p>
            <small>{thisPokemon? thisPokemon.types[0].type.name : null}</small>
            {/* <small>{thisPokemon.types.length === 2 ?  thisPokemon.types[1].type.name : null}</small> */}
            <button onClick={handleSave}>Steal Pokemon</button>
            {savedMsg && <p>Saved</p>}
           
            
            
        </div>
    ) 
}

export default RenderCards;

