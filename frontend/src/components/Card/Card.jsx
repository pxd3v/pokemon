/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    cardContainer: {
        backgroundColor: 'antiquewhite',
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
        borderRadius: 10
    },
    headerContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: 4,
    },
    name: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'monospace',
        color: 'tomato'
    },
    typeImage: {
        width: 30,
        height: 30
    },
    pokemonImageContainer: {
        backgroundColor: 'aliceblue',
        marginTop: 8,
        borderRadius: 10,
    },
    pokemonImage: {
        width: 218
    },
    pokedexNumberContainer: {
        marginRight: 8,
        borderRadius: 20,
        backgroundColor: 'tomato',
        padding: 6,
        color: 'white',
        fontWeight: 'bold'
    },
    pokedexNumber: {

    },
});
const Card = ({ name, pokemonImageUrl, pokedexNumber, typeImageUrl }) => {

    return (
        <div className="flex flex-col justify-center items-center bg-red-100 rounded">
            <div className="container mx-auto flex bg-red-500 p-2 items-center rounded">
                <span className="flex-1 text-white">{name}</span>
                <div className="mx-3 px-2 bg-yellow-600 text-white rounded-full w-8 flex justify-center items-center font-mono font-extrabold ">
                    <span>{pokedexNumber}</span>
                </div>
                <img className="w-8" src={typeImageUrl}></img>
            </div>
            <div>
                <img className="w-64" src={pokemonImageUrl}></img>
            </div>
        </div>
    );
};

export default Card;