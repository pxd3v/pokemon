/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    searchBarContainer: {
        backgroundColor: 'antiquewhite',
        display: 'flex',
        padding: 16,
        borderRadius: 10
    },
    SearchBarButton: {
        
    }

});

const SearchBar = ({ types }) => {

    const classes = useStyles();

    return (
        <ul className={classes.earchBarContainer}>
            {types.map(t => (
                <li key={t.name}>
                    <button 
                        style={classes.searchBarButton} 
                        onClick={t.onClick} > 
                        <img src={t.imageUrl}></img> 
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default SearchBar;