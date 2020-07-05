import express from 'express';
import PokemonController from './controllers/PokemonController/PokemonController';
import PokemonControllerValidator from './controllers/PokemonController/PokemonControllerValidator';
import SeedPokemonsController from './controllers/SeedPokemonsController/SeedPokemonsController';
import SeedPokemonsControllerValidator from './controllers/SeedPokemonsController/SeedPokemonsControllerValidator';
import { celebrate, Joi } from 'celebrate';

const pokemonController = new PokemonController();
const pokemonControllerValidator = new PokemonControllerValidator();
const seedPokemonsController = new SeedPokemonsController();
const seedPokemonsControllerValidator = new SeedPokemonsControllerValidator();
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

routes.get('/pokemon', pokemonController.index);

routes.get('/pokemon/:name', pokemonControllerValidator.validateShow, pokemonController.show);

routes.delete('/pokemon',
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
        })
    }),
    pokemonControllerValidator.validateDelete,
    pokemonController.delete
);

routes.post('/seedpokemons',
    celebrate({
        body: Joi.object().keys({
            max: Joi.number().integer().required(),
        })
    }),
    seedPokemonsControllerValidator.validateCreate,
    seedPokemonsController.create
);

export default routes;