import { getImagen, getImagenSinApiKey } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {
    // //Comentamos estas pruebas porque el apikey se renuva a diario y si probamos otras pruebas otro dia, nos marca error
    test('getImagen debe retornar url de la imagen', async () => {
        // const url = await getImagen();
        // console.log(url);
        // expect(typeof url).toBe('string');
    })
    test('getImagenSinApiKey debe retornar mensaje de error porque estamos quitando el apikey', async () => {
        // const url = await getImagenSinApiKey();
        // console.log(url);
        // expect(url).toBe('No se encontro la imagen');
    })
})
