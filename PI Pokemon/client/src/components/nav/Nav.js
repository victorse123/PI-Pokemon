import { useState } from "react"
import SearchBar from "../searchBar/SearchBar"
import TypeBar from "../typeBar/TypeBar";
import {NavLink, useLocation} from "react-router-dom";
import styles from "../nav/Nav.module.css"

const Nav = (props)=>{
    const {setPagina} = props
    const [filterBar, setFilterBar] = useState(false)
    const location = useLocation()
    const [barra, setBarra] = useState(styles.barLeft2)
    
    
    const onTypes =()=>{
        setFilterBar(!filterBar)
        if(filterBar) setBarra(styles.barLeft2)
        // eslint-disable-next-line no-unused-vars
        else setBarra(styles.barLeft);
    }
    
    return(
        <div className={styles.container}>
            <div>
                {location.pathname === "/home" && (
                    <label className={styles.burger} htmlFor="burger">
                        <input onClick={onTypes} type="checkbox" id="burger"/>
                        <span></span>
                        <span></span>
                        <span></span>  
                    </label>
                )} 
            </div>
            <div className={styles.barContai}>
                <NavLink className={styles.submitBtn} to={'/home'}><span>Home</span></NavLink>
                <NavLink className={styles.submitBtn} to={'/create'}><span>Create</span></NavLink>
                {location.pathname === "/home" && 
                    <SearchBar onSearch={(pok) => props.onSearch(pok)}/>
                }
            </div>
            <div>
                {location.pathname === "/home" && (
                    <div className={barra}>
                        <TypeBar setPagina={setPagina}/>
                    </div>
                )}
            </div>
        </div>
        
    )
}

export default Nav;