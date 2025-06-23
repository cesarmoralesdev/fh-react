import { useEffect, useState } from "react"

export const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    useEffect(() => {
        // console.log('Message montado');
        const onMouseMove = ({ x, y }) => {
            // const coords = { x, y };
            // console.log(coords);
            setCoords({ x, y });
        }
        //Si lo trabajamos usando la funcion onMouseMove, podremos desmontarlo despues.
        // Caso contrario si lo trabajariamos con una funcion definida en el mismo addEventListener, no podriamos desmonatarlo despues, porque la referencia se perderia
        window.addEventListener('mousemove', onMouseMove);

        return () => {
            //Seccion de desmonatado del componente, para evitar problemas de rendmiento o memoria validar siempre el desmontado
            // console.log('Message desmontado');
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, []);

    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coords)}
        </>
    )
}
