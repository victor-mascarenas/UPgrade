import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomePage = () => {
    const { user } = useContext(UserContext);

    return <div>
        <h1>Home page</h1>
        <hr/>
        <pre>{JSON.stringify(user, null, 3)}</pre>
    </div>;
};
