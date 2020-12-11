import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';

/********************************************************************
 * NAME: Category
 * DESCRIPTION: The Category Component takes in a callback function and 
 * data from one of the muscle categories and displays it to the user in 
 * the form of FlatList of buttons. When the user clicks on the button the 
 * component passes the name of the button clicked back to the callback function. 
 *******************************************************************/
const Category = ({ name, muscles, callback }) => {

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{name}</Text>
            </View>
            <View style={styles.container}>
                <FlatList
                    style={styles.flatList}
                    data={muscles}
                    keyExtractor={(muscles) => muscles.name}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.touchableOpacity} onPress={() => callback(item.name)}>
                                <Image style={styles.image} source={item.icon} />
                                <Text style={styles.buttonText}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        flex: 1,
        alignSelf: 'center'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 3
    },
    image: {
        width: 125,
        height: 125,
        alignItems: 'center',
        borderColor: '#172A3A',
        borderWidth: 1,
        borderRadius: 5
    },
    buttonText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    flatList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    touchableOpacity: {
        marginLeft: 20,
        marginTop: 15,
        marginRight: 20,
        alignItems: 'center'
    },
    textContainer: {
        borderBottomWidth: 2,
        marginLeft: 20,
        marginRight: 20
    }
});

export default Category;