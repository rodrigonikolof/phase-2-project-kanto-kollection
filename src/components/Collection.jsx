import React from "react";
import { useState, useEffect, useRef} from 'react'
import RenderCollection from "./RenderCollection";


function Collection({isPikachuMode, scrollUpBtn}){
const [pokeCollection, setPokeCollection] = useState([]);
const count = useRef(0)


useEffect(()=>{
fetch('http://localhost:3000/pokemon')
.then(res => res.json())
.then((data)=>setPokeCollection(data))
},[])


function updateAfterDeletion(deletedPokemonId){
    setPokeCollection(pokeCollection.filter((poke)=>{
        return poke.id !== deletedPokemonId;
    }))
    count.current = count.current + 1;
}


const renderCollection = pokeCollection.map((poke)=>{
return <RenderCollection isPikachuMode={isPikachuMode} pokemon={poke} key={poke.id} onDelete={updateAfterDeletion} />
})


return (
    <div className="collection-container">
        <div className="collection-header">
            <h2 className={isPikachuMode? 'pikachu-text' : null}>POACHED POKEMON</h2>
        </div>
        <div className="counter-container">
                <h4 className={isPikachuMode? 'pikachu-text' : null}>{count.current} pokemon sent</h4>
            
        </div>
        
        {renderCollection}
        {pokeCollection.length>6 ? scrollUpBtn : null}
    </div>
    )
}

export default Collection;