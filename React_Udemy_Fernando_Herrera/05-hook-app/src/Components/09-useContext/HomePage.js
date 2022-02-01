import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomePage = () => {
    const context = useContext(UserContext);

    return <div>
        <h1>Home page</h1>
        <hr/>
    </div>;
};
