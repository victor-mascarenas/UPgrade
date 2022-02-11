import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { LobbyScreen } from '../components/auth/LobbyScreen';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                setIsLoggedIn(true);
                dispatch(login(user.uid, user.displayName));
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking, setIsLoggedIn]);

    if (checking) {
        return <LobbyScreen/>;
    }
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
