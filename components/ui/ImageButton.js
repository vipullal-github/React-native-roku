import React from 'react';
import {TouchableHighlight,Image,StyleSheet, Pressable, useRef } from 'react-native';


const ImageButton = (props) =>{
    let image = props.image;
    let clickHandler = props.clickHandler;
    return (
        <>
        <Pressable style={styles.imageButtonStyle} onPress={(e)=>clickHandler(e)} >
            <Image source={image} style={styles.controllerButton} />
        </Pressable>
    </>
    );

};

const styles = StyleSheet.create({

    imageButtonStyle:{
        backgroundColor:'pink',
    },
    controllerButton:{
        width:50,
        height:50,
    },

});
export default ImageButton;