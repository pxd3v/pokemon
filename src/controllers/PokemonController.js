import api from '../api/api';
import knex from '../database/connection';

class PokemonController {
	
	async create(req, res)  {
		const { name } = req.body;
		const { data } = await api.get(`/${name}`);

        const pokemon = await knex('pokemons').insert({
            name: data.name, 
            height: data.height,
            weight: data.weight, 
			frontImage: data.sprites.front_default,
			backImage: data.sprites.back_default,
			type: data.types.map(t => t.type.name)[0],
			move: data.moves.map(m => m.move.name)[0],
			pokedexNumber: data.id
		})

		return res.json({
			name: data.name, 
            height: data.height,
            weight: data.weight, 
			frontImage: data.sprites.front_default,
			backImage: data.sprites.back_default,
			type: data.types.map(t => t.type.name)[0],
			move: data.moves.map(m => m.move.name)[0],
			pokedexNumber: data.id
		});
	}

	async index (req, res) {
		
		const { type } = req.query;

		const allPokemons = type ? await knex('pokemons').where('type', type).select('*') : await knex('pokemons').select('*');

		return res.json(allPokemons);
	}

	async show(req, res)  {
		
		const { name } = req.params;

		const pokemon = await knex('pokemons').where('name', name).select('*');

		return res.json(pokemon);
	}

	async delete(req, res)  {
		
		const { name } = req.params;

		await knex('pokemons').where('name', name).del();

		return res.json({ message: 'Pokemon delected'})

	}

}

export default PokemonController;
