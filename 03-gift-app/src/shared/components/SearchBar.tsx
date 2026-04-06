interface Props {
    placeHolder: string;
    buttonText?: string;
}
export const SearchBar = ({ placeHolder = 'Buscar', buttonText }: Props) => {
    return (
        <div className="search-container">
            <input type="text" placeholder={placeHolder} />
            <button>{buttonText ?? "Buscar"}</button>
        </div>
    )
}
