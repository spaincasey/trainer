import React, { useEffect, useContext } from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Category from '../components/Category';
import { Context as WorkoutContext } from '../context/WorkoutContext';

const CategoriesScreen = ({ navigation }) => {
    const { fetchCategories } = useContext(WorkoutContext);

    useEffect(() => {
        fetchCategories();
    }, []);

    const categories = [
        {
            name: 'Arms', muscles: [
                { name: 'Biceps', icon: '' },
                { name: 'Triceps', icon: '' },
                { name: 'Forearms', icon: '' }
            ]
        },
        {
            name: 'Legs', muscles: [
                { name: 'Hamstrings', icon: '' },
                { name: 'Quads', icon: '' },
                { name: 'Calves', icon: '' },
                { name: 'Glutes', icon: '' }
            ]
        },
        {
            name: 'Core', muscles: [
                { name: 'Pecs', icon: '' },
                { name: 'Obliques', icon: '' },
                { name: 'Abs', icon: '' }
            ]
        },
        {
            name: 'Shoulders/Back', muscles: [
                { name: 'Traps', icon: '' },
                { name: 'Deltoids', icon: '' },
                { name: 'Lower Back', icon: '' }
            ]
        },
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                keyExtractor={(category) => category.name}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Category name={item.name} muscles={item.muscles} callback={() => navigation.navigate('Workout')} />
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