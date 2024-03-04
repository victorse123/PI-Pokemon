import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import styles from "./Create.module.css"
import { addAllPokemon, postPokemon } from "..//..//Redux/actions/actions";
import { useNavigate } from "react-router-dom";
import { validate } from "../validate/Validate";

const Create = (prop)=>{
    const {types} = useSelector((state)=> state)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [newPokemon, setNewPokemon] = useState({
        name: '',
        life: 0,
        stroke: 0,
        defending: 0,
        speed: 0,
        height: 0,
        weight: 0,
        imageDefault: '',
        type:[]
        
    })
    const [errors, setErrors] = useState({
        name: '',
        life: '',
        stroke: '',
        defending: '',
        speed: '',
        height: '',
        weight: '',
        imageDefault: ''
    })
    
    const handleChange = (e)=>{
        let{value, name} = e.target;
        if (name === 'weight' || name === 'height') value = Math.ceil(value/10);
        console.log(value, name);
        setNewPokemon({...newPokemon, [name]:value})
        setErrors(validate({...newPokemon, [name]:value}))
    }
    
    const handleType = (e)=>{
        const {id} = e.target;
        const checkbox = document.getElementById(id)
        if (newPokemon.type.length >= 2 && checkbox.checked === true) {
            checkbox.checked = false
            return alert ('El Pokemon pueden ser solo dos Tipos')
        }else if(newPokemon.type.includes(id)){
            console.log("Ya tiene elemento");
            const filtered = newPokemon.type.filter(ty=> ty !== id)
            setNewPokemon({
                ...newPokemon,
                type: filtered
            })
            
        }else{
            setNewPokemon({
                ...newPokemon,
                type:[...newPokemon.type, id]
            })
        } 
    }
    
    useEffect(()=>{
        console.log('Actualizo Estados');
    },[newPokemon, errors])
       
    const handleSubmit = (e)=>{
        e.preventDefault()
        let errores = validate(newPokemon);
        console.log('verifico errores', errores);
        if(Object.keys(errores).length === 0 && (newPokemon.type).length !== 0){
            dispatch(postPokemon(newPokemon))
            dispatch(addAllPokemon())
            alert('CREADO CON EXITO')
            navigate('/home')
        }else if((newPokemon.type).length === 0){
            alert('Seleccionar al menos Un Tipo')
        }else{
            alert('Faltan DATOS')
        }
    }
   
    
    return(
    <div className={styles.divBody}>
        <form className={styles.containerForm} onSubmit={handleSubmit}>
             <div className={styles.inputDiv}>
            <h2><span>NOMBRE</span></h2>
                <input name='name' type="text" onChange={handleChange}/>                
            </div>
            {errors.name ? <p className={styles.errors}>{errors.name}</p> : null}
            <div className={styles.inputDiv}>
            <h2><span>ENERGIA</span></h2>
            <div className={styles.inputDiv2}>
                <input name='life' type="range" onChange={handleChange} min="0" max="250" />
                <p>{newPokemon.life}</p>
            </div>
            </div>
            {errors.life ? <p className={styles.errors}>{errors.life}</p> : null}
            <div className={styles.inputDiv}>
            <h2><span>ATAQUE</span></h2>
            <div className={styles.inputDiv2}>
                <input name='stroke' type="range" onChange={handleChange} min="0" max="250" />
                <p>{newPokemon.stroke}</p>
            </div>
            </div>
            {errors.stroke ? <p className={styles.errors}>{errors.stroke}</p> : null}
            <div className={styles.inputDiv}>
            <h2><span>DEFENSA</span></h2>
            <div className={styles.inputDiv2}>
                <input name='defending' type="range" onChange={handleChange} min="0" max="250" />
                <p>{newPokemon.defending}</p>
            </div>
            </div>
            {errors.defending ? <p className={styles.errors}>{errors.defending}</p> : null}
            <div className={styles.inputDiv}>
            <h2><span>VELOCIDAD</span></h2>
            <div className={styles.inputDiv2}>
                <input name='speed' type="range" onChange={handleChange} min="0" max="250" />
                <p>{newPokemon.speed}</p>
            </div>
            </div>
            {errors.speed ? <p className={styles.errors}>{errors.speed}</p> : null}
            <div className={styles.inputDiv}>
            <h2><span>ALTURA(m)</span></h2>
            <div className={styles.inputDiv2}>
                <input name='height' type="range" onChange={handleChange} min="0" max="1000" />
                <p>{(newPokemon.height/10).toFixed(1)}</p>
            </div>
            </div>
            {errors.height ? <p className={styles.errors}>{errors.height}</p> : null}
            <div className={styles.inputDiv}>
            <h2><span>PESO(kg)</span></h2>
            <div className={styles.inputDiv2}>
                <input name='weight' type="range" onChange={handleChange} min="0" max="20000" />
                <p>{(newPokemon.weight/10).toFixed(1)}</p>
            </div>
            </div>
            {errors.weight ? <p className={styles.errors}>{errors.weight}</p> : null}
            <div className={styles.inputDiv}>
                <h2><span>IMAGEN</span></h2>
                <input name='imageDefault' type="text" onChange={handleChange}/>                
            </div>
            {errors.imageDefault ? <p className={styles.errors}>{errors.imageDefault}</p> : null}
                <h2><span>TIPOS:</span></h2>
            <div className={styles.types}>
            {types?.map(t=>{
                    return (<div className={styles.checkBoxHolder}>
                                <input type="checkbox" id={t.name} className={styles.checkBoxInput} onChange={handleType}/>
                                <label htmlFor={t.name} className={styles.checkBoxWrapper}>
                                    <div className={styles.checkBox}>
                                        <div className={styles.inner}>{(t.name).charAt(0).toUpperCase() + (t.name).slice(1)}</div>
                                    </div>
                                </label>
                            </div>)
            })}
            </div>
            <button className={styles.submitBtn} type="submit"><span>Agregar</span></button>
        </form>
    </div>
    )
}

export default Create