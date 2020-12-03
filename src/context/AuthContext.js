import { AsyncStorage } from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import trainerApi from '../api/trainer';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ERROR':
            return { ...state, errorMessage: action.payload };
        case 'SIGNUP':
            return { errorMessage: '', token: action.payload };
        default:
            return state;
    }
};

const signup = dispatch => async ({ email, password }) => {
    try {
        const response = await trainerApi.post('/signup', { email, password });
        // await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'SIGNUP', payload: response.data.token });

        navigate('Categories');
    } catch (err) {
        dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong with sign up' });
    }
};


const signin = (dispatch) => {
    return ({ email, password }) => {

    };
};

const signout = (dispatch) => {
    return () => {

    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout },
    { token: null, errorMessage: '' }
);