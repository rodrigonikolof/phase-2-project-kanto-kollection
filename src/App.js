import './App.css';
import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Navbar from './components/Navbar';
import Collection from './components/Collection';



function App() {
const [isPikachuMode, setIsPikachuMode] = useState(false)

function handlePikachuMode (){
  setIsPikachuMode((isPikachuMode)=> !isPikachuMode);
}


  return (
    <div className={"App " + (isPikachuMode ? "pikachu" : "")}>
      <Navbar isPikachuMode={isPikachuMode} onPikachuModeClick={handlePikachuMode}/>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/collection' element={<Collection/>}/>
      </Routes>

    </div>
  );
}

export default App;

