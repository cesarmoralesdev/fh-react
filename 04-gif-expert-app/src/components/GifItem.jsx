export const GifItem = ({ id, title, url }) => {
    return (
        <>
            <div>
                <li key={id}>{title}</li>
                <img src={url} alt={title} />
            </div>
        </>
    )
}
