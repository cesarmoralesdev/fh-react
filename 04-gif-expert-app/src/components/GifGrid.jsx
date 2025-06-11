export const GifGrid = ({ category }) => {

    const API_KEY = 'DIkSxNWZ8gEs6A8W9oS0CRRAL0PhJXnX';
    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=20`;
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }));
        console.log(gifs);
        
        
    }

    getGifs();

    return (
        <>
            <div key={category}>
                <h3>{category}</h3>
                <li>{category}</li>
            </div>
        </>
    )
}
