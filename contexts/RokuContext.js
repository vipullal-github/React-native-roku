import React, {createContext, useReducer} from 'react';


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
    return {
        action:SEND_KEY,
        payload:key,
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

    const rokuContext = {
        ip:state.ip,
        port:state.port,
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












