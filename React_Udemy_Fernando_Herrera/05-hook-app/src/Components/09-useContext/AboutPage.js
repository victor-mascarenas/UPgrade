import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const AboutPage = () => {
    const {user, setUser} = useContext(UserContext);

    const buttonOnClick = () => {
        setUser({});
    };

    return <div>
        <h1>About page</h1>
        <hr/>
        <pre>
            {JSON.stringify(user, null, 3)}
        </pre>
        <button className='btn btn-warning' onClick={buttonOnClick}>Log Out</button>
    </div>;
};
