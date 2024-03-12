import React, { useEffect, useState} from 'react';
import Nav from './components/nav/Nav.js'
import LadingPag from './components/landingpag/LandingPag.js';
import Cards from "./components/cards/Cards.js"
import Create from "./components/create/Create.js"
import { Route, Routes, useLocation} from 'react-router-dom';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { addAllPokemon, addAllTypes } from './Redux/actions/actions.js';
import Detail from './components/detail/Detail.js';

function App() {
  const {allPokemon} = useSelector((state)=> state)
  const dispatch = useDispatch()
  const location = useLocation()
  const [pagina, setPagina] = useState(1);
  
  useEffect(()=>{
     dispatch(addAllPokemon())
     dispatch(addAllTypes())
  },[dispatch])
  
  return (
    <div className="appDiv">
      {location.pathname !== '/' && <Nav setPagina={setPagina}/>}
      <Routes>
        <Route path="/" element={<LadingPag allPokemon={allPokemon}/>} />
        <Route path="/home"  element={<Cards pagina={pagina} setPagina={setPagina}/>}/>
        <Route path="/create" element={<Create/>} />
        <Route path='detail/:idDetail' element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;