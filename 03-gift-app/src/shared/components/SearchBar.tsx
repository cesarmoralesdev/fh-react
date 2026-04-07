import { useState, type FC } from "react";

interface Props {
    placeHolder: string;
    buttonText?: string;
    onSearch: (term: string) => void;
}
export const SearchBar: FC<Props> = ({ placeHolder = 'Buscar', onSearch, buttonText }: Props) => {
    const [search, setSearch] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }
    const handleSearch = () => {
        onSearch(search);
        setSearch("");
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") handleSearch();
    };
    return (
        <div className="search-container">
            <input
                type="text" 
                placeholder={placeHolder} 
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={search}
            />
            <button 
                onClick={handleSearch}> 
                {buttonText ?? "Buscar"}
            </button>
        </div>
    )
}
