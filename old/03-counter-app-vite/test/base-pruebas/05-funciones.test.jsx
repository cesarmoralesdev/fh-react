import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        console.log(user);
        //Para objetos
        expect(testUser).toEqual(user);
    })
    test('getUsuarioActivo debe retornar objeto', () => {
        const nombre = 'Cesar';
        const testUser = {
            uid: 'ABC567',
            username: nombre
        };
        const user = getUsuarioActivo(nombre);
        console.log(user);
        //Para objetos
        expect(testUser).toEqual(user);
    })
})