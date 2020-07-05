import api from '../api/api';
import knex from '../database/connection';

class PokemonControllerValidator {
    async validateCreate(req, res, next) {
        const { name } = req.body;

        try {
            await api.get(`/${name}`)
        } catch {
            return res.json("This pokemon does not exist.");
        }
        
        const pokemon = await knex('pokemons').where('name', name).orWhere('pokedexNumber', name).select('*');

        if(pokemon.length > 0){
            return res.json("This pokemon is already on our database.")
        }
        next();
    }

    
}

export default PokemonControllerValidator;