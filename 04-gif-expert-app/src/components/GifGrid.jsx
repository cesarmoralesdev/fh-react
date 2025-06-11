import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    //solo se ejecuta una vez cuando se crear el componente, Al hacer enter se llama otra vez porque se crea el componente nuevamente en el componente padre
    useEffect(() => {
        getGifs(category);
    }, [])

    return (
        <>
            <div key={category}>
                <h3>{category}</h3>
                <li>{category}</li>
            </div>
        </>
    )
}
