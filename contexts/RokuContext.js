import React, {createContext, useReducer} from 'react';


const validKeyNames = ['home','up','down','left','right','back','enter']; 

// default context data
const defaultState = {
    ip:'192.168.10.120',
    port: 8060,
};

// -------------------------------------------
//          Context
// -------------------------------------------
const RokuContext = createContext( defaultState );


const SEND_KEY = "SEND_KEY";
const SET_IP = "SET_IP";


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

const createSetIPAction = (ip)=>{
    return {
        action:SET_IP,
        payload:ip,
    };
};


// ----------------------------------------------
//      actions
// ----------------------------------------------
const doSetIP = (state,action) => {
    return state;
};

const doSendKey = (state,action) => {
    console.log(`Sending key ${action.payload}`);
    console.log('doSendKey::state is %o', state );
    return state;
};


// ------------------------------------------------
//      rokuContextReducer
// ------------------------------------------------
const rokuContextReducer = (state, action) => {
    let act = action.action;
    if( act === SET_IP ){
        doSetIP( state, action );
    }
    else if( act === SEND_KEY ){
        doSendKey( state, action);
    }
    else{
        return state;
    }
};


export const RokuContextProvider = (props)=>{
    const [state, dispatcher ] = useReducer( rokuContextReducer, defaultState );

    console.log('RokuContextProvider::State is %o', state );

    const rokuContext = {
        ip: (state || defaultState).ip,
        port: (state|| defaultState).port,
        keyNames: validKeyNames,
        onIPChanged: (newIP) => { dispatcher( createSetIPAction(newIP));},
        onSendKey: (key) => { dispatcher( createSendKeyAction(key));},
    };

    return (
        <RokuContext.Provider value={rokuContext}>
            {props.children}
        </RokuContext.Provider>
    );

};

export default RokuContext;












