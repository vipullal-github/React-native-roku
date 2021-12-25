import React from 'react';
import {StyleSheet,Text, View,Image } from 'react-native';

const MainController = (props) =>{

    return (
        <View style={styles.containce}>
            <Text>Hello, world!</Text>
            <Image source={require('../assets/tiny_logo.png')} />
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    controllerButton:{
        width:200,
        height:200,
        backgroundColor:'red',
    },
});
export default MainController;