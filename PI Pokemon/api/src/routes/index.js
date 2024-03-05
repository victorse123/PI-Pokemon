// const { Router } = require('express');
// // Importar todos los routers;
// // Ejemplo: const authRouter = require('./auth.js');
// const RouterPokemon = require("./RouterPokemon");
// const RouterType = require("./RouterType");

// const router = Router();

// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);

// router.use("/pokemon", RouterPokemon);
// router.use("/tipo", RouterType );

// module.exports = router;


const { Router } = require('express');
const RouterPokemon = require("./RouterPokemon");
const RouterType = require("./RouterType");

const router = Router();

// Configurar los routers
router.use("/pokemon", RouterPokemon);
router.use("/tipo", RouterType);

// Mensaje de consola para verificar que las rutas se están configurando correctamente
console.log('Rutas configuradas: /pokemon, /tipo');

module.exports = router;
