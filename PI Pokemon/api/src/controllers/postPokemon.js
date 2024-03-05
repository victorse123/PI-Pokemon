// const {Pokemon} = require("../db");

// const postPokemon = async (req, res) => {
//     try {
//         let {name, life, stroke, defending, speed, height, weight, imageDefault} = req;
//         // Carga el Pokemon creado a la database (DB)
//         let pokeCreated = await Pokemon.create({
//             name, 
//             life, 
//             stroke, 
//             defending, 
//             speed, 
//             height, 
//             weight, 
//             imageDefault
//         });
//         return {pokeCreated}
//     } catch (error) {
//         res.status(404).json({error: error.messaje})
//         console.log(error);
//     }
// }

// module.exports = postPokemon;


const { Pokemon } = require("../db");

const postPokemon = async (req, res) => {
    try {
        console.log('Iniciando postPokemon'); // Log de inicio

        let { name, life, stroke, defending, speed, height, weight, imageDefault } = req.body;

        console.log('Creando Pokemon en la base de datos'); // Log de creación en la base de datos
        let pokeCreated = await Pokemon.create({
            name,
            life,
            stroke,
            defending,
            speed,
            height,
            weight,
            imageDefault
        });

        console.log('Pokemon creado:', pokeCreated); // Log del Pokemon creado
        return res.status(201).send("Pokemon creado correctamente"); // Añadido retorno aquí
    } catch (error) {
        console.error('Error en postPokemon:', error); // Log de error
        res.status(404).json({ error: error.message });
    }
};

module.exports = postPokemon;