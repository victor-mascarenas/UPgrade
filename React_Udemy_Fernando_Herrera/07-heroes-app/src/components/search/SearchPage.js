import React from 'react';
import useForm from '../../hooks/useForm';

export const SearchPage = () => {
    const [{searchText}, inputOnChange] = useForm({
        searchText: ''
    });

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchText);
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
            </div>
        </>
    );
};
