import React,{useState, useRef, useContext } from 'react';
import {StyleSheet,Text, TextInput,View,Image, Button, TouchableHighlight } from 'react-native';
import NavButtonsControl from './NavButtonsControl';

import RokuContext from '../contexts/RokuContext';

/* IPControl */
const IPControl = (props) =>{

    const [ipText, setIP ] = useState(props.ip );
    let inputRef = useRef();

    const onSetButtonClicked = () =>{
        console.log('Calling onIPChanged with ip = ', ipText );
        props.onIPChanged(ipText);
    };

    return(
        <View style={styles.ipControlContainer}>
            <View style={styles.inputViewWrapper}>
                <TextInput keyboardType='numeric' style={styles.inputStyle} value={ipText} onChangeText={setIP} placeholder={'Enter IP address of the ROKU here'} ref={inputRef} />
            </View>
        <View style={{paddingLeft:10}}></View>
        <Button style={styles.okBtnStyle} title="Set" onPress={onSetButtonClicked} />
        <View style={{paddingLeft:5}}></View>
    </View>

    );
};

const ShowConnectedStatus = (props) =>{
    let msg = props.isConnected ? 'Connected':'No roku device found';
    return (
            <Text>{msg}</Text>
)};


const SendTextControl = () =>{
    const [ipText, setIP ] = useState( '' );
    let inputRef = useRef();

    const onSetButtonClicked = () =>{
        console.log('Calling sendText with text = ', ipText );
    };

    return(
        <View style={styles.ipControlContainer}>
            <View style={styles.inputViewWrapper}>
                <TextInput style={styles.inputStyle} value={ipText} onChangeText={setIP} placeholder={'Enter string to send'} ref={inputRef} />
            </View>
        <View style={{paddingLeft:10}} />
        <Button style={styles.okBtnStyle} title="Send" onPress={onSetButtonClicked} />
        <View style={{paddingLeft:5}}></View>
    </View>
    )
}

/*
    MainController
*/
const MainController = (props) =>{
    const rokuContext = useContext(RokuContext);

    return (
        // buttonArrayRow: flexDirection:row, justifyContent:center
        <View style={styles.container}>
            <IPControl ip={rokuContext.ip} onIPChanged={rokuContext.onIPChanged}  />
            <ShowConnectedStatus  isConnected={rokuContext.isConnected} />
            <NavButtonsControl />
            <SendTextControl />
        </View>
    );
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
        backgroundColor:'lightgreen',
        marginTop:10,
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

    },
    textControl:{
        flexDirection:'row',
        padding:2,
        backgroundColor:'lightgreen',
        marginTop:2,
    },
});
export default MainController;
