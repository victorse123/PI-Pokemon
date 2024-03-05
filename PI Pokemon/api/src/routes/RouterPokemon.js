const { Router } = require("express");
const getPokemons = require("../controllers/getPokemons");
const getPokemonNameId = require("../controllers/getPokemonNameId");
const postPokemon = require("../controllers/postPokemon");
const {Type} = require("../db");

const router = Router();
router.get("/", async (req, res) => {
    console.log('Ruta "/pokemon" alcanzada');
    const {name} = req.query
    try {
        if(name) {
            const poke = await getPokemonNameId({name})
            return res.json(poke)
        } else {
            console.log("paso por All");
            const pokemons = await getPokemons()
            return res.json(pokemons)
        }
    } catch (error) {
        res.status(500).json({error: error.messaje})
    }
});

router.get("/:id", async (req, res) =>{
    const {id} = (req.params);
    try {
        const pokeID = await getPokemonNameId({id})
        res.json(pokeID)
    } catch (error) {
        res.status(500).json({error: error.messaje})
    }
});

router.post("/", async (req, res) => {
    console.log(req.body);
    try {
        let newPoke = req.body;
        // Llama a la función postPokemon directamente
        await postPokemon(newPoke, res);
        // No necesitas desestructurar pokeCreated aquí ya que no se retorna así en postPokemon
        // console.log(pokeCreated);

        // Busca un tipo de pokemon en la database (DB)
        let typesDb = await Type.findAll({ where: { name: newPoke.type } });
        // Se asocia el Pokemon a la database (DB)
        // Si postPokemon maneja la asociación, esta línea puede no ser necesaria aquí
        // pokeCreated.addType(typesDb);

        // Envía la respuesta de éxito solo una vez, fuera del bloque try-catch
        res.status(201).send("Pokemon creado correctamente");
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;