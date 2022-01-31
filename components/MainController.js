import React,{useState, useRef, useContext } from 'react';
import {StyleSheet,Text, TextInput,View,Image, Button, TouchableHighlight } from 'react-native';
import NavButtonsControl from './NavButtonsControl';

import RokuContext from '../contexts/RokuContext';

// ---------------------------------------------
const IPControl = (props) =>{

    const [ipText, setIP ] = useState(props.ip );
    let inputRef = useRef();

    const onSetButtonClicked = () =>{
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

// ---------------------------------------------
// TODO: Add a graphic here and move into the IPControl?
const ShowConnectedStatus = (props) =>{
    let msg = props.isConnected ? 'Connected':'No roku device found';
    return (
            <Text>{msg}</Text>
)};





// ---------------------------------------------
const SendTextControl = (props) =>{
    const [text2send, setText ] = useState( '' );
    let inputRef = useRef();

    const onSendButtonClicked = () =>{
        console.log("Sending text [" + text2send + "]");
        props.sendTextFunc(text2send);
        setText('');
    };

    return(
        <View style={styles.ipControlContainer}>
            <View style={styles.inputViewWrapper}>
                <TextInput style={styles.inputStyle} value={text2send} onChangeText={setText} placeholder={'Enter string to send'} ref={inputRef} />
            </View>
        <View style={{paddingLeft:10}} />
        <Button style={styles.okBtnStyle} title="Send Text" onPress={onSendButtonClicked} />
        <View style={{paddingLeft:5}}></View>
    </View>
    );
};

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
            <SendTextControl sendTextFunc={rokuContext.onSendString} />
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
