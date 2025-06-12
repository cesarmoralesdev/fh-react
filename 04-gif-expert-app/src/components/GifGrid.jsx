import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages =  await getGifs(category);
        setImages(newImages);
    }

    //solo se ejecuta una vez cuando se crear el componente, Al hacer enter se llama otra vez porque se crea el componente nuevamente en el componente padre
    useEffect(() => {
        getImages();
    }, [])

    return (
        <>
            <h3>{category}</h3>

            <ol>
                {
                    images.map( ({ id,title,url }) => {
                        return (
                            <div key={id}>
                                <li key={id}>{ title }</li>
                                <img src={url} alt={title} />
                            </div>
                        )
                    })
                }
            </ol>
        </>
    )
}
