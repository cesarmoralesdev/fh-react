import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    })
    test('getHeroeById debe retornar undefined si existe', () => {
        const id = 100;
        const hero = getHeroeById(id);
        console.log(hero);
        expect(hero).toBeFalsy(undefined);
    })
    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC (length = 3)', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);
        //forma estatica
        expect(heroes).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ]);
        // forma dinamica
        expect(heroes).toEqual( heroes.filter( heroe => heroe.owner === owner));
    })
    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel (length = 2)', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(2);
        //forma estatica
        expect(heroes).toEqual([
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            },
        ]);
        // forma dinamica
        expect(heroes).toEqual( heroes.filter( heroe => heroe.owner === owner));
    })
})
