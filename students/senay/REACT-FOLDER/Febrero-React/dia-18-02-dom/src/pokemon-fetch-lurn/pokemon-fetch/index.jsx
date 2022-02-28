import { useState, useEffect } from 'react';
import './style.css'
import React from 'react';


function PokemonFetch() {
    console.log('hello')
    const [pokemon, setPokemon] = React.useState(null);

    // const handleEvent = (e) => {
    //     setPoke(e.target.value)
    // }


    React.useEffect(() => {
        console.log('useEffect')
        pokeApi()
    }, []);

    const pokeApi = async () => {
        const d = fetch(`https://pokeapi.co/api/v2/pokemon/`)
        const r = await d.json()
        console.log(r)
        setPokemon(r)
    }

    return (
        <div>
            <h1>nosotros</h1>
            <ul>
                {
                    pokemon.map(i => (
                        <li>key={i.name}</li>
                    ))
                }
            </ul>
        </div>
        // <header className="pokemon__header">
        //     <h1 className="pokemon__header--header">Pokemon Stats</h1>
        //     <div className="type-search-container">
        //         <input onChange={handleEvent} className='inp' type="text" />
        //         <button className='submit' type="submit">Search</button>
        //     </div>
        // </header>
    );
}

export default PokemonFetch;