import { memo } from "react";

interface Props {
    subtitle: string
    callMyAPI: () => void
    callMyAPIFueraComponente: (myValue: string) => void
}
export const MySubtitle = memo(({ subtitle, callMyAPI, callMyAPIFueraComponente }: Props) => {

    console.log('MySubtitle re-render');

    return (
        <>
            <h6 className="text-2xl font-bold">{subtitle}</h6>

            <button
                className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer"
                onClick={callMyAPI}
            >
                Llamar a funcion con funcion dentro de componente
            </button>

            <button
                className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer"
                onClick={() => callMyAPIFueraComponente(subtitle)}
            >
                Llamar a funcion con funcion fuera de componente
            </button>
        </>
    )
})
