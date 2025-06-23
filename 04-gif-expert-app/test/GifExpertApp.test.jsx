import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";
describe('Pruebas en <GifExpertApp />', () => {
    test('debe de probar Snapshot', () => {
        const { container } = render(<GifExpertApp />);
        // screen.debug();
        expect(container).toMatchSnapshot();
    });
    test('debe de retornar el estado inicial', () => {
        const { container } = render(<GifExpertApp />);
        // screen.debug();
        const input = screen.getByRole('textbox');
        //fireEvent es para disparar eventos en el componente
        fireEvent.input(input, { target: { value: 'Naruto' } });
        expect(input.value).toBe('Naruto');
    });
    
})