import type { FC } from "react"
import type { Gif } from "../../mock-data/gifs.mock"

interface Props {
    gifs: Gif[]
}

export const GiftList: FC<Props> = ({ gifs }: Props) => {
    return (
        <div className="gifs-container">
            {gifs.map(gif => (
                <div key={gif.id} className="gift-card">
                    <img src={gif.url} alt={gif.title} width={gif.width} height={gif.height} />
                    <h3>{gif.title}</h3>
                    <p>{gif.width}x{gif.height} (1.5mb)</p>
                </div>
            ))}
        </div>
    )
}
