import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemCart {
    id: number,
    productName: string,
    quantity: number | undefined
};

const itemsInCart: ItemCart[] = [
    { id: 1, productName: 'Nintendo 1', quantity: 10 },
    { id: 2, productName: 'Nintendo 2', quantity: 20 },
    { id: 3, productName: 'Nintendo 3', quantity: undefined },
];

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>
            {itemsInCart.map(({ id, productName, quantity }) => <ItemCounter key={id} name={productName} quantity={quantity} />)}
        </>
    );
}