import React, { useEffect, useContext } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native';
import Category from '../components/Category';
import { Context as WorkoutContext } from '../context/WorkoutContext';
import { NavigationEvents } from 'react-navigation';

const CategoriesScreen = () => {
    const { state, fetchCategories, fetchWorkout } = useContext(WorkoutContext);

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={state.categories}
                keyExtractor={(category) => category._id}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Category name={item.name} muscles={item.muscles} callback={(muscle) => fetchWorkout({ muscle })} />
                        </View>
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
    }
});

export default CategoriesScreen;