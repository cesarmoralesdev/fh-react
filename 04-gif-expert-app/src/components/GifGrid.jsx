import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ id, title, url }) => {

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
            <h3>{title}</h3>

            <div key={title} className="card-grid">
                {
                    images.map( ({ id,title,url }) => {
                        return <GifItem id={id} title={title} url={url} />
                    })
                }
            </div>
        </>
    )
}
