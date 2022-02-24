import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { startChecking } from '../actions/auth';
import { Login } from '../components/auth/Login';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const {checking, uid} = useSelector(state => state.auth);
    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    let returnValue;
    if (checking) {
        returnValue = <h5>Espere...</h5>;
    } else {
        returnValue = <BrowserRouter>
            <Routes>
                <Route exact path='/login' element={
                    <PublicRoutes isLoggedIn={!!uid}>
                        <Login/>
                    </PublicRoutes>
                }/>
                <Route exact path='/' element={
                    <PrivateRoutes isLoggedIn={!!uid}>
                        <CalendarScreen/>
                    </PrivateRoutes>
                }/>
                <Route path='/*' element={<Navigate to='/'/>}/>
            </Routes>
        </BrowserRouter>;
    }
    return returnValue;
};