import knex from '../../database/connection';

class SeedPokemonsControllerValidator {
    
    async validateCreate (req, res, next) {
        const { max } = req.body

        const pokemons = await knex('pokemons').select('*');
        if(pokemons.length != 0){
            return res.json("The Pokemons list must be empty");
        }
        if(max < 1) {
            return res.json("Minimum: 1");
        }

        if( max > 150) {   
            return res.json("Maximum allowed is 150 pokemons.!");
        }
        next();
    }
}

export default SeedPokemonsControllerValidator;