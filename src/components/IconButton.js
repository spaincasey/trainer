import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { Image } from 'react-native-elements';


const IconButton = ({ callback, name, imageSource }) => {
    return (
        <TouchableOpacity style={styles.touchableOpacity} onPress={callback}>
            <Image style={styles.image} source={imageSource} />
            <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
        alignSelf: 'center'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 5,
        marginBottom: 3
    },
    image: {
        width: 150,
        height: 150,
        alignItems: 'center',
        borderColor: '#172A3A',
        borderWidth: 1,
        borderRadius: 5
    },
    buttonText: {
        marginVertical: 10
    },
    flatList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    touchableOpacity: {
        margin: 20,
        alignItems: 'center',
        backgroundColor: 'red'
    },
    textContainer: {
        borderBottomWidth: 2,
        marginLeft: 20,
        marginRight: 20
    }
});

export default IconButton;