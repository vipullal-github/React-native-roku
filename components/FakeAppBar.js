import React from 'react';
import {View, StyleSheet, Text } from 'react-native';

/*
    Plain bar at the top of the screen, under the StatusBar
 */

const FakeAppBar = (props) =>{
    return (
        <View style={styles.container}>
            <Text  style={styles.titleBarStyle}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        height:40,
        backgroundColor:'green'
    },
    titleBarStyle:{
        flex:1,
        textAlign:'center',
        textAlignVertical:'center',
        fontSize: 22,
        fontWeight: '600',
    }
});


export default FakeAppBar;