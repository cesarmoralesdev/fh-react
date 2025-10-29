import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj.test', () => {

    test('usContext debe retornar objeto', () => {
        const clave = '123';
        const edad = 34;
        const testUs = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };
        
        const us = usContext({clave, edad});
        //Para valores de variables con tipo de dato primitivos
        expect(testUs).toEqual(us);
    })

})