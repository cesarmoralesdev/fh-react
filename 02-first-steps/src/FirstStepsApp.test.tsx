import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";

const mockItemCounter = vi.fn((props: unknown) => (
    <div
        data-testid="ItemCounter"
        name={props.name}
        quantity={props.quantity}
    />
))

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props)
}));

describe('FirstStepsApp', () => {
    afterEach(() => {
        vi.clearAllMocks()
    })

    test('should match snapshot', () => {
        const { container } = render(<FirstStepsApp />)
        expect(container).toMatchSnapshot()
    })
    test('sholud render the correct number of ItemCounter components', () => {
        render(<FirstStepsApp />)
        const itemCounters = screen.getAllByTestId('ItemCounter');
        expect(itemCounters.length).toBe(3);
        // screen.debug();
    })
    test('sholud render ItemCounter with correct props', () => {
        render(<FirstStepsApp />);

        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({ 
            name: 'Nintendo 1', 
            quantity: 10
        });
        expect(mockItemCounter).toHaveBeenCalledWith({ 
            name: 'Nintendo 2', 
            quantity: 20
        });
        expect(mockItemCounter).toHaveBeenCalledWith({ 
            name: 'Nintendo 3',
            quantity: undefined
        });
        
    })
})