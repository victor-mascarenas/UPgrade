import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
    test('getHeroeByIdAsync debe retornar un heroe async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });
    });
    test('getHeroeByIdAsync debe obtener un error si el heroe no existe', (done) => {
        const id = 200;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('Not Found');
                done();
            });
    });
});
