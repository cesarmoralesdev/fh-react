import { z } from 'zod';
export const GifItem = (props) => {

    // Define el esquema de Zod
    const schema = z.object({
        id: z.string().optional(),
        title: z.string(),
        url: z.string(),
    });

    // Parsea los props y obtén el objeto validado con los defaults aplicados
    const validatedProps = schema.parse(props);

    // Desestructura las propiedades del objeto validado
    const { id, title, url } = validatedProps;

    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
