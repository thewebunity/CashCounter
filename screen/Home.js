import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, TextInput, Alert, BackHandler } from 'react-native';



const Home = ({ navigation }) => {
    const [Ten, setTen] = useState('')
    const [Twenty, setTwenty] = useState('')
    const [Fifty, setFifty] = useState('')
    const [Hundred, setHundred] = useState('')
    const [TwoHundred, setTwoHundred] = useState('')
    const [FiveHundred, setFiveHundred] = useState('')
    const [TwoThousand, setTwoThousand] = useState('')
    const [Coins, setCoins] = useState('')
    useEffect(() => {
        const unsuscribe = navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
            Alert.alert('Hold On !', 'Are you want to exit this app', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => BackHandler.exitApp() },
            ]);
        })
        return unsuscribe
    }, [])

    const getpermission = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.main_box}>
                    <Image
                        source={require('../assets/10.jpg')}
                        style={styles.Image}
                        resizeMode='contain'
                    />
                    <Text style={styles.text}>X</Text>
                    <TextInput
                        placeholder='0'
                        style={styles.TextInput}
                        value={Ten}
                        onChangeText={setTen}
                        keyboardType='number-pad'
                    />
                    <Text style={styles.text}>=</Text>
                    <Text style={styles.text}>{Ten * 10}</Text>
                </View>
                <View style={styles.main_box}>
                    <Image
                        source={require('../assets/20.jpg')}
                        style={styles.Image}
                        resizeMode='contain'
                    />
                    <Text style={styles.text}>X</Text>
                    <TextInput
                        placeholder='0'
                        style={styles.TextInput}
                        value={Twenty}
                        onChangeText={setTwenty}
                        keyboardType='number-pad'
                    />
                    <Text style={styles.text}>=</Text>
                    <Text style={styles.text}>{Twenty * 20}</Text>
                </View>
                <View style={styles.main_box}>
                    <Image
                        source={require('../assets/50.jpg')}
                        style={styles.Image}
                        resizeMode='contain'
                    />
                    <Text style={styles.text}>X</Text>
                    <TextInput
                        placeholder='0'
                        style={styles.TextInput}
                        value={Fifty}
                        onChangeText={setFifty}
                        keyboardType='number-pad'
                    />
                    <Text style={styles.text}>=</Text>
                    <Text style={styles.text}>{Fifty * 50}</Text>
                </View>
                <View style={styles.main_box}>
                    <Image
                        source={require('../assets/100.jpg')}
                        style={styles.Image}
                        resizeMode='contain'
                    />
                    <Text style={styles.text}>X</Text>
                    <TextInput
                        placeholder='0'
                        style={styles.TextInput}
                        value={Hundred}
                        onChangeText={setHundred}
                        keyboardType='number-pad'
                    />
                    <Text style={styles.text}>=</Text>
                    <Text style={styles.text}>{Hundred * 100}</Text>
                </View>
                <View style={styles.main_box}>
                    <Image
                        source={require('../assets/200.jpg')}
                        style={styles.Image}
                        resizeMode='contain'
                    />
                    <Text style={styles.text}>X</Text>
                    <TextInput
                        placeholder='0'
                        style={styles.TextInput}
                        value={TwoHundred}
                        onChangeText={setTwoHundred}
                        keyboardType='number-pad'
                    />
                    <Text style={styles.text}>=</Text>
                    <Text style={styles.text}>{TwoHundred * 200}</Text>
                </View>
                <View style={styles.main_box}>
                    <Image
                        source={require('../assets/500.jpg')}
                        style={styles.Image}
                        resizeMode='contain'
                    />
                    <Text style={styles.text}>X</Text>
                    <TextInput
                        placeholder='0'
                        style={styles.TextInput}
                        value={FiveHundred}
                        onChangeText={setFiveHundred}
                        keyboardType='number-pad'
                    />
                    <Text style={styles.text}>=</Text>
                    <Text style={styles.text}>{FiveHundred * 500}</Text>
                </View>
                <View style={styles.main_box}>
                    <Image
                        source={require('../assets/2000.jpg')}
                        style={styles.Image}
                        resizeMode='contain'
                    />
                    <Text style={styles.text}>X</Text>
                    <TextInput
                        placeholder='0'
                        style={styles.TextInput}
                        value={TwoThousand}
                        onChangeText={setTwoThousand}
                        keyboardType='number-pad'
                    />
                    <Text style={styles.text}>=</Text>
                    <Text style={styles.text}>{TwoThousand * 2000}</Text>
                </View>
                <View style={styles.main_box}>
                    <Image
                        source={require('../assets/coins.jpg')}
                        style={styles.Image}
                        resizeMode='contain'
                    />
                    <Text style={styles.text}>X</Text>
                    <TextInput
                        placeholder='0'
                        style={styles.TextInput}
                        value={Coins}
                        onChangeText={setCoins}
                        keyboardType='number-pad'
                    />
                    <Text style={styles.text}>=</Text>
                    <Text style={styles.text}>{Coins * 1}</Text>
                </View>
                <View style={styles.main_box}>
                    <Text style={{ fontSize: 20, fontWeight: 500 ,fontFamily:'Poppins-Regular' }}>Total</Text>
                    <Text style={{ fontSize: 20, fontWeight: 500 , fontFamily:'Poppins-Regular' }}>=</Text>
                    <Text style={{ fontSize: 20, fontWeight: 500 , fontFamily:'Poppins-Regular'}}>{Ten * 10 + Twenty * 20 + Fifty * 50 + Hundred * 100 + TwoHundred * 200 + FiveHundred * 500 + TwoThousand * 2000 + Coins * 1}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    main_box: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center'
    },
    Image: {
        width: 50,
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        fontFamily:'Poppins-Regular'
    },
    TextInput: {
        fontSize: 14,
        paddingHorizontal: 30,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: '500',
        fontFamily:'Poppins-Regular'
    },
    main: {
        height: '80%'
    }
})

export default Home;
