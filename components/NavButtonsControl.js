import React,{useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import ImageButton from './ui/ImageButton';
import RokuContext from '../contexts/RokuContext';

const rightArrow = require('../assets/right-arrow.png');
const leftArrow = require('../assets/left-arrow.png');
const upArrow = require('../assets/up-arrow.png');
const downArrow = require('../assets/down-arrow.png');
const ok_btn = require('../assets/ok_btn.png');
const home_btn = require('../assets/home.png');
const back_arrow_btn = require('../assets/back-arrow.png');

const ff_btn = require('../assets/ff_btn.png');
const pause_play_btn = require('../assets/pause_play_btn.png');
const rewind_btn = require('../assets/rewind_btn.png');
// const rewind_arrow_btn = require('../asssets/rewind-arrow.png');



const NavButtonsControl = (props) =>{

    const rokuContext = useContext( RokuContext );

    const onPress = (event, key)=>{
        event.preventDefault();
        rokuContext.onSendKey( key );
    };

    return (
        <View style={styles.container}>
            <View style={styles.navButtonRow}>
                <ImageButton image={back_arrow_btn} clickHandler={ (e) => onPress(e,'Back')} />
                <ImageButton image={home_btn} clickHandler={ (e) => onPress(e,'Home')} />
            </View>
            <View style={styles.navButtonRow}>
                <ImageButton image={upArrow} clickHandler={ (e) => onPress(e,'Up')} />
            </View>
            <View style={styles.navButtonRow}>
                <ImageButton image={leftArrow} clickHandler={(e) => onPress(e,'Left')} />
                <ImageButton image={ok_btn} clickHandler={(e) => onPress(e,'Enter')}/>
                <ImageButton image={rightArrow} clickHandler={(e) => onPress(e,'Right')} />
            </View>
            <View style={styles.navButtonRow}>
                <ImageButton image={downArrow} clickHandler={(e) => onPress(e,'Down')} />
            </View>
            <View style={styles.navButtonRow}>
                <ImageButton image={rewind_btn} clickHandler={(e) => onPress(e,'Rev')} />
                <ImageButton image={pause_play_btn} clickHandler={(e) => onPress(e,'Play')}/>
                <ImageButton image={ff_btn} clickHandler={(e) => onPress(e,'Fwd')} />
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
        justifyContent:'space-evenly',
        alignContent:'center',
        marginBottom:100,
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