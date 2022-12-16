import React from "react";

export default function Filter({setUserSearchInput}){

function handleSearch(event){
    setUserSearchInput(event.target.value.toLowerCase());
}

    return(
        <div> <input type="text" placeholder={'Search Pokemon...'} onChange={handleSearch}></input> </div>
    )
};