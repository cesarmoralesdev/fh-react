import { useState } from "react";
import { getGifsBySearch } from "../actions/get-gifs-by-search.action";
import type { Gif } from "../interfaces/gifs.interface";

const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
    const [previousSearches, setPreviousSearches] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [historyGifs, setHistoryGifs] = useState({} as Record<string, Gif[]>);

    const handleTermClickedCacheHook = (term: string) => {
        const gifs = historyGifs[term];
        if (gifs) {
            setGifs(gifs);
        }
    }
    const handleTermClickedCacheFueraHook = async (term: string) => {
        const gifs = gifsCache[term];
        if (gifs) {
            setGifs(gifs);
            return;
        }
        const gifsServer = await getGifsBySearch(term);
        setGifs(gifsServer);
    }
    const handleSearch = async (term: string = '') => {
        term = term.toLocaleLowerCase().trim()
        if (!term || previousSearches.includes(term)) return;
        setPreviousSearches(prev => [term, ...prev].slice(0, 8));
        const gifs = await getGifsBySearch(term);
        // Forma realizada por mi, utilizando el hook useState de React
        setHistoryGifs(prev => ({ ...prev, [term]: gifs }));
        // Forma realizada por el profesor, utilizando una variable fuera del hook useState de React
        gifsCache[term] = gifs;
        setGifs(gifs);
    }
    return { 
        // Properties
        previousSearches,
        gifs, 
        // Methods
        handleTermClickedCacheFueraHook,
        handleSearch
    };

}