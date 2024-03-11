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

// router.post("/", async (req, res) => {
//     console.log(req.body);
//     try {
//         let newPoke = req.body;
//         // Llama a la función postPokemon directamente
//         await postPokemon(newPoke, res);
        
//         // Verifica que newPoke.type no sea indefinido antes de buscar en la base de datos
//         if (newPoke.type) {
//             // Busca un tipo de Pokémon en la base de datos (DB)
//             let typesDb = await Type.findAll({ where: { name: newPoke.type } });
//             // Se asocia el Pokémon a la base de datos (DB)
//             // Si postPokemon maneja la asociación, esta línea puede no ser necesaria aquí
//             // pokeCreated.addType(typesDb);
//         }
        
//         // Envía la respuesta de éxito solo una vez, fuera del bloque try-catch
//         // res.status(201).send("Pokemon creado correctamente");
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: error.message });
//     }
// });


// router.post('/', async (req, res) => {
//     console.log(req.body);
//     try {      
//         let newPok = req.body;        
//         let pokCreated = await postPokemon(newPok)
//         console.log(pokCreated);
//         //busco tipo de pokemon de la DB..
//         let typesDb = await Type.findAll({ where: { name: newPok.type } });
//         //asocio el pokemon a la DB
//         pokCreated.addType(typesDb);
//         res.status(201).send('Pokemon Creado');
        
//     } catch (error) {
//         res.status(500).json({error: error.messaje})
//         console.log(error);
//     }
// });

// router.post('/', async (req, res) => {
//     console.log(req.body);
//     try {      
//         let newPok = req.body;        
//         let {pokCreated} = await postPokemon(newPok);
//         res.status(201).send('Pokemon Creado');
        
//     } catch (error) {
//         res.status(500).json({error: error.message})
//         console.log(error);
//     }
// });

router.post('/', async (req, res) => {
    console.log(req.body);
    try {      
        let newPok = req.body;        
        let pokCreated = await postPokemon(newPok);

        // Busca los tipos en la base de datos (DB)
        let typesDb = await Type.findAll({ where: { name: newPok.type } });

        // Asocia el Pokémon a los tipos encontrados
        await pokCreated.addType(typesDb);

        res.status(201).send('Pokemon Creado');
        
    } catch (error) {
        res.status(500).json({error: error.message});
        console.log(error);
    }
});

module.exports = router;