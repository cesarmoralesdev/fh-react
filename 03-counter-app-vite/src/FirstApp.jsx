import { Fragment } from 'react'
import { z } from "zod";

export const FirstApp = (props) => {
    let { title, subtitle } = props;

    z.object({
        title: z.string(),
    }).parse(props);

    return (
        <>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </>
    )
}

