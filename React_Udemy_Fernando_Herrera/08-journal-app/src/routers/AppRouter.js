import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
            } else {
                
            }
        });
    }, []);

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
