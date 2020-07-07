import { api } from '../api';

const getPokemon = async (name) => {
    const pokemon = await api.get(`/pokemon/${name}`);
    return pokemon;
}

export default getPokemon;