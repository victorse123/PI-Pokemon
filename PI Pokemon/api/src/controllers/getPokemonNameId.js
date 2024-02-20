const axios = require("axios");
const { Pokemon, Type } = require("../db");
const getPokemonNameId = async (req, res) => {
    let {id, name} = req
    let urlGet;
    try {
        if (id){
            if(id.length > 4){
                console.log("ingresa a buscarlo en la DB");
                const pokeDb = await getPokeDbId(id)
                return pokeDb
            }
            urlGet = `https://pokeapi.co/api/v2/pokemon/${id}`
        } else {
            urlGet = `https://pokeapi.co/api/v2/pokemon/${name}`
        };
        
        const {data} = await axios.getAdapter(urlGet)

        const pokemon = {
            
        }
    } catch (error) {
        
    }
}