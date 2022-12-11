 import React, {useState, useEffect} from "react";
import RenderCards from './RenderCards';


function Home({isPikachuMode}) {

  const [pokemon, setPokemon] = useState([])

  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(res => res.json())
    .then(data => setPokemon(data.results))
  }, [])

const callRenderCards = pokemon.map((poke)=>{
  return <RenderCards isPikachuMode={isPikachuMode} url={poke.url} key={poke.name}/>
})


  return (
    <div className="poke-cards">
      <div className="home-title">
        <h2 className={"home-header" + isPikachuMode? 'pikachu-text' : null}>POACHING LIST</h2>
      </div>
             {callRenderCards}
 
    </div>
  );
}

export default Home;