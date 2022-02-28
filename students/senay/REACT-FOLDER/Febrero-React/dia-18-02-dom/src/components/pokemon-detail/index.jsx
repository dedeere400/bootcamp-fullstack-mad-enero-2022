import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function PokemonDetail() {
    const [poke, setPoke] = useState();
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(r => r.json())
            .then(p => setPoke(p));
        console.log(setPoke)
    }, []);


    return (
        <h1>{poke}</h1>
    );
}

export default PokemonDetail;