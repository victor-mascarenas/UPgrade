import {getSaludo} from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar "Hola Victor"', () => {
        const nombre = 'Victor';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe(`Hola ${nombre}`);
    });
    test('getSaludo debe de retornar "Hola Karla" si no hay argumento para el nombre', () => {
        const nombre = 'Karla';
        const saludo = getSaludo();
        expect(saludo).toBe(`Hola ${nombre}`);
    });
});