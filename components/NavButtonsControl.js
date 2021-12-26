import React from 'react';
import {View,StyleSheet} from 'react-native';
import ImageButton from './ui/ImageButton';

const rightArrow = require('../assets/right-arrow.png');
const leftArrow = require('../assets/left-arrow.png');
const upArrow = require('../assets/up-arrow.png');
const downArrow = require('../assets/down-arrow.png');
const ok_btn = require('../assets/ok_btn.png');



const NavButtonsControl = (props) =>{

    const onPress = (event)=>{
        console.log('Some button was pressed!!');
    };

    return (
        <View style={styles.container}>
            <View style={styles.navButtonRow}>
                <ImageButton image={upArrow} clickHandler={onPress} />
            </View>
            <View style={styles.navButtonRow}>
                <ImageButton image={leftArrow} clickHandler={onPress} />
                <ImageButton image={ok_btn} />
                <ImageButton image={rightArrow} clickHandler={onPress} />
            </View>
            <View style={styles.navButtonRow}>
                <ImageButton image={downArrow} clickHandler={onPress} />
            </View>
        </View>
    );
};



const styles = StyleSheet.create({

    container:{
        flexDirection:'column',
        alignContent:'center',
        height:200,
        //backgroundColor:'green',
    },
    navButtonRow:{
        flex:1,
        //backgroundColor:'red',
        flexDirection:'row',
        justify:'space-evenly',
        alignContent:'center',
        margin:10,
    },
    imageButtonStyle:{
        width:40,
        height:40,
        paddingRight:10,
    },
    spacerView:{
        width:50,
        height:50,
    }

});
export default NavButtonsControl;