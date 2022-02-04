import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import { MarvelPage } from '../components/marvel/MarvelPage';
import { SearchPage } from '../components/search/SearchPage';
import { DcPage } from '../components/dc/DcPage';
import { HeroPage } from '../components/hero/HeroPage';

export const DashboardRouter = () => {
    return (
        <>
            <Navbar/>
            <div className='container'>
                <Routes>
                    <Route path='marvel' element={<MarvelPage/>}/>
                    <Route path='dc' element={<DcPage/>}/>
                    <Route path='search' element={<SearchPage/>}/>
                    <Route path='hero/:heroId' element={<HeroPage/>}/>
                    <Route path='/' element={<MarvelPage/>}/>
                </Routes>
            </div>
        </>
    );
};
