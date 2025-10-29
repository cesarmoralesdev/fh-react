import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { z } from 'zod';

export const GifGrid = (props) => {
    const { images, isLoading } = useFetchGifs(category);
    const schema = z.object({
        category: z.string(),
    });
    const validatedProps = schema.parse(props);
    const { category } = validatedProps;
    return (
        <>
            <h3>{category}</h3>
            {isLoading &&
                <h2>Cargando...</h2>}

            <div className="card-grid">

                {!isLoading &&
                    images.map(image => {
                        return <GifItem key={image.id} {...image} />
                    })
                }
            </div>
        </>
    )
}
