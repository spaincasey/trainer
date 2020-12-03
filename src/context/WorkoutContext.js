import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trainerApi from '../api/trainer';
import { navigate } from '../navigationRef';

const workoutReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORIES':
            return action.payload;
        default:
            return state;
    }
};

const fetchCategories = dispatch => async () => {
    try {
        const response = await trainerApi.get('/category');
        console.log(response.data);
        dispatch({ type: 'FETCH_CATEGORIES', payload: response.data });
    } catch (err) {
        console.log(err);
    }
}

export const { Provider, Context } = createDataContext(
    workoutReducer,
    { fetchCategories },
    { categories: null }
);