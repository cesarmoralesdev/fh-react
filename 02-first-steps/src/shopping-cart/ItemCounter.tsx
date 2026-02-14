import { useState } from 'react'

interface Props {
    name: string,
    //Valor opcional
    //quantity?: number,                    //Forma 1: quantity es opcional
    quantity: number | undefined,           //Forma 2: quantity es obligatorio, al meno pasarlo com undefined
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
    let [count, setCount] = useState(quantity);
    const handleAdd = () => setCount(++count);
    const handleSubstract = () => {
        if (count === 1) return;
        setCount(--count);
    }
    return (
        <section style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
            <span style={{ width: 150 }}>{name}</span>
            <button onClick={handleAdd}>+1</button>
            <span>{count}</span>
            <button onClick={handleSubstract}>-1</button>
        </section>
    )
}
