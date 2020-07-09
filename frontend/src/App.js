import React, { useState, useEffect } from 'react';
import './App.css';
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
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {pokemons.map(p => 
                <div style={{alignItems: 'center', marginTop: 20}}>
                    <Card 
                        name={p.name} 
                        pokemonImageUrl={p.frontImage}
                        typeImageUrl="https://cdn.pixabay.com/photo/2018/05/20/01/41/pokemon-3414810_960_720.png"
                        pokedexNumber={p.pokedexNumber}
                    />
                </div>  
            )}
        </div>
    );
}

export default App;
