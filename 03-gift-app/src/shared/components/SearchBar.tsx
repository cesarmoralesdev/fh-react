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

    return (
        <div className="search-container">
            <input type="text" placeholder={placeHolder} onChange={handleChange} />
            <button onClick={() => onSearch(search)}> {buttonText ?? "Buscar"} </button>
        </div>
    )
}
