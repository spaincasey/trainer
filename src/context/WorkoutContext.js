import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trainerApi from '../api/trainer';
import { navigate } from '../navigationRef';

const workoutReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORIES':
            return { ...state, categories: action.payload };
        case 'FETCH_WORKOUT':
            return { ...state, workout: action.payload };
        default:
            return state;
    }
};

const fetchCategories = dispatch => async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        const response = await trainerApi.get('/category', { headers: { 'Authorization': `Bearer ${token}` } });
        dispatch({ type: 'FETCH_CATEGORIES', payload: response.data });
    } catch (err) {
        console.log(err);
    }
};

const fetchWorkout = dispatch => async ({ muscle }) => {
    const token = await AsyncStorage.getItem('token');
    const config = { params: { muscle }, headers: { 'Authorization': `Bearer ${token}` } };
    try {
        const response = await trainerApi.get(`/workout`, config);
        dispatch({ type: 'FETCH_WORKOUT', payload: response.data });
        navigate('Workout');
    } catch (err) {
        console.log(err.message);
    }
};


export const { Provider, Context } = createDataContext(
    workoutReducer,
    { fetchCategories, fetchWorkout },
    { categories: null, workout: null }
);