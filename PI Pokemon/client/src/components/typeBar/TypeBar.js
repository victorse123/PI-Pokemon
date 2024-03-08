// import React from "react";
import Styles from './TypeBar.module.css'
import { useDispatch, useSelector } from "react-redux";
import { filterTypePok } from "../../Redux/actions/actions";


const TypeBar = (props)=>{
    const {setPagina} = props
    const {types} = useSelector((state)=> state)
    const dispatch = useDispatch()
    
    
    const handlerType = (e)=>{
        console.log(e.target.value.toLowerCase());
        dispatch(filterTypePok(e.target.value))
        setPagina(1)
        const checkbox1 = document.getElementById(e.target.value)
        setTimeout(() => {
            if(checkbox1.checked) checkbox1.checked = false
        }, 10000);
    };
    
    return( 
    <div>   
        <div action="" className={Styles.container}>
        <h3>Tipo de Pokemon:</h3>
        <input
                        className={Styles.inputBtn}
                        onChange={handlerType} 
                        type="radio" 
                        id='todos' 
                        name="valueIs-radio"  
                        value='todos'
                    />
                    <label
                        className={Styles.neonBtn} 
                        htmlFor='todos'
                    >
                        <span className={Styles.span}></span>
                        <span className={Styles.txt}>TODOS</span>
                    </label>
        {types?.map(t=>{
            return (<div key={t.id}>
                    <input
                        className={Styles.inputBtn}
                        onChange={handlerType} 
                        type="radio" 
                        id={t.name} 
                        name="valueIs-radio"  
                        value={t.name}
                    />
                    <label
                        className={Styles.neonBtn} 
                        htmlFor={t.name}
                    >
                        <span className={Styles.span}></span>
                        <span className={Styles.txt}>{(t.name).toUpperCase()}</span>
                    </label>
                    </div>
            )
        })}
        </div>
        
    </div>
    );

}

export default TypeBar;