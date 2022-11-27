import './App.css';
import React, {useState, useEffect} from "react";



function App() {


const [pokemon, setPokemon] = useState('');

useEffect(()=>{
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(res => res.json())
  .then(data => setPokemon(data.results))
}, [setPokemon])

console.log(pokemon)
// const showPokes =   pokemon.map((poke)=>{
//   return <p>{poke}</p>
// })

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
