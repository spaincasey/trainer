import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

/********************************************************************
 * NAME: AccountScreen
 * DESCRIPTION: AccountScreen is a very simple component that contains
 * a button that will call our signout action from our AuthContext.
 *******************************************************************/
const AccountScreen = () => {
    const { signout } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Spacer>
                <Button style={styles.button} title="Sign Out" onPress={signout} />
            </Spacer>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center'
    },
    button: {
        width: 150
    }
});

export default AccountScreen;