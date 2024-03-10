// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
// import Card from "../card/Card";
// import styles from './Cards.module.css'
// import { Pagination } from "../pagination/Pagination";
// import { useDispatch, useSelector } from "react-redux";
// import { filterDB, orderAtackPoke, orderNamePoke, resetDetail } from "../../Redux/actions/actions"

// // Selector específico para obtener el estado de los Pokémon
// const pokemonSelector = (state) => state.pokemon;

// const Cards = (props)=>{

//      // Utilizar el selector específico
//     const {pokemon} = useSelector(pokemonSelector)
//     const dispatch = useDispatch()
    
//     const {pagina, setPagina} = props;
//     const [porPagina] = useState(12);
    
//     const [order, setOrder] = useState('');
//     const [atack, setAtack] = useState('');
//     const pagIni = (pagina - 1) * porPagina;
//     const pagFin = (pagina - 1) * porPagina + porPagina;   
    
//     // Añadir verificación para pokemon
//     let maximo = pokemon ? pokemon.length / porPagina : 0;
    
//     useEffect(()=>{
//         // Resetea los detalles al montar o desmontar el componente
//         dispatch(resetDetail())
//     },[dispatch])
    
//     const handleOrderName = (e)=>{
//         e.preventDefault();
//         // Ordena los Pokémon por nombre según la opción seleccionada
//         dispatch(orderNamePoke(e.target.value));
//         setOrder(e.target.value);
//         setPagina(1)
//     }
    
//     const handleOrderAtaque = (e)=>{
//         e.preventDefault()
//         // Ordena los Pokémon por ataque según la opción seleccionada
//         dispatch(orderAtackPoke(e.target.value))
//         setAtack(e.target.value)
//         setPagina(1)
//     }
    
//     const handlerData = (e)=>{
//         console.log(e.target.checked);
//         // Filtra los Pokémon según si fueron creados en la base de datos o no
//         dispatch(filterDB(e.target.checked))
//         setPagina(1)
//     }
    
//     return(
//         <div>
//             {/* Sección para filtros y controles de paginación */}
//             <div className={styles.filterDiv}>
//                 <div className={styles.select}>
//                     {/* Selector para ordenar por nombre */}
//                 <select onChange={handleOrderName} value={order}>
//                     <option value='name'>Nombre</option>
//                     <option value='asc'>A - Z</option>
//                     <option value='desc'>Z - A</option>
//                 </select>
//                 </div>
//                 <div className={styles.select}>
//                  {/* Selector para ordenar por ataque */}
//                 <select onChange={handleOrderAtaque} value={atack}>
//                     <option value="ataque">Ataque</option>
//                     <option value="mayorAtaque">+ Ataque</option>
//                     <option value="menorAtaque">- Ataque</option>
//                 </select>
//                 </div>
//                  {/* Interruptor para filtrar Pokémon creados en la base de datos */}
//                 <label className={styles.switch}>
//                     <input onChange={handlerData} type="checkbox"/>
//                     <span className={styles.slider}></span>
//                 </label>
//             </div>
//              {/* Contenedor de las tarjetas de Pokémon */}
//             <div>
//                {pokemon.length > 12 && <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo}/>}
//             </div>
//             <div className={styles.cardsDiv}>
//                  {/* Mapeo de los Pokémon para mostrar sus tarjetas */}
//             {pokemon.slice(pagIni,pagFin).map((p) =>
//                 <Card
//                     key={p.id}
//                     id={p.id}
//                     name={p.name}
//                     life={p.life}
//                     stroke={p.stroke}
//                     defending={p.defending}
//                     speed={p.speed}
//                     height={p.height}
//                     weight ={p.weight}               
//                     imageDefault={p.imageDefault}
//                     imageF={p.imageF}
//                     types={p.types}
//                 />
//             )}
            
//             </div>
//              {/* Sección final con controles adicionales y créditos */}
//             <div>
//                {pokemon.length > 12 && <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo}/>}
//                <p>@victorse123</p>
//             </div>
            
//         </div>
//     )
// }

// export default Cards;


/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import styles from './Cards.module.css'
import { Pagination } from "../pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { filterDB, orderAtackPoke, orderNamePoke, resetDetail } from "../../Redux/actions/actions"


const Cards = (props)=>{

     // Utilizar el selector específico
    const {pokemon} = useSelector((state)=> state)
    const dispatch = useDispatch()
    
    const {pagina, setPagina} = props;
    const [porPagina] = useState(12);
    
    const [order, setOrder] = useState('');
    const [atack, setAtack] = useState('');
    const pagIni = (pagina - 1) * porPagina;
    const pagFin = (pagina - 1) * porPagina + porPagina;   
    
    
    let maximo = pokemon.length / porPagina;
    
    useEffect(()=>{
        // Resetea los detalles al montar o desmontar el componente
        dispatch(resetDetail())
    },[dispatch])
    
    const handleOrderName = (e)=>{
        e.preventDefault();
        // Ordena los Pokémon por nombre según la opción seleccionada
        dispatch(orderNamePoke(e.target.value));
        setOrder(e.target.value);
        setPagina(1)
    }
    
    const handleOrderAtaque = (e)=>{
        e.preventDefault()
         // Ordena los Pokémon por ataque según la opción seleccionada
        dispatch(orderAtackPoke(e.target.value))
        setAtack(e.target.value)
        setPagina(1)
    }
    
    const handlerData = (e)=>{
        console.log(e.target.checked);
        // Filtra los Pokémon según si fueron creados en la base de datos o no
        dispatch(filterDB(e.target.checked))
        setPagina(1)
    }
    
    return(
        <div>
              {/* Sección para filtros y controles de paginación */}
            <div className={styles.filterDiv}>
                <div className={styles.select}>
                       {/* Selector para ordenar por nombre */}
                <select onChange={handleOrderName} value={order}>
                    <option value='name'>Nombre</option>
                    <option value='asc'>A - Z</option>
                    <option value='desc'>Z - A</option>
                </select>
                </div>
                <div className={styles.select}>
                     {/* Selector para ordenar por ataque */}
                <select onChange={handleOrderAtaque} value={atack}>
                    <option value="ataque">Ataque</option>
                    <option value="mayorAtaque">+ Ataque</option>
                    <option value="menorAtaque">- Ataque</option>
                </select>
                </div>
                 {/* Interruptor para filtrar Pokémon creados en la base de datos */}
                <label className={styles.switch}>
                    <input onChange={handlerData} type="checkbox"/>
                    <span className={styles.slider}></span>
                </label>
            </div>
              {/* Contenedor de las tarjetas de Pokémon */}
            <div>
               {pokemon.length > 12 && <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo}/>}
            </div>
            <div className={styles.cardsDiv}>
                  {/* Mapeo de los Pokémon para mostrar sus tarjetas */}
            {pokemon.slice(pagIni,pagFin).map((p) =>
                <Card
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    life={p.life}
                    stroke={p.stroke}
                    defending={p.defending}
                    speed={p.speed}
                    height={p.height}
                    weight ={p.weight}               
                    imageDefault={p.imageDefault}
                    imageF={p.imageF}
                    types={p.types}
                />
            )}
            
            </div>
              {/* Sección final con controles adicionales y créditos */}
            <div>
               {pokemon.length > 10 && <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo}/>}
               <p>@victorse123</p>
            </div>
            
        </div>
    )
}

export default Cards;