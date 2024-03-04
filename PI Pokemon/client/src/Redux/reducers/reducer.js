/* eslint-disable no-case-declarations */
import {
  GET_DOGS,
  GET_DETAILS,
  GET_TEMPERAMENT,
  DOG_POST,
  FILTER_DOG,
  FILTER_CREATED,
  DOG_WANTED,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT
} from "../actions/actions";

const initialState = {
  dogs: [],
  allDogsFilter: [],
  details: [],
  temperaments: [],
  dogsHome: []
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DOGS:
      // Actualiza la lista de perros y la lista filtrada con todos los perros
      return {
        ...state,
        dogs: payload,
        allDogsFilter: payload,
        dogsHome: payload
      };
    case GET_DETAILS:
      // Actualiza los detalles de un perro específico
      return {
        ...state,
        details: payload
      };
    case DOG_POST:
      // Indica que se ha agregado un perro exitosamente
      return {
        ...state
      };
    case GET_TEMPERAMENT:
      // Actualiza la lista de temperamentos disponibles
      return {
        ...state,
        temperaments: payload
      };
    case FILTER_DOG:
      // Filtra la lista de perros según el temperamento seleccionado
      const allDogs = state.allDogsFilter;
      const filteredDogs = payload === 'All' ? allDogs : allDogs.filter(e => e.temperament.includes(payload));
      return {
        ...state,
        dogs: filteredDogs
      };
    case FILTER_CREATED:
      // Filtra los perros creados o no creados en la base de datos
      const allDogsFilter = state.allDogsFilter;
      const createdFilter = payload === 'creados' ? allDogsFilter.filter(d => d.creadoEnDB) : allDogsFilter.filter(d => !d.creadoEnDB);
      return {
        ...state,
        dogs: payload === "All" ? allDogsFilter : createdFilter
      };
    case DOG_WANTED:
      // Actualiza la lista de perros en la página principal
      return {
        ...state,
        dogsHome: payload
      };
    case ORDER_BY_NAME:
      // Ordena la lista de perros por nombre (ascendente o descendente)
      const orderDogsName = payload === 'name_asc' ?
        state.dogs.slice().sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1) :
        state.dogs.slice().sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1);
      return {
        ...state,
        dogs: orderDogsName
      };
    case ORDER_BY_WEIGHT:
      // Ordena la lista de perros por peso (ascendente o descendente)
      const orderDogsKg = payload === 'peso_asc' ?
        state.dogs.slice().sort((a, b) => parseInt(a.weight_min) < parseInt(b.weight_min) ? -1 : 1) :
        state.dogs.slice().sort((a, b) => parseInt(a.weight_min) > parseInt(b.weight_min) ? -1 : 1);
      return {
        ...state,
        dogs: orderDogsKg
      };
    default:
      return state;
  }
};

export default rootReducer;
