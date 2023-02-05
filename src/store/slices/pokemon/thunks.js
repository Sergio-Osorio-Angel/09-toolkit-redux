import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export function getPokemons(page = 0) {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=' + (page * 10);


    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        // 1. Petición con Fetch
        // const resp = await fetch(url);
        // const data = await resp.json();

        // 2. Petición con Axios
        const resp = await pokemonApi.get(`/pokemon?limit=10&offset= + ${(page * 10)}`);

        const payload = {
            page : page,
            pokemons : resp.data.results
        }

        dispatch(setPokemons(payload));
    }
}