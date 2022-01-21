import { getImagen } from "../../base/11-async-await";

describe('Pruebas co async-await y fetch', () => {
    test('Debe retornar el url de la imagen', async () => {
        const url = await getImagen('RHHTxfPP13Hp2qPjeceyWuqAzfCetKkv');
        expect(url.includes('https://')).toBe(true);
    });
    test('Debe retornar un error', async () => {
        const resultado = await getImagen('RHHTxfPP13Hp2qPjeceyWuqAzfCetKkvf');
        expect(resultado).toBe('No existe');
    });
});
