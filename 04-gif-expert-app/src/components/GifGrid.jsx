export const GifGrid = ({ category }) => {
    return (
        <>
            <div key={category}>
                <h3>{category}</h3>
                <li>{category}</li>
            </div>
        </>
    )
}
