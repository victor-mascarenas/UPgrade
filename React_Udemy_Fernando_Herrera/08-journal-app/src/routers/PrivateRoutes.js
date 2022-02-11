import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({children, isLoggedIn}) => {
    return !isLoggedIn ?
        <Navigate to='/auth/login'/> :
        children;
}
