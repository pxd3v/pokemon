import express from 'express';
import PokemonController from './controllers/PokemonController';
import PokemonControllerValidator from './controllers/PokemonControllerValidator';

import { celebrate, Joi } from 'celebrate';

const pokemonController = new PokemonController();
const pokemonControllerValidator = new PokemonControllerValidator();
const routes = express.Router();


routes.post('/pokemon', 
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
        })
    }),
    pokemonControllerValidator.validateCreate,
    pokemonController.create
);

routes.get('/pokemon',pokemonController.index);

routes.get('/pokemon/:name', pokemonControllerValidator.validateShow, pokemonController.show);

routes.delete('/pokemon',
celebrate({
    body: Joi.object().keys({
        name: Joi.string().required(),
    })
}),
pokemonControllerValidator.validateDelete, pokemonController.delete);

export default routes;