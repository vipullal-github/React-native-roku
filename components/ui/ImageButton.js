import React from 'react';
import {TouchableHighlight,Image,StyleSheet} from 'react-native';


const ImageButton = (props) =>{
    let image = props.image;
    let clickHandler = props.clickHandler;
    return (
        <>
        <TouchableHighlight style={styles.imageButtonStyle} onPress={clickHandler}>
            <Image source={image} style={styles.controllerButton} />
        </TouchableHighlight>
    </>
    );

};

const styles = StyleSheet.create({

    imageButtonStyle:{
        flex:1,
    },
    controllerButton:{
        width:50,
        height:50,
    },

});
export default ImageButton;