 import React, {useState, useEffect} from "react";
import RenderCards from './RenderCards';
import Button from 'react-bootstrap/Button';
import Filter from './Filter'

function Home({isPikachuMode, scrollUpBtn}) {

  const [pokemon, setPokemon] = useState([]);
 
  const [userSearchInput, setUserSearchInput] = useState('');

  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.json())
    .then(data => setPokemon(data.results))
  }, [])

const callRenderCards = pokemon.filter((pokemon)=>pokemon.name.includes(userSearchInput)).map((poke) => {
  return <RenderCards isPikachuMode={isPikachuMode} url={poke.url} key={poke.name}/>
})

  return (
    <div className="poke-cards">
      <div className="home-title">
        <h2 className={"home-header " + isPikachuMode? 'pikachu-text' : null}>POACHING LIST</h2>
      </div>
           <div className="filter-container">
             {<Filter setUserSearchInput={setUserSearchInput}/>}
            </div>
             {callRenderCards}
             {scrollUpBtn}
    </div>
  );
}

export default Home;