import { useState } from 'react'

interface Props {
    name: string,
    //Valor opcional
    quantity?: number,                  //Forma 1: quantity es opcional
    // quantity: number | undefined,    //Forma 2: quantity es obligatorio, al meno pasarlo com undefined
}

export const ItemCounter = ({ name, quantity }: Props) => {
    let [counter, setCounter] = useState(quantity || 0);
    return (
        <section style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
            <span style={{ width: 150 }}>{name}</span>
            <button onClick={() => setCounter(counter++)}>+1</button>
            <span>{counter}</span>
            <button onClick={() => setCounter(--counter)}>-1</button>
        </section>
    )
}
