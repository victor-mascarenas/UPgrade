import { heroes } from "../data/heroes";

export const getHeroesByName = (name = '') => {
    let result = [];
    name = name.toLowerCase();
    if (name.trim().length > 0) {
        result = heroes.filter(hero => hero.superhero.toLowerCase().includes(name));
    }
    return result;
}