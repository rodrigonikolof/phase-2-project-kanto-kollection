 import React, {useState, useEffect} from "react";
import RenderCards from './RenderCards';

function Home() {

const [pokes, setPokes] = useState([]);
const [pokemon, setPokemon] = useState([])

useEffect(()=>{
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(res => res.json())
  .then(data => setPokes(data.results))
}, [])



useEffect(()=>{
pokes.map((poke)=>{
  fetch(`${poke.url}`)
  .then(res => res.json())
  .then(data => console.log(data.name)) 
  
  })
}, [pokes,setPokes])



  return (
    <div className="App">
      {/* <RenderCards pokemon={pokemon}/> */}
    </div>
  );
}

export default Home;