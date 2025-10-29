import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import heroes from "../../src/data/heroes";

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe retornar un heroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then(heroe => {
            expect(heroe).toEqual(heroes[0]);
            done();
        });
    })
    test('getHeroeByIdAsync debe obtener un error si heroe no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toFalsy();
                done();
            })
            .catch(error => {
                expect(error).toBe(`No se pudo encontrar el héroe con el id ${id}`);
                done();
            });
    })
})
