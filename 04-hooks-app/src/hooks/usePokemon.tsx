import { useEffect, useState } from "react";

interface Pokemon {
    id: number
    name: string
    imageUrl: string
}

interface Props {
    id: number
}

export const usePokemon = ({ id }: Props) => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    const getPokemonById = async (id: number) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        const pokemon: Pokemon = {
            id: data.id,
            name: data.name,
            imageUrl: data.sprites.front_default
        }
        setPokemon(pokemon);
    }

    useEffect(() => {
        getPokemonById(id);
    }, [id])

    return {
        //Props
        pokemon,
        //Methods
        getPokemonById,
        //Computed
    }
}
