import React, { useEffect, useContext } from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as WorkoutContext } from '../context/WorkoutContext';
import workoutsImageObject from '../resources/workoutsImageObject';

/********************************************************************
 * NAME: WorkoutScreen
 * DESCRIPTION: The Workout Screen calls the fetchWorkout action and 
 * recieves a random workout from the application state and displays
 * the details of that workout including the name, an image, a discription,
 * a list of steps and a list of muscles. 
 *******************************************************************/
const WorkoutScreen = () => {
    const { state, fetchWorkout } = useContext(WorkoutContext);
    const workout = state.workout[0];
    const muscle = workout.mainMuscle;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{workout.name}</Text>
            <Image style={styles.image} source={require('../../assets/workoutImages/standingBarbellCurl.jpg')} />
            <Text style={styles.subTitle}>Description: </Text>
            <Text style={styles.body}>{workout.description}</Text>
            <Text style={styles.subTitle}>Steps: </Text>
            <FlatList
                data={workout.steps}
                keyExtractor={(step) => step._id}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.body}>{item.number}: {item.stepText}</Text>
                    )
                }}
            />
            <Text style={styles.subTitle}>Muscles: </Text>
            <FlatList
                data={workout.otherMuscles}
                keyExtractor={(muscle) => muscle._id}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.body}>{item.name}</Text>
                    )
                }}
            />
            <Button style={styles.button} title="Next" onPress={() => fetchWorkout({ muscle })} />
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