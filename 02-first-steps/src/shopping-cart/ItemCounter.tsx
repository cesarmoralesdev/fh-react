import { useState } from 'react'
import styles from './ItemCounter.module.css';
// import './ItemCounter.css';

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
        <section className={styles.itemRow}>
            <span className={styles['item-text']} style={{ color: count === 1 ? 'red' : 'black' }}>{name}</span>
            <button onClick={handleAdd}>+1</button>
            <span>{count}</span>
            <button onClick={handleSubstract}>-1</button>
        </section>
    )
}
