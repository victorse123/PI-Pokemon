import React, {useEffect, useState} from 'react';
import styles from '..//pagination/Pagination.module.css';

export const Paginations = ({pagina, setPagina, maximo}) => {
  const [input, setInput] = useState (1);
  
  useEffect(()=>{
    setInput(pagina)  
  },[pagina])
  
  const nextPage = () => {
    setInput (parseInt(input) + 1);
    setPagina (parseInt(pagina) + 1);
  };

  const previousPage = () => {
    setInput (parseInt(input) - 1);
    setPagina (parseInt(pagina) - 1);
  };

  const onKeyDown = e => {
    // keyCode numero 13 es cuando usamos 'Enter' en el teclado
    if (e.keyCode === 13) {
      setPagina (parseInt (e.target.value));
      if (parseInt (e.target.value < 1) || parseInt (e.target.value) > Math.ceil (maximo) || isNaN (parseInt (e.target.value))){
        setPagina (1);
        setInput (1);
      } else {
        setPagina (parseInt (e.target.value));
      }
    }
  };
  
  const onChange = e => {
    setInput (parseInt (e.target.value));
  };

  return (
    <div className={styles.container}>
    
      <button 
        className={styles.black}
        disabled={pagina === 1 || pagina < 1} 
        onClick={previousPage}
      >
        Atras
      </button>
      
      <input
        onChange={e => onChange (e)}
        onKeyDown={e => onKeyDown (e)}
        name="page"
        autoComplete="off"
        value={input}
      />
      <p> de {Math.ceil(maximo)} </p>
      
      <button
        className={styles.black}
        disabled={pagina === Math.ceil (maximo) || pagina > Math.ceil (maximo)}
        onClick={nextPage}
      >
        Siguiente
      </button>
      
    </div>
  );
};