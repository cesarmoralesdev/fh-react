import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { use } from "react";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const category = 'Goku';
    test('debe de mostrrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid category={category} />);
        screen.debug();
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    })
    test("debe de mostrar items cuando se cargan las imagenes usando el useFetchGifs", () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://saitama.com'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://goku.com'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);
    })
})