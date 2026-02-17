import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react'
import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
    test('should render firstname and lastname', () => {
        const { container } = render(<MyAwesomeApp />)
        // console.log(container.innerHTML);
        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');
        // console.log(h1?.innerHTML);
        // console.log(h3?.innerHTML);
        // Es igual al texto
        expect(h1?.innerHTML).toBe('Cesar');
        expect(h3?.innerHTML).toBe('Morales');
        // Contiene texto
        // expect(h1?.innerHTML).toContain('Cesar');
        // expect(h3?.innerHTML).toContain('Morales');
    })
    test('should render firstname and lastname - screen', () => {
        render(<MyAwesomeApp />)
        const h1 = screen.getAllByRole('heading', {
            level: 1,
        });
        expect(h1[0]?.innerHTML).toContain('Cesar');
    })
    test('should match snapshot', () => {
        const { container } = render(<MyAwesomeApp />)
        expect(container).toMatchSnapshot();
    })
    test('should match snapshot', () => {
        render(<MyAwesomeApp />)
        expect(screen.getByTestId("div-app")).toMatchSnapshot();
    })
})