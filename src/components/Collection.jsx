import React from "react";
import { useState, useEffect, useRef} from 'react'
import RenderCollection from "./RenderCollection";


function Collection(){
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
return <RenderCollection pokemon={poke} key={poke.id} onDelete={updateAfterDeletion} />
})


return (
    <div className="collection-container">
        <div className="collection-header">
            <h2>Poached Pokemon</h2>
            <h3>{count.current} pokemon sent to the boss</h3>
        </div>
        {renderCollection}
    </div>
    )
}

export default Collection;