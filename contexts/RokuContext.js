import React, {createContext, useReducer, useEffect, useSelector } from 'react';


const validKeyNames = ['Home','Up','Down','Left','Right','Back','Enter','Rev', 'Fwd','Play'];

// default context data
const defaultState = {
    ip:'192.168.10.117',
    port: 8060,
    connectionChecked: false,
    isKeyDown:false,
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
        payload: x,
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
        connectionChecked:false,
    }
    console.log('doSetIP: returning state: %o', newState);
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
        connectionChecked:action.payload,
    }
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


    const checkForIPChange = ( o ) => {
        return o.checkRokuStatus;
    };

    const checkRokuStatus = async()=>{
        console.log('RokuContextProvider.checkRokuStatus function called. Checking for roku at ' + state.ip );
    };

    //console.log('RokuContextProvider::State is %o', state );
    useEffect(()=>{
        console.log('RokuContextProvider.effect function called');
        setTimeout( ()=>{
            dispatcher( createUpdateStatusAction(true));
        }, 1000);
    },[state.connectionChecked]);

    
    const rokuContext = {
        ip: state.ip,
        port: state.port,
        connectionChecked:state.connectionChecked,
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












