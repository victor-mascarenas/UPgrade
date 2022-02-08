import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import queryString from 'query-string';
import { ErrorCard } from '../errors/ErrorCard';

export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);

    const [{searchText}, inputOnChange] = useForm({
        searchText: q
    });

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
    
    const handleSearch = (e) => {
        e.preventDefault();
        localStorage.setItem('query', searchText);
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
                        (heroesFiltered.length > 0) ?
                            heroesFiltered.map(hero => {
                                return <HeroCard key={hero.id} hero={hero}/>;
                            }) :
                        <ErrorCard title='Sin resultados' header='Resultados de busqueda' message={q.length === 0 ? 'Ingresa un termino de busqueda' : `Sin resultados para ${q}`}/>
                    }
                </div>
            </div>
        </>
    );
};
