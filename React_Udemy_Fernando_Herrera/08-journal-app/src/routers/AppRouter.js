import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { LobbyScreen } from '../components/auth/LobbyScreen';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { loadNotes } from '../helpers/loadNotes';
import { setNotes } from '../actions/notes';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
                const notes = await loadNotes(user.uid);
                dispatch(setNotes(notes));
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking, setIsLoggedIn]);

    if (checking) {
        return <LobbyScreen/>;
    } else {
        return <BrowserRouter>
            <Routes>
                <Route path='/auth/*' element={
                    <PublicRoutes isLoggedIn={isLoggedIn}>
                        <AuthRouter/>
                    </PublicRoutes>
                }/>
                <Route exact path='/' element={
                    <PrivateRoutes isLoggedIn={isLoggedIn}>
                        <JournalScreen/>
                    </PrivateRoutes>
                }/>
                <Route path='*' element={<Navigate to='/auth/login'/>}/>
            </Routes>
        </BrowserRouter>;
    }
}
