const { Router } = require('express');
const RouterPokemon = require("./RouterPokemon");
const RouterType = require("./RouterType");

const router = Router();

// Configurar los routers
router.use("/pokemon", RouterPokemon);
router.use("/tipo", RouterType);


module.exports = router;
