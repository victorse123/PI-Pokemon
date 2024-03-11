const getPokemons = require('./getPokemons')

const getIdPokemon = async (idPokemon) => {
       
        const allPokemons =  await getPokemons()

        const pokemon = allPokemons.filter((pokemon)=> pokemon.id == idPokemon)

        if(pokemon){

            return pokemon;
            
        }else { return 'No se encontro ese id'}
}

module.exports = getIdPokemon;