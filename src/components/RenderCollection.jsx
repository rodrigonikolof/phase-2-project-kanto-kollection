import React from 'react';
import { useState, useEffect } from 'react'

export default function RenderCollection({pokemon, onDelete}){

const [inputName, setInputName] = useState(false);
const [pokeName, setPokeName] = useState('');
const [isEmpty, setIsEmpty] = useState(false)

useEffect(()=>{
    setPokeName(pokemon.name)
},[])

function handleRename(event){
    setPokeName(event.target.value)
    setIsEmpty(false)
}

function handleSubmit(event){
    event.preventDefault();
    if (pokeName === ''){
        setIsEmpty(true)
    }else{
            
            fetch(`http://localhost:3000/pokemon/${pokemon.id}`,{
            method: "PATCH",
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                name : pokeName
            })
        })
        .then(res => res.json())
        .then(data => setPokeName(data.name))
        .then(()=>setInputName(false))
    }
}

function handleDeleteClick(){
    fetch(`http://localhost:3000/pokemon/${pokemon.id}`,{
        method: "DELETE",
    })
    onDelete(pokemon.id)
}

const showInput = <form onSubmit={handleSubmit}>
    <input type="text" value={pokeName} onChange={handleRename}/>
    <button type='submit'>Submit</button>
</form>





    return(
        <div>
            <img src={pokemon? pokemon.image : null}/>
            <p>{pokemon? pokeName : null}</p>
            <button onClick={()=>{setInputName(!inputName)}}>Rename Pokemon</button>
            {inputName && showInput}
            {isEmpty && <p>Cannot be blank</p>}
            <button onClick={handleDeleteClick}>Send to Giovanni</button>
        </div>
    )
}