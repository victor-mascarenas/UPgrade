import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../components/auth/Login';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {
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