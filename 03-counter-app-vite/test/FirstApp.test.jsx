import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
    // //Comentado para que no genere snapshot o si es que lo modificamos no nos genere alertas
    // test('debe de hacer match con el snapshot', () => {
    //     const { container } = render(<FirstApp title="Cesar" />);
    //     expect( container ).toMatchSnapshot();
    // })
    test('debe de mostrar el titulo en un h1', () => {
        const title = 'Hola soy Goku';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />);
        expect( getByText(title) ).toBeTruthy();
        
        // const h1 = container.querySelector('h1');
        // expect( h1.innerHTML ).toBe(title);
        // expect( h1.innerHTML ).toContain(title);

        // expect( getByTestId('test-title') ).toBeTruthy();
        expect( getByTestId('test-title').innerHTML ).toBe(title);
    })

    test('debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Hola soy Goku';
        const subtitle = 'Soy un subtitulo';
        const { getAllByText } = render(
            <FirstApp 
                title={title} 
                subtitle={subtitle} 
            />
        );
        //Valida si existe subtitulo, sin hay mas de uno marcara error
        // expect( getByText(subtitle) ).toBeTruthy();
        
        //Valida si hay 2 subtitulos
        expect( getAllByText(subtitle).length ).toBe(2);

    })
})