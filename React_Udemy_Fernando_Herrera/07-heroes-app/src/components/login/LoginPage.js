import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
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
