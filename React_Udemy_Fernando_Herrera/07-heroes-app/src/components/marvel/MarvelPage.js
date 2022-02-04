import React from 'react';
import { MARVEL } from '../../selectors/getHeroesByPublisher';
import { HeroList } from '../hero/HeroList';

export const MarvelPage = () => {
    return (
        <div>
            <h1>MARVEL Page</h1>
            <HeroList publisher={MARVEL}/>
        </div>
    );
};
