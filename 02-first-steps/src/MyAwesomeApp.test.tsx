import { describe, test } from "vitest";
import { render, screen } from '@testing-library/react'
import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
    test('should render firstname and lastname', () => {
        const { container } = render(<MyAwesomeApp />)
        // console.log(container.innerHTML);
        screen.debug();
    })
})