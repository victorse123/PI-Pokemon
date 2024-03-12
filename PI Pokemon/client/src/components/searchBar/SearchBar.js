import { useState } from "react";
import styles from "../searchBar/SearchBar.module.css";
import { useDispatch } from "react-redux";
import { addPokemon } from "../../Redux/actions/actions";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [pokemon, setPokemon] = useState('');

    const handleChange = (e) => {
        setPokemon(e.target.value);
    }

    const onSearch = (e) => {
        console.log(pokemon);
        dispatch(addPokemon(pokemon));
    }

    const onSearchEnter = (e) => {
        if (e.keyCode === 13) {
            console.log(pokemon);
            dispatch(addPokemon(pokemon));
        }
    }

    return (
        <>
            <div className={styles.inputGroup}>
                <input onChange={handleChange} onKeyDown={onSearchEnter} placeholder="Ingresa el nombre del Pokemon" type="text" />
                <button onClick={onSearch} className={styles.submitBtn}><span>BUSCAR</span></button>
            </div>
        </>
    );
}

export default SearchBar;



// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { searchPokemon } from "..//..//Redux/actions/actions";
// import search_icon from "../../../images/Search.png";
// import './SearchBar.module.css';
// import { Link } from "react-router-dom";

// function SearchBar() {
//   const dispatch = useDispatch();
//   const [nameDog, setNameDog] = useState('');
//   const dogsHome = useSelector(state => state.dogsHome);

//   // Función para manejar cambios en el input de búsqueda
//   function handleChange(e) {
//     const name = e.target.value;
//     setNameDog(name);
//     // Realiza la búsqueda solo si hay un nombre escrito
//     if (name) {
//       dispatch(searchDogs(name));
//     }
//   }

//   // Función para limpiar el campo de búsqueda
//   function onSearch() {
//     setNameDog('');
//   }

//   return (
//     <div className="searchBar_Container">
//       {/* Input y botón para la búsqueda */}
//       <div className="divInput_SearchBar">
//         <div className="div_button_search">
//           <img className="searchIcon" src={search_icon} alt="search" />
//         </div>
//         <input
//           className="searchBar"
//           type="text"
//           placeholder="Buscar"
//           onChange={handleChange}
//           value={nameDog}
//         />
//         {/* Botón para limpiar el campo de búsqueda */}
//         <button
//           className={nameDog.length > 0 ? "cleaner active" : "cleaner"}
//           onClick={() => onSearch()}
//         >
//           x
//         </button>
//       </div>

//       {/* Mostrar resultados de la búsqueda */}
//       <div className={nameDog.length !== 0 ? "divSearchBar_Results active" : "divSearchBar_Results"}>
//         <div className="div_nameResult">
//           {nameDog && dogsHome.slice(0, 10).map((d) => (
//             <div key={d.id}>
//               {/* Enlaces de los resultados de búsqueda */}
//               <Link className="results" to={`/home/${d.id}`}>{d.name}</Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SearchBar;