import React from 'react';
import { DC } from '../../selectors/getHeroesByPublisher';
import { HeroList } from '../hero/HeroList';

export const DcPage = () => {
    return (
        <div>
            <h1>DC Page</h1>
            <HeroList publisher={DC}/>
        </div>
    );
};
