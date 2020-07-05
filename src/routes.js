import express from 'express';
import PokemonController from './controllers/PokemonController';
import { celebrate, Joi } from 'celebrate';
const pokemonController = new PokemonController();
const routes = express.Router();


routes.post('/pokemon/:name', 
    celebrate({
        params: Joi.object().keys({
            name: Joi.string().required(),
        })
    }),
    pokemonController.create
);

routes.get('/pokemon', pokemonController.index);

routes.get('/pokemon/:name', pokemonController.show);

routes.delete('/pokemon/:name', pokemonController.delete);

export default routes;