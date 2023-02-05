import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon/thunks";

export default function PokemonApp() {

    // 1. Utilizar el dispatch del Redux
    const dispath = useDispatch();

    // 2. Seleccionar datos del Store del Redux
    const {isLoading, pokemons, page} = useSelector( (state) => state.pokemon);

    useEffect(() => {
        dispath( getPokemons() );
    }, [])

    return (
        <>
            <h1>Pokemon App</h1>
            <hr />
            <span>Loading: { isLoading ? 'True' : 'False' } </span>

            <ul>
                {
                    pokemons.map(pokemon => 
                        <li key={pokemon.name}>{pokemon.name}</li>
                    )
                }
            </ul>

            <button disabled={ isLoading }>
                Next
            </button>
        </>
    )
}

