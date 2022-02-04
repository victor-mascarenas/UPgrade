import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DcPage } from '../components/dc/DcPage';
import { LoginPage } from '../components/login/LoginPage';
import { MarvelPage } from '../components/marvel/MarvelPage';
import { SearchPage } from '../components/search/SearchPage';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<MarvelPage/>}/>
                <Route path='/marvel' element={<MarvelPage/>}/>
                <Route path='/dc' element={<DcPage/>}/>
                <Route path='/search' element={<SearchPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};
