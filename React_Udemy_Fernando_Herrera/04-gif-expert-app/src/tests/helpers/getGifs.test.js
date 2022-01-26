import getGifs from "../../helpers/getGifs";

describe('Pruebas con fetch gifs', () => {
    test('Debe de traer 10 elementos', async () => {
        const gifs = await getGifs('Naruto');
        expect(gifs.length).toBe(10);
    });
    test('Debe de traer 0 elementos', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});
