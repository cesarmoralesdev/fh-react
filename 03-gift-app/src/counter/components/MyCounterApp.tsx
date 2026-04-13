import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

const styleContainer: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: '80vh',
    margin: '0 auto',
};
const styleContainerButtons: React.CSSProperties = {
    display: 'flex',
    width: '30%',
    flexDirection: 'column',
    gap: '10px',
};
const styleButton: React.CSSProperties = {
    width: '100%',
    height: '3em',
};

export const MyCounterApp = () => {
    const { counter, handleAdd, handleSubtract, handleReset } = useCounter(5);

    return (
        <div style={styleContainer}>
            <h2>counter: {counter}</h2>
            <div style={styleContainerButtons}>
                <button style={styleButton} onClick={handleAdd}>+1</button>
                <button style={styleButton} onClick={handleSubtract}>-1</button>
                <button style={styleButton} onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}
