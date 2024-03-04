import axios from 'axios';
import { ADD_POKEMON_DETAIL, FILTER_DB, FILTER_TYPE, GET_ALLPOKEMON, GET_POKEMON_NAME, GET_POKEMON_TYPES, ORDER_ATAQUEPOKE, ORDER_NAMEPOKE, POST_POKEMON, RESET_DETAIL } from '..//actionType/ActionType';


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

export function addPokDetail(id){
  const endpoint = 'http://localhost:3001/pokemon/'+id;
  return async (dispatch) => {
    try {
      const {data} = await axios.get(endpoint)
        return dispatch({
          type: ADD_POKEMON_DETAIL,
          payload: data
        })      
    } catch (error) {
      console.log(error.message);
    }
  }
}

export function orderNamePok(payload) {
  return {
    type: ORDER_NAMEPOKE,
    payload
  }
}

export function orderAtackPok(payload){
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