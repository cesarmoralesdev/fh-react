import { Fragment } from 'react'
import { z } from "zod";

export const FirstApp = (props) => {

    // Define el esquema de Zod
    const schema = z.object({
        title: z.string(),
        subtitle: z.string().default("No hay subtitulo"), // Agregué subtitle al esquema si lo usas
        name: z.string().optional(),
    });

    // Parsea los props y obtén el objeto validado con los defaults aplicados
    const validatedProps = schema.parse(props);

    // Desestructura las propiedades del objeto validado
    const { title, subtitle } = validatedProps;

    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            {/* <div data-testid="test-title">{title}</div> */}
            <p>{subtitle}</p>
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    )
}

