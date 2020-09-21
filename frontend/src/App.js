import React, { useState, useEffect } from 'react';
import { getPokemons } from './services';
import { Card } from './components/Card';

function App() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {

        const load = async() => {
            const newPokemons = await getPokemons();
            setPokemons(newPokemons.data);
        };
    
        load();

    }, []);

    return (
        <div className="container mx-auto flex flex-col items-center font-sans text-lg font-medium">
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-6">
                {pokemons.map(p => 
                    <li>
                        <Card
                            name={p.name} 
                            pokemonImageUrl={p.frontImage}
                            typeImageUrl="https://cdn.pixabay.com/photo/2018/05/20/01/41/pokemon-3414810_960_720.png"
                            pokedexNumber={p.pokedexNumber}
                            />
                    </li>  
                )}
            </ul>
        </div>
    );
}

export default App;
