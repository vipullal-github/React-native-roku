import React,{useState, useRef } from 'react';
import {StyleSheet,Text, TextInput,View,Image, Button, TouchableHighlight } from 'react-native';

const IPControl = () =>{

    const [ipText, setIP ] = useState('192.168.10.100');
    let inputRef = useRef();

    const onButtonClicked = () =>{

    };

    return(

        <View style={styles.editViewContainer}>
            <View style={styles.inputViewWrapper}>
                <TextInput style={styles.inputStyle} value={ipText} onChangeText={setIP} placeholder={'Enter IP address of the ROKU here'} ref={inputRef} />
            </View>
        <View style={{paddingLeft:10}}></View>
        <Button style={styles.okBtnStyle} title="Set" onPress={onButtonClicked} />
        <View style={{paddingLeft:5}}></View>
    </View>

    );
};


const ImageButton = (props) =>{
    let [imageName, clickHandler] = props;
    let image = require( '../assets/left-arrow.png' );
    return (
    <TouchableHighlight style={styles.imageButtonStyle} onPress={clickHandler}>
        <Image source={require( '../assets/left-arrow.png' )} style={styles.controllerButton} />
    </TouchableHighlight>
    );
};

const MainController = (props) =>{

    const onPress = (event) =>{

    };

    return (
        <>
            <IPControl />
            <Text>Hello, world!</Text>
            <View stule={styles.buttonArrayRow}>
                <ImageButton imageName="../assets/right-arrow.png" clickHandler={onPress} />
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
    },
    buttonArrayRow:{
        flex:1,
        flexDirection:'row',
    },
    controllerButton:{
        width:50,
        height:50,
        backgroundColor:'red',
    },
    editViewContainer:{
        flexDirection:'row'
    },
    inputViewWrapper:{
        flex: 1,
        width:'60%',
    },
    inpuStyle:{
        borderWidth:1,
        borderColor: 'green',
        multiline:false,
        color:'white',
        fontSize:'20',
    },
    setBtnStyle:{
        flex:1,
        width:'40%',
        alignSelf:'right',
    },
    imageButtonStyle:{

    }
});
export default MainController;