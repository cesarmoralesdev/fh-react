import { useState } from "react"
import { GiftList } from "./gifs/components/GiftList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { getGifsBySearch } from "./gifs/actions/get-gifs-by-search.action"

export const GiftApp = () => {
    const [previousSearches, setPreviousSearches] = useState<string[]>(["Goku", "Saitama", "Elden King"]); // TODO: Implementar estado para busquedas previas

    const handleTermClicked = (term: string) => {
        console.log(term);
    }
    const handleSearch = async (term: string = '') => {
        term = term.toLocaleLowerCase().trim()
        if (!term || previousSearches.includes(term)) return;
        setPreviousSearches(prev => [term, ...prev].slice(0, 8));
        const gifs = await getGifsBySearch(term);
        console.log(gifs);
    }

    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gift perfecto" />
            {/* Search */}
            <SearchBar placeHolder="Buscar gift" buttonText="Buscar" onSearch={handleSearch} />
            {/* Busquedas previas */}
            <PreviousSearches title="Busquedas previas" searches={previousSearches} onTermClicked={handleTermClicked} />
            {/* Gif */}
            <GiftList gifs={mockGifs} />
        </>
    )
}
