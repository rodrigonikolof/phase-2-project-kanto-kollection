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

function updateName(id, pokeName){
    console.log (id, pokeName)
    fetch(`http://localhost:3000/pokemon/${id}`,{
        method: "PATCH",
        headers: {
            'Conten-Type' : 'application/json',
        },
        body: JSON.stringify({
            name : pokeName
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

const renderCollection = pokeCollection.map((poke)=>{
return <RenderCollection pokemon={poke} key={poke.id} onDelete={updateAfterDeletion} onUpdate={updateName}/>
})


return (
    <div>
        <h3>{count.current} pokemon sent to the boss</h3>
        {renderCollection}
    </div>
    )
}

export default Collection;