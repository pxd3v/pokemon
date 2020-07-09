import React from 'react';
import SearchBar from './SearchBar';

export default {
    title: 'SearchBar',
    component: SearchBar,
};

const types = [{imageUrl: 'https://cdn.pixabay.com/photo/2018/05/20/01/40/pokemon-3414807_960_720.png', onClick: () => console.log('teste'), name: 'fire'}];


export const ToStorybook = () => (
    <div style={{width: '50px'}}>
        <SearchBar types={types}/>
    </div>
);