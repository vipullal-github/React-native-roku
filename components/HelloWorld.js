import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const HelloWorldComponent = (props) =>{



    return (

            <View style={styles.container}>
                <Text>Hello, world!</Text>
            </View>

    )};



const styles=StyleSheet.create({

    container:{

        flexDirection:'column',

    },


});
export default HelloWorldComponent;