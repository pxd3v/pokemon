import express from 'express';
import PokemonController from './controllers/PokemonController';

const pokemonController = new PokemonController();
const routes = express.Router();


routes.post('/pokemon/:name', pokemonController.create);

routes.get('/pokemon', pokemonController.index);

routes.get('/pokemon/:name', pokemonController.show);

routes.delete('/pokemon/:name', pokemonController.delete);

export default routes;