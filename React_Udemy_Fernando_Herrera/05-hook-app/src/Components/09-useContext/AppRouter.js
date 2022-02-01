import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <NavBar/>
                <div className='container'>
                    <Routes>
                        <Route exact path="/" element={<HomePage/>}/>
                        <Route exact path="about" element={<AboutPage/>}/>
                        <Route exact path="login" element={<LoginPage/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};
