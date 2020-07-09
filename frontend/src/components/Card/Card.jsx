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

    const classes = useStyles();

    return (
        <div className={classes.cardContainer}>
            <div className={classes.headerContainer}>
                <span className={classes.name}>{name}</span>
                <div className={classes.pokedexNumberContainer}>
                    <span className={classes.pokedexNumber}>{pokedexNumber}</span>
                </div>
                <img className={classes.typeImage} src={typeImageUrl}></img>
            </div>
            <div className={classes.pokemonImageContainer}>
                <img className={classes.pokemonImage} src={pokemonImageUrl}></img>
            </div>
        </div>
    );
};

export default Card;