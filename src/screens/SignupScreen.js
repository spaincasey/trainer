import React, { useContext } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = () => {
    const { state, signup, removeError } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={removeError} />
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/PocketTrainerLogo.png')} />
            </View>
            <AuthForm
                headerText='Sign Up for Pocket Trainer'
                errorMessage={state.errorMessage}
                buttonText='Sign Up'
                onSubmit={signup}
            />
            <NavLink
                routeName="Signin"
                text="Already have an account? Sign in instead!"
            />
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    logo: {
        flex: 1,
        resizeMode: 'contain',
        width: 250,
        height: null
    },
    logoContainer: {
        alignItems: 'center',
        height: 250
    }
});

export default SignupScreen;