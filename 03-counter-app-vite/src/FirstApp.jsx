import { Fragment } from 'react'
import { z } from "zod";

export const FirstApp = (props) => {

    // Define el esquema de Zod
    const schema = z.object({
        title: z.string().default("No hay titulo"),
        subtitle: z.string().optional(), // Agregué subtitle al esquema si lo usas
    });

    // Parsea los props y obtén el objeto validado con los defaults aplicados
    const validatedProps = schema.parse(props);

    // Desestructura las propiedades del objeto validado
    const { title, subtitle } = validatedProps;

    return (
        <>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </>
    )
}

