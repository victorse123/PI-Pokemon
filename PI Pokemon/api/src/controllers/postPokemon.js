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

        // Extraer datos del cuerpo de la solicitud
        let { name, life, stroke, defending, speed, height, weight, imageDefault } = req.body;

        console.log('Creando Pokemon en la base de datos'); // Log de creación en la base de datos

        // Crear el Pokemon en la base de datos
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

        // Enviar una respuesta al cliente indicando que la creación fue exitosa
        return res.status(201).json({ message: 'Pokemon creado correctamente', pokemon: pokeCreated });

    } catch (error) {
        console.error('Error en postPokemon:', error); // Log de error

        // Enviar una respuesta de error al cliente
        res.status(500).json({ message: 'Error al crear el Pokemon', error: error.message });
    }
};

module.exports = postPokemon;