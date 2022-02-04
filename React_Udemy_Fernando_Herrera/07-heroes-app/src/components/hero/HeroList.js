import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

export const HeroList = ({publisher = 'DC Comics'}) => {
    const heroes = getHeroesByPublisher(publisher);
    
    return (
        <>
            <h1>Hero List</h1>
            <ul>
                {
                    heroes.map(hero => (
                        <li key={hero.id}>
                            {hero.superhero}
                        </li>
                    ))
                }
            </ul>
        </>
    );
};
