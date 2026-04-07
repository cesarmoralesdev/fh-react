import { useEffect, useState, type FC } from "react";

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

    useEffect(() => {
        //Implementacion de debounce para evitar que se dispare la busqueda cada vez que el usuario escribe una letra, se dispara despues de 700ms de que el usuario deje de escribir
        const timeoutId = setTimeout(() => {
            onSearch(search);
        }, 700);
        return () => {
            //se dispara cada vez que el componente se desmonta o antes de que se ejecute el efecto nuevamente
            // console.log('Funcion de limpieza');
            clearTimeout(timeoutId);
        };
    }, [search, onSearch]);

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
