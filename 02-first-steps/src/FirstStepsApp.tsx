import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>
            <ItemCounter name={"Nintendo 1"} quantity={10} />
            <ItemCounter name={"Nintendo 2"} quantity={20} />
            <ItemCounter name={"Nintendo 3"} quantity={undefined} />
        </>
    );
}