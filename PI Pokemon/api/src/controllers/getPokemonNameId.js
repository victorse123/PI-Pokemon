// const axios = require("axios");
// const { Pokemon, Type } = require("../db");
// const getPokemonNameId = async (req, res) => {
//     let {id, name} = req
//     let urlGet;
//     try {
//         if (id){
//             if(id.length > 4){
//                 console.log("ingresa a buscarlo en la DB");
//                 const pokeDb = await getPokeDbId(id)
//                 return pokeDb
//             }
//             urlGet = `https://pokeapi.co/api/v2/pokemon/${id}`
//         } else {
//             urlGet = `https://pokeapi.co/api/v2/pokemon/${name}`
//         };
        
//         const {data} = await axios.get(urlGet)

//         const pokemon = {
//             id: data.id,
//             name: (data.name).charAt(0).toUpperCase() + (data.name).slice(1),
//             life: data.stats[0].base_stat,
//             stroke: data.stats[1].base_stat,
//             defending: data.stats[2].base_stat,
//             speed: data.stats[5].base_stat,
//             height: data.height,
//             weight: data.weight,
//             imageDefault: data.sprites.other.dream_world.front_default,
//             types: data.types.map((t) => t.types.name)
//         };
//         console.log(pokemon);
//         return pokemon
//     } catch (error) {
//         res.status(404).json({error: error.messaje})
//     }
// }

// const getPokeDbId = async (id, res) => {
//     try {
//         console.log("ingresa a buscarlo en DB");
//             const {dataValues} = await Pokemon.findByPk(id, {
//                 include:{
//                     model: Type,
//                     attributes: ["name"],
//                     through: {attributes: []}
//                 }
//             }) 
//             dataValues.name = (dataValues.name).charAt(0).toUpperCase() + (dataValues.name).slice(1);
//             dataValues.types = dataValues.types.map(e => e.name);

//             console.log(dataValues);
//             return dataValues

//     } catch (error) {
//         res.status(404).json({error: error.messaje})
//     }
// }

// module.exports = getPokemonNameId;

const axios = require("axios");
const { Pokemon, Type } = require("../db");

const getPokemonNameId = async () => {
    let { id, name } = req.params; // Corrección aquí
    let urlGet;
    try {
        console.log('Iniciando getPokemonNameId'); // Log de inicio

        if (id) {
            if (id.length > 4) {
                console.log('Buscando en la DB'); // Log específico para búsqueda en la DB
                const pokeDb = await getPokeDbId(id);
                console.log('Resultado de la DB:', pokeDb); // Log del resultado de la DB
                return res.json(pokeDb); // Añadido retorno aquí
            }
            urlGet = `https://pokeapi.co/api/v2/pokemon/${id}`;
        } else {
            urlGet = `https://pokeapi.co/api/v2/pokemon/${name}`;
        }

        console.log('Realizando solicitud a la API:', urlGet); // Log de la solicitud a la API
        const { data } = await axios.get(urlGet);

        const pokemon = {
            id: data.id,
            name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
            life: data.stats[0].base_stat,
            stroke: data.stats[1].base_stat,
            defending: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            height: data.height,
            weight: data.weight,
            imageDefault: data.sprites.other.dream_world.front_default,
            types: data.types.map((t) => t.type.name),
        };
        console.log('Pokemon obtenido:', pokemon); // Log del Pokemon obtenido
        return res.json(pokemon); // Añadido retorno aquí
    } catch (error) {
        console.error('Error en getPokemonNameId:', error); // Log de error
        res.status(404).json({ error: error.message });
    }
};

const getPokeDbId = async (id) => {
    try {
        console.log("ingresa a buscarlo en DB");
        const { dataValues } = await Pokemon.findByPk(id, {
            include: {
                model: Type,
                attributes: ["name"],
                through: { attributes: [] },
            },
        });
        dataValues.name = dataValues.name.charAt(0).toUpperCase() + dataValues.name.slice(1);
        dataValues.types = dataValues.types.map((e) => e.name);

        console.log(dataValues);
        return dataValues;
    } catch (error) {
        console.error(error);
        return null;
    }
};

module.exports = getPokemonNameId;