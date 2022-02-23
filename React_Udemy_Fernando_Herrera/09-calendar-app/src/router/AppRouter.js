import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { startChecking } from '../actions/auth';
import { Login } from '../components/auth/Login';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/login' element={<Login/>}/>
                <Route exact path='/' element={<CalendarScreen/>}/>
                <Route path='/*' element={<Navigate to='/'/>}/>
            </Routes>
        </BrowserRouter>
    )
};