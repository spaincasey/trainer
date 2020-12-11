import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';

/********************************************************************
 * NAME: AuthForm
 * DESCRIPTION: The AuthForm Component displays an email input and a password
 * input the user and sets two state variable to contain that information. It 
 * also contains a button that passes those state variables back to the callback
 * function when pressed. 
 *******************************************************************/
const AuthForm = ({ headerText, errorMessage, onSubmit, buttonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text h4>{headerText}</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button title={buttonText} onPress={() => onSubmit({ email, password })} />
            </Spacer>
        </>
    );

};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
});

export default AuthForm;