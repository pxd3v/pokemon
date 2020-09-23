/* eslint-disable react/prop-types */
import React from 'react';

const Card = ({ name, pokemonImageUrl, pokedexNumber, typeImageUrl }) => {

    return (
        <div className="flex flex-col justify-center items-center bg-red-100 rounded shadow-md hover:shadow-xl transform hover:-translate-y-3" >
            <div className="container mx-auto flex bg-blue-600 p-2 items-center rounded">
                <span className="flex-1 text-white font-bold">{name.split('').map((letter, i) => {
                    if(i === 0){
                        return letter.toUpperCase();
                    }
                    return letter;
                })}</span>
                <div className="w-8 rounded-full border-yellow-500 border-4 font-extrabold text-base text-white bg-yellow-500 flex items-center justify-center mr-2">
                    {pokedexNumber}
                </div>
                <img className="w-8" src={typeImageUrl}></img>
            </div>
            <div>
                <img className="w-64 h-64 object-cover" src={pokemonImageUrl}></img>
            </div>
        </div>
    );
};

export default Card;