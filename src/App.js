import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Navbar from './components/Navbar';
import Collection from './components/Collection';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/collection' element={<Collection/>}/>
      </Routes>

    </div>
  );
}

export default App;

