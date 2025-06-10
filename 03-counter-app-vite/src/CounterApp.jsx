import { useState } from 'react';
import { z } from 'zod';


const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);

    //Se puede poner la funcion fuera del componente (siempre y cuando no necesite un parametro del componete), pero solo funcionaria la primera vez que carga el componente, si se actualiza se perderia la referencia a la funcion
    const handleAdd = () => {
        //En versiones anteriores de React, si habia varios setXXX, por cada uno hacia un render, ahora todos los setXXX  se ejecutan y cuando terminan recien se hace el render
        setCounter(counter + 1);
    }

    const handleSubtract = () => setCounter(counter - 1);
    const handleReset = () => setCounter(value);

    const schema = z.object({ value: z.number() });

    const validatedValue = schema.parse({ value });

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={ handleAdd }>+</button>
            <button onClick={ handleSubtract }>-</button>
            <button aria-label='btn-reset' onClick={ handleReset }>Reset</button>
        </>
    );
}
export default CounterApp;