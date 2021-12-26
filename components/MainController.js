import React,{useState, useRef } from 'react';
import {StyleSheet,Text, TextInput,View,Image, Button, TouchableHighlight } from 'react-native';
import ImageButton from './ui/ImageButton';
import NavButtonsControl from './NavButtonsControl';

/* IPControl */
const IPControl = () =>{

    const [ipText, setIP ] = useState('192.168.10.100');
    let inputRef = useRef();

    const onButtonClicked = () =>{

    };

    return(
        <View style={styles.ipControlContainer}>
            <View style={styles.inputViewWrapper}>
                <TextInput style={styles.inputStyle} value={ipText} onChangeText={setIP} placeholder={'Enter IP address of the ROKU here'} ref={inputRef} />
            </View>
        <View style={{paddingLeft:10}}></View>
        <Button style={styles.okBtnStyle} title="Set" onPress={onButtonClicked} />
        <View style={{paddingLeft:5}}></View>
    </View>

    );
};


/*
    MainController
*/
const MainController = (props) =>{

    const onPress = (event) =>{
        event.preventDefault();
        console.log("Some button was pressed!");
    };

    return (
        // buttonArrayRow: flexDirection:row, justifyContent:center
        <View style={styles.container}>
            <IPControl />
            <Text>Hello, world!</Text>
            <NavButtonsControl />
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
    },
    buttonArrayRow:{
        flexDirection:'row',
        justifyContent:'center',
    },
    ipControlContainer:{
        flexDirection:'row',
        padding:10,
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
        flex:1,

    }
});
export default MainController;