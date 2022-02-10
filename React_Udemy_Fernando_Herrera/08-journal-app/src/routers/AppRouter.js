import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/auth/*' element={<AuthRouter/>}/>
                <Route exact path='/' element={<JournalScreen/>}/>
                <Route path='*' element={<Navigate to='/auth/login'/>}/>
            </Routes>
        </BrowserRouter>
    );
}
