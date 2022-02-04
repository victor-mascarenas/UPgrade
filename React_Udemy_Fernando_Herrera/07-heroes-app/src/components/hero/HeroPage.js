import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroeById } from '../../selectors/getHeroeById';
import { ErrorCard } from '../errors/ErrorCard';

export const HeroPage = () => {
    const navigate = useNavigate();
    const {heroId} = useParams();
    const hero = getHeroeById(heroId);

    if (!hero) {
        setTimeout(() => {
            //return <Navigate to='/'/>;
            navigate(-1);
            return <></>;
        }, 2000);
    }

    return (!hero) ?
        <ErrorCard header='Error' title='Heroe no encontrado' message={`${heroId} no existe`}/> :
        <div>
            <h1>Hero Page</h1>
            <p>{hero.superhero}</p>
        </div>;   
};
