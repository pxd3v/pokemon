import React, { useState, useEffect } from 'react';
import { getPokemons } from './services';
import { Card } from './components/Card';
import logo from './assets/logo.png'
import grass from './assets/grass.png'
import fire from './assets/fire.png'
import water from './assets/water.png'
import electric from './assets/electric.png'
import poison from './assets/poison.png'
import fairy from './assets/fairy.png'
import rock from './assets/rock.png'
import ghost from './assets/ghost.png'
import fighting from './assets/fighting.png'
import normal from './assets/normal.png'
import psychic from './assets/psychic.png'
import ground from './assets/ground.png'
import bug from './assets/bug.png'
import flying from './assets/flying.png'
import ice from './assets/ice.png'
import dark from './assets/dark.png'
import dragon from './assets/dragon.png'
import steel from './assets/steel.png'
import { FilterBar } from './components/FilterBar';

const typeImages = {
    grass,
    fire,
    water,
    electric,
    poison,
    fairy,
    rock,
    ghost,
    fighting,
    normal,
    psychic,
    ground,
    bug,
    flying,
    ice,
    dark,
    dragon,
    steel,
}

function App() {
    const [pokemons, setPokemons] = useState([]);

    const [types, setTypes] = useState(
        [
            {name: "grass", imageUrl: grass, active: true},
            {name: "fire", imageUrl: fire, active: false},
            {name: "water", imageUrl: water, active: false},
            {name: "electric", imageUrl: electric, active: false},
            {name: "poison", imageUrl: poison, active: false},
            {name: "fairy", imageUrl: fairy, active: false},
            {name: "rock", imageUrl: rock, active: false},
            {name: "ghost", imageUrl: ghost, active: false},
            {name: "fighting", imageUrl: fighting, active: false},
            {name: "normal", imageUrl: normal, active: false},
            {name: "psychic", imageUrl: psychic, active: false},
            {name: "ground", imageUrl: ground, active: false},
            {name: "bug", imageUrl: bug, active: false},
            {name: "flying", imageUrl: flying, active: false},
            {name: "ice", imageUrl: ice, active: false},
            {name: "dark", imageUrl: dark, active: false},
            {name: "dragon", imageUrl: dragon, active: false},
            {name: "steel", imageUrl: steel, active: false}
        ]
    );
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const load = async() => 
        {
            setIsLoading(true);
            const newPokemons = await getPokemons(types.find(type => type.active).name);
            setPokemons(newPokemons.data);
            setIsLoading(false);
        };
    
        load();

    }, [types]);

    return (
        <div className="w-full h-full bg-gray-200">
            <div className="container mx-auto flex flex-col items-center font-sans text-lg font-medium">
                <img className="w-6/12 h-64 object-cover" src={logo}/>
                <FilterBar types={types} setTypes={setTypes}/>
                {
                    isLoading ? 
                    <div>...loading</div> 
                    :
                    <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-6">
                    {pokemons.map(p => 
                        <li>
                            <Card
                                name={p.name} 
                                pokemonImageUrl={p.frontImage}
                                typeImageUrl={typeImages[p.type]}
                                pokedexNumber={p.pokedexNumber}
                                />
                        </li>  
                    )}
                    </ul>
                }
            </div>
        </div>
    );
}

export default App;
