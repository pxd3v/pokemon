import api from '../api/api';
import knex from '../database/connection';

class PokemonController {
	async create(req, res)  {
		const { name } = req.params;
		const { data } = await api.get(`/${name}`);
        const pokemon = await knex('pokemons').insert({
            name: data.name, 
            height: data.height,
            weight: data.weight, 
			frontImage: data.sprites.front_default,
			backImage: data.sprites.back_default,
			type: data.types.map(t => t.type.name)[0],
			move: data.moves.map(m => m.move.name)[0],
		})
		return res.json({
			name: data.name, 
            height: data.height,
            weight: data.weight, 
			frontImage: data.sprites.front_default,
			backImage: data.sprites.back_default,
			type: data.types.map(t => t.type.name)[0],
			move: data.moves.map(m => m.move.name)[0],
		});
	}

	async index (req, res) {
	}

	async show(req, res)  {
	}

	async delete(req, res)  {
	}

	async update(req, res)  {
	}
}

export default PokemonController;
