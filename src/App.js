import './App.css';
import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Navbar from './components/Navbar';
import Collection from './components/Collection';
import Button from 'react-bootstrap/Button';



function App() {
const [isPikachuMode, setIsPikachuMode] = useState(false)

function handlePikachuMode (){
  setIsPikachuMode((isPikachuMode)=> !isPikachuMode);
}

function scrollUp(){
  window.scrollTo({top:0, behavior: 'smooth'})
}
const scrollUpBtn = (<div className='scroll-up'><Button variant="secondary" onClick={scrollUp}>Go Top</Button></div>)


  return (
    <div className={"App " + (isPikachuMode ? "pikachu" : "")}>
      <Navbar isPikachuMode={isPikachuMode} onPikachuModeClick={handlePikachuMode}/>
      <Routes>
        <Route index element={<Home isPikachuMode={isPikachuMode} scrollUpBtn={scrollUpBtn}/>} />
        <Route path='/collection' element={<Collection isPikachuMode={isPikachuMode} scrollUpBtn={scrollUpBtn}/>}/>
      </Routes>

    </div>
  );
}

export default App;

