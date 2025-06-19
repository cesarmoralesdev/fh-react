import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => {
    test('debe cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => { }} />);
        // screen.debug();
        const input = screen.getByRole('textbox');
        //fireEvent es para disparar eventos en el componente
        fireEvent.input(input, { target: { value: 'Goku' } });
        expect(input.value).toBe('Goku');
    });
    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Goku';
        const onNewCategory= jest.fn();
        //TODO: mock 
        render(<AddCategory onNewCategory={onNewCategory} />);
        // screen.debug();
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        //fireEvent es para disparar eventos en el componente
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        // screen.debug();
        expect(input.value).toBe('');
        //toHaveBeenCalled es para saber si se llamo la funcion
        expect(onNewCategory).toHaveBeenCalled();
        //toHaveBeenCalledTimes es para saber cuantas veces se llamo la funcion
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });
    test('no debe de llamar el onNewCategory si el input esta vacio', () => {
        const onNewCategory= jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        //not.toHaveBeenCalled es para saber si se llamo la funcion
        expect(onNewCategory).not.toHaveBeenCalled();
    });
})