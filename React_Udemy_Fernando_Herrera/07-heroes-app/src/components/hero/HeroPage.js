import React from 'react';
import { /* Navigate, */ useNavigate, useParams } from 'react-router-dom';
import { getHeroeById } from '../../selectors/getHeroeById';
import { ErrorCard } from '../errors/ErrorCard';

export const HeroPage = () => {
    const navigate = useNavigate();
    const {heroId} = useParams();
    const hero = getHeroeById(heroId);
    let imgPath;

    if (!hero) {
        setTimeout(() => {
            //return <Navigate to='/'/>;
            navigate(-1);
            return <></>;
        }, 2000);
    } else {
        imgPath = `/assets/${hero.id}.jpg`;
    }

    const handleReturn = () => {
        navigate(-1);
    };

    return (!hero) ?
        <ErrorCard header='Error' title='Heroe no encontrado' message={`${heroId} no existe`}/> :
        <div className='row mt-5'>
            <div className='col-4'>
                <img className='img-thumbnail animate__animated animate__bounceInLeft' src={imgPath} alt={hero.superhero}/>
            </div>
            <div className='col-8 animate__animated animate__fadeIn'>
                <h3>{hero.superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Alter ego:</b> {hero.alter_ego}
                    </li>
                    <li className='list-group-item'>
                        <b>Publisher:</b> {hero.publisher}
                    </li>
                    <li className='list-group-item'>
                        <b>First appearance:</b> {hero.first_appearance}
                    </li>
                </ul>
                <h5 className='mt-3'>Characters</h5>
                <p>{hero.characters}</p>
                <button className='btn btn-outline-info' onClick={handleReturn}>Return</button>
            </div>
        </div>;   
};
