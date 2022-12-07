 import React, {useState, useEffect} from "react";
import RenderCards from './RenderCards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    <div className="poke-cards">
      <h2 className="home-header">Poke Poach List</h2>
             {callRenderCards}
 
    </div>
  );
}

export default Home;