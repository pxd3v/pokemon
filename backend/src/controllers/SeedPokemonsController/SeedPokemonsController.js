import api from '../../api/api';
import knex from '../../database/connection';

class SeedPokemonController {
	async create(req, res)  {
        const { max } = req.body;
        const pokemons = [];

        for(let i = 1; i <= max; i++){
            const { data } = await api.get(`/${i}`);
            const pokemon = {
                name: data.name, 
                height: data.height,
                weight: data.weight, 
                frontImage: data.sprites.front_default,
                backImage: data.sprites.back_default,
                type: data.types.map(t => t.type.name)[0],
                move: data.moves.map(m => m.move.name)[0],
                pokedexNumber: data.id
            }
            console.log(pokemon);
            pokemons.push(pokemon);
        }
        await knex('pokemons').insert(pokemons);
        
		return res.json({
			pokemons
		});
	}
}

export default SeedPokemonController;
