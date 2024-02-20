const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const RouterPokemon = require("./RouterPokemon");
const RouterType = require("./RouterType");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemon", RouterPokemon);
router.use("/tipo", RouterType );

module.exports = router;
