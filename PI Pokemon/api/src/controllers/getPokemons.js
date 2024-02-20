const axios = require("axios");
const { Pokemon, Type } = require("../db");

const getPokemons = async (req, res) => {
    try {
        const pokApi = await getPokemonApi()
        const pokDb = await getPokemonDB()
        return pokApi.concat(pokDb)
    } catch (error) {
        res.status(400).json({error: error.messaje})
    }
}

const getPokemonDB = async (req, res) => {
    try {
        const pokemonesDB = await Pokemon.findAll({
            include:{
                model:Type,
                attributes: ["name"],
                through: {attributes: []}
            }
        }) 
        console.log(pokemonesDB[0].name);
        const filterPok = pokemonesDB.map(e => {
            return{
                id: e.id,
                name: (e.name).charAt(0).toUpperCase() + (e.name).slice(1),
                life: e.life,
                stroke: e.stroke,
                defending: e.defending,
                
            }
        })
    } catch (error) {
        
    }
}