//import {heroes} from './data/heroes';
import heroes, {owners} from '../data/heroes';//Default export
//import {heroes, owners} from './data/heroes';

/* const getHeroesById = (id) => {
    return heroes.find((heroe) => {
        return heroe.id === id;
    });
} */
export const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
}

/* console.log(getHeroeById(2));
console.log(getHeroeById(3));
console.log(getHeroeById(4));
console.log(getHeroeById(1)); */

export const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner);
}
/* console.log(getHeroesByOwner('DC'));
console.log(getHeroesByOwner('Marvel'));

console.log(owners); */