import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, ImageBackground } from 'react-native';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 2000);
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/bg.jpg')}
                resizeMode='cover'
                style={styles.Image}
            >
                <Text style={styles.text}>Cash Counter</Text>
            </ImageBackground>
            <ActivityIndicator size={40} color='#fff' style={styles.ActivityIndicator} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ActivityIndicator: {
        position: 'absolute',
        bottom: "10%",
        left: "47%"
    },
    Image: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    }
})

export default Splash;
