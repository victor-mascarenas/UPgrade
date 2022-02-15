import { fileUpload } from "../../helpers/fileUpload";

describe('Pruebas en fileUpload', () => {
    test('Debe de cargar un archivo y regresar el URL', async () => {
        const resp = await fetch('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*');
        const blob = await resp.blob();
        const file = new File([blob], 'foto2.png');
        const url = await fileUpload(file);
        expect(typeof url).toBe('string');
        expect(() => new URL(url)).not.toThrow();
    });
    test('Debe de retornar un error', async () => {
        const file = new File([], 'foto2.png');
        const url = await fileUpload(file);
        expect(() => new URL(url)).toThrow();
    });
})