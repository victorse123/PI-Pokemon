/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import styles from './Cards.module.css'
import { Pagination } from "../pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { filterDB, orderAtackPoke, orderNamePoke, resetDetail } from "../../Redux/actions/actions"


const Cards = (props)=>{
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
        dispatch(resetDetail())
    },[dispatch])
    
    const handleOrderName = (e)=>{
        e.preventDefault();
        dispatch(orderNamePoke(e.target.value));
        setOrder(e.target.value);
        setPagina(1)
    }
    
    const handleOrderAtaque = (e)=>{
        e.preventDefault()
        dispatch(orderAtackPoke(e.target.value))
        setAtack(e.target.value)
        setPagina(1)
    }
    
    const handlerData = (e)=>{
        console.log(e.target.checked);
        dispatch(filterDB(e.target.checked))
        setPagina(1)
    }
    
    return(
        <div>
            <div className={styles.filterDiv}>
                <div className={styles.select}>
                <select onChange={handleOrderName} value={order}>
                    <option value='name'>Nombre</option>
                    <option value='asc'>A - Z</option>
                    <option value='desc'>Z - A</option>
                </select>
                </div>
                <div className={styles.select}>
                <select onChange={handleOrderAtaque} value={atack}>
                    <option value="ataque">Ataque</option>
                    <option value="mayorAtaque">+ Ataque</option>
                    <option value="menorAtaque">- Ataque</option>
                </select>
                </div>
                <label className={styles.switch}>
                    <input onChange={handlerData} type="checkbox"/>
                    <span className={styles.slider}></span>
                </label>
            </div>
            <div>
               {pokemon.length > 12 && <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo}/>}
            </div>
            <div className={styles.cardsDiv}>
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
            <div>
               {pokemon.length > 12 && <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo}/>}
               <p>@victorse123</p>
            </div>
            
        </div>
    )
}

export default Cards;