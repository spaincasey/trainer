import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const CategoriesScreen = ({ navigation }) => {
    return <>
        <Text style={{ fontSize: 48 }}>CategoriesScreen</Text>
        <Button
            title="Go to Workout Detail"
            onPress={() => navigation.navigate('Workout')}
        />
    </>
};

const styles = StyleSheet.create({});

export default CategoriesScreen;