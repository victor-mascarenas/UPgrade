import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de heroes', () => {
    test('Debe de retornar un heroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(heroe => heroe.id === id);
        expect(heroe).toEqual(heroeData);
    });
    test('Debe de retornar undefined si heroe no existe', () => {
        const id = 200;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });
    test('Debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const dcHeroes = getHeroesByOwner(owner);
        const dcHeroesData = heroes.filter(heroe => heroe.owner === owner);
        expect(dcHeroes).toEqual(dcHeroesData);
    });
    test('Debe regresar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const marvelHeroes = getHeroesByOwner(owner);
        const marvelHeroesData = heroes.filter(heroe => heroe.owner === owner);
        expect(marvelHeroes.length).toBe(marvelHeroesData.length);
    });
});