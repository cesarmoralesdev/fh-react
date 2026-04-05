import { mockGifs } from "./mock-data/gifs.mock"

export const GiftApp = () => {
    return (
        <>
            {/* Header */}
            <div className="content-center">
                <h1>Buscador de Gifs</h1>
                <p>Descubre y comparte el gift perfecto</p>
            </div>
            {/* Search */}
            <div className="search-container">
                <input type="text" placeholder="Buscar gift" />
                <button>Buscar</button>
            </div>
            {/* Busquedas previas */}
            <div className="previous-searches">
                <h2>Busquedas previas</h2>
                <ul className="previous-searches-list">
                    <li>Goku</li>
                    <li>Saitama</li>
                    <li>Elden King</li>
                </ul>
            </div>
            {/* Gif */}
            <div className="gifs-container">
                {mockGifs.map(gif => (
                    <div key={gif.id} className="gift-card">
                        <img src={gif.url} alt={gif.title} width={gif.width} height={gif.height} />
                        <h3>{gif.title}</h3>
                        <p>{gif.width}x{gif.height} (1.5mb)</p>
                    </div>
                ))}
            </div>

        </>
    )
}
