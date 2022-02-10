import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegiterScreen } from '../components/auth/RegiterScreen'

export const AuthRouter = () => {
    return (
        <Routes>
            <Route exact path='/login' element={<LoginScreen/>}/>
            <Route exact path='/register' element={<RegiterScreen/>}/>
            <Route path='*' element={<Navigate to='/auth/login'/>}/>
        </Routes>
    )
}
