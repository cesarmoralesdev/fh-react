import { GiftList } from "./gifs/components/GiftList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { useGifs } from "./gifs/hooks/useGifs"

export const GiftApp = () => {
    const { previousSearches, gifs, handleTermClickedCacheHookUseRef, handleSearch } = useGifs();

    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gift perfecto" />
            {/* Search */}
            <SearchBar placeHolder="Buscar gift" buttonText="Buscar" onSearch={handleSearch} />
            {/* Busquedas previas */}
            <PreviousSearches title="Busquedas previas" searches={previousSearches} onTermClicked={handleTermClickedCacheHookUseRef} />
            {/* Gif */}
            {gifs.length > 0 && <GiftList gifs={gifs} />}
        </>
    )
}
