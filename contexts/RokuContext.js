import React, {createContext, useReducer, useEffect, useMemo, } from 'react';


const validKeyNames = ['Home','Up','Down','Left','Right','Back','Enter','Rev', 'Fwd','Play','Select'];



// default context data
const defaultState = {
    ip:'192.168.10.117',
    port: 8060,
    isConnected:false,
    isKeyDown:false,
    currentKeyPressed: undefined,
    stringToSend:undefined,
    onIPChanged:() =>{},
    onSendKey:()=>{},
    onSendString: ()=>{},
};

// -------------------------------------------
//          Context
// -------------------------------------------
const RokuContext = createContext( defaultState );


const SEND_KEY = 'SEND_KEY';
const RESET_KEY = 'RESET_KEY';
const SET_IP = 'SET_IP';
const SET_CONNECTED_STATUS = 'SET_STATUS';
const SEND_STRING = 'SEND_STRING';


// -----------------------------------------
//      action creator functions
// ------------------------------------------

const createSendKeyAction = (key)=>{
    // sanity check the keyname
    let idx = validKeyNames.find( k => k === key);
    return {
        action:SEND_KEY,
        payload:idx,
    };
};

const createResetKeyAction =() =>{
    return {
        action: RESET_KEY,
        payload:undefined,
    };
};

const createSetIPAction = (ip)=>{
    return {
        action:SET_IP,
        payload:ip,
    };
};

const createUpdateStatusAction = (x)=>{
    return {
        action: SET_CONNECTED_STATUS,
        payload: {
            isConnected: x,
             },
        };
};


const createSendStringAction = (str) =>{
    return {
        action:SEND_STRING,
        payload:str,
    };
};


// ----------------------------------------------
//      actions
// ----------------------------------------------
const doSetIP = (state,action) => {
    // TODO: Add validation here!
    const newState = {
        ...state,
        ip:action.payload,
        isConnected: false,
    };
    return newState;
};

const doSendKey = (state,action) => {
    return {
        ...state,
        currentKeyPressed: action.payload,
    };
};

const doResetKey = (state, action) =>{
    return {
        ...state,
        currentKeyPressed:undefined,
    };
};

const doUpdateConnectedStatus = ( state, action )=>{
    return {
        ...state,
        isConnected: action.payload.isConnected,
    };
};

const doSendString = (state,action) =>{
    return {
        ...state,
        stringToSend:action.payload,
    };
};


// ------------------------------------------------
//      rokuContextReducer
// ------------------------------------------------
const rokuContextReducer = (state = defaultState, action) => {
    let act = action.action;
    //console.log('rokuContxtReducer: state is %o', state );
    if( act === SET_IP ){
        return doSetIP( state, action );
    }
    else if( act === SEND_KEY ){
        return doSendKey( state, action);
    }
    else if( act === SET_CONNECTED_STATUS ){
        return doUpdateConnectedStatus( state, action);
    }
    else if (act === SEND_STRING ){
        return doSendString(state,action);
    }
    else if (act == RESET_KEY ){
        return doResetKey(state, action );
    }
    console.log('rokuContextReducer called with unknown action!');
    return defaultState;
};



// -----------------------------------------------------
//      RokuContextProvider
// ----------------------------------------------------
export const RokuContextProvider = (props)=>{
    const [state, dispatcher ] = useReducer( rokuContextReducer, defaultState );

    // check the connection.
    useEffect(()=> {
        let url = `http://${state.ip}:${state.port}/query/media-player`;
        console.log(`sending request to ${url}`);
        fetch(url).then( (response) => {
            console.log('response is %o, status is %o ', response, response.status );
            dispatcher( createUpdateStatusAction(true));
        })
        .catch( e => console.log('Error!'));
    },[state.ip, state.port]);

    // sending a key stroke
    useEffect( ()=>{
        let ck = state.currentKeyPressed;
        // TODO: Validate the key here!
        if( ck ){
            let url = `http://${state.ip}:${state.port}/keypress/${ck}`;
            let params = {
                method:'POST',
            };
            console.log(`sending ${url}`);
            fetch( url, params ).then(console.log('Key sent')).catch(console.log('error while sending keystroke'));
            dispatcher( createResetKeyAction() );
        }
    },[state.currentKeyPressed, state.ip, state.port]);

    // sending a String
    useEffect( ()=>{
        let str = state.stringToSend;
        console.log(`sending string ${str}`);
        if( str ){
            let params = {
                method:'POST',
            };
            let baseIP = `http://${state.ip}:${state.port}/keypress.Lit_`;
            for (let i = 0; i < str.length; i++ ){
                let url = `${baseIP}${str[i]}`;
                console.log( url );
                fetch(url, params).then().catch(console.log('Error while sending string'));
            }
        }
    },[state.stringToSend, state.ip, state.port]);
    
    const rokuContext = {
        ip: state.ip,
        port: state.port,
        isConnected: state.isConnected,
        isKeyDown:false,
        currentKeyPressed: undefined,
        stringToSend:undefined,
        updateRokuConnectionStatus: (x) => { dispatcher( createUpdateStatusAction(x))},
        onIPChanged: (newIP) => { dispatcher( createSetIPAction(newIP));},
        onSendKey: (key) => { dispatcher( createSendKeyAction(key));},
        onSendString: (str) =>{ dispatcher( createSendStringAction(str));},
    };

    return (
        <RokuContext.Provider value={rokuContext}>
            {props.children}
        </RokuContext.Provider>
    );

};

export default RokuContext;












