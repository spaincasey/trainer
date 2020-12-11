import React, { useEffect, useContext } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native';
import Category from '../components/Category';
import { Context as WorkoutContext } from '../context/WorkoutContext';
import iconsArray from '../resources/categoriesObject';

/********************************************************************
 * NAME: CategoriesScreen
 * DESCRIPTION: The Categories Screen takes our categories data stored in
 * the categoriesObject and uses a FlatList to iterate through each category
 * and display it using the Category Component.
 *******************************************************************/
const CategoriesScreen = () => {
    const { fetchCategories, fetchWorkout } = useContext(WorkoutContext);

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={iconsArray}
                keyExtractor={(category) => category.name}
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