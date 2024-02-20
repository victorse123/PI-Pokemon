const {Pokemon} = require("../db");

const postPokemon = async (req, res) => {
    try {
        let {name, life, stroke, defending, speed, height, weight, imageDefault} = req;
        // Carga el Pokemon creado a la database (DB)
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
        return {pokeCreated}
    } catch (error) {
        res.status(404).json({error: error.messaje})
        console.log(error);
    }
}

module.export = postPokemon