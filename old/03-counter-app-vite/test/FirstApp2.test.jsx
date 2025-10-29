import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {

    const title = 'Hola soy Goku';
    const subtitle = 'No hay subtitulo';

    test('debe hacer match con el snapshot', () => {
        const { container } = render(<FirstApp title={title} />);
        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar el mensaje "Hola soy Goku"', () => {
        render(<FirstApp title={title} />);
        // expect( screen.getByText(title) ).not.toBeTruthy();
        expect( screen.getByText(title) ).toBeTruthy();
    })

    test('debe de mostrar el titulo en un h1', () => {
        render(<FirstApp title={title} />);
        // expect( screen.getByText(title) ).not.toBeTruthy();
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain(title);
    })
    test('debe de mostrar el subtitulo enviado por props', () => {
        render(<FirstApp title={title} />);
        // expect( screen.getByText(title) ).not.toBeTruthy();
        expect( screen.getAllByText(subtitle).length ).toBe(2);
    })
})