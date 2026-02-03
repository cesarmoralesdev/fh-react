import React, { useState } from 'react'

export const ItemCounter = () => {
    let [counter, setCounter] = useState(10);
    return (
        <section style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
            <button onClick={() => setCounter(counter++)}>+1</button>
            <span>{counter}</span>
            <button onClick={() => setCounter(--counter)}>-1</button>
        </section>
    )
}
