import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginPage = () => {
    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        const action= {
            type: types.login,
            payload: {
                name: 'Victor',
                logged: true
            }
        };
        dispatch(action);
        navigate('/', {
            replace: true//Reemplazar el historico de navegacion del navegador
        });
    };

    return (
        <div className='container mt-5'>
            <h1>Login Page</h1>
            <hr/>
            <button className='btn btn-primary' onClick={handleLogin}>Login</button>
        </div>
    );
};
