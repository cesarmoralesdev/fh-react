import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";
describe('Pruebas en CounterApp', () => {
    const initialValue = 100;
    test('Debe de hacer match con el snapshot', () => {
        render(<CounterApp value={initialValue} />);
        expect(screen).toMatchSnapshot();
    })
    test('Debe de mostrar el valor inicial de 100', () => {
        render(<CounterApp value={initialValue} />);
        expect(screen.getByText(initialValue)).toBeTruthy();
        expect(screen.getByText(initialValue).innerHTML).toBe(initialValue.toString());
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain('100');
    })
    test('Debe de incrementar con el boton +', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click( screen.getByText('+') );
        expect(screen.getByText('101')).toBeTruthy();
    })
    test('Debe de incrementar con el boton -', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click( screen.getByText('-') );
        expect(screen.getByText('99')).toBeTruthy();
    })
    test('Debe de funcionar el boton Reset', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click( screen.getByText('+') );
        fireEvent.click( screen.getByText('+') );
        fireEvent.click( screen.getByText('+') );
        screen.debug();
        // fireEvent.click( screen.getByText('Reset') );
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) );
        screen.debug();
        expect(screen.getByText(initialValue)).toBeTruthy();
    })

})