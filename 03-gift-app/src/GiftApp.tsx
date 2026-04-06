import { GiftList } from "./gifs/components/GiftList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GiftApp = () => {
    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el gift perfecto" />
            {/* Search */}
            <SearchBar placeHolder="Buscar gift" buttonText="Buscar" />
            {/* Busquedas previas */}
            <PreviousSearches title="Busquedas previas" searches={["Goku", "Saitama", "Elden King"]} />
            {/* Gif */}
            <GiftList gifs={mockGifs} />
        </>
    )
}
