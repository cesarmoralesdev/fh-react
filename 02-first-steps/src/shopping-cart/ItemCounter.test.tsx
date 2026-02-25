import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
    test('should render with default values', () => {
        const name = "Test item";
        render(<ItemCounter name={name} />);
        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();
    })
    test('should render with custom quantity', () => {
        const name = "Test item";
        const quantity = 10;
        render(<ItemCounter name={name} quantity={quantity} />);
        expect(screen.getByText(quantity)).toBeDefined();
        expect(screen.getByText(quantity)).not.toBeNull();
    })
    test("should increase count when +1 button is pressed", () => {
        const name = "Test item";
        const quantity = 1;
        render(<ItemCounter name={name} quantity={quantity} />);
        const [buttonAdd] = screen.getAllByRole('button');
        // console.log(buttonAdd.innerHTML);
        fireEvent.click(buttonAdd);
        expect(screen.getByText('2')).toBeDefined();
    })
    test("should decrease count when -1 button is pressed", () => {
        const name = "Test item";
        const quantity = 5;
        render(<ItemCounter name={name} quantity={quantity} />);
        const [, buttonSubstract] = screen.getAllByRole('button');
        // console.log(buttonAdd.innerHTML);
        fireEvent.click(buttonSubstract);
        expect(screen.getByText('4')).toBeDefined();
    })
    test("should not decrease count when -1 button is pressed and quantity is 1", () => {
        const name = "Test item";
        const quantity = 1;
        render(<ItemCounter name={name} quantity={quantity} />);
        const [, buttonSubstract] = screen.getAllByRole('button');
        // console.log(buttonAdd.innerHTML);
        fireEvent.click(buttonSubstract);
        expect(screen.getByText('1')).toBeDefined();
    })
})