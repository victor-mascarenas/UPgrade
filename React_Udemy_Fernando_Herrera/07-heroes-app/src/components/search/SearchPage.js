import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import queryString from 'query-string';

export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);

    const [{searchText}, inputOnChange] = useForm({
        searchText: q
    });

    const heroesFiltered = getHeroesByName(q);
    
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    };

    return (
        <>
            <h1>Busqueda</h1>
            <hr/>
            <div className='row'>
                <div className='col-5'>
                    <h4>Buscar</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input type='text' placeholder='Buscar un heroe' className="form-control" name='searchText' autoComplete='off' value={searchText} onChange={inputOnChange}/>
                        <button type='submit' className='btn btn-outline-primary mt-3 col-12'>Buscar</button>
                    </form>
                </div>
                <div className='col-7'>
                    <h4>Resultados</h4>
                    <hr/>
                    {
                        heroesFiltered.map(hero => {
                            return <HeroCard key={hero.id} hero={hero}/>;
                        })
                    }
                </div>
            </div>
        </>
    );
};
