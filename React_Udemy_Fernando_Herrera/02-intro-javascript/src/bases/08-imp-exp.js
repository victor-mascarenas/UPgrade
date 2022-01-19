//import {heroes} from './data/heroes';
import heroes, {owners} from '../data/heroes';//Default export
//import {heroes, owners} from './data/heroes';

/* const getHeroesById = (id) => {
    return heroes.find((heroe) => {
        return heroe.id === id;
    });
} */
const getHeroesById = (id) => {
    return heroes.find((heroe) => heroe.id === id);
}

console.log(getHeroesById(2));
console.log(getHeroesById(3));
console.log(getHeroesById(4));
console.log(getHeroesById(1));

const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner);
}
console.log(getHeroesByOwner('DC'));
console.log(getHeroesByOwner('Marvel'));

console.log(owners);