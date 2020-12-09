import React, { useEffect, useContext } from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import { Context as WorkoutContext } from '../context/WorkoutContext';

const WorkoutScreen = () => {
    const { state, fetchWorkout } = useContext(WorkoutContext);
    console.log(state.workout[0].name);

    useEffect(() => {
        fetchWorkout();
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{state.workout[0].name}</Text>
            <Image style={styles.image} source={require('../../assets/PocketTrainerLogo.png')} />
            <Text style={styles.subTitle}>Description: </Text>
            <Text style={styles.body}>{state.workout[0].description}</Text>
            <Text style={styles.subTitle}>Steps: </Text>
            <FlatList
                data={state.workout[0].steps}
                keyExtractor={(step) => step._id}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.body}>{item.number}: {item.stepText}</Text>
                    )
                }}
            />
            <Text style={styles.subTitle}>Muscles: </Text>
            <FlatList
                data={state.workout[0].otherMuscles}
                keyExtractor={(muscle) => muscle._id}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.body}>{item.name}</Text>
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    textContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 7
    },
    body: {
        fontSize: 18,
        marginLeft: 10
    },
    image: {
        width: '100%',
        height: 275,
        alignItems: 'center',
        borderColor: '#172A3A',
        borderWidth: 1,
        borderRadius: 5
    },
});

export default WorkoutScreen;