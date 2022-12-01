 import React, {useState, useEffect} from "react";
import RenderCards from './RenderCards';

function Home() {

  const [pokemon, setPokemon] = useState([])

  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(res => res.json())
    .then(data => setPokemon(data.results))
  }, [])

const callRenderCards = pokemon.map((poke)=>{
  return <RenderCards url={poke.url} key={poke.name}/>
})


  return (
    <div className="App">
      {callRenderCards}
    </div>
  );
}

export default Home;