import type { CSSProperties } from "react";

const firstName = 'Cesar';
const lastName = 'Morales';
const favoriteGames = ['game1', 'game2', 'game3'];
const isActive = false;
const address = {
    zipCode: 'ABC-123',
    country: 'Canada'
};
export const MyAwesomeApp = () => {
    const myStyles: CSSProperties = { backgroundColor: 'red', borderRadius: isActive ? 10 : 20, padding: 10, };
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3 >
            <p>{favoriteGames.join(', ')}</p>
            <h1>{isActive ? 'Activo' : 'No activo'}</h1>
            <p
                style={myStyles}>
                {JSON.stringify(address)}
            </p>
        </>
    );
}