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
    const [isLoading, setIsLoading] = useState(false);

    const getPokemonById = async (id: number) => {
        setIsLoading(true);
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!res.ok) {
            setPokemon(null);
            setIsLoading(false);
            return;
        }

        const data = await res.json();
        const pokemon: Pokemon = {
            id: data.id,
            name: data.name,
            imageUrl: data.sprites.front_default
        }
        setPokemon(pokemon);
        setIsLoading(false);
    }

    useEffect(() => {
        getPokemonById(id);
    }, [id])

    return {
        //Props
        pokemon,
        isLoading,
        //Methods
        getPokemonById,
        //Computed
        formattedId: `#${id.toString().padStart(3, '0')}`,
    }
}
