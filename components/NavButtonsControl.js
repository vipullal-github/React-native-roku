import React,{useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import ImageButton from './ui/ImageButton';
import RokuContext from '../contexts/RokuContext';

const rightArrow = require('../assets/right-arrow.png');
const leftArrow = require('../assets/left-arrow.png');
const upArrow = require('../assets/up-arrow.png');
const downArrow = require('../assets/down-arrow.png');
const ok_btn = require('../assets/ok_btn.png');



const NavButtonsControl = (props) =>{

    const rokuContext = useContext( RokuContext );

    const onPress = (event, key)=>{
        event.preventDefault();
        rokuContext.onSendKey( key );
    };

    return (
        <View style={styles.container}>
            <View style={styles.navButtonRow}>
                <ImageButton image={upArrow} clickHandler={ (e) => onPress(e,'up')} />
            </View>
            <View style={styles.navButtonRow}>
                <ImageButton image={leftArrow} clickHandler={(e) => onPress(e,'left')} />
                <ImageButton image={ok_btn} clickHandler={(e) => onPress(e,'enter')}/>
                <ImageButton image={rightArrow} clickHandler={(e) => onPress(e,'right')} />
            </View>
            <View style={styles.navButtonRow}>
                <ImageButton image={downArrow} clickHandler={(e) => onPress(e,'down')} />
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