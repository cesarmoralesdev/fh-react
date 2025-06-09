import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {

    test('getSaludo debe retornar "Hola Cesar"', () => {
        const name = 'Cesar';
        const message = getSaludo(name);
        //Para valores de variables con tipo de dato primitivos
        expect(message).toBe(`Hola ${name}`);
    })

})