// Importación de módulos y librerías necesarias
import axios from 'axios';

// Definición de constantes para tipos de acciones
export const ADD_POKEMON_DETAIL = 'ADD_POKEMON_DETAIL';
export const FILTER_DB = 'FILTER_DB';
export const FILTER_TYPE = 'FILTER_TYPE';
export const GET_ALLPOKEMON = 'GET_ALLPOKEMON';
export const GET_POKEMON_NAME = 'GET_POKEMON_NAME';
export const GET_POKEMON_TYPES = 'GET_POKEMON_TYPES';
export const ORDER_ATAQUEPOKE = 'ORDER_ATAQUEPOKE';
export const ORDER_NAMEPOKE = 'ORDER_NAMEPOKE';
export const POST_POKEMON = 'POST_POKEMON';
export const RESET_DETAIL = 'RESET_DETAIL';

// Función asíncrona para obtener la lista de pokemon
export function addAllPokemon(){
  const endpoint = 'http://localhost:3001/pokemon'
  return async function (dispatch){
    let {data} = await axios(endpoint)
    dispatch({
      type:GET_ALLPOKEMON,
      payload: data
    })
  }
}

export function addAllTypes(){
  const endpoint = 'http://localhost:3001/tipo' 
  return async function (dispatch){
    let {data} = await axios(endpoint)
    console.log(data);
    dispatch({
      type:GET_POKEMON_TYPES,
      payload: data
    })
  }
}

export function postPokemon(newPoke){
  const endpoint = 'http://localhost:3001/pokemon'
  return async function (dispatch){
    try {
      const createPok = await axios.post(endpoint, newPoke);
      dispatch({
        type:POST_POKEMON,
        payload: createPok
      })          
    } catch (error) {
      alert ('Verificar si Pokemon ya Existe')
    }
  }   
}

export function addPokemon(name){
  const endpoint = 'http://localhost:3001/pokemon?name='+name;
  return async (dispatch) => {
    try {
      const {data} = await axios.get(endpoint)
        return dispatch({
          type: GET_POKEMON_NAME,
          payload: data
        })      
    } catch (error) {
      alert ('Pokemon NOT FOUND!!!')
    }
  }
}

// export function addPokDetail(id){
//   const endpoint = 'http://localhost:3001/pokemon/'+id;
//   return async (dispatch) => {
//     try {
//       const {data} = await axios.get(endpoint)
//         return dispatch({
//           type: ADD_POKEMON_DETAIL,
//           payload: data
//         })      
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
// }

export function addPokDetail(id) {
  return async (dispatch) => {
    const endpoint = `http://localhost:3001/pokemon/${id}`;

    try {
      const response = await axios.get(endpoint);
      const pokemonDetail = response.data;

      dispatch({
        type: ADD_POKEMON_DETAIL,
        payload: pokemonDetail,
      });
    } catch (error) {
      console.error('Error fetching Pokemon details:', error.message);

      // Puedes agregar un dispatch para manejar el error en Redux si es necesario
      // dispatch({
      //   type: ERROR_FETCHING_POKEMON_DETAILS,
      //   payload: error.message,
      // });
    }
  };
}

export function orderNamePoke(payload) {
  return {
    type: ORDER_NAMEPOKE,
    payload
  };
}

export function orderAtackPoke(payload){
  return{
    type: ORDER_ATAQUEPOKE,
    payload
  }
}

export function filterTypePok(payload){
  return{
    type: FILTER_TYPE,
    payload
  }
}

export function filterDB(payload){
  return{
    type: FILTER_DB,
    payload
  }
}

export function resetDetail(payload){
  return{
    type: RESET_DETAIL,
    payload
  }
}

