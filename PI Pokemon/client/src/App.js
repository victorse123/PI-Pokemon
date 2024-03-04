/* eslint-disable no-unused-vars */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App




import React, { useEffect, useState} from 'react';
import Nav from './components/nav/Nav.jsx'
import LadingPag from './components/landingpag/LandingPag.jsx';
import Cards from "./components/cards/Cards.jsx"
import Create from "./components/create/Create.jsx"
import { Route, Routes, useLocation} from 'react-router-dom';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { addAllPokemon, addAllTypes } from './Redux/actions/actions.js';
import Detail from './components/detail/Detail.jsx';

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