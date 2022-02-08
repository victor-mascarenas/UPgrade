import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../components/login/LoginPage';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={
                    <PublicRoute>
                        <LoginPage/>
                    </PublicRoute>
                }/>
                {/* <Route path='/login' element={<LoginPage/>}/> */}
                <Route path='/*' element={
                    <PrivateRoute>
                        <DashboardRouter/>
                    </PrivateRoute>
                }/>
                {/* <Route path='/*' element={<DashboardRouter/>}/> */}
            </Routes>
        </BrowserRouter>
    );
};
