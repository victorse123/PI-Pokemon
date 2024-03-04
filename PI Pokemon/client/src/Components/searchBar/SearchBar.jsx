import React, { useState } from "react";
import styles from "..//searchBar/SearchBar.module.css";
import { useDispatch } from "react-redux";
import { addPokemon } from "..//..//Redux/actions/actions";

const SearchBar = (props)=>{
    const dispatch = useDispatch()
    const[pokemon, setPokemon] = useState('')
    
    const handleChange =(e)=>{
        setPokemon(e.target.value)
    }

    const onSearch =()=>{
        console.log(pokemon);
        dispatch(addPokemon(pokemon))
    }
    const onSearchEnter =(e)=>{
        if (e.keyCode === 13) {
            console.log(pokemon);
            dispatch(addPokemon(pokemon))
        }
    }
    
    return(
    <>
        <div className={styles.inputGroup}>
		    <input onChange={handleChange} onKeyDown={onSearchEnter} placeholder="Enter name Pokemon" type="text" />
		    <button onClick={onSearch} className={styles.submitBtn}><span>BUSCAR</span></button>
	    </div>
    </>
    )
}

export default SearchBar;