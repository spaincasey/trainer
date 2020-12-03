import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trainerApi from '../api/trainer';
import { navigate } from '../navigationRef';

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

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('Categories');
    } else {
        navigate('Signup');
    }
};

const removeError = dispatch => () => {
    dispatch({ type: 'REMOVE_ERROR' });
}

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