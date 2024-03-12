
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import styles from '../detail/Detail.module.css'
import { imageTypes } from "../../Image/imageTypes";
import { imageImg } from "../../Image/imageImg";

const Detail = (props)=>{
    // Obtiene el dispatch de Redux
    const dispatch = useDispatch()  
     // Obtiene la información del estado utilizando useSelector
    const detail = useSelector((state)=> state.detail)
    // Obtiene el ID de los parámetros de la URL
    const navigate = useNavigate()

    const toUpperCase = useLocation()
         
    return(
    <div className={styles.cont}>
            { !detail || !detail.name ? (
            <div>
                <img src={imageImg.loanding} alt="" />
                </div>
                ) : (
                <>
            <button className={styles.submitBtn} onClick={()=> navigate("/home")}><span>Volver</span></button>
        <div className={styles.container}>
            <div>
                <h1 className={styles.name}><span>{detail.name}</span></h1>
                <div className={styles.container2}>
                    <div>
                        <img className={styles.img} src={detail.imageDefault ? detail.imageDefault : detail.imageF} alt="" />
                    </div>  
                    <div>
                        <div className={styles.tipes}>
                            <div className={styles.typeDiv}>
                                <img src={imageTypes[detail.types[0]]} alt="" />
                                <span>{detail.types[0] && detail.types[0].toUpperCase()}</span>
                            </div>
                            {detail.types[1] 
                            ? (<div className={styles.typeDiv}>
                                    <img src={imageTypes[detail.types[1]]} alt="" />
                                    <span>{detail.types[1].toUpperCase()}</span>
                               </div>)
                            : null}
                            
                        </div>
                        <p>Vida: </p>
                        <div className={styles.progresDiv}>
                            <progress value={detail.life} max='250'/>
                            <p>{detail.life}</p>
                        </div>
                        <p>Ataque: </p>
                        <div className={styles.progresDiv}>
                            <progress value={detail.stroke} max='250'/>
                            <p>{detail.stroke}</p>
                        </div>
                        <p>Defensa: </p>
                        <div className={styles.progresDiv}>
                            <progress value={detail.defending} max='250'/>
                            <p>{detail.defending}</p>
                        </div>
                        <p>Velocidad: </p>
                        <div className={styles.progresDiv}>
                            <progress value={detail.speed} max='250'/>
                            <p>{detail.speed}</p>
                        </div>
                        <div className={styles.container3}>
                            <p>{`Peso: ${detail.weight/10}Kg`}</p>
                            <p>{`Altura: ${detail.height/10}m`}</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        </>)}
    </div>
    )
}

export default Detail;