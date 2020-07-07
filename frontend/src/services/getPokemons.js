import { api } from '../api';

const getPokemons = async (type = '') => {
    const pokemons = await api.get(`/pokemon?type=${type}`);
    return pokemons;
}

export default getPokemons;