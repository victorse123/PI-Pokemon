// import React from "react";
import Styles from './TypeBar.module.css'
import { useDispatch, useSelector } from "react-redux";
import { filterTypePok } from "../../Redux/actions/actions";


const TypeBar = (props)=>{
    // Extraer setPagina de props y types del estado usando useSelector
    const {setPagina} = props
    const {types} = useSelector((state)=> state)
    const dispatch = useDispatch()
    
    // Manejar el cambio de tipo de Pokemon
    const handlerType = (e)=>{
        console.log(e.target.value.toLowerCase());
        // Despachar la acción para filtrar por tipo
        dispatch(filterTypePok(e.target.value))
        // Reiniciar la página a 1 después de seleccionar un tipo
        setPagina(1)

        // Desmarcar el tipo después de 10 segundos
        
        setTimeout(() => {
            e.target.checked = false;
        }, 10000);
    };
    
    return( 
    <div>   
        <div action="" className={Styles.container}>
        <h3>Tipo de Pokemon:</h3>
         {/* Opción para mostrar todos los tipos */}
        <input
                        className={Styles.inputBtn}
                         
                        type="radio" 
                        id='todos' 
                        name="valueIs-radio"  
                        value='todos'
                    />
                    <label
                        className={Styles.neonBtn} 
                        htmlFor='todos'
                        onClick={handlerType}
                    >
                        <span className={Styles.span}></span>
                        <span className={Styles.txt}>TODOS</span>
                    </label>
         {/* Renderizar opciones para cada tipo */}           
        {types?.map(t=>{
            return (<div key={t.id}>
                    <input
                        className={Styles.inputBtn}
                         
                        type="radio" 
                        id={t.name} 
                        name="valueIs-radio"  
                        value={t.name}
                    />
                    <label
                        className={Styles.neonBtn} 
                        htmlFor={t.name}
                        onClick={handlerType}
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