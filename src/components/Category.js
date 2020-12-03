import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';

const Category = ({ name, muscles, callback }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{name}</Text>
            </View>
            <FlatList
                style={styles.flatList}
                data={muscles}
                keyExtractor={(muscles) => muscles.name}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.touchableOpacity} onPress={callback}>
                            <Image style={styles.button} />
                            <Text style={styles.buttonText}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
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
    button: {
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
        alignItems: 'center'
    },
    textContainer: {
        borderBottomWidth: 2,
        marginLeft: 20,
        marginRight: 20
    }
});

export default Category;