import express from 'express';
import PokemonController from './controllers/PokemonController';

const pokemonController = new PokemonController();
const routes = express.Router();

routes.get ('/', (req, res) => {
    return res.json({ message: 'Teste!'})
});

routes.post('/pokemon/:name', pokemonController.create)

export default routes;