import React from "react";
import { useState, useEffect } from 'react'
import RenderCollection from "./RenderCollection";


function Collection(){
const [pokeCollection, setPokeCollection] = useState([]);

useEffect(()=>{
fetch('http://localhost:3000/pokemon')
.then(res => res.json())
.then((data)=>setPokeCollection(data))
},[])

const renderCollection = pokeCollection.map((poke)=>{
return <RenderCollection pokemon={poke} key={poke.id} />
})

return (
    <div>
        {renderCollection}
    </div>
    )
}

export default Collection;