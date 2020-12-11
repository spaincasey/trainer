import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

/********************************************************************
 * NAME: LoadingScreen
 * DESCRIPTION: A blank screen that is displayed when trying to sign in
 * a user from a locally stored JWT Token. 
 *******************************************************************/
const LoadingScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, []);
    return null;
};

export default LoadingScreen;