import React, {createContext, useReducer, useEffect, useSelector } from 'react';


const validKeyNames = ['Home','Up','Down','Left','Right','Back','Enter','Rev', 'Fwd','Play'];

// default context data
const defaultState = {
    ip:'192.168.10.117',
    port: 8060,
    isConnected:false,
    isKeyDown:false,
    sendKeyURL: undefined,
    currentKeyPressed: undefined,
    onIPChanged:() =>{},
    onSendKey:()=>{},
};

// -------------------------------------------
//          Context
// -------------------------------------------
const RokuContext = createContext( defaultState );


const SEND_KEY = 'SEND_KEY';
const SET_IP = 'SET_IP';
const SET_CONNECTED_STATUS = 'SET_STATUS';


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

const createUpdateStatusAction = (x)=>{
    return {
        action: SET_CONNECTED_STATUS,
        payload: {
            isConnected: x,
             },
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
    console.log(`Sending key ${action.payload}`);
    console.log('doSendKey::state is %o', state );
    return state;
};

const doUpdateConnectedStatus = ( state, action )=>{

    return {
        ...state,
        isConnected: action.payload.isConnected,
    };
}


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

    
    const rokuContext = {
        ip: state.ip,
        port: state.port,
        isConnected: state.isConnected,
        isKeyDown:false,
        currentKeyPressed: undefined,
        keyNames: validKeyNames,
        updateRokuConnectionStatus: (x) => { dispatcher( createUpdateStatusAction(x))},
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












