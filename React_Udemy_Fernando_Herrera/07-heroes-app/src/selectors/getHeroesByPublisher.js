import { heroes } from "../data/heroes";

export const DC = 'DC Comics';
export const MARVEL = 'Marvel Comics';

export const getHeroesByPublisher = (publisher) => {
    if (![DC, MARVEL].includes(publisher)) {
        throw new Error(`${publisher} no es valido`);
    }
    return heroes.filter(hero => hero.publisher === publisher);
};