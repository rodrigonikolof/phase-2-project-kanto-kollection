import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

export default function RenderCollection({pokemon, onDelete, isPikachuMode}){

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
    <input type="text" value={pokeName} onChange={handleRename} className="rename-input"/>
    <Button variant="secondary" type='submit'>Submit</Button>
</form>





    return(
        <div className='single-collection-card'>
            <img src={pokemon? pokemon.image : null}/>
            <p className={isPikachuMode? 'pikachu-text' : null}>{pokemon? pokeName : null}</p>
            <Button variant="secondary" onClick={()=>{setInputName(!inputName)}}>Rename Pokemon</Button>
            {inputName && showInput}
            {isEmpty && <p>Cannot be blank</p>}
            <Button variant="danger" onClick={handleDeleteClick}>Send to Giovanni</Button>
        </div>
    )
}