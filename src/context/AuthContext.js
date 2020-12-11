import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trainerApi from '../api/trainer';
import { navigate } from '../navigationRef';

/********************************************************************
 * NAME: authReducer
 * DESCRIPTION: The authReducer contains actions to be dispatched to
 * change the auth state.
 *******************************************************************/
const authReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ERROR':
            return { ...state, errorMessage: action.payload };
        case 'REMOVE_ERROR':
            return { ...state, errorMessage: '' };
        case 'SIGNIN':
            return { errorMessage: '', token: action.payload };
        case 'SIGNOUT':
            return { token: null, errorMessage: '' }
        default:
            return state;
    }
};

/********************************************************************
 * NAME: tryLocalSignin
 * DESCRIPTION: checks for a JWT token on the users device and dispatches
 * the signin action.
 *******************************************************************/
const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('Categories');
    } else {
        navigate('Signup');
    }
};

/********************************************************************
 * NAME: removeError
 * DESCRIPTION: Dispatches an action to remove the error message.
 *******************************************************************/
const removeError = dispatch => () => {
    dispatch({ type: 'REMOVE_ERROR' });
}

/********************************************************************
 * NAME: signup
 * DESCRIPTION: Makes a post request to add a new user to the database,
 * creates a JWT Token and saves it to local storage. 
 *******************************************************************/
const signup = dispatch => async ({ email, password }) => {
    try {
        const response = await trainerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'SIGNUP', payload: response.data.token });

        navigate('Categories');
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong with sign in' });
    }
};

/********************************************************************
 * NAME: signin
 * DESCRIPTION: Dispatches an action to sign the user in and saves a 
 * JWT Token to local storage. 
 *******************************************************************/
const signin = dispatch => async ({ email, password }) => {
    try {
        const response = await trainerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'SIGNIN', payload: response.data.token });

        navigate('Categories');
    } catch (err) {
        console.log(err);
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong with sign up' });
    }
};

/********************************************************************
 * NAME: signout
 * DESCRIPTION: Removes the JWT Token from local storage and navigates
 * the user back to the login flow.
 *******************************************************************/
const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'SIGNOUT' });
    navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout, removeError, tryLocalSignin },
    { token: null, errorMessage: '' }
);