import React, { useContext } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

/********************************************************************
 * NAME: SigninScreen
 * DESCRIPTION: The Signin Screen displays the AuthFrom to the user and
 * passes it the signin action from our AuthContext as a callback function.
 * It also displays a link that will navigate the user back to the signup 
 * screen if they do not have an account. 
 *******************************************************************/
const SigninScreen = () => {
    const { state, signin, removeError } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={removeError} />
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../../assets/PocketTrainerLogo.png')} />
            </View>
            <AuthForm
                headerText='Sign In to Your Account'
                errorMessage={state.errorMessage}
                buttonText='Sign In'
                onSubmit={signin}
            />
            <NavLink
                routeName="Signup"
                text="Don't have an account? Sign up instead!"
            />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 125,
        paddingLeft: 20,
        paddingRight: 20
    },
    logo: {
        flex: 1,
        resizeMode: 'contain',
        width: 150,
        height: null
    },
    logoContainer: {
        alignItems: 'center',
        height: 150
    }
});

export default SigninScreen;