import React from 'react';
import Card from './Card';

export default {
    title: 'Card',
    component: Card,
};

export const ToStorybook = () => (
    <div style={{width: '250px'}}>
        <Card 
            name="BULBASAUR" 
            pokemonImageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            typeImageUrl="https://cdn.pixabay.com/photo/2018/05/20/01/41/pokemon-3414810_960_720.png"
            pokedexNumber="1"
        />
    </div>
);