import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginPage = () => {
    const {setUser} = useContext(UserContext);

    const buttonOnClick = () => {
        setUser({
            id: 1234, 
            name: 'Victor',
            email: 'vijagama@outlook.es'
        });
    };

    return <div>
        <h1>Login page</h1>
        <hr/>
        <button className='btn btn-primary' onClick={buttonOnClick}>Login</button>
    </div>;
};
