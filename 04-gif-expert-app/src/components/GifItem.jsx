export const GifItem = ({ id, title, url }) => {
    return (
        <>
            <div key={id}>
                <li key={id}>{title}</li>
                <img src={url} alt={title} />
            </div>
        </>
    )
}
